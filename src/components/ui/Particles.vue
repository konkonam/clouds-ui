<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue'
import { type MaybeComputedElementRef, useAnimate, useTemplateRefsList } from '@vueuse/core'

interface Particle {
    id: number
    size: number
    opacity: string
}

const container = ref<HTMLDivElement>()

const numParticles = 30

const createParticles = () => {
    return Array.from({ length: numParticles }, (_, i) => ({
        id: i + 1,
        size: Math.random() * (10 - 5) + 5, // between 5px and 10px
        opacity: Math.random().toFixed(2),
    })) as Particle[]
}

const initAnimation = (el: HTMLSpanElement) => {
    if (!el) return
    el.style.transform = `translate3d(${Math.random() * 100}vw, ${Math.random() * 100}vh, 0)`

    const animation = useAnimate(el, {
        transform: `translate3d(${Math.random() * 100}vw, ${Math.random() * 100}vh, 0)`,
        duration: 3000 + Math.random() * 7000, // between 3000ms and 10000ms
        easing: 'ease-in-out',
    }, { duration: 100000, immediate: true, iterations: Infinity })

    animation.play()
}

onMounted(() => Array.from(container.value?.children ?? []).forEach(el => initAnimation(el)))
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
                class="absolute rounded-full bg-zinc-800"
                :style="{ width: `${particle.size}px`, height: `${particle.size}px`, opacity: particle.opacity }"
            />
        </div>
    </div>
</template>
