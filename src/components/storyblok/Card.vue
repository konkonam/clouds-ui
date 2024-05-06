<script setup lang="ts">
import type { CardStoryblok } from '~/types/generated/storyblok'

const props = defineProps<{
    blok: CardStoryblok
}>()
</script>

<template>
    <div
        :class="['group relative rounded-lg bg-white p-4']"
    >
        <h3 class="font-semibold mb-4 leading-1">
            {{ props.blok.title }}
        </h3>

        <span class="block mb-2">{{ props.blok.description }}</span>

        <Button>
            Test
        </Button>

        <div
            :class="[
                'absolute top-[12px] left-1 h-4 w-0.5 bg-zinc-800',
                'transition-all ease-out duration-200',
                'group-hover:top-[calc(100%-28px)]',
            ]"
        />
        <div
            :class="[
                'absolute top-[12px] left-1 w-4 h-0.5 bg-zinc-800',
                'transition-all ease-out duration-200',
                'group-hover:left-[calc(100%-20px)]',
            ]"
        />

        <div
            :class="[
                'absolute bottom-[12px] right-1 h-4 w-0.5 bg-zinc-800',
                'transition-all ease-out duration-200',
                'group-hover:bottom-[calc(100%-28px)]',
            ]"
        />

        <div
            :class="[
                'absolute bottom-[12px] right-1 w-4 h-0.5 bg-zinc-800',
                'transition-all ease-out duration-200',
                'group-hover:right-[calc(100%-20px)]',
            ]"
        />
    </div>
</template>
