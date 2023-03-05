<script lang="ts">
	import 'iconify-icon';
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

<div class="container mx-auto max-w-screen-lg">
	<PageTitle>Hi.</PageTitle>
	<div class="mt-8">
		<p class="text-2xl">
			My name is <a href="/about" class="font-bold inline">David Benjamin</a>.
		</p>
		<p class="text-2xl">
			I am a software engineer with <a class="font-bold inline" href="/resume">over a decade</a> of experience
			building dependable software.
		</p>
	</div>
	<div class="grid sm:grid-cols-3 gap-8 my-8">
		{#each data.pinnedItems as repo}
			<GithubRepo
				name={repo.name}
				url={repo.url}
				description={repo.description}
				icons={repo.languages.nodes.map((lang) => stringToIcon(lang.name))} />
		{/each}
	</div>

	<p class="text-2xl">
		In addition to software development, I was a prolific <a class="font-bold inline" href="/photos"
			>live concert photographer</a>
		from <strong>2011</strong> until <strong>2018</strong> in Los Angeles.
	</p>
</div>
