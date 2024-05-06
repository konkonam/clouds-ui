<script setup lang="ts">
import type { SectionStoryblok } from "~/types";
import type { Ref } from "#imports";
import { useComponent } from "~/utils/useComponent";

const props = defineProps<{
	blok: SectionStoryblok;
}>();

const { register } = useSections();

const section = ref<HTMLElement>();

onMounted(() => register(props.blok._uid, section as Ref<HTMLElement>));
</script>

<template>
	<div :id="blok._uid" ref="section">
		<component v-for="item in props.blok.content" :key="item._uid" :is="useComponent(item)" />
	</div>
</template>
