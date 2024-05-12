<script setup lang="ts">
import type { AccordionItemStoryblok } from '~/types'
import type { Ref } from '#imports'

const props = defineProps<{
    blok: AccordionItemStoryblok
}>()

const openItem = inject<Ref<string>>('openItem') as Ref<string>
const toggleItem = inject<(_uid: string) => void>('toggleItem') as (_uid: string) => void
</script>

<template>
    <UiButton
        class="group flex flex-col w-full mb-2 justify-between rounded-lg bg-zinc-800 p-1 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all"
        @click="() => toggleItem(blok._uid)"
    >
        {{ props.blok.title }}

        <template #after>
            <span
                :class="[
                    'block h-1 rounded-lg bg-white group-hover:bg-zinc-800 transition-all',
                    openItem === blok._uid ? 'w-6 ml-0' : 'w-1 ml-5',
                ]"
            />
        </template>
    </UiButton>

    <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
        <div
            v-if="openItem === blok._uid"
            class="px-4 pb-2 pt-2 text-sm text-gray-700"
            v-html="renderRichText(props.blok.content)"
        />
    </transition>
</template>
