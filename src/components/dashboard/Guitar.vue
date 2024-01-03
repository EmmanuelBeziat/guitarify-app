<template>
	<router-link class="guitar card" :to="`/guitars/${guitar.uuid}/`">
		<picture class="card-picture">
			<img :src="`${guitar.picture}`" :alt="guitar.model">
		</picture>

		<header class="card-header">
			<hgroup class="card-title">
				<span class="card-country">{{ countryFlag }}</span>
				<BrandIcon :file="guitar.brand.picture" class="card-brand" />
				<h1 class="card-model">{{ guitar.model }}</h1>
			</hgroup>
		</header>
	</router-link>
</template>

<script setup>
import { getFlagEmoji } from '@/middleware/mixins/emoji'

import BrandIcon from '@/components/BrandIcon.vue'

const props = defineProps({
	guitar: {
		type: Object,
		required: true
	}
})

const countryFlag = getFlagEmoji(props.guitar.productionCountry)
</script>

<style scoped>
.card {
	display: grid;
	grid-template: 1fr / 1fr;
	background: rgba(255, 255, 255, .05);
	border-radius: 5px;
	box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
	aspect-ratio: 16 / 9;
	overflow: hidden;
}

.card-header {
	grid-area: 1 / 1 / 2 / 2;
	padding: .5rem .75rem;
	position: relative;
	text-align: right;
	align-self: flex-end;
}

.card-title {
	color: #fff;
	display: inline-flex;
	flex-direction: column;
	align-items: flex-end;
	justify-items: flex-end;
	text-shadow: 2px 2px 1px rgba(0, 0, 0, .25);
	line-height: 1;
	gap: .5em;
}

.card-country {
	font-size: 2rem;
}

.card-model {
	font-family: var(--fs-title);
	font-size: clamp(1.75rem, 5vw, 3rem);
	margin: 0;
}

.card-brand {
	width: clamp(80px, 100%, 120px);
	display: block;
}

.card-picture {
	grid-area: 1 / 1 / 2 / 2;
	background: #cecece;
	border-radius: 5px;
	overflow: hidden;
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
</style>
