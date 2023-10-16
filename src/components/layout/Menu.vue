<template>
	<nav class="menu">
		<MenuItem :to="{ name: 'Home' }" label="Guitars" />
		<MenuItem :to="{ name: 'Playlists' }" label="Playlists" />
	</nav>
</template>

<script setup>
import MenuItem from '@/components/layout/MenuItem.vue';
</script>

<style scoped>
.menu {
	display: flex;
	margin-bottom: 25px;
}
</style>
