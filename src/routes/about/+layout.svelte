<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
</script>

<PageHead title="About Me" />

<div class="absolute top-0 left-0 z-0 w-full sunset h-[28vh]">
	<div
		class="bg-gradient-to-b absolute top-0 left-0 w-full h-full from-[rgba(0,0,0,.25)] to-black-500" />
</div>

<h1 class="mb-12 relative z-10">About Me</h1>
<div class="relative z-10"><slot /></div>

<style>
	.sunset {
		background-image: url(/photos/ca_sunset.jpg);
		background-position: center bottom;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
