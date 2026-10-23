import type { ArticleLanguage } from '$lib/types/blog';

export const articleIndexPath = (language: ArticleLanguage) =>
	language === 'ar' ? '/ar/articles' : '/articles';

export const articlePath = (
	slug: string,
	language: ArticleLanguage
): `/articles/${string}` | `/ar/articles/${string}` =>
	`${articleIndexPath(language)}/${encodeURIComponent(slug)}`;

export const isArticleSlug = (slug: unknown): slug is string =>
	typeof slug === 'string' &&
	Boolean(slug.trim()) &&
	!/[\s/?#%\\\p{Cc}]/u.test(slug) &&
	slug !== '.' &&
	slug !== '..';

export function articleImageUrl(source: string | undefined, width: number, social = false) {
	if (!source) return undefined;
	try {
		const url = new URL(source);
		if (url.protocol !== 'https:') return undefined;
		if (url.hostname === 'cdn.sanity.io') {
			url.searchParams.set('w', String(width));
			url.searchParams.set('auto', 'format');
			url.searchParams.set('fit', social ? 'crop' : 'max');
			if (social) url.searchParams.set('h', '630');
		}
		return url.toString();
	} catch {
		return undefined;
	}
}

export const articleImageSrcset = (source: string | undefined) =>
	[400, 640, 960, 1280, 1600]
		.map((width) => ({ width, url: articleImageUrl(source, width) }))
		.filter(({ url }) => url)
		.map(({ width, url }) => `${url} ${width}w`)
		.join(', ');

export function formatArticleDate(value: string | undefined, language: ArticleLanguage) {
	if (!value || Number.isNaN(Date.parse(value))) return undefined;
	return new Intl.DateTimeFormat(language === 'ar' ? 'ar-MA' : 'fr-MA', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'Africa/Casablanca'
	}).format(new Date(value));
}
