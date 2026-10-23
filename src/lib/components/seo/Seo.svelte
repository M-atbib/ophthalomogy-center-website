<script lang="ts">
	import { buildJsonLd, seoConfig, type PageSeo } from '$lib/seo';

	type SeoProps = {
		metadata: PageSeo;
	};

	let { metadata }: SeoProps = $props();

	// JSON-LD stays derived from the same metadata as the visible meta tags so search engines
	// receive one consistent page identity, canonical URL, publisher, and breadcrumb trail.
	const jsonLd = $derived(JSON.stringify(buildJsonLd(metadata)));
	const jsonLdScript = $derived(
		['<script type="application/ld+json">', jsonLd.replace(/</g, '\\u003c'), '</', 'script>'].join(
			''
		)
	);
</script>

<svelte:head>
	<title>{metadata.metaTitle}</title>
	<meta name="description" content={metadata.description} />
	<meta name="robots" content={metadata.robots} />
	<link rel="canonical" href={metadata.canonicalUrl} />

	<meta property="og:type" content={metadata.openGraphType} />
	<meta property="og:site_name" content={seoConfig.siteName} />
	<meta property="og:locale" content={metadata.locale} />
	{#each metadata.alternates.filter((alternate) => alternate.language !== metadata.language) as alternate (alternate.language)}
		<meta
			property="og:locale:alternate"
			content={alternate.language === 'ar' ? 'ar_MA' : 'fr_MA'}
		/>
	{/each}
	{#each metadata.alternates as alternate (alternate.language)}
		<link rel="alternate" hreflang={alternate.language} href={alternate.url} />
	{/each}
	<meta property="og:title" content={metadata.metaTitle} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:url" content={metadata.canonicalUrl} />
	<meta property="og:image" content={metadata.openGraphImageUrl} />
	{#if metadata.article?.datePublished}
		<meta property="article:published_time" content={metadata.article.datePublished} />
	{/if}
	{#if metadata.article?.dateModified}
		<meta property="article:modified_time" content={metadata.article.dateModified} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metadata.metaTitle} />
	<meta name="twitter:description" content={metadata.description} />
	<meta name="twitter:image" content={metadata.openGraphImageUrl} />

	<!-- JSON is serialized above and all < characters are escaped. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdScript}
</svelte:head>
