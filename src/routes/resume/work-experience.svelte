<script lang="ts">
	import { formatDate } from '$lib/util';
	import { stringToIcon } from '$lib/types/icons';
	import Icon from '@iconify/svelte';
	import Job from '$lib/components/job.svelte';
	import type { Job as JobType } from '$lib/types/resume';

	export let workExperience: JobType[];
</script>

<section>
	<h2 class="mb-24 underline underline-offset-2 font-serif font-normal text-center">
		Work Experience
	</h2>
	<div class="flex flex-col overflow-hidden gap-y-16">
		{#each workExperience as job}
			<Job
				companyName={job.name}
				startDate={formatDate(job.startDate)}
				endDate={job.endDate && formatDate(job.endDate)}
				temporary={job.contract}>
				<ul slot="accomplishments" class="list-disc list-inside">
					{#each job.accomplishments as immagoodboy}
						<li class="mb-4 leading-snug">{@html immagoodboy}</li>
					{/each}
				</ul>
				<div slot="stack" class="grid grid-cols-2 gap-y-4">
					{#each job.stack as techIcon}
						<div
							class="flex flex-row flex-grow-0 justify-center items-center last-of-type:mb-0 mr-2 md:justify-start">
							<Icon
								class="text-2xl text-lightblue align-middle mr-2"
								icon={stringToIcon(techIcon)} />
							<span class="bg-khaki/50 p-1 leading-none">{techIcon}</span>
						</div>
					{/each}
				</div>
			</Job>
		{/each}
	</div>
</section>
