export default defineNuxtPlugin((nuxtApp) => {
    const { public: publicConfig } = useRuntimeConfig()

    nuxtApp.vueApp.use(StoryblokVue, {
        accessToken: publicConfig.storyblokToken,
        bridge: true,
        use: [apiPlugin],
        richText: {
            schema: RichTextSchema,
        },
    })
})
