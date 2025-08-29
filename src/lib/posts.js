import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDir = path.join(process.cwd(), "src/lib/posts");

export function getAllPosts() {
	return fs.readdirSync(postsDir)
		.map((filename) => {
			const filePath = path.join(postsDir, filename);
			const fileContent = fs.readFileSync(filePath, "utf-8");
			const { data, content } = matter(fileContent);

			return {
				slug: filename.replace(".md", ""),
				metadata: data,
				content: marked(content)
			};
		})
		.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
}

export function getPostBySlug(slug) {
	const filePath = path.join(postsDir, slug + ".md");
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);

	return {
		slug,
		metadata: data,
		content: marked(content)
	};
}

