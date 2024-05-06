<script setup lang="ts">
import { useEventBus, useResizeObserver, whenever } from '@vueuse/core'
import type { AppLink } from '~/types'
import type { Ref } from '#imports'

const props = defineProps<{
    parent: AppLink
    children: AppLink[]
}>()

const isFirstOpen = inject<Ref<boolean>>('isFirstOpen')
const isChildrenOpen = inject<Ref<boolean>>('isChildrenOpen')
const currentIndex = inject<number>('currentIndex')
const lastOpenIndex = inject<Ref<number>>('lastOpenIndex')
const direction = inject<Ref<'left' | 'right' | undefined>>('direction')
const self = ref<HTMLElement>()
const wrapper = ref<HTMLElement>()
const currentDirection = unref(direction)

const { emit: updateHeight } = useEventBus<number>('update-height')

onMounted(() => {
    if (!isChildrenOpen || !isFirstOpen) return

    watch(isChildrenOpen, (value) => {
        if (value && isFirstOpen.value) {
            isFirstOpen.value = false
        }
    })

    useResizeObserver(self, ([value]) => {
        updateHeight(value.target.clientHeight ?? 0)
    })

    whenever(() => self.value, (value) => {
        updateHeight(value.clientHeight ?? 0)
    })
})

const animateLeft = (): boolean => {
    const isLast = currentIndex === lastOpenIndex?.value

    if (currentDirection === 'left') {
        return isLast
    }

    return isLast
}
</script>

<template>
    <div
        ref="wrapper"
        :class="[
            'absolute top-full left-0 right-0 overflow-hidden',
            isChildrenOpen ? 'z-20 ' : 'z-10',
        ]"
    >
        <Transition
            :enter-from-class="`opacity-0 ${direction === 'left' ? '-translate-x-1/2' : 'translate-x-1/2'}`"
            :leave-to-class="`opacity-0 ${animateLeft() ? '-translate-x-1/2' : 'translate-x-1/2'}`"
        >
            <div
                v-if="isChildrenOpen"
                ref="self"
                :class="[
                    'mt-4 p-3',
                    'grid grid-cols-1 md:grid-cols-[repeat(2,1fr)] items-stretch gap-2',
                    'rounded-xl',
                    'transition-all duration-300 ease',
                ]"
            >
                <AppNavigationListItem
                    v-for="child in props.children"
                    :key="child.id"
                    :child="child"
                />
            </div>
        </Transition>
    </div>
</template>
