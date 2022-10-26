<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { beforeUpdate, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { getLoadingIcon } from '$lib/types/icons';

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
	export let disableHover = false;

	const state = writable(ImageState.Loading);
	const showMeta = writable(false);
	const isHovered = writable(false);
	const loadingIcon = getLoadingIcon();

	const setIsHovered = (hovered: boolean) => {
		isHovered.set(hovered);
	};

	let imageElem: HTMLDivElement | undefined;

	const loadImage = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && entry.target === imageElem) {
				const img = new Image();

				img.onload = () => {
					state.set(ImageState.Loaded);
				};

				img.onerror = () => {
					state.set(ImageState.Failed);
				};

				img.src = src;
			}
		});
	};

	onMount(() => {
		if (imageElem) {
			let options = {
				threshold: 0.75
			};

			let observer = new IntersectionObserver(loadImage, options);

			observer.observe(imageElem);
		}
	});

	beforeUpdate(() => {
		if (disableHover || $isHovered) {
			showMeta.set(true);
		} else {
			showMeta.set(false);
		}
	});
</script>

<div bind:this={imageElem} class="relative flex flex-col overflow-clip" style="padding-top: 66.6%">
	<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-grey-700">
		{#if $state === ImageState.Loading}
			<div class="flex flex-col items-center justify-center">
				{#await loadingIcon then icon}
					<svg {...icon.attributes} class="text-grey-100 text-6xl">{@html icon.body}</svg>
				{/await}
			</div>
		{/if}
		{#if $state === ImageState.Failed}
			<div class="flex flex-col items-center h-full bg-grey-800 justify-center">
				<span class="text-[#ff0000]/70">Image failed to load :-(</span>
			</div>
		{/if}
		{#if $state === ImageState.Loaded}
			<div
				on:focus={() => !disableHover && setIsHovered(true)}
				on:blur={() => !disableHover && setIsHovered(false)}
				on:mouseout={() => !disableHover && setIsHovered(false)}
				on:mouseover={() => !disableHover && setIsHovered(true)}
				class:hidden={$state !== ImageState.Loaded}
				class:block={$state === ImageState.Loaded}
				class="h-full w-full cursor-cell vignette"
				transition:fade|local
			>
				<img class="object-cover block w-full h-full" alt={src} {src} />
				{#if meta && $showMeta}
					<div
						transition:slide={{ duration: 150 }}
						class="absolute transition-all bottom-0 left-0 flex flex-row justify-between items-end py-4 px-8 w-full bg-black-200/80"
					>
						<h5 class="text-white-400 ">{meta.location}</h5>
						<h4 class="text-white-200">{meta.name}</h4>
						<h5 class="text-white-400">{meta.date}</h5>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
