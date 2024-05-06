export default defineEventHandler((event) => {
	const { public: publicConfig } = useRuntimeConfig();

	if (event.path.startsWith(`/${publicConfig.storyblokBasePath}`)) {
		const { referer } = getHeaders(event);

		if (!referer?.includes('storyblok.com')) {
			// TODO: add redirect
			throw createError({
				statusCode: 403,
				statusMessage: 'Forbidden',
				message: 'You are not allowed to access this page',
			});
		}
	}
});
