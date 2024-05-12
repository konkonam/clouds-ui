<script setup lang="ts">
import type { HeroStoryblok } from '~/types'

const props = defineProps<{
    blok: HeroStoryblok
}>()
</script>

<template>
    <div class="relative flex flex-col items-center justify-center h-screen">
        <NuxtImg
            :src="props.blok.image?.filename"
            :class="[
                'w-auto h-screen',
            ]"
        />

        <div
            class="absolute text-center text-white"
            v-html="renderRichText(props.blok.title)"
        />
    </div>
</template>

<style scoped>
a {
    @apply bg-rose-700;
}
</style>
