<script type="ts">
	import 'iconify-icon';
	import { writable } from 'svelte/store';
	import TechIcon from '$lib/components/tech-icon.svelte';
	import WorkHistory from '$lib/components/work-history.svelte';
	import Languages from '$lib/components/languages.svelte';
	import { Icon, iconToString, stringToIcon } from '$lib/types/icons';
	import { LanguageScale, type CodingActivityNormalized, type Language } from '$lib/types/wakatime';
	import type { WorkExperience } from '$lib/types/resume';
	import { beforeUpdate } from 'svelte';
	import { formatDate } from '$lib/util';

	export let data: {
		languagesAlltime: Language[];
		activityAlltime: CodingActivityNormalized;
		languagesLastYear: Language[];
		activityLastYear: CodingActivityNormalized;
		workExperience: WorkExperience[];
	};

	const { languagesAlltime, workExperience, activityAlltime, languagesLastYear, activityLastYear } =
		data;

	const languageScale = writable(LanguageScale.LastYear);

	$: allLangs = languagesAlltime
		.concat(languagesLastYear)
		.map((lang) => lang.name.toLocaleLowerCase());
	$: allIcons = Object.keys(Icon).filter(
		(i) => !allLangs.includes(i.toLocaleLowerCase()) && i.toLocaleLowerCase() !== 'error'
	);

	beforeUpdate(() => {
		allIcons?.sort();
	});
</script>

<div class="flex flex-col gap-y-24 mb-48">
	<header>
		<h1 class="leading-tight underline underline-offset-2">David Benjamin</h1>
		<div class="flex flex-row justify-start gap-x-4 items-baseline">
			<h3>Software Engineer</h3>
			<a class="text-2xl font-bold" href="mailto:hireme@iamdb.co">hireme@iamdb.co</a>
			<a class="text-2xl" href="https://github.com/iamdb" target="_blank" rel="noreferrer">
				<iconify-icon icon="simple-icons:github" />
			</a>
			<a
				class="text-2xl"
				href="https://www.linkedin.com/in/davidabenjamin"
				target="_blank"
				rel="noreferrer"
			>
				<iconify-icon icon="simple-icons:linkedin" />
			</a>
		</div>
		<p class="mt-16 mb-0 text-xl">
			I am an experienced software engineer seeking a full-time <a href="/about">non-full-stack</a> position
			writing code in Rust or Go. I take pride in writing reliable and performant software in code that
			is understandable. I have always had a passion for audio and video and would like my work to be
			involved with it in some way.
		</p>
	</header>

	<section>
		<h2 class="mb-8 underline underline-offset-2">Career Highlights</h2>
		<ul class="text-xl list-disc list-inside">
			<li>10+ years experience writing high quality code.</li>
			<li>5+ years of experience with Linux as both a desktop and server OS.</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-8 underline underline-offset-2">Skills</h2>
		<div class="flex flex-col gap-y-8 md:flex-row md:gap-y-0 md:gap-x-8 text-white-500">
			<div class="md:w-1/2">
				<div class="flex flex-row justify-between items-center">
					<h3>Languages</h3>
					<div class="flex flex-row items-center gap-x-4">
						<button
							class:btn-active={$languageScale === LanguageScale.AllTime}
							on:click={() => languageScale.set(LanguageScale.AllTime)}
							class="btn">all time</button
						>
						<button
							class:btn-active={$languageScale === LanguageScale.LastYear}
							on:click={() => languageScale.set(LanguageScale.LastYear)}
							class="btn">last year</button
						>
					</div>
				</div>
				<Languages
					activity={$languageScale === LanguageScale.AllTime ? activityAlltime : activityLastYear}
					languages={$languageScale === LanguageScale.AllTime
						? languagesAlltime
						: languagesLastYear}
				/>
			</div>
			<div class="md:w-1/2 pt-10">
				<h3 class="mb-4">Other Tech Experience</h3>
				<div
					class="grid grid-cols-3 gap-8 justify-items-start place-content-center p-8 rounded text-white-600 align-center bg-black-200"
				>
					{#each allIcons as techIcon}
						{@const icon = stringToIcon(techIcon)}
						{@const name = iconToString(icon)}
						<TechIcon {icon} {name} />
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section>
		<h2 class="mb-8 underline underline-offset-2">Recent Work Experience</h2>
		<div class="flex overflow-hidden flex-col gap-y-8">
			{#each workExperience as job}
				<WorkHistory
					companyName={job.name}
					startDate={formatDate(job.startDate)}
					endDate={formatDate(job.endDate)}
					temporary={job.contract}
				>
					<ul slot="accomplishments" class="list-disc list-inside">
						{#each job.accomplishments as immagoodboy}
							<li class="mb-4 leading-tight">{@html immagoodboy}</li>
						{/each}
					</ul>
					<div
						slot="stack"
						class="flex flex-row flex-wrap gap-x-12 gap-y-8 justify-around items-center"
					>
						{#each job.stack as techIcon}
							<TechIcon icon={stringToIcon(techIcon)} name={techIcon} />
						{/each}
					</div>
				</WorkHistory>
			{/each}
		</div>
	</section>
</div>
