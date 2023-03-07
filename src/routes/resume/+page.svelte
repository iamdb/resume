<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import Header from './header.svelte';
	import type { CodingActivityNormalized, Language } from '$lib/types/wakatime';
	import type { Job } from '$lib/types/resume';
	import Languages from './languages.svelte';
	import WorkExperience from './work-experience.svelte';

	export let data: {
		languagesAlltime: Language[];
		activityAlltime: CodingActivityNormalized;
		languagesLastYear: Language[];
		activityLastYear: CodingActivityNormalized;
		workExperience: Job[];
	};

	const { languagesAlltime, workExperience, activityAlltime, languagesLastYear, activityLastYear } =
		data;
</script>

<PageHead title="Resume" />

<div class="resume mb-48 max-w-screen-lg mx-auto">
	<Header />
	<Languages {languagesAlltime} {activityAlltime} {languagesLastYear} {activityLastYear} />
	<WorkExperience {workExperience} />
</div>
