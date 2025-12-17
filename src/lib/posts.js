import matter from "gray-matter";
import { marked } from "marked";

const files = import.meta.glob("/src/lib/posts/**/*.md", { eager: true, as: "raw" });

function parseMarkdown(raw, filepath) {
	const { data, content } = matter(raw);
	const filepathArray = filepath.split("/");
	const isSeries = filepathArray[filepathArray.length - 1] == "main.md";

	return {
		slug: isSeries ? filepathArray[filepathArray.length - 2] : filepathArray[filepathArray.length - 1].replace(".md", ""),
		metadata: data,
		content: marked(content),
		isSeries: isSeries
	};
}

const posts = Object.entries(files).map(([path, raw]) => parseMarkdown(raw, path));

export function getAllPosts() {
	return posts.sort(
		(a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)
	);
}

export function getPostBySlug(slug) {
	return posts.find((post) => post.slug === slug);
}

