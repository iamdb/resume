<script lang="ts">
	export let icon: string;
	export let name: string | undefined = undefined;
</script>

<div class="flex flex-row items-center">
	<iconify-icon class="text-4xl fill-grey-400" {icon} />
	{#if name}
		<span class="mx-4 text-2xl font-bold">{name}</span>
	{/if}
</div>
