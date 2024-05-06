<script setup lang="ts">
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue';
import type { AccordionItemStoryblok } from '~/types';

const props = defineProps<{
    blok: AccordionItemStoryblok;
}>();
</script>

<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton
            class="group flex w-full mb-2 justify-between rounded-lg bg-zinc-800 p-1 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all"
        >
            <span class="block w-full group-hover:bg-white group-hover:text-zinc-800 px-8 py-2 rounded-lg transition-all">
                {{ props.blok.title }}
            </span>
        </DisclosureButton>
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="h-0 transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <DisclosurePanel
                class="px-4 pb-2 pt-2 text-sm text-gray-500"
                v-html="renderRichText(props.blok.content)"
            />
        </transition>
    </Disclosure>
</template>
