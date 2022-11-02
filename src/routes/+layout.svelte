<script>
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
</script>

<div class="container p-4 mx-auto">
	<Header />

	<slot />
</div>
