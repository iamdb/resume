<script lang="ts">
	import 'iconify-icon';

	export let companyName: string;
	export let startDate: string;
	export let endDate: string | undefined;
	export let temporary = false;
</script>

<div class="overflow-hidden">
	<div class="relative flex flex-col lg:flex-row justify-between items-baseline mb-4">
		<h4
			class="flex uppercase bg-blue text-lightkhaki leading-tight px-2 flex-col items-baseline md:flex-row gap-x-1 justify-between">
			{companyName}
			{#if temporary}
				<span class="font-normal text-xs">(temporary contract)</span>
			{/if}
		</h4>
		<span class="flex flex-row gap-x-4 items-center text-sm md:text-lg">
			{startDate}
			<iconify-icon class="text-2xl" icon="fluent:calendar-arrow-right-24-filled" />
			{#if endDate}
				{endDate}
			{:else}
				Present
			{/if}
		</span>
	</div>
	<div class="rounded-xl grid md:grid-cols-[auto,auto] bg-lightkhaki p-8 md:py-4">
		<div class="border-b md:border-b-0 md:border-r border-khaki pb-8 md:pb-0 md:pr-8">
			<h5 class="mb-4 underline">Accomplishments</h5>
			<slot name="accomplishments" />
		</div>
		<div class="pt-8 md:pt-0 md:pl-8">
			<h5 class="mb-4 underline text-center md:text-left">Stack</h5>
			<slot name="stack" />
		</div>
	</div>
</div>
