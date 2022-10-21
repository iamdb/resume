<script lang="ts">
	import { afterUpdate, beforeUpdate } from 'svelte';
	import { writable } from 'svelte/store';

	export let progress = 0;
	export let total = 0;

	const currentProgress = writable(0);
	const showHours = writable(false);
	let clientHeight = 0;

	beforeUpdate(() => {
		showHours.set(true);
	});

	afterUpdate(() => {
		showHours.set(false);
		currentProgress.set(progress);
	});
</script>

<div class="w-full flex flex-row items-center justify-start rounded-full bg-black-900">
	<div
		style:min-width={`${clientHeight}px`}
		style:width={`${$currentProgress}%`}
		bind:clientHeight
		class="bg-blue-500 rounded-full flex flex-row justify-end align-center"
	>
		<span
			class:opacity-100={$showHours}
			class:opacity-0={!$showHours}
			class:invisible={progress <= 75}
			class="transition-opacity duration-75 text-white-400 pr-3 font-bold whitespace-nowrap"
			>{total} hours</span
		>
	</div>
	<span
		class:opacity-100={$showHours}
		class:opacity-0={!$showHours}
		class:invisible={progress >= 75}
		class="transition-opacity duration-75 px-3 font-bold whitespace-nowrap"
	>
		{total} hours
	</span>
</div>
