<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	interface ImageMeta {
		location: string;
		date: string;
		name: string;
	}

	enum ImageState {
		Loaded,
		Loading,
		Failed
	}

	export let meta: ImageMeta;
	export let src: string;

	let state: ImageState = ImageState.Loading;
	let showMeta = writable(false);

	const setShowMeta = (show: boolean) => {
		showMeta.set(show);
	};

	onMount(() => {
		const img = new Image();

		img.onload = () => {
			state = ImageState.Loaded;
		};

		img.onerror = () => {
			state = ImageState.Failed;
		};

		img.src = src;
	});
</script>

<div class="relative flex flex-col overflow-clip" style="padding-top: 66.6%">
	<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-grey-700">
		<div
			class:hidden={state !== ImageState.Loading}
			class:block={state === ImageState.Loading}
			class="flex flex-col items-center justify-center"
		>
			<p>Loading...</p>
		</div>
		<div
			class:hidden={state !== ImageState.Failed}
			class:block={state === ImageState.Failed}
			class="flex flex-col items-center h-full bg-grey-800 justify-center"
		>
			<span class="text-[#ff0000]/70">Image failed to load :-(</span>
		</div>
		<div
			on:focus={() => setShowMeta(true)}
			on:blur={() => setShowMeta(false)}
			on:mouseout={() => setShowMeta(false)}
			on:mouseover={() => setShowMeta(true)}
			class:hidden={state !== ImageState.Loaded}
			class:block={state === ImageState.Loaded}
			class="h-full w-full cursor-cell"
		>
			<img class="object-cover block w-full h-full" alt={src} {src} />
			{#if meta}
				<div
					class:bottom-[-100%]={!$showMeta}
					class:bottom-0={$showMeta}
					class:opacity-0={!$showMeta}
					class:opacity-100={$showMeta}
					class="absolute transition-all left-0 flex flex-row justify-between items-end py-4 px-8 w-full bg-black-200/80"
				>
					<h5 class="text-white-400 ">{meta.location}</h5>
					<h4 class="text-white-200">{meta.name}</h4>
					<h5 class="text-white-400">{meta.date}</h5>
				</div>
			{/if}
		</div>
	</div>
</div>
