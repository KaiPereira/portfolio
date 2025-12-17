<script>
	export let data;
	const { post } = data;
</script>

<svelte:head>
	<title>{post.metadata.title} - Kai Pereira</title>
	<meta name="description" content={post.metadata.description} />
	<meta property="og:title" content={post.metadata.title} />
	<meta property="og:description" content={post.metadata.description} />
</svelte:head>

<a href="/journal">[back to my journal]</a>

{#if post.isMain}
	<h1>{post.metadata.title}</h1>
	<p>{post.metadata.description}</p>
{/if}

<div class="markdown">{@html post.content}</div>
