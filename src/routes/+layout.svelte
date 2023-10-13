<script lang="ts">
	import '@fontsource/abril-fatface';
	import '@fontsource/barlow/500.css';
	import '@fontsource/barlow/700.css';
	import '@fontsource/fira-mono/400.css';
	import '../app.postcss';
	import IconGithub from 'virtual:icons/simple-icons/github';
	import IconMastodon from 'virtual:icons/simple-icons/mastodon';
	import IconLinkedIn from 'virtual:icons/simple-icons/linkedin';
	import { page } from '$app/stores';
</script>

<div class="flex flex-col justify-between min-h-screen lg:pt-0">
	<nav class="mb-12 flex-row hidden lg:flex justify-between items-center">
		<a
			class="uppercase mr-2 flex-grow-0 self-stretch transition-colors px-3 bg-perry text-darkgrey text-center flex items-center
        justify-center text-lg font-bold"
			href="/">
			<span class="bg-khaki leading-none p-2 border-2 border-powder">DB</span>
		</a>
		<a
			class:border-perry={$page.url.pathname.startsWith('/about')}
			class:bg-powder={$page.url.pathname.startsWith('/about')}
			class="uppercase border-2 border-khaki hover:bg-powder flex items-center justify-center transition-colors flex-grow text-center px-6 py-3 text-lg font-bold"
			href="/about">About</a>
		<a
			class:border-perry={$page.url.pathname.startsWith('/resume')}
			class:bg-powder={$page.url.pathname.startsWith('/resume')}
			class="uppercase border-2 border-khaki hover:bg-powder flex items-center justify-center transition-colors flex-grow text-center px-6 py-3 text-lg font-bold"
			href="/resume">Resume</a>
		<a
			class:border-perry={$page.url.pathname.startsWith('/photos')}
			class:bg-powder={$page.url.pathname.startsWith('/photos')}
			class="uppercase border-2 border-khaki hover:bg-powder flex items-center justify-center transition-colors flex-grow text-center px-6 py-3 text-lg font-bold"
			href="/photos">Photography</a>
		<a
			class:border-perry={$page.url.pathname.startsWith('/brain-droppings')}
			class:bg-powder={$page.url.pathname.startsWith('/brain-droppings')}
			class="uppercase border-2 border-khaki hover:bg-powder flex items-center justify-center transition-colors text-center flex-grow px-6 py-3 text-lg font-bold"
			href="/brain-droppings">Writing</a>
	</nav>
	<div class="p-4">
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
