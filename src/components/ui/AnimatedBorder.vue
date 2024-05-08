<template>
    <div class="absolute inset-0 pointer-events-none">
        <div
            :class="[
                'absolute top-[12px] left-1 h-4 w-0.5 bg-zinc-800',
                'transition-all ease-in-out duration-150 delay-75',
                'group-hover:top-[calc(100%-44px)] group-hover:h-8',
                'group-hover:top-[calc(100%-44px)] group-hover:h-8',
            ]"
        />
        <div
            :class="[
                'absolute top-[12px] left-1 w-4 h-0.5 bg-zinc-800',
                'transition-all ease-in-out duration-75 delay-150',
                'group-hover:w-0 group-hover:delay-0',
            ]"
        />
        <div
            :class="[
                'absolute bottom-[12px] left-1 w-0 h-0.5 bg-zinc-800',
                'transition-all ease-in-out duration-75 delay-0',
                'group-hover:w-20 group-hover:delay-150',
            ]"
        />

        <div
            :class="[
                'absolute bottom-[12px] right-1 h-4 w-0.5 bg-zinc-800',
                'transition-all ease-in-out duration-150 delay-75',
                'group-hover:bottom-[calc(100%-44px)] group-hover:h-8',
            ]"
        />
        <div
            :class="[
                'absolute bottom-[12px] right-1 w-4 h-0.5 bg-zinc-800',
                'transition-all ease-in-out duration-75 delay-150',
                'group-hover:w-0 group-hover:delay-0',
            ]"
        />
        <div
            :class="[
                'absolute top-[12px] right-1 w-0 h-0.5 bg-zinc-800',
                'transition-all ease-in-out duration-75 delay-0',
                'group-hover:w-20 group-hover:delay-150',
            ]"
        />
    </div>
</template>
