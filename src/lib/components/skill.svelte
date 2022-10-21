<script lang="ts">
	import { StringToIcon } from '$lib/types/icons';

	import Progress from './progress.svelte';
	import TechIcon from './tech-icon.svelte';

	export let name: string;
	export let progress: number;
	export let total: number;
	export let color: string;
</script>

<div class="grid grid-cols-[.5fr,1fr] justify-items-stretch items-center place-items-start gap-x-4">
	<TechIcon {color} {name} icon={StringToIcon(name) || ''} />
	<Progress {total} {progress} />
</div>
