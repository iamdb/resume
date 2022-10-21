<script type="ts">
	import { flip } from 'svelte/animate';
	import { circOut, quintOut } from 'svelte/easing';

	import type { CodingActivityNormalized, Language } from '$lib/types/wakatime';
	import Skill from './skill.svelte';

	export let activity: CodingActivityNormalized;
	export let languages: Language[];

	const norm_modifier = 100 / languages[0].percent;
</script>

<div class="flex flex-row items-center my-4 justify-between">
	<div class="flex flex-row gap-x-4">
		<span><strong>{Math.ceil(activity.totalHours)}</strong> total hours</span>
		<span>
			<strong>{Math.ceil(activity.dailyAverageHours)}</strong> hours daily
			<span class="text-xs">(includes weekends)</span>
		</span>
	</div>
	<span>Since <strong>{activity.startDate.toLocaleDateString()}</strong></span>
</div>
<div class={`grid grid-rows-[${languages.length}fr] gap-y-8 p-8 rounded bg-black-200`}>
	{#each languages as lang (lang.name)}
		<span animate:flip={{ duration: (d) => Math.sqrt(d) * 50 }}>
			<Skill
				color={lang.color}
				total={Math.ceil(activity.totalHours * (lang.percent * 0.01))}
				name={lang.name}
				progress={lang.percent * norm_modifier}
			/>
		</span>
	{/each}
</div>
