import { error, isHttpError } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { sanityClient } from '$lib/server/sanity';
import type { BlogArticle } from '$lib/types/blog';
import { getArticleSeo } from '$lib/seo';

const articleQuery = `
	*[_type == "blogArticle" && slug.current == $slug && status == "active" && (!defined(publishedAt) || publishedAt <= now())][0] {
		'id': _id,
		title,
		subtitle,
		status,
		'slug': slug.current,
		briefing,
		'imageUrl': image.asset->url,
		'imageAlt': coalesce(image.alt, title),
		'imageWidth': image.asset->metadata.dimensions.width,
		'imageHeight': image.asset->metadata.dimensions.height,
		publishedAt,
		'updatedAt': _updatedAt,
		article
	}
`;

export const load = (async ({ params }) => {
	try {
		const article = await sanityClient.fetch<BlogArticle | null>(articleQuery, {
			slug: params.slug
		});

		if (!article) {
			throw error(404, 'Actualité introuvable');
		}

		return { article, seo: getArticleSeo(`/actualites/${params.slug}`, article) };
	} catch (err) {
		if (isHttpError(err)) {
			throw err;
		}

		console.error('Failed to load blog article from Sanity', err);
		throw error(500, 'Impossible de charger cette actualité.');
	}
}) satisfies PageServerLoad;
