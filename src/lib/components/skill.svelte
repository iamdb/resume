<script lang="ts">
	import { iconToString, stringToIcon } from '$lib/types/icons';
	import Icon from '@iconify/svelte';

	import Progress from './progress.svelte';

	export let name: string;
	export let progress: number;
	export let total: number;
	export let columnWidth: number;

	$: icon = stringToIcon(name);
	$: formattedName = iconToString(icon);
</script>

<div class={`grid grid-cols-[auto,1fr] items-center gap-x-4`}>
	<div class="flex flex-row items-center justify-end" style:width={`${columnWidth}px`}>
		<Icon class="text-2xl text-blue mr-2" {icon} />
		<span class="bg-khaki/50 p-1 leading-none">{formattedName}</span>
	</div>
	<Progress {total} {progress} />
</div>
