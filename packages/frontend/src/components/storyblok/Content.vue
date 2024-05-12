<script setup lang="ts">
import type { ContentStoryblok } from '~/types'

const props = defineProps<{
    blok: ContentStoryblok
}>()
</script>

<template>
    <div class="relative inset-0 max-w-xl mx-auto px-4 py-12 text-center">
        <!-- Background with blur effect -->
        <div class="absolute inset-0 z-10 bg-white blur-[10px]" />
        <div class="relative z-30 inset-0">
            <h2 class="text-4xl font-semibold tracking-tight mb-4">
                {{ props.blok.headline }}
            </h2>

            <div v-html="renderRichText(props.blok.text)" />
        </div>
    </div>
</template>
