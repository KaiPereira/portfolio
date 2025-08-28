import { marked } from "marked";

export async function load() {
	const url = "https://raw.githubusercontent.com/KaiPereira/KaiPereira/main/README.md";

	try {
		const res = await fetch(url);
		if (!res.ok) throw new Error("Failed to fetch README :(");

		let markdown = await res.text();
		markdown = markdown.replaceAll("@", " (at) ");

		const html = marked.parse(markdown);
		return { readmeHtml: html };
	} catch (error) {
		return {
			readmeHTML: "<p>Rocky nibbled on the server cables so the site is unable to load :(</p><img src='https://hc-cdn.hel1.your-objectstorage.com/s/v3/74584484766b750a3dee2dc4fa21fcd7c074a0b0_image_from_ios.jpg'></img>"
		}
	}
}
