<script setup lang="ts">
import { useEventBus } from '@vueuse/core'
import type { HeroStoryblok } from '~/types'
import { useComponent } from '~/utils/useComponent'

const props = defineProps<{
    blok: HeroStoryblok
}>()

const { emit: heroMounted } = useEventBus<boolean>('hero-mounted')

onMounted(() => {
    heroMounted(true)
})
</script>

<template>
    <Teleport to="body">
        <UiParticles />
        <div class="order-first flex flex-col justify-center items-center h-[calc(100vh-128px)]">
            <div class="absolute text-center">
                <div class="relative inset-0">
                    <!-- Background with blur effect -->
                    <div class="absolute inset-0 z-10 bg-white blur-[10px]" />

                    <!-- Content overlaying the background -->
                    <div class="relative inset-0 z-30 text-zinc-800">
                        <component
                            :is="useComponent(item)"
                            v-for="item in props.blok.content ?? []"
                            :key="item.id"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
