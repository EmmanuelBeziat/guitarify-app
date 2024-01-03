<template>
	<nav class="menu">
		<MenuItem :to="{ name: 'Playlists' }" label="Playlists" />
		<MenuItem :to="{ name: 'Guitars' }" label="Guitars" />
	</nav>
</template>

<script setup>
import MenuItem from '@/components/layout/MenuItem.vue';
</script>

<style scoped>
.menu {
	display: flex;
}
</style>
