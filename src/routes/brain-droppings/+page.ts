import type { SvelteComponentTyped } from 'svelte';
import type { PageLoad } from './$types';

export const load = (async () => {
	const posts: Record<string, SvelteComponentTyped> = import.meta.glob(
		'$lib/content/posts/*.svelte.md',
		{
			eager: true,
			import: 'metadata'
		}
	);

	return {
		posts: Object.values(posts).sort((a, b) => b.num - a.num)
	};
}) satisfies PageLoad;
