<template>
    <span
        data-dev="topleft-to-right"
        :class="[
            'absolute top-0 left-0 transition-all h-0 w-0',
            'bg-zinc-800',
            'group-hover:h-0.5 group-hover:w-5',
        ]"
    />

    <span
        data-dev="topleft-to-bottom"
        :class="[
            'absolute top-0 left-0 transition-all h-0 w-0',
            'bg-zinc-800',
            'group-hover:h-5 group-hover:w-0.5',
        ]"
    />

    <span
        data-dev="topright-to-left"
        :class="[
            'absolute block top-0 right-0 transition-all h-0 w-0',
            'bg-zinc-800',
            'group-hover:h-0.5 group-hover:w-5',
        ]"
    />

    <span
        data-dev="topright-to-bottom"
        :class="[
            'absolute top-0 right-0 transition-all h-0 w-0',
            'bg-zinc-800',
            'group-hover:h-5 group-hover:w-0.5',
        ]"
    />

    <span
        data-dev="bottomleft-to-right"
        :class="[
            'absolute bottom-0 left-0 transition-all h-0 w-0',
            'bg-zinc-800',
            'group-hover:h-0.5 group-hover:w-5',
        ]"
    />

    <span
        data-dev="bottomleft-to-top"
        :class="[
            'absolute bottom-0 left-0 transition-all h-0 w-0',
            'bg-zinc-800',
            'group-hover:h-5 group-hover:w-0.5',
        ]"
    />

    <span
        data-dev="bottomright-to-left"
        :class="[
            'absolute bottom-0 right-0 transition-all h-0 w-0',
            'bg-zinc-800',
            'group-hover:h-0.5 group-hover:w-5',
        ]"
    />

    <span
        data-dev="bottomright-to-top"
        :class="[
            'absolute bottom-0 right-0 transition-all h-0 w-0',
            'bg-zinc-800',
            'group-hover:h-5 group-hover:w-0.5',
        ]"
    />
</template>
