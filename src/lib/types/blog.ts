import type { PortableTextBlock } from '@portabletext/types';

export type ArticleLanguage = 'fr' | 'ar';

export type ArticleTranslation = {
	language: ArticleLanguage;
	slug: string;
};

export type BlogArticleSummary = {
	id: string;
	title: string;
	subtitle?: string;
	slug: string;
	briefing: string;
	imageUrl?: string;
	imageAlt?: string;
	imageWidth?: number;
	imageHeight?: number;
	publishedAt?: string;
	updatedAt?: string;
	language: ArticleLanguage;
	translation?: ArticleTranslation;
};

export type BlogArticle = BlogArticleSummary & {
	status: 'active' | 'archived';
	article: PortableTextBlock[];
	seoTitle?: string;
	seoDescription?: string;
	focusKeyword?: string;
	secondaryKeywords?: string[];
};
