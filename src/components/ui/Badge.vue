<script setup lang="ts">
const attrs = useAttrs()
</script>

<template>
    <span
        v-bind="attrs"
        :class="[
            'group flex justify-between rounded-lg bg-zinc-800 p-1 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75 transition-all',
        ]"
    >
        <span class="flex flex-row items-center justify-between w-full px-2 py-0.5 hover:bg-white hover:text-zinc-800 rounded-md transition-all">
            <slot />
            <slot name="after" />
        </span>
    </span>
</template>
