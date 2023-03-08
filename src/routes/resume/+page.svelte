<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import Header from './header.svelte';
	import type { CodingActivityNormalized, Language } from '$lib/types/wakatime';
	import type { Job, Project } from '$lib/types/resume';
	import Languages from './languages.svelte';
	import WorkExperience from './work-experience.svelte';
	import NotableProjects from './notable-projects.svelte';

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

<div class="mx-auto mb-48 max-w-screen-lg resume">
	<Header />
	<hr class="mt-16 mb-32 border-dotted" />
	<NotableProjects {notableProjects} />
	<hr class="my-32 border-dotted" />
	<Languages {languagesAlltime} {activityAlltime} {languagesLastYear} {activityLastYear} />
	<hr class="my-32 border-dotted" />
	<WorkExperience {workExperience} />
</div>
