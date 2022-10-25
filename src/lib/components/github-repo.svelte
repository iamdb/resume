<script type="ts">
	import Color from 'color';
	import type { Icon } from '$lib/types/icons';

	export let icons: Icon[];
	export let name: string;
	export let url: string;
	export let description: string;
	export let color: string | undefined;

	const cardColor = new Color(color || '#eeeeee');
	const backgroundColor = cardColor.fade(0.25).darken(0.6).toString();
	const textColor = cardColor.lighten(0.2).toString();
</script>

<a
	href={url}
	style={color ? `background-color: ${backgroundColor};` : ''}
	class="flex flex-col justify-between px-8 py-4 w-1/4 no-underline rounded underline-offset-2 aspect-square"
	target="_blank"
	rel="noreferrer"
>
	<div style={color ? `color: ${textColor}` : ''}>
		<h4 class="cursor-pointer mb-4 text-2xl font-bold underline">{name}</h4>
		<p>{description}</p>
	</div>
	<div>
		{#each icons as icon}
			<iconify-icon
				style={color ? `color: ${cardColor.toString()}` : ''}
				class="text-4xl text-grey-800"
				{icon}
			/>
		{/each}
	</div>
</a>
