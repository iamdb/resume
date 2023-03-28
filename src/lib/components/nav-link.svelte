<script lang="ts">
	import Icon from '@iconify/svelte';
	import { LinkType } from '$lib/types/app';
	import { fly } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let type: LinkType = LinkType.Anchor;
	export let href: string | undefined = undefined;
	export let drawer = false;
	export let icon: string | undefined = undefined;

	const flyDistance = -100;

	const drawerClasses =
		'flex inset-auto flex-col gap-y-2 justify-center items-center font-medium leading-none no-underline border-r-2 border-b-2 shadow transition-colors cursor-pointer lg:text-lg aspect-square border-lightkhaki/50 bg-perry text-lightgrey hover:bg-lightgrey hover:text-powder';

	const desktopClasses =
		'text-lg shadow px-4 pb-2 pt-1 items-start rounded-br-lg rounded-bl-lg justify-center font-bold bg-powder leading-none  text-lightgrey cursor-pointer';
</script>

<svelte:element
	this={type}
	in:fly={{ duration: 150, easing: quadOut, y: flyDistance }}
	class={drawer ? drawerClasses : desktopClasses}
	on:click
	on:keydown
	on:keyup
	{href}>
	{#if icon}
		<Icon class={`inline align-middle ${drawer ? 'text-3xl' : 'text-2xl'}`} {icon} />
	{/if}
	<span class="align-middle"><slot /></span>
</svelte:element>
