<script lang="ts">
	import PageTitle from '$lib/components/page-title.svelte';
	import IconGithub from 'virtual:icons/simple-icons/github';
	import IconLinkedIn from 'virtual:icons/simple-icons/linkedin';
</script>

<section>
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
		<p
			class="py-4 px-6 mt-16 mb-0 text-lg rounded-lg border-4 border-opacity-50 md:text-xl border-lightblue bg-lightkhaki">
			I am an experienced software engineer seeking a full-time position. I take pride in writing
			reliable, performant and maintainable software.
		</p>
	</div>
</section>
