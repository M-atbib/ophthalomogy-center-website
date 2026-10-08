import { buildSitemapXml } from '$lib/seo';

// The sitemap is generated from the same route inventory used by page metadata so every
// intentionally indexable static page has a matching canonical URL in one predictable place.
export const GET = () =>
	new Response(buildSitemapXml(), {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
