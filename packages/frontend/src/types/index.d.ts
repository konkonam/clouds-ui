import type { ISbComponentType } from 'storyblok-js-client'

export * from './generated/storyblok'

export * from './navigation'
export type SbBaseComponent = ISbComponentType<string>

// third party
export type {
    ISbLink,
    ISbStoryData,
    ISbStoriesParams,
} from 'storyblok-js-client'
