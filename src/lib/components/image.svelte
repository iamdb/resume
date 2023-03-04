<script lang="ts">
	export let alt: string;
	export let src: string;
</script>

<div class="relative h-full overflow-hidden">
	<img decoding="async" loading="lazy" class="object-cover block w-full h-full" {alt} {src} />
</div>
