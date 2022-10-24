<script lang="ts">
	import type { Icon } from '$lib/types/icons';

	export let icon: Icon;
	export let name: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let reverse = false;
</script>

<div class:flex-row-reverse={reverse} class="flex flex-row justify-between items-center gap-1">
	<iconify-icon mode="style" style:color class="text-4xl" {icon} />
	{#if name}
		<span
			class:ml-4={!reverse}
			class:mr-4={reverse}
			class="text-2xl leading-none font-bold cursor-default">{name}</span
		>
	{/if}
</div>
