<script lang="ts">
	import Languages from '$lib/components/languages.svelte';
	import IconDate from 'virtual:icons/clarity/date-line';
	import { intToMonth } from '$lib/util';
	import { LanguageScale, type CodingActivityNormalized, type Language } from '$lib/types/wakatime';

	export let languagesAlltime: Language[],
		activityAlltime: CodingActivityNormalized,
		languagesLastYear: Language[],
		activityLastYear: CodingActivityNormalized;

	let languageScale = LanguageScale.LastYear;

	$: languages = languageScale === LanguageScale.LastYear ? languagesLastYear : languagesAlltime;
	$: activity = languageScale === LanguageScale.LastYear ? activityLastYear : activityAlltime;
	$: activityStart = new Date(activity.startDate);
</script>

<section class="mb-32">
	<h2 class="mb-8 font-serif font-normal underline underline-offset-2">Languages, etc.</h2>
	<div class="pl-4 mx-4 mb-1 text-xs note-text">
		Times are approximate due to gaps in data reporting. Margin for error is approximately -5%.
	</div>
	<Languages {activity} {languages} />
	<div
		class="grid grid-cols-1 grid-flow-row-dense gap-y-4 place-content-between place-items-center mt-4 md:grid-cols-none md:grid-flow-col-dense md:mt-0 md:place-items-baseline">
		<span>
			<IconDate class="inline-block mr-1 align-middle" />
			<span
				>{`${intToMonth(
					activityStart.getMonth()
				)} ${activityStart.getDate()}, ${activityStart.getFullYear()}`}</span>
		</span>
		<span class="hidden md:inline text-blue">&bull;</span>
		<span>Total: ~{Math.ceil(activity.totalHours)} hours</span>
		<span class="hidden md:inline text-blue">&bull;</span>
		<span>
			Average Daily: ~{Math.ceil(activity.dailyAverageHours)} hours
		</span>
		<div class="flex flex-row gap-x-2 items-center mt-4">
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

<style lang="postcss">
	.note-text:before {
		content: 'Note: ';
		font-weight: bold;
		margin-left: -2.6em;
	}
</style>
