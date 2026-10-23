<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Card, Section, Text, Title } from '$lib';
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';
	import { PortableText } from '@portabletext/svelte';
	import Breadcrumb from '$lib/components/general/Breadcrumb.svelte';
	import ArticleImage from './ArticleImage.svelte';
	import ArticleLink from './ArticleLink.svelte';
	import { articleIndexPath, articlePath, formatArticleDate } from '$lib/articles';
	import type { BlogArticle } from '$lib/types/blog';
	let { article }: { article: BlogArticle } = $props();
	const ar = $derived(article.language === 'ar');
	const indexPath = $derived(articleIndexPath(article.language));
	// Keep H2/H3 hierarchy; only demote a CMS H1 to keep one page H1.
	const blocks = $derived(
		(article.article ?? []).map((block) =>
			block.style === 'h1' ? { ...block, style: 'h2' } : block
		)
	);
</script>

<article lang={article.language} dir={ar ? 'rtl' : 'ltr'} class="editorial">
	<Section as="header" spacing="tight" variant="muted">
		<div class="mx-auto max-w-4xl">
			<Breadcrumb
				current={article.title}
				parentHref={indexPath}
				parentLabel={ar ? 'المقالات' : 'Articles'}
				language={article.language}
			/>
			<div class="mb-5 flex flex-wrap items-center justify-between gap-4">
				<Text variant="eyebrow" tone="cta">{ar ? 'المقالات' : 'Articles'}</Text>
				{#if article.translation}
					<a
						href={resolve(articlePath(article.translation.slug, article.translation.language))}
						hreflang={article.translation.language}
						lang={article.translation.language}
						dir={ar ? 'ltr' : 'rtl'}
						class="rounded-full border border-cta/30 px-4 py-2 text-sm font-medium text-cta-ink hover:bg-white focus-visible:outline-2 focus-visible:outline-cta"
					>
						{ar ? 'Lire en français' : 'اقرأ بالعربية'}
					</a>
				{/if}
			</div>
			<Title level="h1" class="break-words text-pretty">{article.title}</Title>
			{#if article.subtitle}<Text class="mt-5 text-xl leading-relaxed text-secondary sm:text-2xl"
					>{article.subtitle}</Text
				>{/if}
			<div class="mt-6 space-y-2 border-t border-cta/20 pt-5 text-sm text-secondary">
				<p>{ar ? 'عيادة الدكتورة أمل علوان — سلا' : 'Cabinet du Dr Amal Alouan — Salé'}</p>
				{#if formatArticleDate(article.publishedAt, article.language)}
					<p>
						{ar ? 'تاريخ النشر:' : 'Publié le'}
						<time datetime={article.publishedAt}
							>{formatArticleDate(article.publishedAt, article.language)}</time
						>
					</p>
				{/if}
			</div>
		</div>
	</Section>

	<Section spacing="tight">
		<div class="mx-auto max-w-4xl">
			<figure class="mb-10 overflow-hidden rounded-2xl border border-light-grey/60">
				<ArticleImage {article} hero />
			</figure>
			<div
				class="article-prose prose prose-lg prose-headings:text-primary prose-p:text-primary prose-strong:text-primary prose-a:text-cta-ink mx-auto max-w-[68ch] break-words text-primary"
			>
				<PortableText value={blocks} components={{ marks: { link: ArticleLink } }} />
			</div>
			<Card
				as="aside"
				variant="muted"
				elevation="none"
				class="mt-12 gap-5 sm:flex-row sm:items-center"
			>
				<div class="flex-1 space-y-2">
					<Title level="sub3" as="h2" class="mb-0"
						>{ar ? 'هل لديك سؤال عن صحة عينيك؟' : 'Une question sur la santé de vos yeux ?'}</Title
					>
					<Text tone="muted"
						>{ar
							? 'تواصل مع العيادة للحصول على موعد.'
							: 'Contactez le cabinet pour prendre rendez-vous.'}</Text
					>
				</div>
				<Button tone="cta" variant="solid" href="/contactez-nous"
					>{ar ? 'حجز موعد' : 'Prendre rendez-vous'}<ArrowRight
						class="size-4 rtl:rotate-180"
						aria-hidden="true"
					/></Button
				>
			</Card>
			<a
				href={resolve(indexPath)}
				class="mt-8 inline-flex min-h-11 items-center gap-2 font-medium text-cta-ink underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-cta"
				><ArrowLeft class="size-4 rtl:rotate-180" aria-hidden="true" />{ar
					? 'العودة إلى المقالات'
					: 'Retour aux articles'}</a
			>
		</div>
	</Section>
</article>

<style>
	.article-prose {
		line-height: 1.85;
		overflow-wrap: anywhere;
	}
	.article-prose :global(h2) {
		margin-block: 2em 0.75em;
		line-height: 1.35;
	}
	.article-prose :global(h3) {
		margin-block: 1.6em 0.6em;
		line-height: 1.45;
	}
	.article-prose :global(ul),
	.article-prose :global(ol) {
		padding-inline-start: 1.6em;
		padding-inline-end: 0;
	}
	.article-prose :global(li) {
		padding-inline-start: 0.3em;
		padding-inline-end: 0;
	}
	.article-prose :global(blockquote) {
		border-inline-start: 3px solid var(--color-cta);
		border-inline-end: 0;
		padding-inline-start: 1em;
		padding-inline-end: 0;
	}
	.article-prose :global(a) {
		text-underline-offset: 0.2em;
	}
</style>
