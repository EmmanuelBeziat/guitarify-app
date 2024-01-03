<template>
	<header class="header">
		<Logo />
		<Menu />
	</header>
</template>

<script setup>
import Menu from '@/components/layout/Menu.vue'
import Logo from '@/components/layout/Logo.vue'
</script>

<style scoped>
.header {
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-bottom: 1rem;
}
</style>
