<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly, scale } from 'svelte/transition';
	import { beforeNavigate, goto } from '$app/navigation';
	import { navigating, page } from '$app/stores';
	import { forceSingleColumnPhotos, isNavOpen } from '$lib/stores';
	import { NavState } from '$lib/types/app';
	import type { Snapshot } from '@sveltejs/kit';
	import NavLink from './nav-link.svelte';
	import { elasticOut, quadOut } from 'svelte/easing';

	let handle: HTMLElement | undefined, windowWidth: number, scrollY: number;

	const toggleNav = () => {
		if ($isNavOpen === NavState.Open) {
			isNavOpen.set(NavState.Closed);
		} else {
			isNavOpen.set(NavState.Open);
		}
	};

	const navigate = (url: string) => {
		if ($isNavOpen) {
			isNavOpen.set(NavState.ClosedNoHandle);
		}
		setTimeout(async () => {
			goto(url);
		}, 150);
	};

	beforeNavigate(() => {
		isNavOpen.set(NavState.Closed);
	});

	export const isNavOpenSnapshot: Snapshot = {
		capture: () => $isNavOpen,
		restore: (value) => isNavOpen.set(value)
	};
</script>

<svelte:window bind:innerWidth={windowWidth} bind:scrollY />

{#if $page.url.pathname !== '/'}
	<nav
		id="navigation"
		class:translate-x-full={$isNavOpen === NavState.Open || windowWidth > 1280}
		class="fixed bg-khaki flex top-0 right-full flex-col cursor-default h-screen transition-transform w-36 justify-start">
		<span
			class="font-serif bg-darkgrey/90 py-8 border-2 border-blue/50 text-6xl text-center text-lightblue"
			>db</span>
		<NavLink icon="mdi:home-circle" on:click={() => navigate('/')}>home</NavLink>
		{#if $page.url.pathname == '/resume'}
			<NavLink icon="mdi:download-circle" on:click={() => navigate('/resume.pdf')}>pdf</NavLink>
		{/if}
		{#if $page.url.pathname == '/photos'}
			{#if !$forceSingleColumnPhotos}
				<span in:scale={{ duration: 150, easing: quadOut }}>
					<NavLink icon="tabler:columns-1" on:click={() => forceSingleColumnPhotos.set(true)}
						>one column</NavLink>
				</span>
			{:else}
				<span in:scale={{ duration: 150, easing: quadOut }}>
					<NavLink icon="tabler:columns-2" on:click={() => forceSingleColumnPhotos.set(false)}
						>two column</NavLink>
				</span>
			{/if}

			{#if windowWidth >= 1024 && scrollY > 100}
				<span transition:scale={{ duration: 150, easing: quadOut }}>
					<NavLink
						icon="mdi:arrow-up-circle"
						on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>back to top</NavLink>
				</span>
			{/if}
		{/if}
		{#if windowWidth <= 1280}
			<NavLink icon="mdi:close-circle" on:click={toggleNav} on:keydown={toggleNav}>close</NavLink>
		{/if}
	</nav>

	{#if !$navigating && $isNavOpen !== NavState.Open && windowWidth <= 1280}
		<button
			bind:this={handle}
			transition:fly={{ x: -handle.offsetWidth }}
			on:click={toggleNav}
			on:keydown={toggleNav}
			class="text-blue border-r-2 border-b-2 border-blue/50 bg-lightkhaki fixed top-0 left-0 rounded-br-lg hover:bg-blue hover:text-lightkhaki transition-colors">
			<Icon width="100%" height="100%" class="w-16 h-16 block p-2" icon="mdi:hamburger" />
		</button>
	{/if}
{/if}
