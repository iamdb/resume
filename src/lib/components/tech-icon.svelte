<script lang="ts">
	import type { Icon as IconType } from '$lib/types/icons';
	import Icon from '@iconify/svelte';

	export let icon: IconType;
	export let name: string | undefined = undefined;
	export let reverse = false;
	export let color = 'text-lightkhaki';
</script>

<div class:flex-row-reverse={reverse} class="flex flex-row gap-1 justify-between items-center">
	<div class={`flex items-center justify-center w-6 md:w-4 lg:w-8 aspect-square ${color}`}>
		<Icon width="100%" {icon} />
	</div>
	{#if name}
		<span
			class:ml-4={!reverse}
			class:mr-4={reverse}
			class="hidden font-sans text-lg leading-none cursor-default md:block">{name}</span>
	{/if}
</div>
