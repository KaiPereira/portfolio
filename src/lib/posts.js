import matter from "gray-matter";
import { marked } from "marked";

const files = import.meta.glob("/src/lib/posts/**/*.md", { eager: true, as: "raw" });

function parseMarkdown(raw, filepath) {
	const { data, content } = matter(raw);
	const parts = filepath.split("/");
	const filename = parts.at(-1);
	const folder = parts.at(-2);

	const isMain = filename === "main.md";

	return {
		filepath,
		filename,
		folder,
		isMain,
		slug: isMain ? folder : filename.replace(".md", ""),
		metadata: data,
		content: marked(content)
	};
}

const posts = Object.entries(files).map(([path, raw]) => parseMarkdown(raw, path));

export function getAllPosts() {
	console.log(posts);

	return posts.sort(
		(a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)
	);
}

export function getPostBySlug(slug) {
	return posts.find((post) => post.slug === slug);
}

