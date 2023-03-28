<script lang="ts">
	import GithubRepo from '$lib/components/github-repo.svelte';
	import { stringToIcon } from '$lib/types/icons';
	import type { Repo } from './+page.server';
	import PageHead from '$lib/components/page-head.svelte';
	import PageTitle from '$lib/components/page-title.svelte';

	export let data: {
		pinnedItems: Repo[];
	};
</script>

<PageHead />

<div class="container pt-12 mx-auto max-w-screen-lg">
	<PageTitle>Hi.</PageTitle>
	<div class="mt-8">
		<p class="text-2xl">
			My name is <a href="/about" class="inline">David Benjamin</a>.
		</p>
		<p class="text-2xl">
			I am a software engineer with <a class="inline" href="/resume">over a decade</a> of experience
			building dependable software.
		</p>
	</div>
	<p class="text-2xl">
		I have started <a class="inline" href="/brain-droppings">writing</a> about my personal projects.
	</p>
	<p class="text-2xl">
		In addition to software development, I was a prolific <a class="inline" href="/photos"
			>live concert photographer</a>
		from <strong>2011</strong> until <strong>2018</strong> in Los Angeles.
	</p>
	{#if data.pinnedItems.length > 0}
		<h4 class="mt-24 mb-8 underline">Recent Projects</h4>
		<div class="grid gap-8 sm:grid-cols-2">
			{#each data.pinnedItems as repo}
				<GithubRepo
					name={repo.name}
					url={repo.url}
					description={repo.description}
					icons={repo.languages.nodes.map((lang) => stringToIcon(lang.name))} />
			{/each}
		</div>
	{/if}
</div>
