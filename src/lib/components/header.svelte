<script>
	import 'iconify-icon';
	import { page } from '$app/stores';

	import NavLink from './nav-link.svelte';
</script>

{#if $page.url.pathname !== '/'}
	<header class="mb-24">
		<nav
			class="text-4xl font-bold flex flex-row align-center justify-end gap-x-8 underline-offset-2"
		>
			<NavLink pathname="/">Home</NavLink>
			<NavLink pathname="/about">About</NavLink>
			<NavLink pathname="/resume">Resume</NavLink>
			<NavLink pathname="/photos">Photos</NavLink>
		</nav>
	</header>
{/if}
