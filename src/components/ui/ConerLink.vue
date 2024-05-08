<script setup lang="ts">

</script>

<template>
    <NuxtLink
        to="https://google.com"
        :class="[
            'group transition-all',
            'relative text-zinc-500',
            'inline-block transform scale-100 hover:scale-105 transition-transform',
            'break-normal',
        ]"
    >
        This is a link

        <span
            data-dev="topleft-to-right"
            :class="[
                'absolute top-0 left-0 transition-all h-0 w-0',
                'bg-rose-600',
                'group-hover:h-0.5 group-hover:w-2',
            ]"
        />

        <span
            data-dev="topleft-to-bottom"
            :class="[
                'absolute top-0 left-0 transition-all h-0 w-0',
                'bg-rose-600',
                'group-hover:h-1/2 group-hover:w-0.5',
            ]"
        />

        <span
            data-dev="topright-to-left"
            :class="[
                'absolute block top-0 right-0 transition-all h-0 w-0',
                'bg-rose-600',
                'group-hover:h-0.5 group-hover:w-2',
            ]"
        />

        <span
            data-dev="topright-to-bottom"
            :class="[
                'absolute top-0 right-0 transition-all h-0 w-0',
                'bg-rose-600',
                'group-hover:h-1/2 group-hover:w-0.5',
            ]"
        />

        <span
            data-dev="bottomleft-to-right"
            :class="[
                'absolute bottom-0 left-0 transition-all h-0 w-0',
                'bg-rose-600',
                'group-hover:h-0.5 group-hover:w-2',
            ]"
        />

        <span
            data-dev="bottomleft-to-top"
            :class="[
                'absolute bottom-0 left-0 transition-all h-0 w-0',
                'bg-rose-600',
                'group-hover:h-1/2 group-hover:w-0.5',
            ]"
        />

        <span
            data-dev="bottomright-to-left"
            :class="[
                'absolute bottom-0 right-0 transition-all h-0 w-0',
                'bg-rose-600',
                'group-hover:h-0.5 group-hover:w-2',
            ]"
        />

        <span
            data-dev="bottomright-to-top"
            :class="[
                'absolute bottom-0 right-0 transition-all h-0 w-0',
                'bg-rose-600',
                'group-hover:h-1/2 group-hover:w-0.5',
            ]"
        />
    </NuxtLink>
</template>
