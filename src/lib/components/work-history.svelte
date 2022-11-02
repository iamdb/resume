<script lang="ts">
	import 'iconify-icon';

	export let companyName: string;
	export let startDate: string;
	export let endDate: string | undefined;
	export let temporary = false;
</script>

<div class="overflow-hidden pb-2 md:pb-8 pl-2 md:pl-8 text-white-500 bg-black-200">
	<h4
		class="flex flex-col md:flex-row gap-x-8 justify-between md:items-center py-2 px-8 mb-2 md:mb-6 ml-[-2rem] bg-black-800">
		<span class="py-1 md:px-3 rounded text-white-300">{companyName}</span>
		<span class="flex flex-row gap-x-4 items-center text-lg font-medium text-white-700">
			{#if temporary}
				<span class="text-xs">(temporary contract)</span>
			{/if}
			<em class="font-serif">{startDate}</em>
			<iconify-icon class="text-2xl" icon="fluent:calendar-arrow-right-24-filled" />
			{#if endDate}
				<em class="font-serif">{endDate}</em>
			{:else}
				<em class="font-serif">Present</em>
			{/if}
		</span>
	</h4>
	<div
		class="flex flex-col md:flex-row gap-y-4 md:gap-x-12 p-4 md:p-6 rounded-tl-lg rounded-bl-lg bg-black-700">
		<div class="flex-shrink-0 md:w-1/2">
			<h5 class="mb-4 underline text-white-400">Accomplishments</h5>
			<slot name="accomplishments" />
		</div>
		<div class="border-r border-r-black-100" />
		<div class="flex-grow pr-6">
			<h5 class="mb-4 text-white-400 underline">Stack</h5>
			<div class="p-6 bg-black-200 rounded"><slot name="stack" /></div>
		</div>
	</div>
</div>
