<script lang="ts">
	import slugify from 'slugify';
	import PageHead from '$lib/components/page-head.svelte';
	import PageTitle from '$lib/components/page-title.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PageHead title="Brain Droppings">
	<link rel="alternate" type="application/rss+xml" title="RSS Feed for iamdb.co" href="/rss" />
</PageHead>

<PageTitle>Brain Droppings</PageTitle>

<p class="px-8 mt-2 mb-0 text-center lg:px-0 lg:text-left">
	A place for new discoveries and whatever else happens to fall out.
</p>
<div class="p-12 mt-12 rounded-lg bg-lightkhaki">
	<div class="grid grid-cols-1 gap-8 place-items-start lg:grid-cols-2">
		{#each data.posts as post}
			<div class="grid gap-x-8 grid-cols-[auto,1fr] items-start">
				<span class="py-1 px-2 font-mono text-base leading-none bg-perry text-lightgrey">
					{String(post.num)}
				</span>
				<a
					href={`/brain-droppings/${String(post.num).padStart(3, '0')}_${slugify(post.title, {
						replacement: '_',
						lower: true,
						strict: true
					})}`}
					style="background:none"
					class="inline text-2xl leading-tight">
					{post.title}
				</a>
			</div>
		{/each}
	</div>
</div>
