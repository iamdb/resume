<script lang="ts">
	export let progress = 0;
	export let total = 0;
</script>

<div class="w-full flex flex-row items-center justify-start rounded-full bg-black-900">
	<div
		style={`width: ${progress}%`}
		class="bg-blue-500 rounded-full flex flex-row justify-end align-center"
	>
		<span class:invisible={progress <= 75} class="text-white-400 pr-3 font-bold whitespace-nowrap"
			>{total} hours</span
		>
	</div>
	<span class:invisible={progress > 75} class="px-3 font-bold whitespace-nowrap">
		{total} hours
	</span>
</div>
