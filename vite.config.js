// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
        plugins: [sveltekit()],
		server: {
			// port: '3000'
			host: 'lionontheweb.local',
			// host: '127.0.0.1',
			port: '80'
		}
};

export default config;