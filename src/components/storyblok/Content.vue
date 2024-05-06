<script setup lang="ts">
import type { ContentStoryblok } from '~/types';

const props = defineProps<{
    blok: ContentStoryblok;
}>();
</script>

<template>
    <div class="max-w-2xl mx-auto px-4 py-12 text-center">
        <h2 class="text-6xl font-semibold tracking-tight">
            {{ props.blok.headline }}
        </h2>
        <div v-html="renderRichText(props.blok.text)" />
    </div>
</template>
