<script setup lang="ts">
import type { TeaserStoryblok } from '~/types'

const props = defineProps<{
    blok: TeaserStoryblok
}>()
</script>

<template>
    <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
            <dt
                class="text-sm leading-6"
                v-html="renderRichText(props.blok.text)"
            />
            <dd class="order-first text-3xl font-semibold tracking-tight">
                {{ props.blok.headline }}
            </dd>
        </div>
    </dl>
</template>
