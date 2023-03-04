<script lang="ts">
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { afterUpdate } from 'svelte';

	import type { CodingActivityNormalized, Language } from '$lib/types/wakatime';
	import Skill from './skill.svelte';

	export let activity: CodingActivityNormalized;
	export let languages: Language[];

	$: norm_modifier = 100 / languages[0].percent;

	let listHeight = 0;
	let maxHeight = 0;

	afterUpdate(() => {
		if (listHeight > maxHeight) {
			maxHeight = listHeight;
		}
	});
</script>

<div
	style:min-height={`${maxHeight}px`}
	bind:offsetHeight={listHeight}
	class="border-8 border-blue border-opacity-50 p-4 flex flex-col gap-y-4 md:py-4 md:px-6 rounded-xl bg-lightkhaki">
	{#each languages as lang (lang.name)}
		<div animate:flip={{ duration: (d) => Math.sqrt(d) * 50, easing: quintOut }}>
			<Skill
				total={Math.ceil(activity.totalHours * (lang.percent * 0.01))}
				name={lang.name}
				progress={lang.percent * norm_modifier} />
		</div>
	{/each}
</div>
