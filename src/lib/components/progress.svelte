<script lang="ts">
	import { afterUpdate, beforeUpdate } from 'svelte';
	import { writable } from 'svelte/store';

	export let progress = 0;
	export let total = 0;
	export let barColor: string;

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

<div class="flex flex-row items-center justify-start rounded-full bg-black-800">
	<div
		style:min-width={`${clientHeight}px`}
		style:width={`${$currentProgress}%`}
		style:background-color={barColor}
		bind:clientHeight
		class="rounded-full flex flex-row justify-end items-center"
	>
		<span
			class:opacity-100={$showHours}
			class:opacity-0={!$showHours}
			class:invisible={progress <= 75}
			class="transition-opacity duration-75 text-black-800 pr-3 font-bold whitespace-nowrap"
			>{total}{`${total === 1 ? ' hour' : ' hours'}`}</span
		>
	</div>
	<span
		class:opacity-100={$showHours}
		class:opacity-0={!$showHours}
		class:hidden={progress >= 75}
		style:color={barColor}
		class="transition-opacity duration-75 px-3 font-bold whitespace-nowrap"
	>
		{total}{`${total === 1 ? ' hour' : ' hours'}`}
	</span>
</div>
