// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    srcDir: 'src/',
    devtools: { enabled: true },
    devServer: {
        https: {
            key: 'dev-ops/localhost-key.pem',
            cert: 'dev-ops/localhost.pem',
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxt/eslint',
    ],
    runtimeConfig: {
        public: {
            storyblokToken: process.env.STORYBLOK_PUBLIC_TOKEN,
            storyblokBasePath: 'pages',
        },
    },
    components: {
        dirs: [
            {
                path: '~/components/layout',
                pathPrefix: true,
            },
            {
                path: '~/components/storyblok',
                pathPrefix: false,
                prefix: 'sb',
                global: true,
            },
            {
                path: '~/components/ui',
                pathPrefix: false,
                prefix: 'ui',
            },
            {
                path: '~/components',
                pathPrefix: false,
            },
        ],
    },
    imports: {
        presets: [
            {
                from: '@storyblok/vue',
                imports: [
                    'StoryblokVue',
                    'apiPlugin',
                    'useStoryblok',
                    'useStoryblokApi',
                    'useStoryblokBridge',
                    'RichTextSchema',
                    'renderRichText',
                ],
            },
        ],
    },
    tailwindcss: {
        configPath: './src/configs/tailwind.config.ts',
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: false,
                quotes: 'single',
                arrowParens: false,
            },
        },
    },
})
