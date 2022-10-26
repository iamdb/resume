<script type="ts">
	import pets from './pets.jpg';
</script>

<div class="flex flex-row items-baseline mb-12 justify-between">
	<h1>About Me <sub class="text-base md:text-lg">(David Benjamin)</sub></h1>
	<div
		class="vignette rounded-full overflow-hidden aspect-video w-3/12 shadow-inner shadow-black-900"
	>
		<img src={pets} alt="Ozzie &amp; Sharon" class="w-full h-full object-cover object-top" />
	</div>
</div>
<div><slot /></div>
