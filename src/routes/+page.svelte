<script lang="ts">
	import 'iconify-icon';
	import GithubRepo from '$lib/components/github-repo.svelte';
	import { stringToIcon } from '$lib/types/icons';
	import type { Repo } from './+page.server';
	import PageHead from '$lib/components/page-head.svelte';

	export let data: {
		pinnedItems: Repo[];
	};
</script>

<PageHead />

<h1 class="text-8xl font-bold leading-tight">Hi</h1>
<div>
	<p class="text-2xl">
		My name is <a href="/about" class="font-bold">David Benjamin</a>.
	</p>
	<p class="text-2xl">
		I am a software engineer with <a class="font-bold" href="/resume">over a decade</a> of experience
		building dependable software.
	</p>
</div>
<div class="flex flex-col md:flex-row gap-8 my-8 flex-wrap-1">
	{#each data.pinnedItems as repo}
		<div class="w-full md:w-2/5 lg:w-1/3 xl:w-1/5">
			<GithubRepo
				name={repo.name}
				url={repo.url}
				description={repo.description}
				icons={repo.languages.nodes.map((lang) => stringToIcon(lang.name))}
				color={repo.languages.nodes.at(0)?.color} />
		</div>
	{/each}
</div>

<p class="text-2xl">
	In addition to software development, I was a prolific <a class="font-bold" href="/photos"
		>live concert photographer</a>
	from <strong>2011</strong> until <strong>2018</strong> in Los Angeles.
</p>
