<script setup lang="ts">
import { useEventBus } from '@vueuse/core'
import type { AccordionStoryblok } from '~/types'
import { useComponent } from '~/utils/useComponent'

const props = defineProps<{
    blok: AccordionStoryblok
}>()

const { emit: updateHeight } = useEventBus<number>('update-accordion-height')

const openItem = ref<string>()

const toggleItem = (_uid: string) => {
    if (openItem.value === _uid) {
        openItem.value = undefined
        updateHeight(0)
    }
    else {
        openItem.value = _uid
    }
}

provide('openItem', openItem)
provide('toggleItem', toggleItem)
</script>

<template>
    <div class="mx-auto md:max-w-md">
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
</template>
