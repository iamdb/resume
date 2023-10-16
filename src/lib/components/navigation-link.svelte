<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

	$: active = href !== '/' ? $page.url.pathname.startsWith(href) : href === $page.url.pathname;
</script>

<a
	class:border-perry={active}
	class:bg-powder={active}
	class="uppercase border-2 border-khaki hover:bg-powder whitespace-nowrap flex items-center justify-center transition-colors flex-grow text-center px-6 py-3 text-lg font-bold"
	{href}>
	<slot />
</a>
