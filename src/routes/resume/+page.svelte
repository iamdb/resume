<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import Header from './header.svelte';
	import type { CodingActivityNormalized, Language } from '$lib/types/wakatime';
	import type { Job, Project } from '$lib/types/resume';
	import Languages from './languages.svelte';
	import WorkExperience from './work-experience.svelte';
	import NotableProjects from './notable-projects.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import NavLink from '$lib/components/nav-link.svelte';
	import { goto } from '$app/navigation';
	import Separator from './separator.svelte';
	import EndCap from '$lib/components/end-cap.svelte';

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
<Navigation let:drawer>
	<NavLink {drawer} icon="mdi:download-circle" on:click={() => goto('/resume.pdf')}>pdf</NavLink>
</Navigation>

<div class="mx-auto mt-12 mb-48 max-w-screen-lg resume">
	<Header />
	<Separator />
	<NotableProjects {notableProjects} />
	<Separator />
	<Languages {languagesAlltime} {activityAlltime} {languagesLastYear} {activityLastYear} />
	<Separator />
	<WorkExperience {workExperience} />
	<EndCap />
</div>
