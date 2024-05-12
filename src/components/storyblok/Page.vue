<script setup lang="ts">
import type { PageStoryblok } from '~/types'
import { useComponent } from '~/utils/useComponent'

const props = defineProps<{
    blok: PageStoryblok
}>()
</script>

<template>
    <div
        :class="['grid', 'grid-cols-1', 'grow']"
    >
        <component
            :is="useComponent(item)"
            v-for="item in props.blok.body"
            :key="item._uid"
        />
    </div>
</template>
