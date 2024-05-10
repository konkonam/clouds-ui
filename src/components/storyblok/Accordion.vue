<script setup lang="ts">
import { useElementBounding, useEventBus } from '@vueuse/core'
import type { AccordionStoryblok } from '~/types'
import { useComponent } from '~/utils/useComponent'

const props = defineProps<{
    blok: AccordionStoryblok
}>()

useParallax()
const { emit: updateHeight } = useEventBus<number>('update-accordion-height')

const openItem = ref<string>()
const container = ref<HTMLElement>()

const toggleItem = (_uid: string) => {
    if (openItem.value === _uid) {
        openItem.value = undefined
        updateHeight(0)
    }
    else {
        openItem.value = _uid
    }
}

useParallax({
    by: 2000,
    target: container,
    bounding: useElementBounding(container),
})

onMounted(() => {

})

provide('openItem', openItem)
provide('toggleItem', toggleItem)
</script>

<template>
    <div
        ref="container"
        class="relative "
    >
        <div class="relative z-30">
            <div class="mx-auto md:max-w-md p-20 relative">
                <div class="absolute inset-0 z-10 bg-white blur-[20px]" />
                <div class="relative inset-0 z-30">
                    <template
                        v-for="(item, index) in props.blok.items ?? []"
                        :key="item._uid"
                    >
                        <component
                            :is="useComponent(item)"
                            :index="index"
                        />
                    </template>
                </div>
            </div>
        </div>
    </div>

    <SbGallery />
</template>
