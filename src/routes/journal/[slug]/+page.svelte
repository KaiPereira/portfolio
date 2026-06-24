<script>
	export let data;
	const { post } = data;

	$: jsonLd = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": post.metadata.title,
		"datePublished": post.metadata.date,
		"dateModified": post.metadata.date,
		"url": `https://kaipereira.com/journal/${post.slug}`,
		"description": post.metadata.description,
		"author": {
			"@type": "Person",
			"name": "Kai Pereira",
			"url": "https://kaipereira.com"
		}
	});
</script>

<svelte:head>
	<title>{post.metadata.title} - Kai Pereira</title>
	<meta name="description" content={post.metadata.description} />
	<meta property="og:title" content={post.metadata.title} />
	<meta property="og:description" content={post.metadata.description} />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<a href="/journal">[back to my journal]</a>

{#if post.isMain}
	<h1>{post.metadata.title}</h1>
	<p>{post.metadata.description}</p>
	<div class="chapters">
		<p>Radio</p><p>•</p>
		<p>Microwaves</p><p>•</p>
		<p>Infrared</p><p>•</p>
		<p>Visible</p><p>•</p>
		<p>Ultraviolet</p><p>•</p>
		<p>X-Rays</p><p>•</p>
		<p>Gamma Rays</p>
	</div>
{/if}

<div class="markdown">{@html post.content}</div>
