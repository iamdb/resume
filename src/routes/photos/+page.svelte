<script lang="ts">
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

	$: scrollY = 0;
	$: windowWidth = 0;
</script>

<svelte:window bind:scrollY bind:innerWidth={windowWidth} />

<PageHead title={data.title} />

<div class="mx-auto mt-12 max-w-screen-lg">
	<PageTitle>{data.title}</PageTitle>
	<div class="mt-12 mdx">
		<div class="content">
			{@html data.intro}
		</div>
	</div>
</div>

<div
	class:lg:grid-cols-2={!$forceSingleColumnPhotos}
	class:xl:px-24={$forceSingleColumnPhotos}
	class="grid lg:px-14 relative grid-cols-1 gap-14 place-items-center mt-12">
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
