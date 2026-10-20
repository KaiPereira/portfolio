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
	<title>Kai Pereira :D</title>
	<meta name="description" content="Hey there, I'm Kai! I'm a 18 year old maker from Canada hacking on PCB's and building hardware!" />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<main>
	{@html data.readmeHtml}
</main>

<p>Check out all my projects on <a href="https://github.com/kaipereira" target="_blank" rel="noreferrer">GitHub</a> or take a gander at my <a href="/journal">journal</a>!</p>
