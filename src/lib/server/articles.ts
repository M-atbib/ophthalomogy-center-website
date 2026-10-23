import { error, isHttpError } from '@sveltejs/kit';
import { sanityClient } from '$lib/server/sanity';
import { articleListQuery, articleQuery } from '$lib/server/article-queries';
import { articlePath, isArticleSlug } from '$lib/articles';
import { getArticleSeo } from '$lib/seo';
import type { ArticleLanguage, BlogArticle, BlogArticleSummary } from '$lib/types/blog';

export async function loadArticleList(language: ArticleLanguage) {
	try {
		const articles = await sanityClient.fetch<BlogArticleSummary[]>(articleListQuery, { language });
		return {
			articles: articles.filter((article) => isArticleSlug(article.slug)),
			language,
			unavailable: false
		};
	} catch (err) {
		console.error('Failed to load articles from Sanity', err);
		return { articles: [], language, unavailable: true };
	}
}

export async function loadArticle(slug: string, language: ArticleLanguage) {
	if (!isArticleSlug(slug))
		error(404, language === 'ar' ? 'المقال غير موجود' : 'Article introuvable');
	try {
		const article = await sanityClient.fetch<BlogArticle | null>(articleQuery, { slug, language });
		if (!article) error(404, language === 'ar' ? 'المقال غير موجود' : 'Article introuvable');
		if (article.translation && !isArticleSlug(article.translation.slug))
			article.translation = undefined;
		return { article, seo: getArticleSeo(articlePath(article.slug, language), article) };
	} catch (err) {
		if (isHttpError(err)) throw err;
		console.error('Failed to load article from Sanity', err);
		error(
			503,
			language === 'ar'
				? 'تعذر تحميل المقال. يرجى المحاولة لاحقًا.'
				: 'Impossible de charger cet article. Veuillez réessayer plus tard.'
		);
	}
}
