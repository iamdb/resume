<script lang="ts">
	import { iconToString, stringToIcon } from '$lib/types/icons';

	import Progress from './progress.svelte';
	import TechIcon from './tech-icon.svelte';

	export let name: string;
	export let progress: number;
	export let total: number;
	export let color: string;
	export let progressColor: string;

	$: icon = stringToIcon(name);
	$: formattedName = iconToString(icon);
</script>

<div class="grid grid-cols-[.5fr,1fr] justify-items-stretch items-center place-items-start gap-x-4">
	<TechIcon reverse {color} name={formattedName} {icon} />
	<Progress {total} {progress} barColor={progressColor} />
</div>
