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

<a href="/journal">[Back to my Journal]</a>
<div class="markdown">{@html data.post.content}</div>
