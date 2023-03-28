import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import { mdsvex, escapeSvelte } from 'mdsvex';
import gfm from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';
import shiki from 'shiki';

const h = await shiki.getHighlighter({
	theme: '../../../src/lib/shiki-theme',
	langs: ['javascript', 'typescript', 'haskell', 'css', 'bash']
});

async function highlighter(code, lang) {
	return escapeSvelte(h.codeToHtml(code, { lang }).replaceAll(' tabindex="0"', ''));
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			smartypants: {
				quotes: true,
				ellipses: true,
				dashes: 'oldschool'
			},
			extensions: ['.svelte.md'],
			remarkPlugins: [gfm],
			rehypePlugins: [
				[rehypeExternalLinks, { rel: ['noopener', 'noreferrer', 'nofollow'], target: '_blank' }]
			],
			highlight: { highlighter }
		})
	],

	extensions: ['.svelte', '.svelte.md', '.md'],

	kit: {
		adapter: adapter({ preprocess: true }),
		files: {
			lib: 'src/lib'
		}
	}
};

export default config;
