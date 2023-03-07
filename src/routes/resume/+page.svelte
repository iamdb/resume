<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import Header from './header.svelte';
	import type { CodingActivityNormalized, Language } from '$lib/types/wakatime';
	import type { Job, Project } from '$lib/types/resume';
	import Languages from './languages.svelte';
	import WorkExperience from './work-experience.svelte';

	export let data: {
		languagesAlltime: Language[];
		activityAlltime: CodingActivityNormalized;
		languagesLastYear: Language[];
		activityLastYear: CodingActivityNormalized;
		workExperience: Job[];
		notableProjects: Project[];
	};

	const {
		languagesAlltime,
		notableProjects,
		workExperience,
		activityAlltime,
		languagesLastYear,
		activityLastYear
	} = data;
</script>

<PageHead title="Resume" />

<div class="resume mb-48 max-w-screen-lg mx-auto">
	<Header />
	<hr class="mt-16 mb-32 border-dotted" />
	<section>
		<h2 class="mb-8 underline underline-offset-2 font-serif font-normal">Notable Projects</h2>
		<div class="">
			<ul class="grid grid-cols-2 gap-8">
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
	<hr class="my-32 border-dotted" />
	<Languages {languagesAlltime} {activityAlltime} {languagesLastYear} {activityLastYear} />
	<hr class="my-32 border-dotted" />
	<WorkExperience {workExperience} />
</div>
