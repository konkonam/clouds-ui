<script setup lang="ts">
import { useElementTransform } from '@vueuse/motion'
import { useElementBounding, useWindowScroll, useWindowSize } from '@vueuse/core'
import { useFaker } from '~/utils/useFaker'

const { firstPart, secondPart, thirdPart } = useFaker()

const container = ref<HTMLElement>()
const { y: windowScrollY } = useWindowScroll()
const { height: windowHeight } = useWindowSize()
const { height: bodyHeight } = useElementBounding(document?.body)
const { top: elementTop } = useElementBounding(container)

const transformations = ref<ReturnType<typeof useElementTransform>[]>([])

const applyTransformation = (el: HTMLElement) => {
    transformations.value.push(useElementTransform(el))
}

onMounted(() => {
    const children = container.value?.children ?? []
    Array.from(children as HTMLSpanElement[])
        .forEach((el: HTMLSpanElement) => applyTransformation(el satisfies HTMLSpanElement))

    watch(windowScrollY, (value) => {
        if (windowHeight.value < elementTop.value) return

        const procent = (value - elementTop.value) / (bodyHeight.value - windowHeight.value) * 100
        const factor = procent * 0.01

        transformations.value.forEach((item, index) => {
            const targetPosition = index % 2 === 0 ? -200 : 200

            item.transform.translateY = targetPosition * factor
        })
    })
})
</script>

<template>
    <div
        ref="container"
        class="grid relative items-start max-w-2xl mx-auto gap-10 p-20 bg-transparent"
    >
        <div class="absolute inset-0 z-10 bg-white blur-[20px]" />
        <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-30 gap-10 inset-0">
            <template
                v-for="(partial, index) in [firstPart, secondPart, thirdPart]"
                :key="'col-' + index"
            >
                <div class="grid gap-4 relative z-30">
                    <NuxtImg
                        v-for="(image, imageIndex) in partial"
                        :key="'partial-' + index + '-' + imageIndex"
                        :src="image"
                        :class="[
                            'rounded-lg h-full w-auto shadow-lg grayscale',
                        ]"
                    />
                </div>
            </template>
        </div>
    </div>
</template>
