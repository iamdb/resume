<script type="ts">
	import 'iconify-icon';
	import { LinkType } from '$lib/types/app';

	export let type: LinkType = LinkType.Anchor;
	export let href: string | undefined = undefined;
	export let mini = false;
	export let icon: string | undefined = undefined;
</script>

<svelte:element
	this={type}
	class="aspect-square flex flex-col gap-y-2 items-center justify-center text-lg hover:bg-blue-800 rounded no-underline transition-colors hover:text-white-300 leading-none text-white-300 font-bold cursor-pointer"
	on:click
	{href}>
	{#if icon}
		<iconify-icon class="text-4xl" {icon} />
	{/if}
	{#if !mini}
		<span><slot /></span>
	{/if}
</svelte:element>
