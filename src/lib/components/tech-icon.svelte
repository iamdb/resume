<script lang="ts">
	export let icon: string;
	export let name: string | undefined = undefined;
	export let color: string | undefined = undefined;
</script>

<div class="flex flex-row items-center">
	<iconify-icon style:color class="text-4xl" {icon} />
	{#if name}
		<span class="mx-4 text-2xl font-bold cursor-default">{name}</span>
	{/if}
</div>
