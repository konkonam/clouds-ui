<script setup>
const { fetchLinks } = useCms()

const links = await fetchLinks()
</script>

<template>
    <header class="bg-gray-900 bg-rose-950 text-white fixed z-30 top-0 left-0 right-0">
        <nav
            class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
            <div
                v-for="item in links"
                :key="item.slug"
                class="flex lg:flex-1"
            >
                <UiButton
                    :link="item.slug"
                    class="text-sm font-semibold leading-6 "
                >
                    {{ item.name }}
                </UiButton>
            </div>
        </nav>
    </header>
</template>
