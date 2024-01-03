import { defineStore } from 'pinia'
import { api } from '@/config'

export const usePlaylistsStore = defineStore({
	id: 'playlists',

	state: () => ({
		playlists: []
	}),

	getters: {
		list: state => state.playlists,
		count: state => state.playlists.length,
		get: state => uuid => state.playlists.find(playlist => playlist.uuid === uuid)
	},

	actions: {
		async fetch () {
			await fetch(`${api.playlists}`)
				.then(response => response.json())
				.then(data => { this.playlists = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
