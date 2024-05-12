<script setup lang="ts">
import type { TrainerOverviewStoryblok, TrainerStoryblok } from '~/types'

const props = defineProps<{
    blok: TrainerOverviewStoryblok
}>()

const { fetchMultiple } = useCms()
const trainers = ref<TrainerStoryblok[]>([])

onMounted(async () => {
    const response = await fetchMultiple({
        starts_with: 'trainers',
    })

    trainers.value = response.map(trainer => trainer.content as TrainerStoryblok)
})
</script>

<template>
    <div class="mt-10 px-4">
        <h1>{{ props.blok.title }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 grow lg:grid-cols-3 gap-8 text-black">
            <template
                v-for="(trainer, index) in trainers"
                :key="index"
            >
                <UiCard
                    :title="trainer.firstName + ' ' + trainer.lastName"
                    :description="trainer.description"
                    :image="trainer.trainerImage?.filename"
                >
                    <template #footer>
                        <div class="flex gap-4">
                            <UiButton
                                :to="trainer.instagramLink?.url"
                                class="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900"
                            >
                                instagram
                            </UiButton>

                            <UiButton
                                :to="trainer.facebookLink?.url"
                                class="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900"
                            >
                                facebook
                            </UiButton>

                            <UiButton
                                :to="trainer.tiktokLink?.url"
                                class="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900"
                            >
                                tiktok
                            </UiButton>
                        </div>
                    </template>
                </UiCard>
            </template>
        </div>
    </div>
</template>
