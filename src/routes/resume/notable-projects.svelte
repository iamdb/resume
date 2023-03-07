<script lang="ts">
	import type { Project } from '$lib/types/resume';

	export let notableProjects: Project[];
</script>

<section>
	<h2 class="mb-8 underline underline-offset-2 font-serif font-normal">Notable Projects</h2>
	<div class="">
		<ul class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each notableProjects as project}
				<li
					class="border-4 border-lightblue relative border-opacity-50 px-12 py-8 bg-lightkhaki rounded-lg">
					{@html project.text}
					<span
						class="text-xs absolute bottom-0 right-0 bg-lightblue/60 px-1 align-middle border-l border-t
                     rounded-tl rounded-br border-lightblue">
						{#if project.lead}
							lead
						{:else}
							contributor
						{/if}
					</span>
				</li>
			{/each}
		</ul>
	</div>
</section>
