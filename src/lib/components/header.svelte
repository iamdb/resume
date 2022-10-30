<script lang="ts">
	import 'iconify-icon';
	import { page } from '$app/stores';
	import { disableHover } from '$lib/stores';

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	let scrollPos: number;
</script>

<svelte:window bind:scrollY={scrollPos} />

{#if $page.url.pathname !== '/'}
	<header
		class="md:text-xl fixed right-0 top-0 w-1/12 z-10 flex flex-col items-center justify-start gap-y-4">
		<a class="btn font-bold no-underline leading-none" href="/">back</a>
		{#if $page.url.pathname === '/photos'}
			<button
				class="btn text-xl font-bold no-underline leading-none"
				on:click={() => {
					if ($disableHover) {
						disableHover.set(false);
					} else {
						disableHover.set(true);
					}
				}}>
				<!-- <iconify-icon -->
				<!-- 	class="block" -->
				<!-- 	width="100%" -->
				<!-- 	icon={`${disableHover ? 'bi:eye-slash-fill' : 'bi:eye-fill'}`} /> -->
				{$disableHover ? 'hide' : 'show'}
			</button>
		{/if}
		{#if scrollPos > 200}
			<button class="btn font-bold no-underline leading-none" on:click={scrollToTop}>
				<!-- <iconify-icon class="block" width="100%" icon="bxs:to-top" /> -->
				top
			</button>
		{/if}
	</header>
{/if}
