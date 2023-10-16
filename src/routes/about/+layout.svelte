<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import PageTitle from '$lib/components/page-title.svelte';
</script>

<PageHead title="About Me" />

<div class="mx-auto max-w-screen-lg">
	<PageTitle>About Me</PageTitle>
	<div class="mt-12 mdx">
		<div class="content">
			<slot />
		</div>
	</div>
</div>
