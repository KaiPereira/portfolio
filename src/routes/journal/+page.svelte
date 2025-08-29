<script>
	export let data;
</script>

<main class="flex justify-center py-10">
	<div class="w-full max-w-4xl">
		<h1>My Journal</h1>
		<p>I love writing about my experiences meeting new people and projects I'm working on, so here you can learn more about what I'm making and my life! - Kai</p>
		<div class="flex flex-col gap-4 mt-10">
		{#each data.posts as post}
			<div>
				<h2 class="mt-0 text-lg">
					<a href={`/journal/${post.slug}`} class="text-black">{post.metadata.title}</a>
				</h2>
				<p>{post.metadata.description}</p>
			</div>
		{/each}
		</div>
	</div>
</main>
