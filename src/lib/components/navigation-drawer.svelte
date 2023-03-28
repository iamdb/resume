<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { isNavOpen } from '$lib/stores';
	import { NavState } from '$lib/types/app';
	import type { Snapshot } from '@sveltejs/kit';
	import NavLink from './nav-link.svelte';
	import { onDestroy } from 'svelte';

	const toggleNav = () => {
		if ($isNavOpen === NavState.Open) {
			isNavOpen.set(NavState.Closed);
		} else {
			isNavOpen.set(NavState.Open);
		}
	};

	$: handleOffset = 0;

	export const handleOffsetSnapshot: Snapshot = {
		capture: () => handleOffset,
		restore: (value) => (handleOffset = value)
	};

	onDestroy(() => isNavOpen.set(NavState.Closed));
</script>

<nav
	class:translate-x-full={$isNavOpen === NavState.Open}
	class="flex fixed top-0 right-full z-10 flex-col justify-start w-36 transition-transform cursor-default lg:hidden">
	<slot drawer={true} />
	<NavLink drawer icon="mdi:close-circle" on:click={toggleNav} on:keydown={toggleNav}
		>close</NavLink>
</nav>

{#if $isNavOpen !== NavState.Open}
	<button
		bind:offsetWidth={handleOffset}
		transition:fly={{ x: -handleOffset, y: 0 }}
		on:click={toggleNav}
		on:keydown={toggleNav}
		class="fixed top-0 left-0 z-10 rounded-br-lg border-r-2 border-b-2 transition-colors text-lightgrey border-perry bg-powder hover:bg-lightgrey hover:border-darkgrey hover:text-lightkhaki">
		<Icon width="100%" height="100%" class="block p-2 w-16 h-16" icon="mdi:hamburger" />
	</button>
{/if}
