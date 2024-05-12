<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { useComponent } from '~/utils/useComponent'

definePageMeta({
    alias: [
        '/pages/:slug(.*)*',
    ],
})

const { fetchSingle } = useCms()

const story = await fetchSingle()
const windowScroll = useWindowScroll()

provide('windowScroll', windowScroll)
</script>

<template>
    <component
        :is="useComponent(story.content)"
        v-if="story?.content"
    />
</template>
