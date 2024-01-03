import { defineStore } from 'pinia'
import { api } from '@/config'

export const useMasteriesStore = defineStore({
	id: 'masteries',

	state: () => ({
		masteries: []
	}),

	getters: {
		list: state => state.masteries,
		count: state => state.masteries.length,
		get: state => id => state.masteries.find(mastery => mastery.id === id)
	},

	actions: {
		async fetch () {
			await fetch(`${api.masteries}`)
				.then(response => response.json())
				.then(data => { this.masteries = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
