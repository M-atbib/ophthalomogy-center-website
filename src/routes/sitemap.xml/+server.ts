import { buildSitemapXml, type SitemapArticle } from '$lib/seo';
import { sanityClient } from '$lib/server/sanity';

const articleQuery = `
	*[_type == "blogArticle" && status == "active" && defined(slug.current) && (!defined(publishedAt) || publishedAt <= now())] {
		'slug': slug.current,
		'updatedAt': _updatedAt
	}
`;

// Keep the known static routes available even if the CMS has a temporary error.
export const GET = async () => {
	let articles: SitemapArticle[] = [];
	let cacheControl = 'public, max-age=3600';
	try {
		articles = await sanityClient.fetch<SitemapArticle[]>(articleQuery);
	} catch (err) {
		console.error('Failed to load Sanity article URLs for the sitemap', err);
		cacheControl = 'no-store';
	}

	return new Response(buildSitemapXml(articles), {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': cacheControl
		}
	});
};
