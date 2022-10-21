<script lang="ts">
	export let icon: string;
	export let name: string | undefined = undefined;
	export let color: string | undefined = undefined;
</script>

<div class="flex flex-row justify-start items-center">
	<div class="aspect-square w-8">
		<iconify-icon style:color width="100%" {icon} />
	</div>
	{#if name}
		<span class="mx-4 text-2xl leading-none font-bold cursor-default">{name}</span>
	{/if}
</div>
