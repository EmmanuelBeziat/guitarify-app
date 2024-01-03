<template>
  <div class="dashboard">
		<template v-if="songs">
			<Song v-for="song in songs" :key="`song-${song.uuid}`" :song />
		</template>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useSongsStore } from '@/stores/songs'

import Song from '@/components/dashboard/Song.vue'

const songsStore = useSongsStore()

const songs = computed(() => songsStore.list)
</script>

<style scoped>
.dashboard {
	display: grid;
	gap: .75rem;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
