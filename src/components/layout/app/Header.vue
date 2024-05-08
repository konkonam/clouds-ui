<script setup lang="ts">
import { useEventBus } from '@vueuse/core'

const hasHero = ref<boolean>(false)
const showLogo = ref<boolean>(false)

const { on: onHeroMounted } = useEventBus<boolean>('hero-mounted')

onHeroMounted(() => {
    setTimeout(() => {
        hasHero.value = true
    }, 500)

    setTimeout(() => {
        showLogo.value = true
    }, 1200)
})
</script>

<template>
    <teleport to="body">
        <header
            class="absolute top-4 left-4 right-4 flex flex-row items-center"
        >
            <span
                :class="[
                    'text-lg font-bolder',
                    'transition-all duration-300 ease-in',
                    hasHero ? '' : 'opacity-0',
                ]"
            >
                stacksjs
            </span>
            <span
                :class="[
                    'bg-zinc-800 w-full ml-4 rounded-lg',
                    'transition-all duration-500 ease',
                    showLogo ? 'h-1 opacity-100' : 'h-0 opacity-0',
                ]"
            />
        </header>
    </teleport>
</template>
