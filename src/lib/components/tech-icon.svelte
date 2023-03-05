<script lang="ts">
	import type { Icon } from '$lib/types/icons';

	export let icon: Icon;
	export let name: string | undefined = undefined;
	export let reverse = false;
	export let color = 'text-lightkhaki';
</script>

<div class:flex-row-reverse={reverse} class="flex flex-row justify-between items-center gap-1">
	<div class={`flex items-center justify-center w-6 md:w-4 lg:w-8 aspect-square ${color}`}>
		<iconify-icon width="100%" {icon} />
	</div>
	{#if name}
		<span
			class:ml-4={!reverse}
			class:mr-4={reverse}
			class="text-lg font-sans leading-none cursor-default hidden md:block">{name}</span>
	{/if}
</div>
