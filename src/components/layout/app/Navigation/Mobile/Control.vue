<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import type { Ref } from '#imports';

const props = defineProps<{
    variant: 'prev' | 'next';
}>();

const activeItem = inject<Ref<number>>('activeItem') as Ref<number>;
const lastItem = inject<number>('lastItem') as number;

const isPrev = props.variant === 'prev';

const onClick = () => {
    if (isPrev && activeItem.value < 1) return;
    else if (isPrev) activeItem.value = activeItem.value - 1;
    else if (!isPrev && activeItem.value >= lastItem) return;
    else activeItem.value = activeItem.value + 1;
};
</script>

<template>
    <button
        :class="[
            'flex relative z-10',
            'rounded-full',
            'px-2 py-2',
            'transition-all',
            'rounded-full',
            'hover:bg-white hover:text-zinc-800',
        ]"
        @click="onClick"
    >
        <ChevronLeftIcon
            v-if="isPrev"
            class="h-6 w-6"
        />
        <ChevronRightIcon
            v-else
            class="h-6 w-6"
        />
    </button>
</template>
