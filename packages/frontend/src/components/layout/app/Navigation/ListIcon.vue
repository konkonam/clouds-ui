<script setup lang="ts">
import type { Ref } from '#imports'

const isSticky = inject<Ref<boolean>>('isSticky')
const isChildrenOpen = inject<Ref<boolean>>('isChildrenOpen')
</script>

<template>
    <span
        :class="[
            'bg-white',
            'h-1',
            'rounded-xl',
            'transition-all',
            !isSticky ? 'group-hover:bg-zinc-800 group-hover:cursor-pointer' : '',
            isChildrenOpen ? 'w-4 mr-0 bg-zinc-800' : 'w-1 mr-3',
        ]"
    />
</template>
