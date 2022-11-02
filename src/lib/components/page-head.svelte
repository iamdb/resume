<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<svelte:head>
	{#if title}
		<title>{title} | David Benjamin</title>
	{:else}
		<title>David Benjamin</title>
	{/if}
</svelte:head>
