<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import PageTitle from '$lib/components/page-title.svelte';
</script>

<PageHead />

<div class="container mx-auto max-w-screen-lg">
	<PageTitle>Hi.</PageTitle>
	<div class="mt-12">
		<p class="text-2xl">
			My name is <a href="/about" class="inline">David Benjamin</a>.
		</p>
		<p class="text-2xl">
			I am a software engineer with <a class="inline" href="/resume">over a decade</a> of experience
			building dependable software.
		</p>
	</div>
	<p class="text-2xl">
		In addition to engineering, I was a prolific <a class="inline" href="/photos"
			>live concert photographer</a>
		from <strong>2011</strong> until <strong>2018</strong> in Los Angeles, covering hundreds of shows
		over that time.
	</p>
	<p class="text-2xl">
		I also sometimes <a class="inline" href="/brain-droppings">write</a> about my personal projects.
	</p>
</div>
