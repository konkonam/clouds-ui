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
                <component
                    :is="useComponent(item)"
                    v-for="item in props.blok.content ?? []"
                    :key="item.id"
                />
            </div>
        </div>
    </Teleport>
</template>
