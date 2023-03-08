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
	class="flex inset-auto flex-col gap-y-2 justify-center items-center font-medium leading-none no-underline border-r-2 border-b-2 shadow transition-colors cursor-pointer lg:text-lg aspect-square border-lightkhaki/50 bg-lightblue/95 text-darkgrey/75 hover:bg-lightblue hover:text-white-200"
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
