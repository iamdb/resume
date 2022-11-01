<script>
	import 'iconify-icon';
	import { enableCache } from 'iconify-icon';
	import { page } from '$app/stores';
	import Header from '$lib/components/header.svelte';
	import { loadAllIcons } from '$lib/types/icons';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { beforeNavigate } from '$app/navigation';

	onMount(() => {
		enableCache('local');
		loadAllIcons();
	});

	let isOpen = false;

	const toggleOpen = () => {
		if (isOpen) {
			isOpen = false;
		} else {
			isOpen = true;
		}
	};

	let scrollPos = 0;
	let innerWidth = 0;

	beforeNavigate(() => {
		if (isOpen) {
			isOpen = false;
		}
	});

	$: isHome = $page.url.pathname === '/';
	$: isMobile = innerWidth <= 640;
</script>

<svelte:window bind:innerWidth bind:scrollY={scrollPos} />

<div
	class:translate-0={!isOpen}
	class:-translate-x-[75%]={isOpen && isMobile}
	class="transition-all w-screen overflow-hidden relative">
	<div class="container mx-auto py-4 px-2 md:px-8 relative">
		<slot />
		<footer class="container flex flex-col mt-24 items-center justify-center pb-12">
			<p class="text-sm leading-none text-grey-500 text-center">&copy; 2022 David Benjamin</p>
			<div class="text-lg flex flex-row gap-x-4">
				<a href="https://github.com/iamdb" target="_blank" rel="noreferrer noopener">
					<iconify-icon icon="simple-icons:github" />
				</a>
				<a
					href="https://www.linkedin.com/in/davidabenjamin"
					target="_blank"
					rel="noreferrer noopener">
					<iconify-icon icon="simple-icons:linkedin" />
				</a>
			</div>
		</footer>
	</div>
</div>
{#if !isHome}
	<div
		class:translate-0={!isOpen}
		class:-translate-x-[75%]={isOpen && isMobile}
		class:-translate-x-[25%]={isOpen && !isMobile}
		class="transition-all fixed left-full z-10 top-0 h-screen w-screen md:25%">
		<Header {isOpen} on:click={toggleOpen} />
	</div>
{/if}
