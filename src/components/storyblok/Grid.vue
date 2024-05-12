<script setup lang="ts">
import type { GridStoryblok } from '~/types'

const props = defineProps<{
    blok: GridStoryblok
}>()
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <component
            :is="useComponent(item)"
            v-for="item in props.blok.columns"
            :key="item._uid"
        />
    </div>
</template>
