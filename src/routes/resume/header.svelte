<script lang="ts">
	import PageTitle from '$lib/components/page-title.svelte';
	import IconGithub from 'virtual:icons/simple-icons/github';
	import IconLinkedIn from 'virtual:icons/simple-icons/linkedin';
</script>

<section class="mb-12">
	<div class="flex flex-col items-stretch">
		<PageTitle>David Benjamin</PageTitle>
		<div class="flex flex-col md:flex-row items-center justify-around lg:justify-start lg:gap-x-72">
			<p class="m-0 text-2xl font-bold">Software Engineer</p>
			<div class="flex flex-row items-center justify-end text-lg gap-x-2">
				<a class="inline font-bold" href="mailto:hireme@iamdb.co">hireme@iamdb.co</a>
				<a
					aria-label="Link to David Benjamin's Github profile"
					class="hover:bg-lightkhaki p-1 transition-colors rounded"
					href="https://github.com/iamdb"
					target="_blank"
					rel="noreferrer noopener">
					<IconGithub />
				</a>
				<a
					aria-label="Link to David Benjamin's LinkedIn profile"
					class="hover:bg-lightkhaki p-1 transition-colors rounded"
					href="https://www.linkedin.com/in/davidabenjamin"
					target="_blank"
					rel="noreferrer noopener">
					<IconLinkedIn />
				</a>
			</div>
		</div>
		<p class="mt-12 mb-0 text-lg md:text-xl bg-lightkhaki py-4 px-6 rounded-lg">
			I am an experienced software engineer seeking a full-time position. I take pride in writing
			reliable, performant and maintainable software.
		</p>
	</div>
</section>
<section class="mb-32">
	<h2 class="mb-8 underline underline-offset-2 font-serif font-normal">Career Highlights</h2>
	<ul class="text-lg md:text-xl list-disc list-inside bg-lightkhaki px-6 py-4 rounded-lg">
		<li>10+ years experience writing web applications</li>
		<li>5+ years of experience with Linux as both a desktop and server OS.</li>
	</ul>
</section>

