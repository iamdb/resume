import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess'
import {mdsvex} from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
    mdsvex({
      extensions: ['.md']
    })
	],

  extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
    files: {
      lib: 'src/lib'
    }
	}
};

export default config;
