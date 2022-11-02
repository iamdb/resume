<script type="ts">
	import { onMount } from 'svelte';
	import 'iconify-icon';
	import type { Show } from './+page';
	import ConcertPhoto from '$lib/components/concert-photo.svelte';
	import PageHead from '$lib/components/page-head.svelte';

	export let data: {
		shows: Show[];
		intro: string;
		title: string;
	};

	let visiblePhotos = new Set();

	const loadImage = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				visiblePhotos.add(entry.target.getAttribute('data-photo-src'));
				visiblePhotos = visiblePhotos;
			} else {
				visiblePhotos.delete(entry.target.getAttribute('data-photo-src'));
				visiblePhotos = visiblePhotos;
			}
		});
	};

	let options = {
		threshold: 0.05
	};

	let photoContainer: HTMLDivElement | undefined;

	onMount(() => {
		const observer = new IntersectionObserver(loadImage, options);
		const photos = photoContainer?.querySelectorAll('.concert-photo');

		photos?.forEach((p) => {
			observer.observe(p);
		});

		return () => {
			photos?.forEach((p) => {
				observer.unobserve(p);
			});
		};
	});
</script>

<PageHead title={data.title} />
<h1 class="leading-tight mb-4 underline underline-offset-2">{data.title}</h1>

{@html data.intro}

<div bind:this={photoContainer} class="relative grid grid-cols-1 lg:grid-cols-2 gap-14 mt-12">
	{#each data.shows as show}
		{#if show.photos}
			{@const photos = show.photos}
			{#each photos as photo}
				{@const photoUrl = `/photos/music/${photo}`}
				{@const showImage = visiblePhotos.has(photoUrl)}
				<ConcertPhoto
					src={photoUrl}
					{showImage}
					meta={{
						name: show.artist,
						location: show.location,
						date: show.date.toLocaleDateString()
					}} />
			{/each}
		{/if}
	{/each}
</div>
