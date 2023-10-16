<script lang="ts">
	import PageTitle from '$lib/components/page-title.svelte';
	import Icon from '@iconify/svelte';
	import IconGithub from 'virtual:icons/simple-icons/github';
	import IconLinkedIn from 'virtual:icons/simple-icons/linkedin';
</script>

<section class="relative">
	<div class="flex flex-col items-stretch">
		<PageTitle>David Benjamin</PageTitle>
		<div class="flex flex-col justify-around items-center md:flex-row lg:gap-x-72 lg:justify-start">
			<p class="m-0 text-2xl font-bold">Software Engineer</p>
			<div class="flex flex-row gap-x-2 justify-end items-center text-lg">
				<a class="inline font-bold" href="mailto:hireme@iamdb.co">hireme@iamdb.co</a>
				<a
					aria-label="Link to David Benjamin's Github profile"
					class="p-1 rounded transition-colors hover:bg-lightkhaki"
					href="https://github.com/iamdb"
					target="_blank"
					rel="noreferrer noopener">
					<IconGithub />
				</a>
				<a
					aria-label="Link to David Benjamin's LinkedIn profile"
					class="p-1 rounded transition-colors hover:bg-lightkhaki"
					href="https://www.linkedin.com/in/davidabenjamin"
					target="_blank"
					rel="noreferrer noopener">
					<IconLinkedIn />
				</a>
			</div>
		</div>
		<p class="py-4 px-6 mt-16 mb-0 text-lg rounded-lg border-4 md:text-xl border-perry bg-powder">
			I am an experienced software engineer who loves building applications for humans and computers
			alike. I can make any small-to-large project a reality or lead a team to make it happen.
		</p>
	</div>
	<div class="absolute top-0 right-0">
		<a
			class="font-bold leading-none uppercase text-lg pl-4 hover:bg-perry transition-colors pr-3 py-2 bg-powder border-2 rounded-md border-perry"
			href="/DavidBenjamin_resume.pdf">
			Download PDF
			<Icon height="1.5em" class="inline-block align-middle" icon="mdi:download-circle" /></a>
	</div>
</section>
