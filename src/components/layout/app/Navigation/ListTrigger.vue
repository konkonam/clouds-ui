<script setup lang="ts">
import { useEventBus } from '@vueuse/core';
import type { AppLink } from '~/types';
import type { Ref } from '#imports';

const props = defineProps<{
    link: AppLink;
}>();

const isOpen = inject<Ref<boolean>>('isOpen');
const isSticky = inject<Ref<boolean>>('isSticky');
const closeAll = inject<() => void>('closeAll');
const isChildrenOpen = inject<Ref<boolean>>('isChildrenOpen');

const hasChildren = computed(() => !!props.link.children?.length);

const { on: onItemOpen, emit: openItem } = useEventBus<string>('open-item');
const { on: onItemClose, emit: closeItem } = useEventBus<string>('close-item');

onItemOpen((slug) => {
    if (slug === props.link.slug && isChildrenOpen && !isChildrenOpen?.value) {
        isChildrenOpen.value = true;
    }
    else {
        closeItem(props.link.slug);
    }
});

onItemClose((slug) => {
    if (isChildrenOpen && (!slug || slug === props.link.slug)) {
        isChildrenOpen.value = false;
    }
});

const open = () => {
    if (!hasChildren.value || !isOpen) {
        if (closeAll) closeAll();

        return;
    }

    isOpen.value = true;
    openItem(props.link.slug);
};

const close = () => {
    if (!hasChildren.value || !isOpen) {
        if (closeAll) closeAll();

        return;
    }

    isOpen.value = false;
    closeItem(props.link.slug);
};
</script>

<template>
    <span
        :class="[
            'flex items-center gap-2',
            'px-8 py-2',
            'transition-colors',
            'rounded-xl',
            !isSticky ? 'group-hover:bg-white group-hover:text-zinc-800 group-hover:cursor-pointer' : 'group-hover:cursor-default',
            !isSticky ? (isChildrenOpen ? 'bg-white text-zinc-800' : 'bg-zinc-800 text-white') : '',
            isSticky ? (isChildrenOpen ? 'bg-white text-zinc-800' : '') : '',
        ]"
        @click="() => {
            if (!isSticky) isChildrenOpen ? close() : open()
        }"
        @mouseenter="() => {
            if (!isSticky) return;

            if (!isChildrenOpen) open();
        }"
    >
        {{ props.link.name }}
    </span>
</template>
