
<template>
  <div class="dashboard">
		<template v-if="guitars">
			<Guitar v-for="guitar in guitars" :key="`guitar-${guitar.uuid}`" :guitar="guitar" />
		</template>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useGuitarsStore } from '@/stores/guitars'

import Guitar from '@/components/dashboard/Guitar.vue'

const guitarsStore = useGuitarsStore()

const guitars = computed(() => guitarsStore.list)
</script>

<style scoped>
.dashboard {
	display: grid;
	gap: .75rem;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
