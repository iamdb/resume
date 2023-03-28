<script lang="ts">
	import Image from './image.svelte';
	import IconLocation from 'virtual:icons/carbon/location-filled';
	import IconDate from 'virtual:icons/clarity/date-line';

	interface ImageMeta {
		location: string;
		date: string;
		name: string;
	}

	export let meta: ImageMeta;
	export let src: string;

	$: altString = `A photo of ${meta.name} at ${meta.location} on ${meta.date}`;
</script>

<div
	class="flex overflow-hidden relative flex-col w-full max-w-screen-lg transition-opacity duration-300 concert-photo">
	<div class="relative bg-darkgrey" style="padding-bottom: 66.7%;">
		<div class="absolute top-0 left-0 w-full h-full">
			<Image alt={altString} {src} />
		</div>
	</div>
	<div class="flex flex-row flex-wrap gap-y-1 justify-between items-center mt-1 leading-tight">
		<span class="flex-grow flex-shrink-0 text-base font-bold">{meta.name}</span>
		<div class="flex flex-row gap-x-2 text-sm">
			<span class="flex flex-row gap-x-1 justify-start items-center">
				<IconLocation class="w-3 md:w-4" />
				{meta.location}
			</span>
			<span>&bull;</span>
			<span class="flex flex-row gap-x-1 justify-start items-center">
				<IconDate class="w-3 md:w-4" />
				{meta.date}
			</span>
		</div>
	</div>
</div>
