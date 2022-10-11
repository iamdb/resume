<script lang="ts">
  import "iconify-icon";

  export let companyName: string;
  export let startDate: string;
  export let endDate: string;
  export let temporary = false;
</script>

<div
  class="overflow-hidden pb-12 pl-8 border-r border-l last:border-b text-white-500 border-grey-700"
>
  <h4
    class="flex flex-row gap-x-8 justify-between items-center py-2 px-8 mb-6 border-t border-b border-b-grey-100 border-grey-700 ml-[-2rem] bg-black-800"
  >
    <span class="py-1 px-3 rounded text-white-300">{companyName}</span>
    <span
      class="flex flex-row gap-x-4 items-center text-lg font-medium text-white-700"
    >
      {#if temporary}
        <span class="text-xs">(temporary contract)</span>
      {/if}
      <em class="font-serif">{startDate}</em>
      <iconify-icon icon="fluent:calendar-arrow-right-24-filled" />
      <em class="font-serif">{endDate}</em>
    </span>
  </h4>
  <div
    class="flex flex-row gap-x-12 p-6 rounded-tl-lg rounded-bl-lg bg-black-700"
  >
    <div class="flex-shrink-0 w-1/2">
      <h5 class="mb-4 text-green-100 underline">Accomplishments</h5>
      <slot name="accomplishments" />
    </div>
    <div class="border-r border-r-black-100" />
    <div class="flex-grow pr-6 rounded">
      <h5 class="mb-4 text-green-100 underline">Stack</h5>
      <div class="p-6 bg-black-200"><slot name="stack" /></div>
    </div>
  </div>
</div>
