<script lang="ts">
	import 'iconify-icon';
	import WorkHistory from '$lib/components/work-history.svelte';
	import Languages from '$lib/components/languages.svelte';
	import PageHead from '$lib/components/page-head.svelte';
	import { Icon, stringToIcon } from '$lib/types/icons';
	import { LanguageScale, type CodingActivityNormalized, type Language } from '$lib/types/wakatime';
	import type { WorkExperience } from '$lib/types/resume';
	import { onMount } from 'svelte';
	import { formatDate } from '$lib/util';
	import PageTitle from '$lib/components/page-title.svelte';

	export let data: {
		languagesAlltime: Language[];
		activityAlltime: CodingActivityNormalized;
		languagesLastYear: Language[];
		activityLastYear: CodingActivityNormalized;
		workExperience: WorkExperience[];
	};

	const { languagesAlltime, workExperience, activityAlltime, languagesLastYear, activityLastYear } =
		data;

	let languageScale = LanguageScale.LastYear;

	onMount(() => {
		allIcons?.sort();
	});

	$: allLangs = languagesAlltime
		.concat(languagesLastYear)
		.map((lang) => lang.name.toLocaleLowerCase());
	$: allIcons = Object.keys(Icon).filter(
		(i) => !allLangs.includes(i.toLocaleLowerCase()) && i.toLocaleLowerCase() !== 'error'
	);

	$: languages = languageScale === LanguageScale.LastYear ? languagesLastYear : languagesAlltime;
	$: activity = languageScale === LanguageScale.LastYear ? activityLastYear : activityAlltime;
</script>

<PageHead title="Resume" />

<div class="flex flex-col gap-y-24 mb-48 max-w-screen-lg mx-auto">
	<header>
		<PageTitle>David Benjamin</PageTitle>
		<div class="flex flex-col md:flex-row justify-start gap-x-32 items-baseline">
			<h3>Software Engineer</h3>
			<div class="flex flex-row items-center justify-between flex-grow">
				<div class="flex flex-row gap-x-4">
					<a class="text-2xl inline font-bold" href="mailto:hireme@iamdb.co">hireme@iamdb.co</a>
					<a
						class="text-2xl"
						href="https://github.com/iamdb"
						target="_blank"
						rel="noreferrer noopener">
						<iconify-icon icon="simple-icons:github" />
					</a>
					<a
						class="text-2xl"
						href="https://www.linkedin.com/in/davidabenjamin"
						target="_blank"
						rel="noreferrer noopener">
						<iconify-icon icon="simple-icons:linkedin" />
					</a>
				</div>
			</div>
		</div>
		<p class="mt-8 mb-0 text-lg md:text-xl">
			I am an experienced software engineer seeking a full-time position. I take pride in writing
			reliable, performant and maintainable software.
		</p>
	</header>

	<section>
		<h2 class="mb-8 underline underline-offset-2 font-serif font-normal">Career Highlights</h2>
		<ul class="text-lg md:text-xl list-disc list-inside">
			<li>10+ years experience writing web applications</li>
			<li>5+ years of experience with Linux as both a desktop and server OS.</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-8 underline underline-offset-2 font-serif font-normal">Languages / Scripting</h2>
		<Languages {activity} {languages} />
		<div class="flex flex-col md:flex-row mt-4 items-center justify-between">
			<div class="flex flex-row gap-x-1 md:gap-x-2">
				<span>Since <strong>{new Date(activity.startDate).toLocaleDateString()}</strong></span>
				<span>&bull;</span>
				<span><strong>~{Math.ceil(activity.totalHours)}</strong> total hours</span>
				<span>&bull;</span>
				<span class="hidden md:block">
					<span>
						<strong>~{Math.ceil(activity.dailyAverageHours)}</strong> hours a day
					</span>
				</span>
			</div>
			<div class="flex mt-4 flex-row gap-x-2">
				<button
					class:btn-active={languageScale === LanguageScale.AllTime}
					on:click={() => (languageScale = LanguageScale.AllTime)}
					class="btn">all time</button>
				<button
					class:btn-active={languageScale === LanguageScale.LastYear}
					on:click={() => (languageScale = LanguageScale.LastYear)}
					class="btn">last year</button>
			</div>
		</div>
	</section>

	<section>
		<h2 class="mb-24 underline underline-offset-2 font-serif font-normal text-left md:text-center">
			Work Experience
		</h2>
		<div class="flex flex-col overflow-hidden gap-y-16">
			{#each workExperience as job}
				<WorkHistory
					companyName={job.name}
					startDate={formatDate(job.startDate)}
					endDate={job.endDate && formatDate(job.endDate)}
					temporary={job.contract}>
					<ul slot="accomplishments" class="list-disc list-inside">
						{#each job.accomplishments as immagoodboy}
							<li class="mb-4 leading-snug">{@html immagoodboy}</li>
						{/each}
					</ul>
					<div slot="stack" class="grid grid-cols-1 sm:grid-cols-2">
						{#each job.stack as techIcon}
							<div class="flex flex-row flex-grow-0 justify-center mb-4 mr-2 md:justify-start">
								<iconify-icon
									class="text-2xl text-blue align-middle mr-2"
									icon={stringToIcon(techIcon)} />
								<span class="bg-khaki/50 px-1 leading-none">{techIcon}</span>
							</div>
						{/each}
					</div>
				</WorkHistory>
			{/each}
		</div>
	</section>
</div>
