<script>
	import 'iconify-icon';
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname !== '/'}
	<header class="sticky h-0 top-4 text-right z-10">
		<span class="translate-x-full inline-block pl-12">
			<a class="btn text-xl font-bold no-underline leading-none" href="/">back</a>
		</span>
	</header>
{/if}
