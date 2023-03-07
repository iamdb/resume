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

<div class="rounded-full h-6 bg-khaki/50 relative overflow-hidden">
	<span
		style:min-width={`${clientHeight}px`}
		style:width={`${$currentProgress}%`}
		bind:clientHeight
		class="rounded-full inline-block bg-lightblue text-right">
		<span
			class:invisible={progress <= 75}
			class="transition-opacity duration-75 text-darkgrey/80 pr-3 align-top font-bold whitespace-nowrap"
			>{total}{`${total === 1 ? ' hour' : ' hours'}`}</span>
	</span>
	<span
		class:hidden={progress >= 75}
		class="transition-opacity text-darkgrey/80 duration-75 px-3 font-bold whitespace-nowrap">
		{total}{`${total === 1 ? ' hour' : ' hours'}`}
	</span>
</div>
