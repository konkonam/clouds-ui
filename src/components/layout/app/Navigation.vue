<script setup lang="ts">
import {
    useElementBounding,
    useWindowScroll,
    useScrollLock,
    useEventBus,
    useElementHover,
} from '@vueuse/core';

import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const isOpen = ref<boolean>(false);
const isSticky = ref<boolean>();
const isCollapsed = ref<boolean>(false);
const self = ref<HTMLElement>();
const mobileWrapperOuter = ref<HTMLElement>();
const mobileWrapper = ref<HTMLElement>();

const { y: windowScrollY } = useWindowScroll();
const bounding = useElementBounding(self);
const hovered = useElementHover(self);
const { fetchLinks } = useCms();

const isFirstOpen = ref<boolean>(true);
const lastOpenIndex = ref<number>(-1);
const direction = ref<'left' | 'right' | undefined>();
const links = await fetchLinks();

const activeItem = ref<number>(0);
const lastItem = links.length - 1;

const { emit: closeItem } = useEventBus<string>('close-item');

if (bounding.y.value >= 40) {
    isSticky.value = !(bounding.y.value > 40);
}

const closeAll = () => {
    isOpen.value = false;
    closeItem('');
};

onMounted(() => {
    const isLocked = useScrollLock(window);

    watch(isOpen, (value) => {
        if (!value) direction.value = undefined;
        if (!value) isFirstOpen.value = true;
        if (!self.value) return;
        if (!isSticky.value) isLocked.value = value;

        if (value) {
            bounding.update();
            self.value.style.transform = `translateY(-${bounding.y.value - 40}px)`;
        }
        else {
            self.value.style.transform = '';
        }
    });

    watch(isSticky, (value) => {
        console.log('sticky: ', value);
    });

    watch(hovered, (value) => {
        if (isSticky.value && !value) {
            closeItem('');
            isOpen.value = false;
        }
    });

    watch(isCollapsed, (value, nv) => {
        if (!self.value) return;

        if (nv) {
            self.value.style.width = (mobileWrapperOuter.value?.clientWidth ?? 0) + 'px';
        }
        else {
            self.value.style.width = '';
        }
    });

    watch(windowScrollY, () => {
        isSticky.value = !(bounding.y.value > 40);

        if (!isSticky.value && isOpen.value) closeAll();
    }, { immediate: true });

    watch(bounding.y, (v, nv) => {
        isSticky.value = !(nv ?? 41 > 40) && !self.value?.style.transform;
    });
});

provide('isOpen', isOpen);
provide('isSticky', isSticky);
provide('closeAll', closeAll);
provide('activeItem', activeItem);
provide('lastItem', lastItem);
provide('isFirstOpen', isFirstOpen);
provide('lastOpenIndex', lastOpenIndex);
provide('direction', direction);
</script>

<template>
    <nav
        ref="self"
        :class="[
            'sticky',
            'z-50',
            'top-10',
            'mt-10',
            'mb-4',
            'p-1',
            'self-end md:self-center',
            'rounded-xl',
            'bg-white',
            'md:w-min',
            'transition-all',
            'bg-zinc-800 text-white',
            'max-md:overflow-x-visible',
            'max-md:w-full',
        ]"
    >
        <div
            ref="mobileWrapperOuter"
            class="flex flex-row md:gap-4 transition-all"
        >
            <div
                :class="[
                    'flex flex-row md:gap-4 max-md:grow',
                    isCollapsed ? 'max-md:hidden' : '',
                ]"
            >
                <AppNavigationMobileControl
                    class="md:hidden"
                    variant="prev"
                />

                <div
                    ref="mobileWrapper"
                    :class="[
                        'max-md:overflow-y-hidden max-md:grow',
                        'flex flex-row gap-4',
                        'after:block md:after:hidden md:after-h-full md:after:w-4 md:after:-ml-8',
                        'md:after:bg-gradient-to-l md:after:from-zinc-800 md:after:to-transparent',
                    ]"
                >
                    <AppNavigationItem
                        v-for="(link, index) in links"
                        :key="link.slug"
                        :link="link"
                        :index="index"
                    />
                </div>

                <AppNavigationMobileControl
                    class="md:hidden"
                    variant="next"
                />
            </div>

            <AppNavigationListBackground />

            <button
                :class="[
                    'p-1',
                    'ml-auto',
                    'px-8 py-2',
                    'transition-all',
                    'rounded-xl',
                    'hover:bg-white hover:text-zinc-800',
                ]"
                @click="() => {
                    if (isOpen) closeAll();

                    isCollapsed = !isCollapsed;
                }"
            >
                <Bars3Icon
                    v-if="!isOpen"
                    class="h-6 w-6"
                />
                <XMarkIcon
                    v-else
                    class="h-6 w-6"
                    @click="closeAll"
                />
            </button>
        </div>
    </nav>

    <teleport
        v-if="isSticky === false && isOpen"
        to="body"
    >
        <div
            class="fixed inset-0 z-10 bg-zinc-900/50 backdrop-blur-[3px] transition-all"
            @click="closeAll"
        />
    </teleport>
</template>
