<template>
	<div class="guitar card">
		<picture class="card-picture">
			<img :src="`images/uploads/guitars/${guitar.picture}`" :alt="guitar.model">
		</picture>

		<header class="card-header">
			<h1 class="card-title"> {{ countryFlag }}
				<BrandIcon :file="guitar.brand.picture" class="card-brand" />
				{{ guitar.model }}
			</h1>
		</header>

		<div class="card-body">
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
	</div>
</template>

<script setup>
import { dateFormat } from '@/middleware/mixins/date'
import { countryFormat } from '@/middleware/mixins/country'
import { getFlagEmoji } from '@/middleware/mixins/emoji'

import BrandIcon from '@/components/BrandIcon.vue'

const props = defineProps({
	guitar: {
		type: Object,
		required: true
	}
})

const createdAt = dateFormat(props.guitar.createdAt, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
const modifiedAt = dateFormat(props.guitar.modifiedAt, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
const productionYear = dateFormat(props.guitar.productionYear, { year: 'numeric', month: 'long' })
const lastStringChange = dateFormat(props.guitar.lastStringChange, { year: 'numeric', month: 'long', day: 'numeric' })
const productionCountry = countryFormat(props.guitar.productionCountry)
const countryFlag = getFlagEmoji(props.guitar.productionCountry)
</script>

<style scoped>
.card {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, auto) 1fr;
	gap: .5em;
	background: rgba(255, 255, 255, .05);
	border-radius: 5px;
	box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
}

.card-header {
	grid-area: 2 / 1 / 3 / 3;
	padding: .5rem .75rem;
	position: relative;
	text-align: right;
}

.card-title {
	color: #fff;
	display: inline-flex;
	flex-direction: column;
	align-items: flex-end;
	justify-items: flex-end;
	text-shadow: 2px 2px 1px rgba(0, 0, 0, .25);
	font-family: Staatliches;
	line-height: 1.25;
	font-size: clamp(1.75rem, 5vw, 3rem);
	margin: 0;
}

.card-brand {
	width: clamp(80px, 100%, 120px);
	display: block;
}

.card-picture {
	grid-area: 1 / 1 / 3 / 3;
	background: #cecece;
	border-radius: 5px 5px 0 0;
	overflow: hidden;
	height: 12rem;
}

.card:hover .card-picture img {
	transform: scale(1.15);
	transition: .25s ease-in-out;
}

.card-picture img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center var(--vertical-position, center);
	transition: .45s ease-in-out;
}

.card-body {
	grid-area: 3 / 1 / 4 / 3;
	padding: .5rem .75rem;
}

.card-footer {
	grid-area: 4 / 1 / 4 / 3;
	padding: .5rem .625rem;
	border-radius: 0 0 5px 5px;
	background: rgba(255, 255, 255, .1);
}

.card-meta {
	display: flex;
	flex-direction: column;
	text-align: right;
	font-size: .85rem;
}
</style>
