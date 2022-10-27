<script type="ts">
	import Color from 'color';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { writable } from 'svelte/store';
	import { afterUpdate } from 'svelte';

	import type { CodingActivityNormalized, Language } from '$lib/types/wakatime';
	import Skill from './skill.svelte';

	export let activity: CodingActivityNormalized;
	export let languages: Language[];

	$: norm_modifier = 100 / languages[0].percent;

	let listHeight = 0;
	const maxHeight = writable(0);

	afterUpdate(() => {
		if (listHeight > $maxHeight) {
			maxHeight.set(listHeight);
		}
	});
</script>

<div class="flex flex-row items-center my-4 justify-between">
	<div class="flex flex-row gap-x-4">
		<span><strong>{Math.ceil(activity.totalHours)}</strong> total hours</span>
		<span>&bull;</span>
		<span>
			<strong>{Math.ceil(activity.dailyAverageHours)}</strong> hours a day
		</span>
	</div>
	<span>Since <strong>{new Date(activity.startDate).toLocaleDateString()}</strong></span>
</div>
<div
	style:min-height={`${$maxHeight}px`}
	bind:offsetHeight={listHeight}
	class={`grid grid-rows-[${languages.length}fr] gap-y-8 p-8 rounded bg-black-200`}>
	{#each languages as lang (lang.name)}
		<span animate:flip={{ duration: (d) => Math.sqrt(d) * 50, easing: quintOut }}>
			<Skill
				color={lang.color}
				total={Math.ceil(activity.totalHours * (lang.percent * 0.01))}
				name={lang.name}
				progress={lang.percent * norm_modifier}
				progressColor={new Color(lang.color).darken(0.25).desaturate(0.25).toString()} />
		</span>
	{/each}
</div>
