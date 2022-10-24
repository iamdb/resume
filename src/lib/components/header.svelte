<script>
	import 'iconify-icon';
	import { page } from '$app/stores';

	import NavLink from './nav-link.svelte';
</script>

{#if $page.url.pathname !== '/'}
	<header class="mb-12">
		<nav class="text-4xl font-bold text-right underline-offset-2">
			<button class="btn" on:click={() => window.history.back()}>back</button>
		</nav>
	</header>
{/if}
