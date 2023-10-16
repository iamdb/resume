<script lang="ts">
	export let companyName: string;
	export let jobTitle: string;
	export let startDate: string;
	export let endDate: string | undefined;
	export let temporary = false;
</script>

<div class="overflow-hidden">
	<div class="flex relative flex-col justify-between items-center lg:items-start mb-4 lg:flex-row">
		<p
			class="m-0 text-lg md:text-xl xl:text-2xl flex flex-col lg:flex-row lg:gap-x-8 justify-between w-full lg:w-auto items-center">
			<span
				class="px-2 font-bold leading-tight uppercase border-2 bg-powder text-lightgrey border-perry"
				>{companyName}</span>
			<span class="text-[0.85em]">{jobTitle}</span>
			{#if temporary}
				<span class="text-xs font-normal align-baseline">temporary contract</span>
			{/if}
		</p>
		<span class="flex flex-row gap-x-2 items-center mt-2 text-sm md:text-lg lg:mt-0">
			<span class="px-1 rounded-lg text-lightgrey">{startDate}</span>
			<span class="text-lightgrey">to</span>
			<span class="px-1 text-lightgrey">
				{#if endDate}
					{endDate}
				{:else}
					Present
				{/if}
			</span>
		</span>
	</div>
	<div class="rounded-xl border-4 border-perry grid md:grid-cols-[1fr,auto] bg-powder p-8 md:py-4">
		<div class="pb-8 border-b md:pr-8 md:pb-0 md:border-b-0 md:border-r border-khaki">
			<h5 class="mb-4 underline">Accomplishments</h5>
			<slot name="accomplishments" />
		</div>
		<div class="pt-8 md:pt-0 md:pl-8">
			<h5 class="mb-4 text-left underline">Stack</h5>
			<slot name="stack" />
		</div>
	</div>
</div>
