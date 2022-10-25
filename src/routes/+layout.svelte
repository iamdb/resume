<script>
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
</script>

<div class="container flex flex-col justify-between h-full p-4 mx-auto">
	<div>
		<Header />
		<slot />
	</div>
	<p class="text-sm text-grey-500 text-center">&copy; 2022 David Benjamin</p>
</div>
