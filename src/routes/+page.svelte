<script>
  import { onMount } from "svelte";
  import { marked } from "marked";

  let readmeHtml = "";

  onMount(async () => {
    const url = "https://raw.githubusercontent.com/KaiPereira/KaiPereira/main/README.md";

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Could not fetch README :(, ${res.status}`);

      let result = await res.text();
      result = result.replaceAll("@", " (at) ");
      readmeHtml = marked.parse(result);
    } catch (error) {
      console.error(error.message);
      readmeHtml = "<p>Failed to load README.</p>";
    }
  });
</script>

<main>
  {@html readmeHtml}
</main>

<p>
  Check out all my projects on
  <a href="https://github.com/kaipereira" target="_blank" rel="noreferrer">GitHub</a>!
</p>

