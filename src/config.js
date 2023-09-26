const env = import.meta.env

export const api = {
	guitars: `${env.VITE_API_URL}${env.VITE_API_GUITARS}`,
	brands: `${env.VITE_API_URL}${env.VITE_API_BRANDS}`,
	masteries: `${env.VITE_API_URL}${env.VITE_API_MASTERIES}`,
	playlists: `${env.VITE_API_URL}${env.VITE_API_PLAYLISTS}`,
	songs: `${env.VITE_API_URL}${env.VITE_API_SONGS}`,
	strings: `${env.VITE_API_URL}${env.VITE_API_STRINGS}`,
	tunings: `${env.VITE_API_URL}${env.VITE_API_TUNINGS}`,
	login: `${env.VITE_API_URL}${env.VITE_API_LOGIN}`,
	logout: `${env.VITE_API_URL}${env.VITE_API_LOGOUT}`
}
