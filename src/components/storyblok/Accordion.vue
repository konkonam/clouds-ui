<script setup lang="ts">
import type { AccordionStoryblok } from '~/types';
import { useComponent } from '~/utils/useComponent';

const props = defineProps<{
    blok: AccordionStoryblok;
}>();
</script>

<template>
    <div class="mx-auto md:max-w-md">
        <template
            v-for="item in props.blok.items ?? []"
            :key="item._uid"
        >
            <component :is="useComponent(item)" />
        </template>
    </div>
</template>
