import { defineStore } from 'pinia'
import { api } from '@/config'

export const useSongsStore = defineStore({
	id: 'songs',

	state: () => ({
		songs: []
	}),

	getters: {
		list: state => state.songs,
		count: state => state.songs.length,
	},

	actions: {
		async fetch () {
			await fetch(`${api.songs}`)
				.then(response => response.json())
				.then(data => { this.songs = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
