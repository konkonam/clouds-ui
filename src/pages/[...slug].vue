<script setup lang="ts">
import { useComponent } from "~/utils/useComponent";

definePageMeta({
	alias: [
		'/pages/:slug(.*)*',
	],
});
const { fetchSingle } = useCms();

const story = await fetchSingle();
</script>

<template>
	<component v-if="story?.content" :is="useComponent(story.content)" />
</template>
