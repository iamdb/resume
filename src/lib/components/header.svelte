<script lang="ts">
	import 'iconify-icon';
	import { page } from '$app/stores';
	import { disableHover } from '$lib/stores';
	import NavLink from './nav-link.svelte';
	import { LinkType } from '$lib/types/app';

	export let isOpen = false;

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	let scrollPos: number;
</script>

<svelte:window bind:scrollY={scrollPos} />

<nav
	class="relative flex flex-col gap-y-24 p-8 h-screen w-[75vw] md:w-[25vw] bg-blue-900 items-stretch justify-evenly">
	<NavLink icon="fluent:arrow-step-back-20-filled" href="/">back</NavLink>
	{#if $page.url.pathname === '/photos'}
		<NavLink
			icon={$disableHover ? 'bi:eye-slash-fill' : 'bi:eye-fill'}
			type={LinkType.Button}
			on:click={() => {
				if ($disableHover) {
					disableHover.set(false);
				} else {
					disableHover.set(true);
				}
			}}>
			{$disableHover ? 'hide all' : 'show all'}
		</NavLink>
	{/if}
	{#if scrollPos > 200}
		<NavLink icon="bxs:to-top" type={LinkType.Button} on:click={scrollToTop}>top</NavLink>
	{/if}
	<button
		class="absolute aspect-square top-2 right-full bg-blue-900 rounded-tl-lg rounded-bl-lg p-4"
		on:click>
		<iconify-icon class="text-4xl" icon={isOpen ? 'carbon:close-filled' : 'fe:app-menu'} />
	</button>
</nav>
