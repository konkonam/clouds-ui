{
	inputs = {
		nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
		flake-utils.url = "github:numtide/flake-utils";
	};

	outputs = { self, nixpkgs, flake-utils, ... } @ inputs:
		flake-utils.lib.eachDefaultSystem (system:
			rec {
				pkgs = import inputs.nixpkgs { inherit system; };
				sslCertFile = "dev-ops/localhost.pem";
                sslKeyFile = "dev-ops/localhost-key.pem";
				sharedInputs = [
					pkgs.mkcert
                    pkgs.nss.tools
					pkgs.bun
				];

				packages.default = pkgs.stdenv.mkDerivation {
					name = "cms-base";
					buildInputs = sharedInputs;
					shellHook = ''
						if [ ! -f ${sslCertFile} ] || [ ! -f ${sslKeyFile} ]; then
						  echo "SSL files are missing. Generating new SSL certificate and key..."
						  mkcert -install
						  mkcert -cert-file ${sslCertFile} -key-file ${sslKeyFile} localhost
						fi
					'';

					# https://nixos.org/manual/nixpkgs/stable/#sec-stdenv-installcheck
					installPhase = ''
						echo "installing..."
						bun install
					'';

					# https://nixos.org/manual/nixpkgs/stable/#build-phase
					buildPhase = ''
						echo "building app..."
						bun run build
					'';

					# https://nixos.org/manual/nixpkgs/stable/#ssec-check-phase
					checkPhase = ''
						echo "running tests..."
						bun run test
					'';
				};
			}
		);
}
