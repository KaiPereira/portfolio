<script lang="ts">
	let { children } = $props();
</script>

<main class="flex justify-center py-10">
	<div class="w-full max-w-4xl">
		{@render children()}
	</div>
</main>

