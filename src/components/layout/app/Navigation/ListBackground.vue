<script setup lang="ts">
import { useEventBus } from '@vueuse/core';
import type { Ref } from '#imports';

const self = ref<HTMLElement>();
const duration = ref<number>(300);
const isOpen = inject<Ref<boolean>>('isOpen');
const isFirstOpen = inject<Ref<boolean>>('isFirstOpen');
const { on: onUpdateHeight } = useEventBus<number>('update-height');

onUpdateHeight((height) => {
    if (!self.value) return;

    const currentHeight = self.value.clientHeight;
    if (height > currentHeight) duration.value = 200;
    else duration.value = 500;

    self.value.style.height = height + 'px';
});
</script>

<template>
    <Transition
        enter-active-class="!duration-150"
        :enter-from-class="`opacity-0 ${!isFirstOpen ? '!mt-12' : ''}`"
        leave-active-class="!duration-150"
        :leave-to-class="`opacity-0 ${isFirstOpen ? '!mt-12' : ''}`"
    >
        <div
            v-if="isOpen"
            ref="self"
            :class="[
                'absolute bg-zinc-800 top-full left-0 right-0 rounded-xl',
                'transition-all',
                !isFirstOpen ? 'mt-4' : '',
            ]"
            :style="`transition-duration:${duration}ms`"
        />
    </Transition>
</template>
