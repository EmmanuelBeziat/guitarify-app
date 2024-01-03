<template>
	<div class="guitar" v-if="guitar">
		<picture class="card-picture">
			<img :src="`${guitar.picture}`" :alt="guitar.model">
		</picture>

		<header class="card-header">
			<hgroup class="card-title">
				<BrandIcon :file="guitar.brand.picture" class="card-brand" />
				<h1 class="card-model">{{ guitar.model }}</h1>
			</hgroup>
		</header>

		{{ guitar.numberOfStrings }} strings, {{ guitar.tuning.name }} tuning ({{ guitar.tuning.tuning }})<br>
		{{ guitar.strings.brand }} {{ guitar.strings.model }} ({{ guitar.strings.gauge }})<br>
		Last changed: {{ lastStringChange }}

		<h2>Production</h2>
		<dl>
			<dt>Numéro de série</dt>
			<dd>{{ guitar.serialNumber }}</dd>
			<dt>Année de production</dt>
			<dd>{{ productionYear }}</dd>
			<dt>Usine</dt>
			<dd>{{ guitar.factory }} ({{ productionCountry }})</dd>
		</dl>

		<h2>Autres</h2>
		<dl>
			<dt>Finition</dt>
			<dd>{{ guitar.finish }}</dd>
			<dt>Informations</dt>
			<dd>{{ guitar.informations }}</dd>
		</dl>
	</div>

	<footer class="card-footer">
		<div class="card-meta">
			<span class="created-at">Creation: {{ createdAt }}</span>
			<span v-if="modifiedAt" class="modified-at">Last edit: {{ modifiedAt }}</span>
		</div>
	</footer>
</template>

<script setup>
import { computed } from 'vue'
import { dateFormat } from '@/middleware/mixins/date'
import { countryFormat } from '@/middleware/mixins/country'
import { getFlagEmoji } from '@/middleware/mixins/emoji'
import { useGuitarsStore } from '@/stores/guitars'

import BrandIcon from '@/components/BrandIcon.vue'

const props = defineProps({
	uuid: {
		type: String,
		required: true
	}
})

const guitarsStore = useGuitarsStore()

const guitar = computed(() => guitarsStore.get(props.uuid))

const createdAt = dateFormat(guitar.createdAt, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
const modifiedAt = dateFormat(guitar.modifiedAt, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
const productionYear = dateFormat(guitar.productionYear, { year: 'numeric', month: 'long' })
const lastStringChange = dateFormat(guitar.lastStringChange, { year: 'numeric', month: 'long', day: 'numeric' })
const productionCountry = countryFormat(guitar.productionCountry)
const countryFlag = getFlagEmoji(guitar.productionCountry)
</script>
