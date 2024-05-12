import deepmerge from 'deepmerge'
import { join } from 'pathe'
import type { ISbStoryData, ISbStoriesParams } from '~/types'

const stories = ref<ISbStoryData[]>([])

export const useCms = () => {
    const { public: publicConfig } = useRuntimeConfig()
    const storyblokApi = useStoryblokApi()
    const { buildNavigation } = useLinks()

    const getSlug = (slug?: string) => {
        const path = slug ?? useRoute().path
        if (!path.startsWith(`/${publicConfig.storyblokBasePath}`)) {
            return join(publicConfig.storyblokBasePath, path)
        }

        return path
    }

    const fetchSingle = async (slug?: string, apiOptions: ISbStoriesParams = {}) => {
        const cached = stories.value.find(story => story.full_slug === getSlug(slug))
        if (cached) return cached

        return storyblokApi.getStory(
            getSlug(slug),
            deepmerge<ISbStoriesParams>({ version: 'draft' }, apiOptions),
        )
            .then(response => response.data.story)
            .catch(() => undefined)
    }

    const fetchMultiple = async (apiOptions?: ISbStoriesParams) => {
        return storyblokApi.getStories(
            deepmerge<ISbStoriesParams>({ version: 'draft' }, apiOptions ?? {}),
        )
            .then((response) => {
                stories.value = response.data.stories

                return response.data.stories
            })
            .catch(() => [])
    }

    const fetchLinks = async () => {
        const slug = getSlug('/')

        return storyblokApi.get('cdn/links', {
            starts_with: slug,
        })
            .then(async (response) => {
                return await fetchMultiple({
                    starts_with: slug,
                    resolve_links: '1',
                }).then(stories => buildNavigation(response.data.links, stories))
            })
            .catch(() => [])
    }

    return {
        stories,
        getSlug,
        fetchSingle,
        fetchMultiple,
        fetchLinks,
    }
}
