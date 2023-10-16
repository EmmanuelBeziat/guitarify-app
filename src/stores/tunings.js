import { defineStore } from 'pinia'
import { api } from '@/config'

export const useTuningsStore = defineStore({
	id: 'tunings',

	state: () => ({
		tunings: []
	}),

	getters: {
		list: state => state.tunings,
		count: state => state.tunings.length,
	},

	actions: {
		async fetch () {
			await fetch(`${api.tunings}`)
				.then(response => response.json())
				.then(data => { this.tunings = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
