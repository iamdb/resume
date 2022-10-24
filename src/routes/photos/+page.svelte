<script>
	import photos from './photos.json';
	import Image from '$lib/components/image.svelte';
</script>

<h1 class="leading-tight underline underline-offset-2">Music Photos</h1>

<p>
	From 2011 until 2017 I spent a lot of my nights taking photos at venues all around Los Angeles. I
	even made the <a href="/photos/latimes-weirdal">LA Times</a> (online &amp; print) once. These are a
	selection of my work.
</p>

<div class="grid grid-cols-2 gap-14">
	{#each photos as src}
		<Image src={`/photos/music/${src}`} meta={{ name: 'Test', location: 'test', date: 'date' }} />
	{/each}
</div>
