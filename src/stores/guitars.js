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
		get: state => uuid => state.guitars.find(guitar => guitar.uuid === uuid)
	},

	actions: {
		async fetch () {
			const params = new URLSearchParams({
				userId: 1
			})
			await fetch(`${api.guitars}?${params}`)
				.then(response => response.json())
				.then(data => { this.guitars = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
