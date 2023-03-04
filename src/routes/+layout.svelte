<script>
	import '@fontsource/abril-fatface';
	import '@fontsource/barlow/500.css';
	import '@fontsource/barlow/700.css';
	import 'iconify-icon';
	import { enableCache } from 'iconify-icon';
	import { page } from '$app/stores';
	import Header from '$lib/components/header.svelte';
	import { loadAllIcons } from '$lib/types/icons';
	import { onMount } from 'svelte';
	import '../app.postcss';

	onMount(() => {
		enableCache('local');
		loadAllIcons();
	});

	$: isHome = $page.url.pathname === '/';
</script>

<div
	class:lg:pl-28={!isHome}
	class:lg:pr-8={!isHome}
	class:pl-16={!isHome}
	class:pr-4={!isHome}
	class="py-4 font-medium">
	<slot />
	<footer class="flex flex-col mt-24 items-center justify-center pb-12">
		<p class="text-sm leading-none text-grey-500 text-center">&copy; 2023 David Benjamin</p>
		<div class="text-lg flex flex-row gap-x-4">
			<a href="https://github.com/iamdb" target="_blank" rel="noreferrer noopener">
				<iconify-icon icon="simple-icons:github" />
			</a>
			<a target="_blank" rel="me noopener noreferrer" href="https://hachyderm.io/@db">
				<iconify-icon icon="simple-icons:mastodon" />
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

{#if !isHome}
	<Header />
{/if}
