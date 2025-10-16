<script lang="ts">
	let { children } = $props();
	import "../app.css"
</script>

<main class="flex justify-center py-10">
	<div class="w-full max-w-4xl">
		{@render children?.()}
	</div>
</main>

