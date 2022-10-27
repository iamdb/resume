<script type="ts">
	import 'iconify-icon';
	import type { Show } from './+page';
	import Image from '$lib/components/image.svelte';
	import { writable } from 'svelte/store';

	export let data: {
		shows: Show[];
	};

	let disableHover = writable(false);
</script>

<h1 class="leading-tight mb-1 underline underline-offset-2">Concert Photography</h1>

<p>
	For as long as I can remember I have been interested in both photography and music. Sometime
	around 2007 I started going concerts regularly and really started to love the idea of being in the
	photo pit amongst the chaos, trying to capture the best photograph possible. In 2011 I bought my
	first DSLR and from then until 2018 I spent a lot of my nights taking photos at venues all around
	Los Angeles. I primarily photographed for two legendary Los Angeles music publications
	<a href="https://buzzbands.la/?s=%22david+benjamin%22" target="_blank" rel="noopener noreferrer"
		>Buzzbands.la</a>
	and
	<a href="https://larecord.com/?s=%22david+benjamin%22" target="_blank" rel="noreferrer noopener"
		>LA Record</a
	>, but my work has also been featured in Consequence of Sound, FILTER and the
	<a href="/photos/latimes-weirdal">Los Angeles Times</a>.
</p>

<p>
	Below is a small selection of my favorite work from those years. The photos are ordered from the
	earliest show to the latest. Tap your finger on or hover your mouse over a photograph to see more
	details.
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12">
	{#each data.shows as show}
		{#if show.photos}
			{@const photos = show.photos}
			{#each photos as photo}
				<Image
					src={`/photos/music/${photo}`}
					disableHover={$disableHover}
					meta={{
						name: show.artist,
						location: show.location,
						date: show.date.toLocaleDateString()
					}} />
			{/each}
		{/if}
	{/each}
</div>

<div class="fixed top-1/3 right-4 z-10">
	<button
		class="btn aspect-square w-10 flex items-center justify-center"
		on:click={() => disableHover.set(!$disableHover)}>
		{#if !$disableHover}
			<iconify-icon class="block" width="100%" icon="bi:eye-fill" />
		{:else}
			<iconify-icon class="block" width="100%" icon="bi:eye-slash-fill" />
		{/if}
	</button>
</div>
