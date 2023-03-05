<script lang="ts">
	import { fly } from 'svelte/transition';
	import { beforeNavigate, goto } from '$app/navigation';
	import { navigating, page } from '$app/stores';
	import { isNavOpen } from '$lib/stores';
	import { NavState } from '$lib/types/app';
	import type { Snapshot } from '@sveltejs/kit';
	import NavLink from './nav-link.svelte';

	let handle: HTMLElement | undefined, windowWidth: number;

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

<svelte:window bind:innerWidth={windowWidth} />

{#if $page.url.pathname !== '/'}
	<nav
		id="navigation"
		class:translate-x-full={$isNavOpen === NavState.Open || windowWidth > 1280}
		class="fixed flex top-0 right-full flex-col border-r-2 border-lightkhaki h-screen transition-transform gap-y-8 w-36 px-1 pt-8 bg-lightkhaki justify-start">
		<NavLink icon="mdi:home-circle" on:click={() => navigate('/')}>home</NavLink>
		{#if $page.url.pathname == '/resume'}
			<NavLink icon="mdi:download-circle" on:click={() => navigate('/resume.pdf')}>pdf</NavLink>
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
			class="text-blue bg-lightkhaki fixed top-0 left-0 rounded-br-lg hover:bg-blue hover:text-lightkhaki transition-colors">
			<iconify-icon width="100%" height="100%" class="w-16 h-16 block p-2" icon="mdi:hamburger" />
		</button>
	{/if}
{/if}
