import adapter from '@sveltejs/adapter-auto';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		scss: { 
			prependData: `@import "src/lib/styles/global/typography";
							@import "src/lib/styles/global/breakpoints";`
		}
	}),

	

	kit: {
		adapter: netlifyAdapter()
	}
};

export default config;
