import type { PageServerLoad } from './$types';
import { sanityClient } from '$lib/server/sanity';
import type { BlogArticleSummary } from '$lib/types/blog';

const blogListQuery = `
	*[_type == "blogArticle" && status == "active" && defined(slug.current) && (!defined(publishedAt) || publishedAt <= now())] | order(coalesce(publishedAt, _createdAt) desc) {
		'id': _id,
		title,
		subtitle,
		'slug': slug.current,
		briefing,
		'imageUrl': image.asset->url,
		'imageAlt': coalesce(image.alt, title),
		'imageWidth': image.asset->metadata.dimensions.width,
		'imageHeight': image.asset->metadata.dimensions.height,
		publishedAt
	}
`;

export const load = (async () => {
	try {
		const articles = await sanityClient.fetch<BlogArticleSummary[]>(blogListQuery);

		return {
			articles,
			unavailable: false
		};
	} catch (err) {
		console.error('Failed to load blog articles from Sanity', err);
		return { articles: [], unavailable: true };
	}
}) satisfies PageServerLoad;
