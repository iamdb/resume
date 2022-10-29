<script lang="ts">
	import 'iconify-icon';
	import { beforeUpdate, onMount } from 'svelte';
	import { getLoadingIcon } from '$lib/types/icons';
	import type { IconifyIconBuildResult } from 'iconify-icon';
	import { fade } from 'svelte/transition';

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
	let loadingIcon: IconifyIconBuildResult;

	onMount(async () => {
		loadingIcon = await getLoadingIcon();
	});

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
		} else {
			state = ImageState.Loaded;
		}
	};
</script>

<div data-photo-src={src} class="relative w-full h-full overflow-hidden">
	{#if state === ImageState.Loading}
		<div class="flex flex-col w-full h-full items-center justify-center">
			{#if loadingIcon}
				<svg {...loadingIcon.attributes} class="text-grey-100 text-6xl"
					>{@html loadingIcon.body}</svg>
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
	{#if state === ImageState.Loaded && !hideImage}
		<img transition:fade|local class="object-cover block w-full h-full" {alt} {src} />
	{/if}
</div>
