<template>
	<RouterLink class="menu-item" :class="!isActive || '-active'" :to="to">
		{{ label }}
	</RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
	to: {
		type: Object,
		required: true
	},
	label: {
		type: String,
		required: true
	}
})

const router = useRouter()
const route = useRoute()
const isActive = computed(() => router.resolve(props.to).path === '/' + route.path.split('/')[1])
</script>

<style scoped>
.menu-item {
	display: flex;
	align-items: center;
	gap: .5em;
	padding: .5em 1em;
}

.menu-item.-active {
	color: var(--color-text);
}
</style>
