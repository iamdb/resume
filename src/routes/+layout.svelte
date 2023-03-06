<script lang="ts">
	import '@fontsource/abril-fatface';
	import '@fontsource/barlow/500.css';
	import '@fontsource/barlow/700.css';
	import Icon from '@iconify/svelte';
	import { enableCache } from 'iconify-icon';
	import Header from '$lib/components/header.svelte';
	import { loadAllIcons } from '$lib/types/icons';
	import { page } from '$app/stores';
	import { isNavOpen } from '$lib/stores';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { writable } from 'svelte/store';
	import { NavState } from '$lib/types/app';

	const iconsLoaded = writable(false);
	let windowWidth: number;

	onMount(() => {
		enableCache('local');
		loadAllIcons(() => iconsLoaded.set(true));
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
	on:click={() => isNavOpen.set(NavState.Closed)}
	on:keydown={() => isNavOpen.set(NavState.Closed)}
	class:pl-40={windowWidth > 1280 && $page.url.pathname !== '/'}
	class="px-4 pt-20">
	<slot />
	<footer class="flex flex-col mt-24 items-center justify-center pb-12">
		<p class="text-sm leading-none text-grey-500 text-center">&copy; 2023 David Benjamin</p>
		<div class="text-lg flex flex-row gap-x-4">
			<a
				class="hover:bg-lightkhaki p-1 transition-colors rounded"
				href="https://github.com/iamdb"
				target="_blank"
				rel="noreferrer noopener">
				<Icon icon="simple-icons:github" />
			</a>
			<a
				class="hover:bg-lightkhaki p-1 transition-colors rounded"
				target="_blank"
				rel="me noopener noreferrer"
				href="https://hachyderm.io/@db">
				<Icon icon="simple-icons:mastodon" />
			</a>
			<a
				class="hover:bg-lightkhaki p-1 transition-colors rounded"
				href="https://www.linkedin.com/in/davidabenjamin"
				target="_blank"
				rel="noreferrer noopener">
				<Icon icon="simple-icons:linkedin" />
			</a>
		</div>
	</footer>
</div>

<Header />
