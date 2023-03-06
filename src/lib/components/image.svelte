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

<div class="relative w-full overflow-hidden">
	<img
		bind:this={img}
		decoding="async"
		loading="lazy"
		class:opacity-0={!loaded}
		class:opacity-100={loaded}
		class="object-cover transition-opacity block w-full h-full"
		{alt}
		{src} />
</div>
