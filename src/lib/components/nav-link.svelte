<script lang="ts">
	import Icon from '@iconify/svelte';
	import { LinkType } from '$lib/types/app';

	export let type: LinkType = LinkType.Anchor;
	export let href: string | undefined = undefined;
	export let mini = false;
	export let icon: string | undefined = undefined;
</script>

<svelte:element
	this={type}
	class="aspect-square shadow inset-auto border-b-2 border-r-2 border-lightkhaki/50 flex flex-col gap-y-2 bg-lightblue/95 text-darkgrey/75 items-center justify-center lg:text-lg hover:bg-lightblue hover:text-white-200 no-underline transition-colors leading-none font-medium cursor-pointer"
	on:click
	on:keydown
	on:keyup
	{href}>
	{#if icon}
		<Icon class="text-3xl" {icon} />
	{/if}
	{#if !mini}
		<span><slot /></span>
	{/if}
</svelte:element>
