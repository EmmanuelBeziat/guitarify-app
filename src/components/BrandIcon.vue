<template>
	<span v-html="svg" class="svg-container" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	file: {
		type: String,
		required: true
	}
})

const images = import.meta.glob('@/assets/images/brands/*.svg', {
	as: 'raw',
	eager: true
})
const svg = computed(() => images[`/src/assets/images/brands/${props.file}`])
</script>

<style>
.svg-container svg {
	fill: currentColor;
	width: 100%;
	height: auto;
	display: block;
	filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, .25));
}
</style>
