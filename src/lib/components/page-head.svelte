<script lang="ts">
	import { page } from '$app/stores';
	export let title: string | undefined = undefined;
</script>

<svelte:head>
	{#if title}
		<title>{title} | David Benjamin</title>
		<meta property="og:title" content={`${title} | David Benjamin`} />
	{:else}
		<title>David Benjamin</title>
		<meta property="og:title" content="David Benjamin" />
	{/if}

	<meta property="og:url" content={$page?.url.toString()} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="I am a software engineer with over a decade of experience building dependable software." />
	<meta property="og:image" content="https://www.iamdb.co/photos/ca_sunset_cropped.jpg" />
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta
		property="twitter:description"
		content="I am a software engineer with over a decade of experience building dependable software." />
	<meta property="twitter:image" content="https://www.iamdb.co/photos/ca_sunset_cropped.jpg" />
</svelte:head>
