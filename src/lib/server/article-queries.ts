// Reused by lists, detail pages, translations and sitemap. Missing dates stay private.
export const publishedArticleFilter = `
	_type == "blogArticle" && status == "active"
	&& !(_id in path("drafts.**")) && !(_id in path("versions.**"))
	&& defined(slug.current) && slug.current != ""
	&& coalesce(language, "fr") in ["fr", "ar"]
	&& defined(publishedAt) && dateTime(publishedAt) <= dateTime(now())
`;

const translationProjection = `
	'translation': *[${publishedArticleFilter}
		&& coalesce(language, "fr") != coalesce(^.language, "fr")
		&& (_id == ^.translation._ref || translation._ref == ^._id)
	] | order(_id asc)[0] {
		'language': coalesce(language, "fr"), 'slug': slug.current
	}
`;

const summaryProjection = `
	'id': _id, title, subtitle, 'slug': slug.current, briefing,
	'language': coalesce(language, "fr"),
	'imageUrl': image.asset->url, 'imageAlt': coalesce(image.alt, title),
	'imageWidth': image.asset->metadata.dimensions.width,
	'imageHeight': image.asset->metadata.dimensions.height,
	publishedAt, 'updatedAt': _updatedAt
`;

export const articleListQuery = `
	*[${publishedArticleFilter} && coalesce(language, "fr") == $language]
	| order(publishedAt desc, _id asc) { ${summaryProjection} }
`;

export const articleQuery = `
	*[${publishedArticleFilter} && coalesce(language, "fr") == $language && slug.current == $slug]
	| order(_id asc)[0] {
		${summaryProjection}, status, article, seoTitle, seoDescription,
		focusKeyword, secondaryKeywords, ${translationProjection}
	}
`;

export const sitemapArticleQuery = `
	*[${publishedArticleFilter}] | order(_id asc) {
		'slug': slug.current, 'language': coalesce(language, "fr"),
		'updatedAt': _updatedAt, publishedAt, ${translationProjection}
	}
`;
