<script lang="ts">
	import PageHead from '$lib/components/page-head.svelte';
	import Header from './header.svelte';
	import type { Job, Project } from '$lib/types/resume';
	import WorkExperience from './work-experience.svelte';
	import NotableProjects from './notable-projects.svelte';
	import Separator from './separator.svelte';
	import EndCap from '$lib/components/end-cap.svelte';

	export let data: {
		workExperience: Job[];
		notableProjects: Project[];
	};

	const { notableProjects, workExperience } = data;
</script>

<PageHead title="Resume" />

<div class="mx-auto mt-12 mb-48 max-w-screen-lg resume">
	<Header />
	<Separator />
	<NotableProjects {notableProjects} />
	<Separator />
	<WorkExperience {workExperience} />
	<EndCap />
</div>
