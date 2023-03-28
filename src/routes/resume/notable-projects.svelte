<script lang="ts">
	import type { Project } from '$lib/types/resume';

	export let notableProjects: Project[];
</script>

<section>
	<h2 class="font-serif font-normal underline underline-offset-2">Notable Projects</h2>
	<p class="mb-12 text-sm">in alphabetical order</p>
	<ul class="grid grid-cols-1 gap-8 place-content-center md:grid-cols-2">
		{#each notableProjects.sort((a, b) => {
			return a.title
				.replaceAll('The ', '')
				.localeCompare(b.title.replaceAll('The ', ''), undefined);
		}) as project}
			<li
				class="flex relative flex-col justify-center items-center py-8 px-12 m-0 text-base list-none text-center rounded-lg border-4 border-perry bg-lightkhaki">
				<span class="px-8 font-bold tracking-wide">{project.title}</span>
				<span class="text-sm">{project.description}</span>
				<span
					class="absolute right-0 bottom-0 px-1 text-xs align-middle rounded-tl rounded-br bg-perry">
					{#if project.lead}
						lead
					{:else}
						contributor
					{/if}
				</span>
				{#if project.url}
					<span
						class="absolute top-0 right-0 pr-1 pb-1 pl-2 text-xs underline align-middle rounded-tr rounded-bl bg-perry">
						<a href={project.url} title={project.title} target="_blank" rel="noopener noreferrer"
							>Link</a>
					</span>
				{/if}
			</li>
		{/each}
	</ul>
</section>
