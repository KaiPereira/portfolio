<script>
	export let data;
</script>

<h1>My Journal</h1>
<p>I love writing about my experiences meeting new people and projects I'm working on, so here you can learn more about what I'm making and my life! - Kai</p>
<div class="flex flex-col gap-4 mt-10">
{#each data.posts as post}
	<div>
		<div class="flex gap-4">
			<h2 class="mt-0 text-lg"><a href={`/journal/${post.slug}`} class="text-black">{post.metadata.title}</a></h2>
			<p class="m-1">{post.metadata.date}</p>
		</div>
		<p class="mt-0">{post.metadata.description}</p>
	</div>
{/each}
</div>
