<script setup lang="ts">
import type { GridStoryblok } from '~/types'
import { useComponent } from '~/utils/useComponent'

const props = defineProps<{
    blok: GridStoryblok
}>()

enum Columns {
    'md:grid-cols-1' = 1,
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'md:grid-cols-5',
    'md:grid-cols-6',
    'md:grid-cols-7',
    'md:grid-cols-8',
    'md:grid-cols-9',
    'md:grid-cols-10',
    'md:grid-cols-11',
    'md:grid-cols-12',
}

const gridClass = computed(() => {
    const columnCount = Math.min(Math.max(Number(props.blok.columns) || Columns['md:grid-cols-1'], Columns['md:grid-cols-1']), Columns['md:grid-cols-12'])
    return `md:grid-cols-${columnCount}`
})
</script>

<template>
    <div :class="['grid gap-4', gridClass]">
        <component
            :is="useComponent(item)"
            v-for="(item, index) in props.blok.items"
            :key="index"
        />
    </div>
</template>
