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

<div class="overflow-hidden relative h-6 rounded-full bg-khaki/50">
	<span
		style:min-width={`${clientHeight}px`}
		style:width={`${$currentProgress}%`}
		bind:clientHeight
		class="inline-block text-right rounded-full bg-lightblue">
		<span
			class:invisible={progress <= 75}
			class="pr-3 font-bold align-top whitespace-nowrap transition-opacity duration-75 text-darkgrey/80"
			>{total}{`${total === 1 ? ' hour' : ' hours'}`}</span>
	</span>
	<span
		class:hidden={progress >= 75}
		class="px-3 font-bold whitespace-nowrap transition-opacity duration-75 text-darkgrey/80">
		{total}{`${total === 1 ? ' hour' : ' hours'}`}
	</span>
</div>
