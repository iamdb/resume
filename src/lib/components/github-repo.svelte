<script lang="ts">
	import type { Icon as IconType } from '$lib/types/icons';
	import Icon from '@iconify/svelte';

	export let icons: IconType[];
	export let name: string;
	export let url: string;
	export let description: string;
</script>

<a
	href={url}
	class="flex flex-col py-4 px-6 h-full no-underline rounded-xl transition-all group text-darkgrey/90 justify-top bg-lightkhaki underline-offset-2 hover:bg-lightkhaki/80"
	target="_blank"
	rel="noreferrer">
	<h2
		class="mb-4 text-2xl font-bold leading-none underline transition-all cursor-pointer decoration-dotted underline-offset-2 group-hover:underline-offset-4">
		{name}
	</h2>
	<span class="flex-grow mb-0 lg:mb-8">{description}</span>
	<span class="hidden lg:inline">
		<span class="text-xs leading-none"> LANGUAGES </span>
		<span
			class:justify-between={icons.length >= 3}
			class="flex flex-row flex-wrap gap-x-1 p-2 rounded-lg bg-blue">
			{#each icons.slice(0, 4) as icon}
				<Icon class="text-4xl text-lightkhaki" {icon} />
			{/each}
		</span>
	</span>
</a>
