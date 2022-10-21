<script lang="ts">
	import { StringToIcon } from '$lib/types/icons';

	import Progress from './progress.svelte';
	import TechIcon from './tech-icon.svelte';

	export let name: string;
	export let progress: number;
	export let total: number;
	export let color: string;
</script>

<div
	class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[.5fr,1fr] gap-x-4 justify-items-start place-items-center"
>
	<TechIcon {color} {name} icon={StringToIcon(name) || ''} />
	<Progress {total} {progress} />
</div>
