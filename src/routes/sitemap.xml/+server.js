import { getAllPosts } from "$lib/posts.js";

const SITE_URL = "https://kaipereira.com";

export async function GET() {
	const posts = getAllPosts();

	const pages = [
		{ loc: `${SITE_URL}/`, priority: 1.0 },
		{ loc: `${SITE_URL}/journal`, priority: 0.8 },

		...posts.map((post) => ({
			loc: `${SITE_URL}/journal/${post.slug}`,
			lastmod: new Date(post.metadata.date).toISOString(),
			priority: 0.7
		}))
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `<url>
	<loc>${page.loc}</loc>
	${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
	<priority>${page.priority}</priority>
</url>`
	)
	.join("\n")}
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml"
		}
	});
}
