<script>
	import 'iconify-icon';
	import Skill from '../../components/skill.svelte';
	import Section from '../../components/section.svelte';
	import TechIcon from '../../components/tech-icon.svelte';
</script>

<header class="mb-16">
	<h1 class="leading-tight underline">David Benjamin</h1>
	<div class="flex flex-row gap-x-4 items-baseline">
		<h3>Software Engineer</h3>
		<a class="text-2xl font-bold" href="mailto:hireme@iamdb.co">hireme@iamdb.co</a>
	</div>
	<p class="mt-16 text-xl">
		I am an experienced software engineer seeking a full-time <a href="/about">non-full-stack</a> position
		writing code in Rust or Go. I take pride in writing reliable and performant software in code that
		is understandable.
	</p>
</header>

<Section>
	<h2 class="mb-12 underline">Career Highlights</h2>
	<ul class="text-xl list-disc list-inside">
		<li>10+ years experience writing high quality code.</li>
		<li>5+ years of experience with Linux as both a desktop and server OS.</li>
	</ul>
</Section>

<Section>
	<h2 class="mb-12 underline">Skills</h2>
	<div class="flex flex-col gap-y-8 md:flex-row md:gap-y-0 md:gap-x-8">
		<div class="md:w-1/2">
			<h3>Languages</h3>
			<div class="flex flex-col gap-y-8 p-8 mt-4 rounded bg-black-200">
				<Skill icon="vscode-icons:file-type-rust" name="Rust" progress={60} />
				<Skill icon="vscode-icons:file-type-go-gopher" name="Go" progress={60} />
				<Skill icon="vscode-icons:file-type-typescript-official" name="TypeScript" progress={80} />
				<Skill icon="vscode-icons:file-type-css" name="CSS" progress={90} />
			</div>
		</div>
		<div class="md:w-1/2">
			<h3>Other Tech</h3>
			<div
				class="flex flex-row flex-wrap gap-y-8 gap-x-16 justify-center p-8 mt-4 rounded text-white-600 align-center bg-black-200"
			>
				<TechIcon icon="logos:linux-tux" name="Linux" />
				<TechIcon icon="logos:opencv" name="OpenCV" />
				<TechIcon icon="logos:ffmpeg-icon" name="ffmpeg &bull; libav" />
				<TechIcon icon="logos:webrtc" name="WebRTC" />
				<TechIcon icon="logos:aws" />
				<TechIcon icon="logos:kubernetes" name="Kubernetes" />
				<TechIcon icon="logos:docker" />
				<TechIcon icon="logos:neovim" />
			</div>
		</div>
	</div>
</Section>

<Section>
	<h3 class="mb-12 underline">Recent Experience</h3>
	<div class="flex flex-col gap-y-8 p-8 bg-black-200">
		<div>
			<h4>Little Cinema Digital</h4>
			<p class="flex flex-row gap-x-4 items-center mb-6 text-lg font-medium">
				<em>February 2022</em>
				<iconify-icon icon="el:arrow-right" />
				<em>August 2022</em>
				<span class="text-xs">(temporary contract)</span>
			</p>
			<ul class="flex flex-col gap-y-2 mt-2 text-xl list-disc list-inside">
				<li>
					Researched and wrote RFC for a WebRTC deployment with multiple options and the pros and
					cons of each.
				</li>
				<li>
					Designed a WebRTC infrastructure based around <a
						href="https://livekit.io/"
						target="_blank"
						rel="noreferrer">LiveKit</a
					>
				</li>
				<li>Gave presentation on WebRTC technology to engineering team</li>
				<li>
					Constructed UI components within their current application to support the WebRTC
					infrastructure
				</li>
				<li>Wrote AWS CDK to deploy the LiveKit infrastructure along with their current stack</li>
				<li>Transferred knowledge to team when contract ended</li>
			</ul>
		</div>
		<hr />
		<div>
			<h4>Supergroup</h4>
			<p class="flex flex-row gap-x-4 items-center mb-6 text-lg font-medium">
				<em>November 2019</em><iconify-icon icon="el:arrow-right" /><em>November 2021</em>
			</p>
			<ul class="flex flex-col gap-y-2 text-xl list-disc list-inside">
				<li>Delivered quality code for client projects</li>
				<li>Built new and maintained current features on Playboy.com</li>
				<li>Transferred knowledge to new team at Playboy.com via working sessions</li>
				<li>
					Built <a href="https://www.reesesbookclub.com" target="_blank" rel="noreferrer"
						>reesesbookclub.com</a
					>
				</li>
				<li>Built tool to search subreddits for keywords and sentiment</li>
				<li>Redesigned company stack to be easier to deploy and more developer friendly</li>
			</ul>
		</div>
		<hr />
		<div>
			<h4>EsportsOne</h4>
			<p class="flex flex-row gap-x-4 items-center mb-6 text-lg font-medium">
				<em>April 2018</em><iconify-icon icon="el:arrow-right" /><em>November 2019</em>
			</p>
			<ul class="flex flex-col gap-y-2 text-xl list-disc list-inside">
				<li>Delivered quality code for client projects</li>
				<li>Built new and maintained current features on Playboy.com</li>
				<li>Transferred knowledge to new team at Playboy.com via working sessions</li>
				<li>
					Built <a href="https://www.reesesbookclub.com" target="_blank" rel="noreferrer"
						>reesesbookclub.com</a
					>
				</li>
				<li>Built tool to search subreddits for keywords and sentiment</li>
				<li>Redesigned company stack to be easier to deploy and more developer friendly</li>
			</ul>
		</div>
	</div>
</Section>
