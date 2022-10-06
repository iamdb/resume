<script lang="ts">
	export let progress = 0;
</script>

<div class="w-full h-4 rounded-lg bg-black-900">
	<div style={`width: ${progress}%`} class="h-full bg-blue-500 rounded-lg" />
</div>
