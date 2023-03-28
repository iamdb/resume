<script lang="ts">
	import type { Show } from './+page';
	import { forceSingleColumnPhotos } from '$lib/stores';
	import ConcertPhoto from '$lib/components/concert-photo.svelte';
	import PageHead from '$lib/components/page-head.svelte';
	import PageTitle from '$lib/components/page-title.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import NavLink from '$lib/components/nav-link.svelte';

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
<Navigation let:drawer>
	<div class="flex flex-row gap-x-4">
		{#if windowWidth > 1024}
			{#if !$forceSingleColumnPhotos}
				<NavLink {drawer} icon="tabler:columns-1" on:click={() => forceSingleColumnPhotos.set(true)}
					>one column</NavLink>
			{:else}
				<NavLink
					{drawer}
					icon="tabler:columns-2"
					on:click={() => forceSingleColumnPhotos.set(false)}>two column</NavLink>
			{/if}
		{/if}

		{#if scrollY > 100}
			<NavLink
				{drawer}
				icon="mdi:arrow-up-circle"
				on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>back to top</NavLink>
		{/if}
	</div>
</Navigation>

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
	class="grid relative grid-cols-1 gap-14 place-items-center mt-12">
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
