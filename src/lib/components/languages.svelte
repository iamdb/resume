<script type="ts">
	import type { CodingActivity, Language } from '../../routes/resume/+page.server';
	import Skill from './skill.svelte';

	export let activity: CodingActivity;
	export let languages: Language[];

	const norm_modifier = 100 / languages[0].percent;
	const activitySince = new Date(activity.range.start);
</script>

<div class="flex flex-row items-center my-4 justify-between">
	<div class="flex flex-row gap-x-4">
		<span><strong>{activity.grand_total.human_readable_total}</strong> total</span>
		<span>
			<strong>{activity.grand_total.human_readable_daily_average}</strong> daily
			<span class="text-xs">(includes weekends)</span>
		</span>
	</div>
	<span>Since <strong>{activitySince.toLocaleDateString()}</strong></span>
</div>
<div class="flex flex-col gap-y-8 p-8 rounded bg-black-200">
	{#each languages as lang}
		<Skill
			total={Math.round((activity.grand_total.total_seconds * (lang.percent * 0.01)) / 60 / 60)}
			icon=""
			name={lang.name}
			progress={lang.percent * norm_modifier}
		/>
	{/each}
</div>
