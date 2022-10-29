<script lang="ts">
	import 'iconify-icon';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Image from './image.svelte';

	interface ImageMeta {
		location: string;
		date: string;
		name: string;
	}

	export let meta: ImageMeta;
	export let src: string;
	export let disableHover = false;
	export let showImage = false;

	let isHovered = false;

	let metaWidth = 0;
</script>

<div
	data-photo-src={src}
	on:focus={() => !disableHover && (isHovered = true)}
	on:blur={() => !disableHover && (isHovered = false)}
	on:mouseout={() => !disableHover && (isHovered = false)}
	on:mouseover={() => !disableHover && (isHovered = true)}
	class="concert-photo relative bg-grey-800 transition-opacity duration-300 flex flex-col overflow-hidden"
	style="padding-top: 66.6%">
	<div class="absolute top-0 left-0 w-full h-full">
		{#if showImage}
			<Image alt={src} {src} />
			{#if meta && (isHovered || disableHover)}
				<div
					bind:offsetWidth={metaWidth}
					transition:fly|local={{ x: metaWidth, easing: quintOut }}
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
		{/if}
	</div>
</div>
