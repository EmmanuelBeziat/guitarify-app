import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Playlist from '@/views/Playlist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: '/',
			name: 'Playlists',
			component: Playlist
		},
    {
      path: '/guitars',
      name: 'Guitars',
      component: Dashboard
    },
		{
      path: '/guitars/:uuid',
      name: 'Guitar',
      component: () => import(/* webpackChunkName: "guitar" */ '@/views/Guitar.vue'),
			props: true,
    },
  ]
})

export default router
