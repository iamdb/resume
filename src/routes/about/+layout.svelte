<script type="ts">
	import sunset from './ca_sunset.jpg';
	import PageHead from '$lib/components/page-head.svelte';
</script>

<PageHead title="About Me" />

<div class="fixed top-0 left-0 z-0 h-1/3 w-full overflow-hidden">
	<img
		class="object-cover opacity-70 object-bottom w-full h-full"
		src={sunset}
		alt="Santa Monica Sunset" />
	<div
		class="bg-gradient-to-b absolute top-0 left-0 w-full h-full from-[rgba(0,0,0,.25)] to-black-500" />
</div>

<div class="relative flex flex-row items-baseline mb-12 justify-between z-10">
	<h1>About Me <sub class="text-base md:text-lg">(David Benjamin)</sub></h1>
</div>
<div class="relative z-10"><slot /></div>
