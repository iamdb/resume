<script lang="ts">
	import 'iconify-icon';
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';
	import { getLoadingIcon } from '$lib/types/icons';
	import type { IconifyIconBuildResult } from 'iconify-icon';

	interface ImageMeta {
		location: string;
		date: string;
		name: string;
	}

	enum ImageState {
		Idle,
		Loaded,
		Hidden,
		Loading,
		Failed
	}

	export let meta: ImageMeta;
	export let src: string;
	export let disableHover = false;

	let state = ImageState.Idle;
	let showMeta = false;
	let isHovered = false;
	let loadingIcon: IconifyIconBuildResult;

	let imageElem: HTMLDivElement | undefined;

	const loadImage = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && entry.target === imageElem) {
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
				} else if (state === ImageState.Hidden) {
					state = ImageState.Loaded;
				}
			} else {
				state = ImageState.Hidden;
			}
		});
	};

	onMount(async () => {
		loadingIcon = await getLoadingIcon();

		let options = {
			threshold: 0.25
		};

		const observer = new IntersectionObserver(loadImage, options);

		if (imageElem) {
			observer.observe(imageElem);
		}

		return () => {
			if (imageElem) {
				observer?.unobserve(imageElem);
			}
		};
	});

	afterUpdate(() => {
		if (disableHover || isHovered) {
			showMeta = true;
		} else {
			showMeta = false;
		}
	});

	let metaWidth = 0;
</script>

<div bind:this={imageElem} class="relative flex flex-col overflow-clip" style="padding-top: 66.6%">
	<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-grey-700">
		{#if state === ImageState.Loading}
			<div class="flex flex-col items-center justify-center">
				{#await loadingIcon then icon}
					<svg {...icon.attributes} class="text-grey-100 text-6xl">{@html icon.body}</svg>
				{/await}
			</div>
		{/if}
		{#if state === ImageState.Failed}
			<div class="flex flex-col items-center justify-center w-full h-full">
				<iconify-icon class="text-[#ff0000]/70 text-2xl mb-1" icon="bx:error-alt" />
				<span class="text-[#ff0000]/70 uppercase font-bold leading-tight"
					>Image failed to load</span>
				<span class="leading-none text-grey-300">{src}</span>
			</div>
		{/if}
		{#if state === ImageState.Loaded}
			<div
				on:focus={() => !disableHover && (isHovered = true)}
				on:blur={() => !disableHover && (isHovered = false)}
				on:mouseout={() => !disableHover && (isHovered = false)}
				on:mouseover={() => !disableHover && (isHovered = true)}
				class="h-full w-full cursor-cell vignette"
				transition:fade|local>
				<img class="object-cover block w-full h-full" alt={src} {src} />
				{#if meta && showMeta}
					<div
						bind:offsetWidth={metaWidth}
						transition:fly={{ x: metaWidth, easing: quintOut }}
						class="absolute bottom-0 right-0 px-6 py-4 bg-black-900/80 rounded-tl-lg">
						<h4 class="text-white-200 leading-none mb-4 pr-10">{meta.name}</h4>
						<div
							class="flex text-white-400 text-base leading-tight flex-row items-center justify-between gap-x-8">
							<span>
								<iconify-icon inline icon="carbon:location-filled" class="mr-2" />{meta.location}
							</span>
							<span class="text-sm">
								<iconify-icon inline icon="clarity:date-line" class="mr-2" />{meta.date}
							</span>
						</div>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
