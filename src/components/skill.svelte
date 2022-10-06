<script lang="ts">
	import Progress from './progress.svelte';
	import TechIcon from './tech-icon.svelte';

	export let icon: string;
	export let name: string;
	export let progress: number;
</script>

<div
	class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[.5fr,1fr] justify-items-start place-items-center"
>
	<TechIcon {name} {icon} />
	<Progress {progress} />
</div>
