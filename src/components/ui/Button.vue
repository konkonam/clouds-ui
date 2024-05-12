<script setup lang="ts">
const props = defineProps<{
    link?: string

}>()

const attrs = useAttrs()
</script>

<template>
    <NuxtLink
        :to="props.link"
        v-bind="attrs"
        class="px-8 py-4 bg-rose-950 text-white"
    >
        <slot />
    </NuxtLink>
</template>
