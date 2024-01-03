<template>
	<div class="song">
		<iframe :src="`https://open.spotify.com/embed/track/${song.songKey}`" width="300" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
	</div>
</template>

<script setup>
const props = defineProps({
	song: {
		type: Object,
		required: true
	}
})

console.log(props.song)
</script>
