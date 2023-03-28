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
	<div class="flex flex-row justify-end items-center" style:width={`${columnWidth}px`}>
		<Icon class="mr-2 text-2xl text-lightgrey" {icon} />
		<span class="p-1 leading-none bg-powder">{formattedName}</span>
	</div>
	<Progress {total} {progress} />
</div>
