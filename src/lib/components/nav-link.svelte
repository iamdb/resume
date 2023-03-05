<script lang="ts">
	import 'iconify-icon';
	import { LinkType } from '$lib/types/app';

	export let type: LinkType = LinkType.Anchor;
	export let href: string | undefined = undefined;
	export let mini = false;
	export let icon: string | undefined = undefined;
</script>

<svelte:element
	this={type}
	class="aspect-square flex flex-col gap-y-2 text-blue items-center justify-center lg:text-lg hover:bg-blue/50 hover:text-darkgrey rounded no-underline transition-colors leading-none font-medium cursor-pointer"
	on:click
	on:keydown
	on:keyup
	{href}>
	{#if icon}
		<iconify-icon class="text-3xl" {icon} />
	{/if}
	{#if !mini}
		<span><slot /></span>
	{/if}
</svelte:element>
