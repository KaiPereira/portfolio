import { getAllPosts } from "$lib/posts.js";

const SITE_URL = "https://kaipereira.com";

export async function GET() {
	const posts = getAllPosts();

	const toAtomDate = (d) => new Date(d).toISOString();
	const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

	const updated = posts.reduce((latest, p) =>
		p.metadata.date > latest ? p.metadata.date : latest, posts[0].metadata.date
	);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
		<feed xmlns="http://www.w3.org/2005/Atom">
			<title>Kai Pereira's Journal</title>
			<id>https://kaipereira.com/</id>
			<link rel="alternate" href="https://kaipereira.com/"/>
			<link rel="self" href="https://kaipereira.com/journal/feed.xml"/>
			<updated>${toAtomDate(updated)}</updated>
			<author>
				<name>Kai Pereira</name>
			</author>
			${posts.map((post) => `
				<entry>
					<title>${post.metadata.title}</title>
					<link rel="alternate" type="text/html" href="${SITE_URL}/journal/${post.slug}"/>
					<id>${SITE_URL}/journal/${post.slug}</id>
					<published>${toAtomDate(post.metadata.date)}</published>
					<updated>${toAtomDate(post.metadata.date)}</updated>
					<content type="html">${
						escapeHtml(
							post.content.replace(
							  /src="\/images\//g,
							  `src="${SITE_URL}/images/`
							)
						)
					}</content>
				</entry>
			`).join("\n")}
		</feed>`.trim();

	return new Response(xml, {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8"
		}
	});
}
