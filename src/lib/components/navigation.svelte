<script>
	import { writable } from 'svelte/store';
	import NavigationLink from './navigation-link.svelte';
	import { beforeNavigate } from '$app/navigation';

	let windowWidth = 0;

	const isOpen = writable(false);
	$: isDesktop = windowWidth >= 768;

	const toggleMenu = () => {
		if (isDesktop) {
			return;
		}

		if ($isOpen) {
			isOpen.set(false);
		} else {
			isOpen.set(true);
		}
	};

	beforeNavigate(() => {
		if ($isOpen) {
			isOpen.set(false);
		}
	});

	const onWindowResize = () => {
		if ($isOpen) {
			isOpen.set(false);
		}
	};
</script>

<svelte:window bind:innerWidth={windowWidth} on:resize={onWindowResize} />

<nav
	class="flex-col bg-khaki max-h-16 md:flex-row flex sticky top-0 z-10 md:justify-between md:items-center">
	<svelte:element
		this={isDesktop ? 'a' : 'button'}
		href={isDesktop ? '/' : null}
		on:click={toggleMenu}
		class="uppercase relative h-16 aspect-square p-1 z-10 md:mr-2 md:self-stretch transition-colors bg-lightkhaki md:bg-perry text-darkgrey text-center flex items-center justify-center text-2xl font-bold">
		<span
			class="bg-khaki leading-none h-full px-3 md:w-full md:h-full border-2 border-darkgrey md:border-powder flex items-center justify-center"
			>DB</span>
	</svelte:element>
	<div
		class:translate-y-full={$isOpen}
		class="absolute transition-transform flex flex-col md:flex-row md:items-center justify-center z-0 bottom-0 bg-khaki border-b-8 md:border-none border-lightkhaki left-0 w-full md:relative">
		<span class="md:hidden">
			<NavigationLink href="/">Home</NavigationLink>
		</span>
		<NavigationLink href="/about">About</NavigationLink>
		<NavigationLink href="/resume">Resume</NavigationLink>
		<NavigationLink href="/photos">Photography</NavigationLink>
		<NavigationLink href="/brain-droppings">Brain Droppings</NavigationLink>
	</div>
</nav>
