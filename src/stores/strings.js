import { defineStore } from 'pinia'
import { api } from '@/config'

export const useStringsStore = defineStore({
	id: 'strings',

	state: () => ({
		strings: []
	}),

	getters: {
		list: state => state.strings,
		count: state => state.strings.length,
		get: state => id => state.strings.find(string => string.id === id)
	},

	actions: {
		async fetch () {
			await fetch(`${api.strings}`)
				.then(response => response.json())
				.then(data => { this.strings = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
