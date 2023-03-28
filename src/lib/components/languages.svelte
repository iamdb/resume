<script lang="ts">
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import type { CodingActivityNormalized, Language } from '$lib/types/wakatime';
	import Skill from './skill.svelte';
	import { crossfade } from 'svelte/transition';
	import { afterUpdate } from 'svelte';

	export let activity: CodingActivityNormalized;
	export let languages: Language[];

	let listHeight = 0;
	let maxHeight = 0;

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 50,
				easing: quintOut,
				css: (t) => `
					transform: ${transform};
					opacity: ${t}
				`
			};
		}
	});

	afterUpdate(() => {
		if (listHeight > maxHeight) {
			maxHeight = listHeight;
		}
	});

	$: norm_modifier = 100 / languages[0].percent;
	$: maxWidth = () => {
		let max = 0;

		languages.forEach((lang) => {
			if (lang.name.length > max) {
				max = lang.name.length;
			}
		});

		return max;
	};
</script>

<div
	style:min-height={`${maxHeight}px`}
	bind:offsetHeight={listHeight}
	class="grid grid-cols-1 gap-y-8 p-4 rounded-xl border-4 md:py-4 md:px-6 border-perry bg-lightkhaki">
	{#each languages as lang (lang.name)}
		<div
			in:receive={{ key: lang.name }}
			out:send={{ key: lang.name }}
			animate:flip={{ duration: (d) => Math.sqrt(d) * 50, easing: quintOut }}>
			<Skill
				columnWidth={maxWidth() * 12}
				total={Math.ceil(activity.totalHours * (lang.percent * 0.01))}
				name={lang.name}
				progress={lang.percent * norm_modifier} />
		</div>
	{/each}
</div>
