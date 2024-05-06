<script setup lang="ts">
import { useElementBounding, useWindowScroll, useWindowSize } from '@vueuse/core'
import type { SectionStoryblok } from '~/types'
import type { Ref } from '#imports'
import { useComponent } from '~/utils/useComponent'

const props = defineProps<{
    blok: SectionStoryblok
}>()

const { register } = useSections()

const section = ref<HTMLElement>()

const { height: windowHeight } = useWindowSize()
const { y: elementY, height: elementHeight } = useElementBounding(section)

const elementTop = computed<number>(() => elementY.value - windowHeight.value)
const elementBottom = computed<number>(() => (elementY.value + elementHeight.value))

const topVisible = computed<boolean>(() => elementTop.value < 0)
const bottomVisible = computed<boolean>(() => elementBottom.value > 0)
const isVisible = computed<boolean>(() => (Math.abs(elementTop.value) > 200) && (elementBottom.value > 200))

onMounted(() => register(props.blok._uid, section as Ref<HTMLElement>))
</script>

<template>
    <div
        :id="blok._uid"
        ref="section"
        :class="[
            'border-t transition-all duration-300 ease-out',
            isVisible ? 'opacity-100' : 'opacity-0',
        ]"
    >
        <span class="block">top: {{ topVisible }}</span>
        <span class="block">bottom: {{ bottomVisible }}</span>
        <span class="block">visible: {{ isVisible }}</span>

        <component
            :is="useComponent(item)"
            v-for="item in props.blok.content"
            :key="item._uid"
        />
        <span class="block">top: {{ topVisible }}</span>
        <span class="block">bottom: {{ bottomVisible }}</span>
        <span class="block">visible: {{ isVisible }}</span>
    </div>
</template>
