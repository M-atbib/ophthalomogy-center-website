<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Card, Section, Text, Title } from '$lib';
	import { ArrowRight, BookOpen } from '@lucide/svelte';
	import Breadcrumb from '$lib/components/general/Breadcrumb.svelte';
	import ArticleImage from './ArticleImage.svelte';
	import { articlePath, formatArticleDate } from '$lib/articles';
	import type { ArticleLanguage, BlogArticleSummary } from '$lib/types/blog';
	let {
		articles,
		language,
		unavailable
	}: { articles: BlogArticleSummary[]; language: ArticleLanguage; unavailable: boolean } = $props();
	const ar = $derived(language === 'ar');
</script>

<div lang={language} dir={ar ? 'rtl' : 'ltr'} class="editorial">
	<Section spacing="tight" variant="muted">
		<div class="flex flex-wrap items-start justify-between gap-4">
			<Breadcrumb current={ar ? 'المقالات' : 'Articles'} {language} />
			<a
				href={resolve(ar ? '/articles' : '/ar/articles')}
				hreflang={ar ? 'fr' : 'ar'}
				lang={ar ? 'fr' : 'ar'}
				dir={ar ? 'ltr' : 'rtl'}
				class="rounded-full border border-cta/30 px-4 py-2 text-sm font-medium text-cta-ink hover:bg-white focus-visible:outline-2 focus-visible:outline-cta"
			>
				{ar ? 'Français' : 'العربية'}
			</a>
		</div>
		<div class="max-w-3xl space-y-4">
			<Text variant="eyebrow" tone="cta"
				>{ar ? 'عيادة الدكتورة أمل علوان' : 'Cabinet du Dr Amal Alouan'}</Text
			>
			<Title level="h1" class="text-pretty"
				>{ar ? 'مقالات ونصائح لصحة عينيك' : 'Articles et conseils pour la santé de vos yeux'}</Title
			>
			<Text tone="muted" class="max-w-2xl text-pretty leading-relaxed">
				{ar
					? 'اكتشف نصائح ومعلومات عيادة الدكتورة أمل علوان لفهم الرؤية وأمراض العيون وعلاجاتها بشكل أفضل.'
					: 'Découvrez les conseils et informations du Cabinet du Dr Amal Alouan pour mieux comprendre votre vision, les maladies des yeux et les traitements ophtalmologiques.'}
			</Text>
		</div>
	</Section>

	<Section spacing="tight">
		{#if articles.length === 0}
			<Card
				as="div"
				variant="muted"
				padding="lg"
				align="center"
				elevation="none"
				class="mx-auto max-w-2xl items-center py-12"
			>
				<BookOpen class="mb-2 size-9 text-cta-ink" aria-hidden="true" />
				<Title level="sub2" as="h2"
					>{unavailable
						? ar
							? 'المقالات غير متاحة حاليًا'
							: 'Articles indisponibles pour le moment'
						: ar
							? 'المقالات القادمة ستُنشر هنا'
							: 'Les prochains articles arrivent bientôt'}</Title
				>
				<Text tone="muted"
					>{unavailable
						? ar
							? 'يرجى المحاولة لاحقًا.'
							: 'Veuillez réessayer plus tard.'
						: ar
							? 'يمكنك الاطلاع على نصائحنا أو التواصل مع العيادة.'
							: 'En attendant, retrouvez nos conseils ou contactez le cabinet.'}</Text
				>
				<Button variant="outline" tone="cta" href="/conseils"
					>{ar ? 'الاطلاع على النصائح بالفرنسية' : 'Découvrir nos conseils'}</Button
				>
			</Card>
		{:else}
			<div class="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each articles as article (article.id)}
					<a
						href={resolve(articlePath(article.slug, language))}
						class="group block min-w-0 rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta"
					>
						<Card
							padding="none"
							elevation="none"
							interactive
							class="h-full gap-0 overflow-hidden sm:gap-0"
						>
							<ArticleImage {article} />
							<div class="flex flex-1 flex-col gap-4 p-6">
								{#if formatArticleDate(article.publishedAt, language)}
									<time datetime={article.publishedAt} class="text-sm text-secondary"
										>{formatArticleDate(article.publishedAt, language)}</time
									>
								{/if}
								<Title
									level="sub2"
									as="h2"
									class="mb-0 break-words text-pretty group-hover:text-cta-ink"
									>{article.title}</Title
								>
								<Text tone="muted" class="line-clamp-3 text-pretty leading-relaxed"
									>{article.briefing}</Text
								>
								<span
									class="mt-auto flex items-center justify-between gap-3 border-t border-light-grey/60 pt-4 font-semibold text-cta-ink"
								>
									{ar ? 'قراءة المقال' : "Lire l'article"}<ArrowRight
										class="size-5 rtl:rotate-180"
										aria-hidden="true"
									/>
								</span>
							</div>
						</Card>
					</a>
				{/each}
			</div>
		{/if}
	</Section>
</div>
