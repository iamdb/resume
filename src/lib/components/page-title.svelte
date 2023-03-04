<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let y: number,
		offsetHeight: number,
		offsetWidth: number,
		innerWidth: number,
		innerHeight: number,
		title: HTMLElement;

	let rect: DOMRect | null;

	$: rotateZ = y < 90 ? y : 90;
	$: finalPos = innerHeight - offsetWidth - offsetHeight;
	$: xPos = y / 1.5 < innerHeight - offsetWidth ? y * 1.5 : y + finalPos + (rect?.top || 0);
	$: yPos = y < offsetHeight / 2 ? y : (rect?.left || 0) - offsetHeight - 16;
	$: transform = innerWidth > 640 ? `rotateZ(${rotateZ}deg) translate(${xPos}px, ${yPos}px)` : '';

	const updateRect = () => {
		if (title?.parentElement) {
			rect = title.parentElement.getBoundingClientRect();
		}
	};

	const onScroll = () => {
		if (y < 90) {
			updateRect();
		}
	};

	onMount(() => {
		updateRect();

		window.addEventListener('resize', updateRect);
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('resize', updateRect);
			window.removeEventListener('scroll', onScroll);
		};
	});

	afterNavigate(() => {
		updateRect();
	});
</script>

<svelte:window bind:scrollY={y} bind:innerWidth bind:innerHeight />

<h1
	bind:this={title}
	bind:offsetHeight
	bind:offsetWidth
	class:text-lightkhaki={y > 0}
	class:opacity-50={y > 0 && y < 90}
	class="page-title inline-block font-serif font-normal transition-colors origin-top-left leading-none underline underline-offset-2"
	style:transform>
	<slot />
</h1>
