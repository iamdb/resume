<script>
	import 'iconify-icon';
	import { enableCache } from 'iconify-icon';
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
	import { loadAllIcons } from '$lib/types/icons';
	import { onMount } from 'svelte';

	onMount(() => {
		loadAllIcons();
		enableCache('local');
	});
</script>

<Header />
<div class="container mx-auto relative">
	<slot />
</div>
<footer class="container flex flex-col mt-24 items-center justify-center pb-12">
	<p class="text-sm leading-none text-grey-500 text-center">&copy; 2022 David Benjamin</p>
	<div class="text-lg flex flex-row gap-x-4">
		<a href="https://github.com/iamdb" target="_blank" rel="noreferrer noopener">
			<iconify-icon icon="simple-icons:github" />
		</a>
		<a href="https://www.linkedin.com/in/davidabenjamin" target="_blank" rel="noreferrer noopener">
			<iconify-icon icon="simple-icons:linkedin" />
		</a>
	</div>
</footer>
