import { defineStore } from 'pinia'
import { api } from '@/config'

export const useBrandsStore = defineStore({
	id: 'brands',

	state: () => ({
		brands: []
	}),

	getters: {
		list: state => state.brands,
		count: state => state.brands.length,
		get: state => name => state.brands.find(brand => brand.name === name)
	},

	actions: {
		async fetch () {
			await fetch(`${api.brands}`)
				.then(response => response.json())
				.then(data => { this.brands = data })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
