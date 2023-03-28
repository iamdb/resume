import { slug } from '$lib/util';
import type { PageLoad } from './$types';

const importPost = async (postNum: number) => {
	if (postNum < 0) {
		return null;
	}

	const zeros = '0'.repeat(3 - postNum.toString().length);

	try {
		return import(`../../../lib/content/posts/${zeros}${postNum}.svelte.md`);
	} catch {
		return null;
	}
};

const importMeta = async (postNum: number) => {
	if (postNum < 0) {
		return null;
	}

	try {
		const post = await importPost(postNum);
		return post.metadata;
	} catch {
		return null;
	}
};

const postLink = async (postNum: number) => {
	const post = await importMeta(postNum);

	if (post) {
		return {
			slug: slug(post.num, post.title),
			title: post.title
		};
	} else {
		return null;
	}
};

export const load = (async ({ params }) => {
	const postNum = parseInt(params.slug.substring(0, 3), 10);

	const postReturn = {
		post: importPost(postNum),
		previousPost: postLink(postNum - 1),
		nextPost: postLink(postNum + 1)
	};

	return postReturn;
}) satisfies PageLoad;
