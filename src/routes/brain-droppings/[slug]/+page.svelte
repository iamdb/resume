<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import type { PageData } from './$types';
	import EndCap from '$lib/components/end-cap.svelte';
	import 'highlight.js/styles/color-brewer.css';
	import Github from 'virtual:icons/mdi/github';
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import NextPost from 'virtual:icons/bx/skip-next-circle';
	import PreviosPost from 'virtual:icons/bx/skip-previous-circle';

	export let data: PageData;
</script>

<PageHead title={`${data.post?.metadata.title} | Brain Droppings`}>
	<link rel="alternate" type="application/rss+xml" title="RSS Feed for iamdb.co" href="/rss" />
</PageHead>

<div
	class="grid mt-4 grid-cols-[1fr,2fr,1fr] justify-between py-2 px-4 text-base align-baseline lg:gap-x-8 leading-compact text-lightgrey">
	<span class="place-self-start">
		{#if data.previousPost}
			<a
				transition:fade|local={{ easing: quadOut, duration: 150 }}
				href={data.previousPost.slug}
				title={data.previousPost?.title}>
				<span class="hidden lg:inline">Previous Post</span>
				<span class="text-xl lg:hidden"><PreviosPost /></span>
			</a>
		{/if}
	</span>
	<a
		href="/brain-droppings"
		title="Go back to post list"
		class="place-self-center font-serif text-xl underline underline-offset-2">Brain Droppings</a>
	<span class="place-self-end">
		{#if data.nextPost}
			<a
				transition:fade|local={{ easing: quadOut, duration: 150 }}
				href={data.nextPost.slug}
				title={data.nextPost?.title}>
				<span class="hidden lg:inline">Next post</span>
				<span class="text-xl lg:hidden"><NextPost /></span>
			</a>
		{/if}
	</span>
</div>
<div class="relative lg:mt-0 mdx">
	<div class="pl-8 lg:pl-14">
		<div class="flex absolute left-0 top-4 flex-col gap-y-4 items-end lg:top-12">
			<div class="p-1 w-full font-mono rounded-tr rounded-br lg:text-2xl bg-perry text-lightgrey">
				{data.post?.metadata.num}
			</div>
			<div>
				{#if data.post?.metadata.repo}
					<a
						style="background: none;"
						class="text-4xl"
						target="_blank"
						rel="noopener noreferrer"
						href={data.post?.metadata.repo}
						title={data.post?.metadata.title}><Github class="bg-transparent" /></a>
				{/if}
			</div>
		</div>
		<h2 class="relative pr-12 text-lightgrey">
			{data.post?.metadata.title}
		</h2>
		<div class="content"><svelte:component this={data.post?.default} /></div>
	</div>
</div>
<EndCap />
