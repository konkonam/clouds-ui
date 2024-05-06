<script setup lang="ts">
import type { GridStoryblok } from '~/types';
import { useComponent } from '~/utils/useComponent';

const props = defineProps<{
    blok: GridStoryblok;
}>();

enum Columns {
    One = 1,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
}

const gridClass = computed(() => {
    const columnCount = Math.min(Math.max(Number(props.blok.columns) || Columns.One, Columns.One), Columns.Twelve);
    return `grid-cols-1 lg:grid-cols-${columnCount}`;
});
</script>

<template>
    <div :class="['grid', gridClass]">
        <component
            :is="useComponent(item)"
            v-for="(item, index) in props.blok.items"
            :key="index"
        />
    </div>
</template>
