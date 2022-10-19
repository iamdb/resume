<script type="ts">
	import 'iconify-icon';
	import TechIcon from '$lib/components/tech-icon.svelte';
	import WorkHistory from '$lib/components/work-history.svelte';
	import Languages from '$lib/components/languages.svelte';
	import type { CodingActivity, Language } from './+page.server';
	import { Icon } from '$lib/types/icons';

	export let data: { languages: Language[]; activity: CodingActivity };

	const { languages, activity } = data;
</script>

<div class="flex flex-col gap-y-24">
	<header>
		<h1 class="leading-tight underline underline-offset-2">David Benjamin</h1>
		<div class="flex flex-row gap-x-4 items-baseline">
			<h3>Software Engineer</h3>
			<a class="text-2xl font-bold" href="mailto:hireme@iamdb.co">hireme@iamdb.co</a>
		</div>
		<p class="mt-16 mb-0 text-xl">
			I am an experienced software engineer seeking a full-time <a href="/about">non-full-stack</a> position
			writing code in Rust or Go. I take pride in writing reliable and performant software in code that
			is understandable. I have always had a passion for audio and video and would like my work to be
			involved with it in some way.
		</p>
	</header>

	<section>
		<h2 class="mb-8 underline underline-offset-2">Career Highlights</h2>
		<ul class="text-xl list-disc list-inside">
			<li>10+ years experience writing high quality code.</li>
			<li>5+ years of experience with Linux as both a desktop and server OS.</li>
		</ul>
	</section>

	<section>
		<h2 class="mb-8 underline underline-offset-2">Skills</h2>
		<div class="flex flex-col gap-y-8 md:flex-row md:gap-y-0 md:gap-x-8 text-white-500">
			<div class="md:w-1/2">
				<div class="flex flex-row justify-between items-center">
					<h3>Languages</h3>
					<div class="flex flex-row items-center gap-x-4">
						<button class="bg-grey-500 px-2 py-1 rounded hover:bg-grey-400"> all time </button>
						<button class="bg-grey-500 px-2 py-1 rounded hover:bg-grey-400"> last year </button>
					</div>
				</div>
				<Languages {activity} {languages} />
			</div>
			<div class="md:w-1/2">
				<h3>Other Tech</h3>
				<div
					class="flex flex-row flex-wrap gap-y-8 gap-x-16 justify-center p-8 mt-4 rounded text-white-600 align-center bg-black-200"
				>
					<TechIcon icon={Icon.Linux} name="Linux" />
					<TechIcon icon={Icon.Opencv} name="OpenCV" />
					<TechIcon icon={Icon.Ffmpeg} name="ffmpeg &bull; libav" />
					<TechIcon icon={Icon.WebRtc} name="WebRTC" />
					<TechIcon icon={Icon.Aws} />
					<TechIcon icon={Icon.Kubernetes} name="Kubernetes" />
					<TechIcon icon={Icon.Docker} />
					<TechIcon icon={Icon.Neovim} />
				</div>
			</div>
		</div>
	</section>

	<section>
		<h2 class="mb-8 underline underline-offset-2">Recent Work Experience</h2>
		<div class="flex overflow-hidden flex-col gap-y-8">
			<WorkHistory
				companyName="Little Cinema Digital"
				startDate="Feburary 2022"
				endDate="August 2022"
				temporary
			>
				<ul slot="accomplishments" class="flex flex-col gap-y-2 list-disc list-inside">
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
				<div slot="stack" class="flex flex-row flex-wrap gap-6 justify-center items-center">
					<TechIcon icon="vscode-icons:file-type-typescript-official" name="Typescript" />
					<TechIcon icon="logos:webrtc" name="WebRTC" />
					<TechIcon icon="logos:kubernetes" name="Kubernetes" />
					<TechIcon icon="logos:aws" />
				</div>
			</WorkHistory>
			<WorkHistory companyName="Supergroup" startDate="November 2019" endDate="November 2021">
				<ul slot="accomplishments" class="flex flex-col gap-y-2 list-disc list-inside">
					<li>Delivered quality code for client projects</li>
					<li>Built new and maintained current features for Playboy.com</li>
					<li>Transferred knowledge to new team at Playboy.com via working sessions</li>
					<li>
						Built <a href="https://www.reesesbookclub.com" target="_blank" rel="noreferrer"
							>reesesbookclub.com</a
						>
					</li>
					<li>Built tool to search subreddits for keywords and sentiment</li>
					<li>Redesigned company stack to be easier to deploy and more developer friendly</li>
				</ul>
				<div slot="stack" class="flex flex-row flex-wrap gap-6 justify-center items-center">
					<TechIcon icon="vscode-icons:file-type-typescript-official" name="Typescript" />
					<TechIcon icon="logos:webrtc" name="WebRTC" />
					<TechIcon icon="logos:kubernetes" name="Kubernetes" />
					<TechIcon icon="logos:aws" />
				</div>
			</WorkHistory>
			<WorkHistory companyName="EsportsOne" startDate="April 2018" endDate="November 2019">
				<ul slot="accomplishments" class="flex flex-col gap-y-2 list-disc list-inside">
					<li>
						Built a UI dashboard to display real-time information from a League of Legends computer
						vision processor
					</li>
					<li>
						Built a Twitch.tv extension, both ui and backend, to display real-time data about the
						League of Legends match currently being played on stream
					</li>
					<li>
						Rebuilt original computer vision processor, basically converting it from C# and needing
						to be manually operated through Remote Desktop to a Go codebase with higher performance
						and much lower resource requirements.
					</li>
				</ul>
				<div slot="stack" class="flex flex-row flex-wrap gap-6 justify-center items-center">
					<TechIcon icon="vscode-icons:file-type-typescript-official" name="Typescript" />
					<TechIcon icon="logos:opencv" name="OpenCV" />
					<TechIcon icon="logos:ffmpeg-icon" name="ffmpeg &bull; libav" />
					<TechIcon icon="logos:aws" />
				</div>
			</WorkHistory>
		</div>
	</section>
</div>
