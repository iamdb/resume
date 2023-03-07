<script lang="ts">
	import '@fontsource/abril-fatface';
	import '@fontsource/barlow/500.css';
	import '@fontsource/barlow/700.css';
	import Navigation from '$lib/components/navigation.svelte';
	import { page } from '$app/stores';
	import { isNavOpen } from '$lib/stores';
	import '../app.postcss';
	import { NavState } from '$lib/types/app';
	import type { Snapshot } from '@sveltejs/kit';
	import IconGithub from 'virtual:icons/simple-icons/github';
	import IconMastodon from 'virtual:icons/simple-icons/mastodon';
	import IconLinkedIn from 'virtual:icons/simple-icons/linkedin';

	let windowWidth: number;

	export const isNavOpenSnapshot: Snapshot = {
		capture: () => $isNavOpen,
		restore: (value) => isNavOpen.set(value)
	};
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
	on:click={() => isNavOpen.set(NavState.Closed)}
	on:keydown={() => isNavOpen.set(NavState.Closed)}
	class:pr-40={windowWidth > 1280 && $page.url.pathname === '/'}
	class="px-4 pt-20 xl:pl-40">
	<slot />
	<footer class="flex flex-col mt-24 items-center justify-center pb-12">
		<p class="text-sm leading-none text-grey-500 text-center">&copy; 2023 David Benjamin</p>
		<div class="flex flex-row gap-x-4">
			<a
				aria-label="A link to my Github profile."
				class="hover:bg-lightkhaki p-1 transition-colors rounded"
				href="https://github.com/iamdb"
				target="_blank"
				rel="noreferrer noopener">
				<IconGithub />
			</a>
			<a
				aria-label="A link to my Mastodon profile."
				class="hover:bg-lightkhaki p-1 transition-colors rounded"
				target="_blank"
				rel="me noopener noreferrer"
				href="https://hachyderm.io/@db">
				<IconMastodon />
			</a>
			<a
				aria-label="A link to my LinkedIn profile."
				class="hover:bg-lightkhaki p-1 transition-colors rounded"
				href="https://www.linkedin.com/in/davidabenjamin"
				target="_blank"
				rel="noreferrer noopener">
				<IconLinkedIn />
			</a>
		</div>
	</footer>
</div>

<Navigation />
