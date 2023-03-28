<script lang="ts">
	import '@fontsource/abril-fatface';
	import '@fontsource/barlow/500.css';
	import '@fontsource/barlow/700.css';
	import '@fontsource/fira-mono/400.css';
	import '../app.postcss';
	import IconGithub from 'virtual:icons/simple-icons/github';
	import IconMastodon from 'virtual:icons/simple-icons/mastodon';
	import IconLinkedIn from 'virtual:icons/simple-icons/linkedin';
</script>

<div class="flex flex-col justify-between px-4 min-h-screen lg:pt-0">
	<div>
		<slot />
	</div>
	<footer class="flex flex-col justify-center items-center pb-12 mt-24">
		<p class="text-sm leading-none text-center text-grey-500">&copy; 2023 David Benjamin</p>
		<div class="flex flex-row gap-x-4">
			<a
				aria-label="A link to my Github profile."
				class="p-1 rounded transition-colors hover:bg-lightkhaki"
				href="https://github.com/iamdb"
				target="_blank"
				rel="noreferrer noopener">
				<IconGithub />
			</a>
			<a
				aria-label="A link to my Mastodon profile."
				class="p-1 rounded transition-colors hover:bg-lightkhaki"
				target="_blank"
				rel="me noopener noreferrer"
				href="https://hachyderm.io/@db">
				<IconMastodon />
			</a>
			<a
				aria-label="A link to my LinkedIn profile."
				class="p-1 rounded transition-colors hover:bg-lightkhaki"
				href="https://www.linkedin.com/in/davidabenjamin"
				target="_blank"
				rel="noreferrer noopener">
				<IconLinkedIn />
			</a>
		</div>
	</footer>
</div>
