<script setup lang="ts">
import { useComponent } from '~/utils/useComponent'

definePageMeta({
    alias: [
        '/pages/:slug(.*)*',
    ],
})

const { fetchSingle } = useCms()

const story = await fetchSingle()
</script>

<template>
    <component
        :is="useComponent(story.content)"
        v-if="story?.content"
    />
</template>
