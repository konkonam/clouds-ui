<script setup lang="ts">
import type { SectionStoryblok } from '~/types';

const props = defineProps<{
    sections: SectionStoryblok[];
    isRecursive?: boolean;
}>();

const { filter, elements } = useSections();

const isVisible = computed(() => (id: string) => elements[id]);
</script>

<template>
    <ul
        v-if="sections.length > 0"
        role="list"
        class="space-y-1"
    >
        <li
            v-for="item in sections"
            :key="item._uid"
            :class="[
                'transition-all duration-300 ease-in-out',
                isVisible(item._uid) ? 'bg-white' : '',
            ]"
        >
            <a
                :href="`#${item._uid}`"
                :class="[
                    item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                    'group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold',
                    props.isRecursive ? '' : 'font-bold',
                    isVisible(item._uid) ? 'text-indigo-600' : 'text-gray-700',
                ]"
            >
                {{ item.name }}
            </a>
            <PageNavigation
                class="pl-2"
                :sections="filter(item)"
                :is-recursive="true"
            />
        </li>
    </ul>
</template>
