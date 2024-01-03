
<template>
  <div class="dashboard">
		<template v-if="guitars">
			<Filters @change="handleFilterChange" v-model="selectedOption" />
			<Guitar v-for="guitar in sortedGuitars" :key="`guitar-${guitar.uuid}`" :guitar />
		</template>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGuitarsStore } from '@/stores/guitars'

import Filters from '@/components/dashboard/Filters.vue'
import Guitar from '@/components/dashboard/Guitar.vue'

const guitarsStore = useGuitarsStore()
const guitars = computed(() => guitarsStore.list)

const filter = ref('default')
const handleFilterChange = (newFilter) => {
  filter.value = newFilter
}

const sortedGuitars = computed(() => {
  if (filter.value === 'asc') {
    return [...guitars.model].sort((a, b) => a.model.localeCompare(b.model))
  }
	else if (filter.value === 'desc') {
    return [...guitars.model].sort((a, b) => b.model.localeCompare(a.model))
  }
	else {
    return guitars.id
  }
})
</script>

<style scoped>
.dashboard {
	display: grid;
	gap: .75rem;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
