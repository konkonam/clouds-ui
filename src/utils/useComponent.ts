import type { SbBaseComponent } from '~/types'

export const useComponent = (blok: SbBaseComponent) => {
    const buildName = (name: string) => `sb-${name}`

    return h(
        resolveComponent(buildName(blok.component ?? 'fallback')),
        { blok: blok },
    )
}
