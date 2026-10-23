import assert from 'node:assert/strict';
import { createServer } from 'vite';

// Small, server-side checks. No browser and no Playwright.
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
	const { getArticleSeo, getPageSeo, buildJsonLd, buildSitemapXml, staticSitemapRoutes } =
		await vite.ssrLoadModule('/src/lib/seo.ts');
	const { articlePath, articleImageUrl } = await vite.ssrLoadModule('/src/lib/articles.ts');
	const { render } = await vite.ssrLoadModule('svelte/server');
	const { default: ArticlePage } = await vite.ssrLoadModule(
		'/src/lib/components/articles/ArticlePage.svelte'
	);
	const { default: ArticleList } = await vite.ssrLoadModule(
		'/src/lib/components/articles/ArticleList.svelte'
	);
	const { default: Seo } = await vite.ssrLoadModule('/src/lib/components/seo/Seo.svelte');
	const block = (style, text) => ({
		_type: 'block',
		_key: style,
		style,
		markDefs: [],
		children: [{ _type: 'span', _key: 'text', marks: [], text }]
	});
	const french = {
		id: 'example-fr',
		title: 'Article médical de vérification',
		slug: 'article-test',
		language: 'fr',
		briefing: 'Résumé spécifique.',
		status: 'active',
		publishedAt: '2025-05-20T10:00:00Z',
		updatedAt: '2025-05-21T10:00:00Z',
		seoTitle: 'Titre SEO choisi',
		seoDescription: 'Description SEO choisie.',
		imageUrl: 'https://cdn.sanity.io/images/example/production/test.jpg',
		translation: { language: 'ar', slug: 'صحة-العين' },
		article: [block('h1', 'Section'), block('h2', 'Autre section'), block('h3', 'Détail')]
	};
	const arabic = {
		...french,
		id: 'example-ar',
		language: 'ar',
		title: 'صحة العين',
		slug: 'صحة-العين',
		seoTitle: '',
		seoDescription: '',
		imageUrl: undefined,
		translation: { language: 'fr', slug: french.slug }
	};
	for (const article of [french, arabic]) {
		const path = articlePath(article.slug, article.language);
		const seo = getArticleSeo(path, article);
		const graph = buildJsonLd(seo)['@graph'];
		const structured = graph.find((node) => node['@type'] === 'Article');
		assert.equal(seo.canonicalUrl, `https://dramalophtalmo.ma${path}`);
		assert.equal(seo.description, article.seoDescription || article.briefing);
		assert.equal(seo.language, article.language);
		assert.equal(seo.alternates.length, 2);
		assert.equal(structured.inLanguage, article.language);
		assert.equal(structured.headline, article.title);
		assert.equal(structured.dateModified, '2025-05-21T10:00:00.000Z');
		assert.equal(
			graph.some((node) => node['@type'] === 'FAQPage'),
			false
		);
		assert.equal(structured.author['@id'], 'https://dramalophtalmo.ma/#organization');
		assert.equal(seo.breadcrumbs.length, 3);
		const html = render(ArticlePage, { props: { article } }).body;
		assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
		assert.match(html, /<h2[ >]/);
		assert.match(html, /<h3[ >]/);
		assert.match(html, article.language === 'ar' ? /dir="rtl"/ : /dir="ltr"/);
		assert.ok(html.includes(articlePath(article.translation.slug, article.translation.language)));
		assert.equal(html.includes('Article validé par'), false);
		const head = render(Seo, { props: { metadata: seo } }).head;
		assert.equal((head.match(/rel="canonical"/g) ?? []).length, 1);
		assert.equal((head.match(/hreflang=/g) ?? []).length, 2);
		assert.equal(head.includes('name="keywords"'), false);
	}
	assert.equal(getArticleSeo(articlePath(french.slug, 'fr'), french).metaTitle, french.seoTitle);
	const untranslated = { ...french, translation: undefined, seoTitle: '', seoDescription: '' };
	assert.equal(getArticleSeo('/articles/article-test', untranslated).alternates.length, 0);
	assert.equal(
		render(ArticlePage, { props: { article: untranslated } }).body.includes('hreflang='),
		false
	);
	assert.match(
		render(ArticleList, { props: { articles: [], language: 'ar', unavailable: false } }).body,
		/المقالات القادمة/
	);
	assert.match(
		render(ArticleList, { props: { articles: [french], language: 'fr', unavailable: false } }).body,
		/Résumé spécifique/
	);
	assert.equal(articleImageUrl('javascript:alert(1)', 640), undefined);
	assert.match(articleImageUrl(french.imageUrl, 640), /w=640/);
	assert.match(articleImageUrl(french.imageUrl, 1200, true), /h=630/);
	const sitemap = buildSitemapXml([french, arabic, french, { slug: '../bad', language: 'fr' }]);
	assert.equal((sitemap.match(/<loc>/g) ?? []).length, staticSitemapRoutes.length + 2);
	assert.ok(sitemap.includes(articlePath(arabic.slug, 'ar')));
	assert.ok(sitemap.includes('hreflang="ar"'));
	assert.ok(sitemap.includes('<lastmod>2025-05-21T10:00:00.000Z</lastmod>'));
	assert.equal(sitemap.includes('/actualites'), false);
	assert.ok(
		staticSitemapRoutes.includes('/articles') && staticSitemapRoutes.includes('/ar/articles')
	);
	assert.equal(
		getPageSeo('/contactez-nous').canonicalUrl,
		'https://dramalophtalmo.ma/contactez-nous'
	);
	assert.equal(getPageSeo('/a-propos').language, 'fr');
	const { GET: oldIndex } = await vite.ssrLoadModule('/src/routes/actualites/+server.ts');
	const { GET: oldArticle } = await vite.ssrLoadModule('/src/routes/actualites/[slug]/+server.ts');
	for (const [handler, params, expected] of [
		[oldIndex, {}, '/articles?x=1'],
		[oldArticle, { slug: french.slug }, '/articles/article-test?x=1']
	]) {
		assert.throws(
			() => handler({ params, url: new URL('https://example.test/actualites?x=1') }),
			(redirect) => redirect.status === 301 && redirect.location === expected
		);
	}
	const { handle } = await vite.ssrLoadModule('/src/hooks.server.ts');
	const result = await handle({
		event: { url: new URL('https://example.test/ar/articles') },
		resolve: (_event, options) =>
			options.transformPageChunk({ html: '<html lang="%site.lang%" dir="%site.dir%">' })
	});
	assert.equal(result, '<html lang="ar" dir="rtl">');
	console.log(
		'Passed: FR/AR SEO, JSON-LD, translations, SSR reading pages, empty state, CDN images, sitemap, 301 redirects, and HTML language.'
	);
} finally {
	await vite.close();
}
