import type { Ref } from '@vue/reactivity'
import { useElementVisibility } from '@vueuse/core'
import type { PageStoryblok, SectionStoryblok } from '~/types'

const elements = reactive<Record<string, Ref<boolean>>>({})

export const useSections = () => {
    const filter = (data?: PageStoryblok | SectionStoryblok): SectionStoryblok[] => {
        return data?.content
            ?.filter(item => item.component === 'section') as SectionStoryblok[] ?? []
    }

    const register = (id: string, reference: Ref<HTMLElement>): void => {
        elements[id] = useElementVisibility(reference)
    }

    return {
        filter,
        register,
        elements,
    }
}
