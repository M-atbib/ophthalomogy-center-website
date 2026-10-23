import { buildSitemapXml, type SitemapArticle } from '$lib/seo';
import { sanityClient } from '$lib/server/sanity';
import { sitemapArticleQuery } from '$lib/server/article-queries';

// Keep the known static routes available even if the CMS has a temporary error.
export const GET = async () => {
	let articles: SitemapArticle[] = [];
	let cacheControl = 'public, max-age=3600';
	try {
		articles = await sanityClient.fetch<SitemapArticle[]>(sitemapArticleQuery);
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
