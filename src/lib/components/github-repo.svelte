<script lang="ts">
	import Color from 'color';
	import type { Icon } from '$lib/types/icons';
	import { writable } from 'svelte/store';

	export let icons: Icon[];
	export let name: string;
	export let url: string;
	export let description: string;
	export let color: string | undefined;

	let hovered = writable(false);

	const cardColor = new Color(color || '#eeeeee');
	const backgroundColor = cardColor.fade(0.25).darken(0.6);
	const textColor = cardColor.lighten(0.2);

	const setHovered = (isHovered: boolean) => {
		hovered.set(isHovered);
	};
</script>

<a
	href={url}
	style:background-color={$hovered ? backgroundColor.lighten(0.5).hex() : backgroundColor.hex()}
	class="flex h-full flex-col justify-between px-6 py-4 no-underline rounded-lg underline-offset-2"
	target="_blank"
	rel="noreferrer"
	on:mouseover={() => setHovered(true)}
	on:mouseout={() => setHovered(false)}
	on:focus={() => setHovered(true)}
	on:blur={() => setHovered(false)}>
	<div style:color={textColor.hex()}>
		<h4 class="cursor-pointer leading-none mb-4 text-2xl font-bold underline">{name}</h4>
		<p>{description}</p>
	</div>
	<div>
		<span class="leading-none text-xs" style:color={backgroundColor.lighten(0.25).hex()}>
			LANGUAGES
		</span>
		<div
			style:background-color={backgroundColor.lighten(0.25).hex()}
			class="flex flex-row flex-wrap gap-x-2 p-2 rounded shadow-nner">
			{#each icons as icon}
				<iconify-icon style:color={cardColor.toString()} class="text-4xl text-grey-800" {icon} />
			{/each}
		</div>
	</div>
</a>
