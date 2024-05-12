<script setup lang="ts">
import type { RichtextStoryblok } from '~/types'

const props = defineProps<{
    title?: string
    description?: RichtextStoryblok
    image?: string
}>()
</script>

<template>
    <div
        class="group inline-block pb-4 text-black overflow-hidden"
        style="  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
"
    >
        <figure class="aspect-square overflow-hidden">
            <NuxtImg
                class="w-full h-full object-cover transition-all group-hover:scale-125"
                :src="props.image"
            />
        </figure>
        <div
            class="p-4 bg-rose-950 text-white my-4"
            style="  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
"
        >
            <h3 class="text-xl font-bold">
                {{ props.title }}
            </h3>

            <div v-html="renderRichText(props.description)" />
        </div>
        <footer class="flex gap-2 px-4">
            <slot name="footer" />
        </footer>
    </div>
</template>
