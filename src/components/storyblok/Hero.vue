<script setup lang="ts">
import type { HeroStoryblok } from '~/types'
import { useComponent } from '~/utils/useComponent'

const props = defineProps<{
    blok: HeroStoryblok
}>()
</script>

<template>
    <Teleport to="body">
        <div class="order-first flex flex-col justify-center items-center text-white bg-gradient-to-b from-indigo-500 h-[calc(100vh-128px)]">
            <div class="absolute text-center">
                <component
                    :is="useComponent(item)"
                    v-for="item in props.blok.content ?? []"
                    :key="item.id"
                />
            </div>
        </div>
    </Teleport>
</template>
