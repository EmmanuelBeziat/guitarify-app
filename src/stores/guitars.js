import { defineStore } from 'pinia'
import { api } from '@/config'

export const useGuitarsStore = defineStore({
	id: 'guitars',

	state: () => ({
		guitars: []
	}),

	getters: {
		list: state => state.guitars,
		count: state => state.guitars.length,
	},

	actions: {
		async fetch () {
			await fetch(api.guitars)
				.then(response => response.json())
				.then(data => { this.guitars = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
