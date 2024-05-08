<script setup lang="ts">
import type { PageStoryblok } from '~/types'
import { useComponent } from '~/utils/useComponent'

const props = defineProps<{
    blok: PageStoryblok
}>()

const { filter } = useSections()
const sections = filter(props.blok)
</script>

<template>
    <div
        class="grid"
        :style="!sections.length ? 'grid-template-columns: minmax(auto, 300px) 1fr;' : ''"
    >
        <PageSidebar :sections="sections" />
        <div>
            <component
                :is="useComponent(item)"
                v-for="item in props.blok.content"
                :key="item._uid"
            />
        </div>
    </div>
</template>
