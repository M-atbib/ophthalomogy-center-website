<script lang="ts">
	import type { PageData } from './$types';
	import { Button, Card, Section, Text, Title } from '$lib';
	import { MoveLeft, MoveRight } from '@lucide/svelte';
	import { PortableText } from '@portabletext/svelte';
	import type { PortableTextBlock } from '@portabletext/types';

	let { data } = $props<{ data: PageData }>();
	let article = $derived(data.article);
	let articleBlocks = $derived(article.article.map((block: PortableTextBlock) => {
		const headingLevels: Record<string, 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
			h1: 'h2',
			h2: 'h3',
			h3: 'h4',
			h4: 'h5',
			h5: 'h6',
			h6: 'h6'
		};
		return block.style && headingLevels[block.style]
			? { ...block, style: headingLevels[block.style] }
			: block;
	}));
	const imageAtWidth = (width: number) => {
		if (!article.imageUrl) return undefined;
		const url = new URL(article.imageUrl);
		url.searchParams.set('w', String(width));
		url.searchParams.set('auto', 'format');
		return url.toString();
	};
	let imageSrcset = $derived([480, 768, 1200, 1600]
		.map((width) => ({ width, url: imageAtWidth(width) }))
		.filter((source) => source.url)
		.map(({ width, url }) => `${url} ${width}w`)
		.join(', '));

	const formatDate = (value?: string) => {
		if (!value) return undefined;
		return new Intl.DateTimeFormat('fr-FR', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(value));
	};
</script>

<Section spacing="tight">
	<div class="mx-auto max-w-7xl">
		<Button variant="ghost" tone="cta" href="/actualites" class="group mb-8 w-fit p-0">
			<MoveLeft class="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
			Retour aux actualités
		</Button>

		<Text variant="eyebrow" tone="cta">Actualité</Text>
		<Title level="h1" class="text-pretty">{article.title}</Title>
		{#if article.subtitle}
			<Text weight="medium" class="text-pretty text-2xl">{article.subtitle}</Text>
		{/if}

		<div class="my-6 flex flex-wrap items-center gap-4">
			{#if formatDate(article.publishedAt)}
				<Text variant="body-sm" tone="muted">
					Publié le {formatDate(article.publishedAt)}
				</Text>
				<span class="text-light-grey/60" aria-hidden="true">&bull;</span>
			{/if}
			<Text variant="body-sm" tone="muted">Durée de lecture : 3 min</Text>
		</div>

		{#if article.imageUrl}
			<figure
				class="bg-primary-background border-light-grey/60 mb-10 overflow-hidden rounded-3xl border"
			>
				<img
					src={imageAtWidth(1200)}
					srcset={imageSrcset}
					sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
					alt={article.imageAlt ?? article.title}
					width={article.imageWidth}
					height={article.imageHeight}
					class="aspect-video w-full object-cover"
					loading="eager"
				/>
			</figure>
		{/if}

		<div
			class="prose prose-lg prose-headings:text-primary prose-p:text-primary prose-strong:text-primary prose-a:text-cta text-primary max-w-7xl"
		>
			<PortableText value={articleBlocks} />
		</div>

		<Card variant="surface" class="mt-12 items-start gap-4 sm:flex-row sm:items-center">
			<div class="space-y-1">
				<Text variant="eyebrow" tone="cta">Besoin d'un avis ?</Text>
				<Title level="sub3" as="h2" class="text-pretty">
					Notre équipe est disponible pour répondre à vos questions.
				</Title>
			</div>
			<Button tone="cta" variant="solid" href="/contactez-nous" class="ml-auto">
				Prendre rendez-vous
				<MoveRight class="size-4" aria-hidden="true" />
			</Button>
		</Card>
	</div>
</Section>
