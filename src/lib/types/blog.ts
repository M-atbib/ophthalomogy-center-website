import type { PortableTextBlock } from '@portabletext/types';

export type BlogArticleSummary = {
	id: string;
	title: string;
	subtitle?: string;
	slug: string;
	briefing: string;
	imageUrl?: string;
	imageAlt?: string;
	publishedAt?: string;
};

export type BlogArticle = BlogArticleSummary & {
	status: 'active' | 'archived';
	article: PortableTextBlock[];
};
