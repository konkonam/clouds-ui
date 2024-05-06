<script setup lang="ts">
import type { Ref } from 'vue';
import { useEventBus } from '@vueuse/core';
import type { AppLink } from '~/types';

const props = defineProps<{
    link: AppLink;
    index: number;
}>();

const isSticky = inject<Ref<boolean>>('isSticky');
const closeAll = inject<() => void>('closeAll');
const lastOpenIndex = inject<Ref<number>>('lastOpenIndex');
const activeItem = inject<Ref<number>>('activeItem') as Ref<number>;
const direction = inject<Ref<'left' | 'right' | undefined>>('direction');
const self = ref<HTMLElement>();
const isChildrenOpen = ref<boolean>(false);

const hasChildren = computed(() => !!props.link.children?.length);

const { emit: closeItem } = useEventBus<string>('close-item');
const { emit: updateHeight } = useEventBus<number>('update-height');

onMounted(() => {
    if (!lastOpenIndex || !direction) return;

    watch(isChildrenOpen, (value) => {
        if (!value) return;

        direction.value = props.index < lastOpenIndex.value ? 'left' : 'right';
        lastOpenIndex.value = props.index;
    });

    watch(activeItem, (value) => {
        if (!self.value) return;

        if (value === props.index) {
            self.value.style.display = 'block';
            self.value.style.order = '-1';
        }
        else {
            self.value.style.display = 'none';
            self.value.style.order = '';
        }

        closeItem('');
        updateHeight(0);
    });
});

provide('isChildrenOpen', isChildrenOpen);
provide('currentIndex', props.index);
</script>

<template>
    <div
        ref="self"
        class="group max-md:mx-auto md:!block"
        :style="props.index !== 0 ? 'display: none' : ''"
        :tabindex="props.index"
    >
        <template v-if="hasChildren">
            <AppNavigationListTrigger :link="props.link" />
        </template>
        <NuxtLink
            v-else
            :href="props.link.slug"
            :class="[
                'flex items-center gap-2',
                'px-8 py-2',
                'transition-all',
                'rounded-xl',
                'group-hover:bg-white group-hover:text-zinc-800',
            ]"
            @click="() => {
                if (closeAll) closeAll();
                navigateTo(props.link.slug);
            }"
            @mouseenter="() => {
                if (isSticky && closeAll) closeAll();
            }"
        >
            {{ props.link.name }}
        </NuxtLink>

        <AppNavigationList
            v-if="hasChildren"
            :parent="props.link"
            :children="props.link.children ?? []"
        />
    </div>
</template>
