<script>
	import 'iconify-icon';
	import { Icon } from '$lib/types/icons';
</script>

<h1 class="text-8xl font-bold leading-tight">Hi</h1>
<div>
	<p class="text-2xl">
		My name is <a href="/about" class="font-bold">David Benjamin</a>.
	</p>
	<p class="text-2xl">
		I am a software engineer with <a class="font-bold" href="/resume">over a decade</a> of experience
		building dependable software.
	</p>
</div>
<div class="flex flex-row gap-8 mt-8 mb-24 flex-wrap-1">
	<a
		href="http://github.com/iamdb/hifi.rs"
		class="flex flex-col justify-between px-8 py-4 w-1/4 no-underline bg-green-500 rounded underline-offset-2 aspect-square"
		target="_blank"
		rel="noreferrer"
	>
		<div>
			<h4 class="mb-4 text-2xl font-bold underline text-black-300">hifi.rs</h4>
			<p class="text-grey-800">
				A high resolution audio player for the terminal, powered by Qobuz.
			</p>
		</div>
		<div>
			<iconify-icon class="text-4xl text-grey-800" icon={Icon.Rust} />
		</div>
	</a>
	<a
		href="http://github.com/iamdb/stream-cv"
		class="flex flex-col justify-between py-4 px-8 w-1/4 no-underline bg-green-500 rounded aspect-square"
		target="_blank"
		rel="noreferrer"
	>
		<div>
			<h4 class="mb-4 text-2xl font-bold underline underline-offset-2 text-black-300">stream-cv</h4>
			<p class="text-grey-800">
				A prototype computer vision stream processor. Takes an online stream, extracts frames,
				processes through OpenCV and outputs the resulting data.
			</p>
		</div>
		<div>
			<iconify-icon class="text-4xl text-grey-800" icon={Icon.Rust} />
		</div>
	</a>
</div>

<p class="text-2xl">
	In addition to software development, I was a <a class="font-bold" href="/photos"
		>rabid concert photographer</a
	> for many years in Los Angeles.
</p>
