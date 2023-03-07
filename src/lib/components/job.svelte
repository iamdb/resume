<script lang="ts">
	export let companyName: string;
	export let startDate: string;
	export let endDate: string | undefined;
	export let temporary = false;
</script>

<div class="overflow-hidden">
	<div class="relative flex flex-col lg:flex-row justify-between items-baseline mb-4">
		<p class="m-0 text-lg md:text-xl xl:text-2xl">
			<span
				class="uppercase bg-lightblue/80 text-darkgrey/80 font-bold border-2 border-blue/50 leading-tight px-2"
				>{companyName}</span>
			{#if temporary}
				<span class="font-normal text-xs align-baseline">(temporary contract)</span>
			{/if}
		</p>
		<span class="flex flex-row gap-x-2 mt-2 lg:mt-0 items-center md:text-lg">
			<span class="rounded-lg px-1 text-darkgrey/90">{startDate}</span>
			<span class="text-darkgrey/90">to</span>
			<span class="px-1 text-darkgrey/90">
				{#if endDate}
					{endDate}
				{:else}
					Present
				{/if}
			</span>
		</span>
	</div>
	<div
		class="rounded-xl border-4 border-lightblue border-opacity-50 grid md:grid-cols-[2fr,1fr] bg-lightkhaki p-8 md:py-4">
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
