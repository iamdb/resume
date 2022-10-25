<script>
	import 'iconify-icon';
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
</script>

<div class="container flex flex-col justify-between h-full p-4 mx-auto">
	<div class="mb-24">
		<Header />
		<slot />
	</div>
	<footer class="flex flex-col items-center justify-center pb-12">
		<p class="text-sm leading-none text-grey-500 text-center">&copy; 2022 David Benjamin</p>
		<div class="text-lg flex flex-row gap-x-4">
			<a href="https://github.com/iamdb" target="_blank" rel="noreferrer">
				<iconify-icon icon="simple-icons:github" />
			</a>
			<a href="https://www.linkedin.com/in/davidabenjamin" target="_blank" rel="noreferrer">
				<iconify-icon icon="simple-icons:linkedin" />
			</a>
		</div>
	</footer>
</div>
