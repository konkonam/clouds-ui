<script setup lang="ts">
import type { ImageCardStoryblok } from '~/types'

const props = defineProps<{
    blok: ImageCardStoryblok
}>()
</script>

<template>
    <div class="group relative bg-zinc-800 text-white rounded-lg p-4 shadow-lg">
        <div class="h-1/2">
            <NuxtImg
                :src="props.blok.image.filename"
                :class="[
                    'rounded-lg p-4 shadow-lg h-full w-auto',
                    'transition-all duration-300 ease-in-out',
                    'group-hover:scale-90',
                ]"
            />
        </div>

        <h3>
            {{ props.blok.title }}
        </h3>

        <span>{{ props.blok.subtitle }}</span>
    </div>
</template>
