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
	class="group flex h-full text-darkgrey/90 flex-col justify-top px-6 py-4 bg-lightkhaki no-underline rounded-xl underline-offset-2 hover:bg-lightkhaki/80 transition-all"
	target="_blank"
	rel="noreferrer">
	<h2
		class="group-hover:underline-offset-4 transition-all cursor-pointer leading-none mb-4 text-2xl font-bold underline decoration-dotted underline-offset-2">
		{name}
	</h2>
	<span class="flex-grow mb-0 lg:mb-8">{description}</span>
	<span class="hidden lg:inline">
		<span class="leading-none text-xs"> LANGUAGES </span>
		<span
			class:justify-between={icons.length >= 3}
			class="flex flex-row flex-wrap gap-x-1 p-2 bg-blue rounded-lg">
			{#each icons.slice(0, 4) as icon}
				<Icon class="text-4xl text-lightkhaki" {icon} />
			{/each}
		</span>
	</span>
</a>
