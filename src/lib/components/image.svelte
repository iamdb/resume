<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let alt: string;
	export let src: string;

	let img: HTMLImageElement;
	const loaded = writable(false);

	onMount(() => {
		img.addEventListener('load', () => {
			loaded.set(true);
		});
	});
</script>

<div style:padding-top="66%" class="relative h-full overflow-hidden">
	<img
		bind:this={img}
		decoding="async"
		loading="lazy"
		class:opacity-0={!loaded}
		class:opacity-100={loaded}
		class="absolute top-0 left-0 object-cover transition-opacity block w-full h-full"
		{alt}
		{src} />
</div>
