<script lang="ts">
	import type { Project } from '$lib/types/resume';

	export let notableProjects: Project[];
</script>

<section>
	<h2 class="mb-8 font-serif font-normal underline underline-offset-2">Notable Projects</h2>
	<ul class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each notableProjects as project}
			<li
				class="relative py-8 px-12 rounded-lg border-4 border-opacity-50 border-lightblue bg-lightkhaki">
				{@html project.text}
				<span
					class="absolute right-0 bottom-0 px-1 text-xs align-middle rounded-tl rounded-br border-t border-l bg-lightblue/60 border-lightblue">
					{#if project.lead}
						lead
					{:else}
						contributor
					{/if}
				</span>
			</li>
		{/each}
	</ul>
</section>
