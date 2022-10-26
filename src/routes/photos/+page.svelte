<script>
	import photos from './photos.json';
	import Image from '$lib/components/image.svelte';
	import { writable } from 'svelte/store';

	let disableHover = writable(false);
</script>

<h1 class="leading-tight mb-1 underline underline-offset-2">Music Photos</h1>

<p class="mb-12">
	From 2011 until 2017 I spent a lot of my nights taking photos at venues all around Los Angeles. I
	even made the <a href="/photos/latimes-weirdal">LA Times</a> (online &amp; print) once. These are a
	selection of my work.
</p>

<div class="fixed bottom-4 right-4">
	{#if !$disableHover}
		<button class="btn" on:click={() => disableHover.set(true)}>Reveal All</button>
	{:else}
		<button class="btn" on:click={() => disableHover.set(false)}>Hide All</button>
	{/if}
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-14">
	{#each photos as src}
		<Image
			src={`/photos/music/${src}`}
			disableHover={$disableHover}
			meta={{ name: 'Test', location: 'test', date: 'date' }}
		/>
	{/each}
</div>
