<script type="ts">
	import PageHead from '$lib/components/page-head.svelte';
</script>

<PageHead title="About Me" />

<div class="absolute top-0 left-0 z-0 w-full sunset h-1/4">
	<div
		class="bg-gradient-to-b absolute top-0 left-0 w-full h-full from-[rgba(0,0,0,.25)] to-black-500" />
</div>

<div class="relative flex flex-row items-baseline mb-12 justify-between z-10">
	<h1>About Me <sub class="text-base md:text-lg">(David Benjamin)</sub></h1>
</div>
<div class="relative z-10"><slot /></div>

<style>
	.sunset {
		background-image: url(/photos/ca_sunset.jpg);
		background-position: center bottom;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
