<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import PageTitle from '$lib/components/page-title.svelte';
</script>

<PageHead title="About Me" />

<div class="mx-auto max-w-screen-lg md-text">
	<PageTitle>About Me</PageTitle>
	<div class="py-4 px-6 mt-12 rounded-lg bg-lightkhaki md-text">
		<slot />
	</div>
</div>
