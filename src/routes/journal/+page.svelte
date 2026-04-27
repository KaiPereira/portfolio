<script>
	export let data;
</script>

<svelte:head>
	<title>Journal - My Life Experiences and Projects</title>
	<meta name="description" content="This is a recollection of cool experiences I've had in my life, random stuff I find interesting, and projects I've made!" />
</svelte:head>

<h1>My Journal</h1>
<a href="/">[Back to my Homepage]</a>
<p>I love writing about my experiences meeting new people and projects I'm working on, so here you can learn more about what I'm making and my life! - Kai</p>
<div class="flex flex-col gap-4 mt-10">
{#each data.posts as post}
	<div>
		<div class="flex gap-4 items-center mb-2">
			<h2 class="m-0 text-lg"><a href={`/journal/${post.slug}`} class="!text-main no-hover">{post.metadata.title}</a></h2>
			<p class="m-1">{post.metadata.date}</p>
		</div>
		<p class="mt-0">{post.metadata.description}</p>
	</div>
{/each}
</div>
