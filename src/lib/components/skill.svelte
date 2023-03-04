<script lang="ts">
	import { iconToString, stringToIcon } from '$lib/types/icons';

	import Progress from './progress.svelte';
	import TechIcon from './tech-icon.svelte';

	export let name: string;
	export let progress: number;
	export let total: number;

	$: icon = stringToIcon(name);
	$: formattedName = iconToString(icon);
</script>

<div class="flex flex-row items-center justify-start gap-x-4">
	<div class="md:w-1/4">
		<TechIcon color="text-blue" reverse name={formattedName} {icon} />
	</div>
	<div class="flex-grow">
		<Progress {total} {progress} />
	</div>
</div>
