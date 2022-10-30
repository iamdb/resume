<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Image from './image.svelte';
	import { disableHover } from '$lib/stores';
	import { getIcon } from 'iconify-icon';

	interface ImageMeta {
		location: string;
		date: string;
		name: string;
	}

	export let meta: ImageMeta;
	export let src: string;
	export let showImage = false;

	let isHovered = false;

	let metaWidth = 0;

	const dateIcon = getIcon('clarity:date-line');
	const locationIcon = getIcon('carbon:location-filled');
</script>

<div
	data-photo-src={src}
	on:focus={() => !$disableHover && (isHovered = true)}
	on:blur={() => !$disableHover && (isHovered = false)}
	on:mouseout={() => !$disableHover && (isHovered = false)}
	on:mouseover={() => !$disableHover && (isHovered = true)}
	class="concert-photo relative bg-grey-800 transition-opacity duration-300 flex flex-col overflow-hidden"
	style="padding-top: 66.6%">
	<div class="absolute top-0 left-0 w-full h-full">
		<Image hideImage={!showImage} alt={src} {src} />
		{#if meta && showImage && ((isHovered && !$disableHover) || (!isHovered && $disableHover))}
			<div
				bind:offsetWidth={metaWidth}
				transition:fly={{ x: metaWidth, easing: quintOut, duration: $disableHover ? 0 : 300 }}
				class="absolute bottom-0 right-0 px-6 py-4 bg-black-900/80 rounded-tl-lg">
				<h4 class="text-white-200 leading-none mb-4 pr-10">{meta.name}</h4>
				<div
					class="flex text-white-400 text-base leading-tight flex-row items-center justify-between gap-x-8">
					<span class="flex flex-row items-center justify-start gap-x-2">
						<svg
							viewBox={`${locationIcon.top} ${locationIcon.left} ${locationIcon.width} ${locationIcon.height}`}
							class="align-middle text-grey-100 w-5">{@html locationIcon.body}</svg>
						{meta.location}
					</span>
					<span class="flex flex-row items-center justify-start gap-x-2 text-sm">
						<svg
							viewBox={`${dateIcon.top} ${dateIcon.left} ${dateIcon.width} ${dateIcon.height}`}
							class="text-grey-100 w-5">{@html dateIcon.body}</svg>
						{meta.date}
					</span>
				</div>
			</div>
		{/if}
	</div>
</div>
