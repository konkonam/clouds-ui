<script setup lang="ts">
import type { CardStoryblok } from '~/types/generated/storyblok'

const props = defineProps<{
    blok: CardStoryblok
}>()
</script>

<template>
    <div
        :class="['group relative rounded-lg bg-white px-6 py-6']"
    >
        <h3 class="font-semibold mb-4 leading-1">
            {{ props.blok.title }}
        </h3>

        <span class="block mb-2">{{ props.blok.description }}</span>

        <Button class="mb-1">
            Test
        </Button>

        <AnimatedBorder />
    </div>
</template>
