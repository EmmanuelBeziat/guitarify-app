import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Playlist from '../views/Playlist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
      path: '/playlists',
      name: 'Playlists',
      component: Playlist
    }
  ]
})

export default router
