<script lang="ts">
	import { onMount } from 'svelte';
	import type { Show } from './+page';
	import { forceSingleColumnPhotos } from '$lib/stores';
	import ConcertPhoto from '$lib/components/concert-photo.svelte';
	import PageHead from '$lib/components/page-head.svelte';
	import PageTitle from '$lib/components/page-title.svelte';

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

<div class="mx-auto max-w-screen-lg">
	<PageTitle>{data.title}</PageTitle>
	<div class="mt-12 bg-lightkhaki py-4 px-6 rounded-lg md-text">
		{@html data.intro}
	</div>
</div>

<div
	bind:this={photoContainer}
	class:lg:grid-cols-2={!$forceSingleColumnPhotos}
	class:xl:px-24={$forceSingleColumnPhotos}
	class="relative grid grid-cols-1 place-items-center gap-14 mt-12">
	{#each data.shows as show}
		{#if show.photos}
			{@const photos = show.photos}
			{#each photos as photo}
				{@const photoUrl = `/photos/music/${photo}`}
				<ConcertPhoto
					src={photoUrl}
					meta={{
						name: show.artist,
						location: show.location,
						date: show.date.toLocaleDateString()
					}} />
			{/each}
		{/if}
	{/each}
</div>
