<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import PageTitle from '$lib/components/page-title.svelte';
</script>

<PageHead title="About Me" />

<div class="md-text max-w-screen-lg mx-auto">
	<PageTitle>About Me</PageTitle>
	<div class="mt-12 bg-lightkhaki py-4 px-6 rounded-lg md-text">
		<slot />
	</div>
</div>
