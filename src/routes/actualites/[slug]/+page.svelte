<script lang="ts">
	import type { PageData } from './$types';
	import { Button, Card, Section, Text, Title } from '$lib';
	import { MoveLeft, MoveRight } from '@lucide/svelte';
	import { PortableText } from '@portabletext/svelte';

	const { data } = $props<{ data: PageData }>();
	const article = data.article;

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
			<Title level="sub1" weight="medium" class="text-pretty">{article.subtitle}</Title>
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
					src={article.imageUrl}
					alt={article.imageAlt ?? article.title}
					class="aspect-video w-full object-cover"
					loading="lazy"
				/>
			</figure>
		{/if}

		<div
			class="prose prose-lg prose-headings:text-primary prose-p:text-primary prose-strong:text-primary prose-a:text-cta text-primary max-w-7xl"
		>
			<PortableText value={article.article} />
		</div>

		<Card variant="surface" class="mt-12 items-start gap-4 sm:flex-row sm:items-center">
			<div class="space-y-1">
				<Text variant="eyebrow" tone="cta">Besoin d'un avis ?</Text>
				<Title level="sub3" class="text-pretty">
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
