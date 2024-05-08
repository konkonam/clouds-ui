<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAnimate } from '@vueuse/core'

interface Particle {
    id: number
    size: number
    opacity: string
    x: string
    y: string
}

const container = ref<HTMLDivElement>()

const createParticles = (
    numParticles: number = 30,
    minSize: number = 5,
    maxSize: number = 10,
) => {
    return Array.from({ length: numParticles }, (_, i) => ({
        id: i + 1,
        size: Math.random() * (maxSize - minSize) + minSize, // between 5px and 10px
        opacity: Math.random().toFixed(2),
        x: `${Math.random() * 100}vw`,
        y: `${Math.random() * 100}vh`,
    })) satisfies Particle[]
}

const initAnimation = (el: HTMLSpanElement) => {
    if (!el) return

    const { play } = useAnimate(el, {
        transform: `translate3d(${Math.random() * 100}vw, ${Math.random() * 100}vh, 0)`,
        duration: 3000 + Math.random() * 7000, // between 3000ms and 10000ms
        easing: 'ease-in-out',
    }, { duration: 100000, immediate: true, iterations: Infinity })

    play()
}

onMounted(() => {
    const children = container.value?.children ?? []
    Array.from(children as HTMLSpanElement[])
        .forEach((el: HTMLSpanElement) => initAnimation(el satisfies HTMLSpanElement))
})
</script>

<template>
    <div class="absolute inset-0 pointer-events-none">
        <div
            ref="container"
            class="relative w-full h-full pointer-events-none"
        >
            <span
                v-for="particle in createParticles()"
                :key="particle.id"
                class="absolute rounded-full bg-zinc-800 transition-opacity"
                :style="{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    opacity: particle.opacity,
                    transform: `translate3d(${particle.x}, ${particle.y}, 0)`,
                }"
            />
        </div>
    </div>
</template>
