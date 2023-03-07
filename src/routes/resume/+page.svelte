<script lang="ts">
	import Icon from '@iconify/svelte';
	import WorkHistory from '$lib/components/work-history.svelte';
	import Languages from '$lib/components/languages.svelte';
	import PageHead from '$lib/components/page-head.svelte';
	import { stringToIcon } from '$lib/types/icons';
	import { LanguageScale, type CodingActivityNormalized, type Language } from '$lib/types/wakatime';
	import type { WorkExperience } from '$lib/types/resume';
	import { formatDate } from '$lib/util';
	import PageTitle from '$lib/components/page-title.svelte';
	import { intToMonth } from '$lib/util';
	import IconGithub from 'virtual:icons/simple-icons/github';
	import IconLinkedIn from 'virtual:icons/simple-icons/linkedin';

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

	$: languages = languageScale === LanguageScale.LastYear ? languagesLastYear : languagesAlltime;
	$: activity = languageScale === LanguageScale.LastYear ? activityLastYear : activityAlltime;
	$: activityStart = new Date(activity.startDate);
</script>

<PageHead title="Resume" />

<div class="resume mb-48 max-w-screen-lg mx-auto">
	<section>
		<div class="flex flex-col items-stretch">
			<PageTitle>David Benjamin</PageTitle>
			<div
				class="flex flex-col md:flex-row items-center justify-around lg:justify-start lg:gap-x-72">
				<p class="m-0 text-2xl font-bold">Software Engineer</p>
				<div class="flex flex-row items-center justify-end text-lg gap-x-2">
					<a class="inline font-bold" href="mailto:hireme@iamdb.co">hireme@iamdb.co</a>
					<a
						class="hover:bg-lightkhaki p-1 transition-colors rounded"
						href="https://github.com/iamdb"
						target="_blank"
						rel="noreferrer noopener">
						<IconGithub />
					</a>
					<a
						class="hover:bg-lightkhaki p-1 transition-colors rounded"
						href="https://www.linkedin.com/in/davidabenjamin"
						target="_blank"
						rel="noreferrer noopener">
						<IconLinkedIn />
					</a>
				</div>
			</div>
			<p class="mt-12 mb-0 text-lg md:text-xl bg-lightkhaki py-4 px-6 rounded-lg">
				I am an experienced software engineer seeking a full-time position. I take pride in writing
				reliable, performant and maintainable software.
			</p>
		</div>
	</section>

	<section>
		<h2 class="mb-8 underline underline-offset-2 font-serif font-normal">Career Highlights</h2>
		<ul class="text-lg md:text-xl list-disc list-inside bg-lightkhaki px-6 py-4 rounded-lg">
			<li>10+ years experience writing web applications</li>
			<li>5+ years of experience with Linux as both a desktop and server OS.</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-8 underline underline-offset-2 font-serif font-normal">Languages, etc.</h2>
		<div class="note-text pl-4 text-xs mx-4 mb-1">
			Times are approximate due to gaps in data reporting. Margin for error is approximately -5%.
		</div>
		<Languages {activity} {languages} />
		<div
			class="grid grid-flow-row-dense gap-y-4 mt-4 md:mt-0 grid-cols-1 md:grid-cols-none md:grid-flow-col-dense place-content-between place-items-center md:place-items-baseline">
			<span>
				<Icon class="inline-block align-middle mr-1" icon="clarity:date-line" />
				<span
					>{`${intToMonth(
						activityStart.getMonth()
					)} ${activityStart.getDate()}, ${activityStart.getFullYear()}`}</span>
			</span>
			<span class="text-blue hidden md:inline">&bull;</span>
			<span>Total: ~{Math.ceil(activity.totalHours)} hours</span>
			<span class="text-blue hidden md:inline">&bull;</span>
			<span>
				Average Daily: ~{Math.ceil(activity.dailyAverageHours)} hours
			</span>
			<div class="flex mt-4 flex-row items-center gap-x-2">
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
		<h2 class="mb-24 underline underline-offset-2 font-serif font-normal text-center">
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
					<div slot="stack" class="grid grid-cols-2 gap-y-4">
						{#each job.stack as techIcon}
							<div
								class="flex flex-row flex-grow-0 justify-center items-center last-of-type:mb-0 mr-2 md:justify-start">
								<Icon class="text-2xl text-blue align-middle mr-2" icon={stringToIcon(techIcon)} />
								<span class="bg-khaki/50 p-1 leading-none">{techIcon}</span>
							</div>
						{/each}
					</div>
				</WorkHistory>
			{/each}
		</div>
	</section>
</div>

<style lang="postcss">
	.note-text:before {
		content: 'Note: ';
		font-weight: bold;
		margin-left: -2.6em;
	}
	.resume section {
		@apply mb-24 last:mb-0;
	}
</style>
