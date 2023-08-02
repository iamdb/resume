<script lang="ts">
	import NavLink from './nav-link.svelte';
	import NavigationDrawer from './navigation-drawer.svelte';
	import HeaderNav from './header-nav.svelte';

	$: windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:component this={windowWidth <= 1024 ? NavigationDrawer : HeaderNav} let:drawer>
	<NavLink {drawer} icon="mdi:home-circle" href="/">home</NavLink>
	<slot {drawer} />
</svelte:component>
