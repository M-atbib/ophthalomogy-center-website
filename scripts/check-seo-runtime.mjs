import assert from 'node:assert/strict';
import { createServer } from 'vite';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

try {
	const { getArticleSeo, buildJsonLd, buildSitemapXml, staticSitemapRoutes } =
		await vite.ssrLoadModule('/src/lib/seo.ts');
	const article = {
		title: 'Article médical de vérification',
		subtitle: 'Sous-titre de vérification',
		briefing: 'Résumé spécifique de vérification.',
		publishedAt: '2025-05-20T10:00:00Z',
		imageUrl: 'https://cdn.sanity.io/images/example/article.jpg'
	};
	const seo = getArticleSeo('/actualites/article-de-verification', article);
	const graph = buildJsonLd(seo)['@graph'];
	const structuredArticle = graph.find((item) => item['@type'] === 'Article');
	const sitemap = buildSitemapXml([
		{ slug: 'article-de-verification', updatedAt: '2025-05-21T10:00:00Z' },
		{ slug: 'article-de-verification', updatedAt: '2025-05-21T10:00:00Z' }
	]);

	assert.match(seo.metaTitle, /Article médical de vérification/);
	assert.equal(seo.description, article.briefing);
	assert.equal(seo.openGraphType, 'article');
	assert.equal(structuredArticle?.headline, article.title);
	assert.equal(structuredArticle?.datePublished, new Date(article.publishedAt).toISOString());
	assert.equal(staticSitemapRoutes.length, 133);
	assert.equal((sitemap.match(/<loc>https:\/\/dramalophtalmo.ma\/actualites\/article-de-verification<\/loc>/g) ?? []).length, 1);
	assert.equal((sitemap.match(/<loc>/g) ?? []).length, 134);
	console.log('Article SEO, Article JSON-LD, 133 static routes, and article sitemap deduplication passed');
} finally {
	await vite.close();
}
