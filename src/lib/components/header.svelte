<script lang="ts">
	import { page } from '$app/stores';
	import NavLink from './nav-link.svelte';
</script>

<nav
	class="fixed flex top-0 left-0 flex-col gap-y-8 h-screen w-16 lg:w-28 p-4 items-center justify-start">
	<NavLink icon="fluent:arrow-step-back-20-filled" href="/">back</NavLink>
	{#if $page.url.pathname == '/resume'}
		<NavLink icon="bx:cloud-download" href="/resume.pdf">pdf</NavLink>
	{/if}
</nav>
