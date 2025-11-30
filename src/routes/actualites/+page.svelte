<script lang="ts">
	import type { PageData } from './$types';
	import { Button, Card, Section, Text, Title } from '$lib';
	import { MoveRight } from '@lucide/svelte';

	const { data } = $props<{ data: PageData }>();
	const articles = data.articles ?? [];

	const formatDate = (value?: string) => {
		if (!value) return undefined;
		return new Intl.DateTimeFormat('fr-FR', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(value));
	};
</script>

<Section spacing="relaxed" width="wide" contentSpacing="lg">
	<div class="mx-auto max-w-4xl space-y-5 text-center">
		<Text variant="eyebrow" tone="cta" align="center">Actualités</Text>
		<Title level="h1" align="center">Les dernières nouvelles du centre</Title>
		<Text tone="muted" align="center" class="text-pretty">
			Restez informé sur nos prises en charge, les nouveautés technologiques et les conseils de
			nos spécialistes.
		</Text>
	</div>

	{#if articles.length === 0}
		<Card variant="muted" padding="lg" align="center" class="mx-auto max-w-2xl">
			<Title level="sub2" class="text-balance">Aucun article à afficher pour le moment</Title>
			<Text tone="muted" class="text-pretty">
				Nous préparons de nouveaux contenus pour vous informer au mieux. Revenez bientôt ou
				inscrivez-vous à notre newsletter.
			</Text>
			<Button variant="solid" tone="cta" href="/contactez-nous">Nous contacter</Button>
		</Card>
	{:else}
		<div class="grid gap-8 md:grid-cols-2">
			{#each articles as article (article.id)}
				<a href={`/actualites/${article.slug}`} class="block h-full">
					<Card
						variant="surface"
						padding="none"
						radius="xl"
						interactive
						class="h-full overflow-hidden"
					>
					{#if article.imageUrl}
						<figure class="bg-primary-background">
							<img
								src={article.imageUrl}
								alt={article.imageAlt ?? article.title}
								class="h-60 w-full object-cover"
								loading="lazy"
							/>
						</figure>
					{/if}

					<div class="flex h-full flex-col gap-4 p-6">
						<div class="space-y-2">
							{#if formatDate(article.publishedAt)}
								<Text variant="caption" tone="muted">
									{formatDate(article.publishedAt)}
								</Text>
							{/if}
							<Text variant="eyebrow" tone="cta">Blog</Text>
							<Title level="sub1" class="text-pretty">{article.title}</Title>
							{#if article.subtitle}
								<Text weight="medium" class="text-pretty">{article.subtitle}</Text>
							{/if}
						</div>

						<Text tone="muted" class="text-pretty">{article.briefing}</Text>

						<div class="mt-auto flex items-center justify-between gap-3 pt-4">
							<Text variant="body-sm" tone="cta" weight="semibold">
								Lire l'article
							</Text>
							<MoveRight class="size-5 text-cta" aria-hidden="true" />
						</div>
					</div>
					</Card>
				</a>
			{/each}
		</div>
	{/if}
</Section>
