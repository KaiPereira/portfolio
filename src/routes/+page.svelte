<script>
	export let data;

	const jsonLd = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Kai Pereira",
		"url": "https://kaipereira.com",
		"sameAs": [
			"https://github.com/KaiPereira"
		]
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<main>
	{@html data.readmeHtml}
</main>

<p>Check out all my projects on <a href="https://github.com/kaipereira" target="_blank" rel="noreferrer">GitHub</a> or take a gander at my <a href="/journal">journal</a>!</p>
