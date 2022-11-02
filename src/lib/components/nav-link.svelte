<script type="ts">
	import { page } from '$app/stores';
	import { afterUpdate } from 'svelte';

	export let pathname: string;

	let isActive = $page.url.pathname === pathname;

	afterUpdate(() => {
		isActive = $page.url.pathname === pathname;
	});
</script>

<a href={pathname} class:text-white-700={!isActive} class:text-white-400={isActive}>
	<slot />
</a>
