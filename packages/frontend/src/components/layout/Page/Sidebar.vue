<script setup lang="ts">
import type { SectionStoryblok } from '~/types'

const props = defineProps<{
    sections: SectionStoryblok[]
}>()
</script>

<template>
    <nav
        v-if="props.sections.length > 0"
        id="page-navigation"
        :class="[
            'flex flex-1 flex-col sticky top-10 self-start bg-zinc-800 rounded-3xl p-4 mr-4 overflow-y-scroll',
            'fixed left-full top-0',
        ]"
        aria-label="Sidebar"
    >
        <PageNavigation :sections="props.sections" />
    </nav>
</template>
