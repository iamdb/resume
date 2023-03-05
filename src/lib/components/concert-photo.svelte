<script lang="ts">
	import Image from './image.svelte';

	interface ImageMeta {
		location: string;
		date: string;
		name: string;
	}

	export let meta: ImageMeta;
	export let src: string;

	$: altString = `A photo of ${meta.name} at ${meta.location} on ${meta.date}`;
</script>

<div class="concert-photo relative transition-opacity duration-300 flex flex-col overflow-hidden">
	<div class="bg-darkgrey relative" style="padding-bottom: 66%;">
		<div class="absolute top-0 left-0 w-full h-full">
			<Image alt={altString} {src} />
		</div>
	</div>
	<div class="mt-1 flex flex-wrap gap-y-1 leading-tight flex-row items-center justify-between">
		<span class="font-bold text-md flex-grow flex-shrink-0">{meta.name}</span>
		<div class="flex text-sm flex-row gap-x-1">
			<span class="flex flex-row items-center justify-start gap-x-1">
				<iconify-icon icon="carbon:location-filled" />
				{meta.location}
			</span>
			<span>&bull;</span>
			<span class="flex flex-row items-center justify-start gap-x-1">
				<iconify-icon icon="clarity:date-line" />
				{meta.date}
			</span>
		</div>
	</div>
</div>
