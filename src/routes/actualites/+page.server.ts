import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { sanityClient } from '$lib/server/sanity';
import type { BlogArticleSummary } from '$lib/types/blog';

const blogListQuery = `
	*[_type == "blogArticle" && status == "active"] | order(coalesce(publishedAt, _createdAt) desc) {
		'id': _id,
		title,
		subtitle,
		'slug': slug.current,
		briefing,
		'imageUrl': image.asset->url,
		'imageAlt': coalesce(image.alt, title),
		'publishedAt': coalesce(publishedAt, _createdAt)
	}
`;

export const load = (async () => {
	try {
		const articles = await sanityClient.fetch<BlogArticleSummary[]>(blogListQuery);

		return {
			articles
		};
	} catch (err) {
		console.error('Failed to load blog articles from Sanity', err);
		throw error(500, 'Impossible de charger les actualités pour le moment.');
	}
}) satisfies PageServerLoad;
