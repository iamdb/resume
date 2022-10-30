<script lang="ts">
	import 'iconify-icon';
	import { beforeUpdate } from 'svelte';
	import { getLoadingIcon } from '$lib/types/icons';

	enum ImageState {
		Idle,
		Loaded,
		Loading,
		Failed
	}

	export let alt: string;
	export let src: string;
	export let hideImage = true;

	let state = ImageState.Idle;
	let loadingIcon = getLoadingIcon();

	beforeUpdate(() => {
		if (!hideImage) {
			loadImage();
		}
	});

	const loadImage = () => {
		if (state === ImageState.Idle) {
			state = ImageState.Loading;

			const img = new Image();

			img.onload = () => {
				state = ImageState.Loaded;
			};

			img.onerror = () => {
				state = ImageState.Failed;
			};

			img.src = src;
		} else if (state !== ImageState.Failed) {
			state = ImageState.Loaded;
		}
	};
</script>

<div data-photo-src={src} class="relative w-full h-full overflow-hidden">
	{#if state === ImageState.Loading}
		<div class="flex flex-col w-full h-full items-center justify-center">
			{#if loadingIcon}
				<svg
					viewBox={`${loadingIcon.top} ${loadingIcon.left} ${loadingIcon.width} ${loadingIcon.height}`}
					class="text-grey-100 w-16">{@html loadingIcon.body}</svg>
			{/if}
		</div>
	{/if}
	{#if state === ImageState.Failed}
		<div class="flex flex-col items-center justify-center w-full h-full">
			<iconify-icon class="text-[#ff0000]/70 text-2xl mb-1" icon="bx:error-alt" />
			<span class="text-[#ff0000]/70 uppercase font-bold leading-tight">Image failed to load</span>
			<span class="leading-none text-grey-300">{src}</span>
		</div>
	{/if}
	<div
		class:opacity-0={hideImage}
		class:opacity-100={!hideImage}
		class="transition-opacity duration-1000 vignette">
		{#if state === ImageState.Loaded}
			<img class="object-cover block w-full h-full" {alt} {src} />
		{/if}
	</div>
</div>
