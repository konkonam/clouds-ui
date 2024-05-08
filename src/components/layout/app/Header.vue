<script setup lang="ts">
import { useEventBus } from '@vueuse/core'

const hasHero = ref<boolean>(false)
const showLogo = ref<boolean>(false)

const { on: onHeroMounted } = useEventBus<boolean>('hero-mounted')

onHeroMounted(() => {
    setTimeout(() => {
        hasHero.value = true
    }, 500)
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
                    'transition-all duration-500 delay-[500ms] ease',
                    hasHero ? 'h-1 opacity-100' : 'h-0 opacity-0',
                ]"
            />

            <div class="flex flex-row gap-2 absolute right-0 top-full -mt-2">
                <NuxtLink
                    to="/"
                    :class="[
                        'transition-all duration-500 delay-[800ms] ease',
                        hasHero ? 'opacity-100' : 'opacity-0',
                    ]"
                >
                    github
                </NuxtLink>
            </div>
        </header>
    </teleport>
</template>
