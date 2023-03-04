<script lang="ts">
	import type { Icon } from '$lib/types/icons';

	export let icons: Icon[];
	export let name: string;
	export let url: string;
	export let description: string;
</script>

<a
	href={url}
	class="flex h-full flex-col justify-top px-6 py-4 bg-blue no-underline rounded-xl underline-offset-2 hover:bg-lightblue transition-all"
	target="_blank"
	rel="noreferrer">
	<h4
		class="text-lightkhaki cursor-pointer leading-none mb-4 text-2xl font-bold underline decoration-dotted">
		{name}
	</h4>
	<span class="text-lightkhaki flex-grow mb-0 lg:mb-8">{description}</span>
	<span class="hidden lg:inline">
		<span class="leading-none text-xs text-lightkhaki"> LANGUAGES </span>
		<span
			class:justify-between={icons.length >= 3}
			class="flex flex-row flex-wrap gap-x-1 p-2 bg-darkblue rounded-lg">
			{#each icons.slice(0, 4) as icon}
				<iconify-icon class="text-4xl text-lightkhaki" {icon} />
			{/each}
		</span>
	</span>
</a>
