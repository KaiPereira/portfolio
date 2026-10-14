import { redirect } from "@sveltejs/kit";
import { getPostBySlug } from "$lib/posts"

export function load({ params }) {
	const post = getPostBySlug(params.slug);

	if (post && post.slug !== params.slug) {
		redirect(308, `/journal/${post.slug}`);
	}

	return {
		post
	};
}
