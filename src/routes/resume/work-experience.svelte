<script lang="ts">
	import { formatDate } from '$lib/util';
	import { stringToIcon } from '$lib/types/icons';
	import Icon from '@iconify/svelte';
	import Job from '$lib/components/job.svelte';
	import type { Job as JobType } from '$lib/types/resume';

	export let workExperience: JobType[];
</script>

<section>
	<h2 class="mb-12 font-serif font-normal text-center underline lg:mb-24 underline-offset-2">
		Work Experience
	</h2>
	<div class="flex overflow-hidden flex-col gap-y-16">
		{#each workExperience as job}
			<Job
				companyName={job.name}
				jobTitle={job.title}
				startDate={formatDate(job.startDate)}
				endDate={job.endDate && formatDate(job.endDate)}
				temporary={job.contract}>
				<ul slot="accomplishments" class="list-disc list-inside">
					{#each job.accomplishments as immagoodboy}
						<li class="mb-4 ml-0 leading-snug">{@html immagoodboy}</li>
					{/each}
				</ul>
				<div slot="stack" class="grid grid-cols-2 gap-y-4">
					{#each job.stack as techIcon}
						<div
							class="flex flex-row flex-grow-0 justify-start items-center mr-2 last-of-type:mb-0">
							<Icon
								class="p-1 mr-2 text-3xl align-middle rounded-full border opacity-80 border-lightgrey bg-lightkhaki text-lightgrey"
								icon={stringToIcon(techIcon)} />
							<span class="p-1 leading-none bg-powder">{techIcon}</span>
						</div>
					{/each}
				</div>
			</Job>
		{/each}
	</div>
</section>
