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

<div class="flex gap-6 mt-6 buttons88x31">
	<div class="relative h-[31px] w-[88px] group">
		<img src="/images/88x31/88x31 personal.svg" class="absolute inset-0 group-hover:invisible" />
		<img src="/images/88x31/88x31 personal.gif" class="invisible absolute [image-rendering:pixelated] group-hover:visible" />
	</div>
	<img src="/images/88x31/88x31 asic.gif" />
	<img src="/images/88x31/88x31 hackclub.png" />
	<img src="/images/88x31/88x31 neovim.png" />
	<img src="/images/88x31/88x31 human.svg" />
</div>
