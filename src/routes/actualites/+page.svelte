<script lang="ts">
	import type { PageData } from './$types';
	import { Button, Card, Section, Text, Title } from '$lib';
	import { MoveRight } from '@lucide/svelte';
	import Breadcrumb from '$lib/components/general/Breadcrumb.svelte';

	const { data } = $props<{ data: PageData }>();
	const articles = $derived(data.articles ?? []);

	const formatDate = (value?: string) => {
		if (!value) return undefined;
		return new Intl.DateTimeFormat('fr-FR', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(value));
	};
</script>

<Section spacing="tight" width="wide" variant="muted">
	<Breadcrumb current="Actualités" />
	<div class="max-w-4xl space-y-5">
		<Text variant="eyebrow" tone="cta">Actualités</Text>
		<Title level="h1">Les dernières nouvelles en monde de l'ophtalmologie</Title>
		<Text tone="muted" class="text-pretty">
			Retrouvez les articles et les informations sur la santé des yeux publiés sur le site.
		</Text>
	</div>
</Section>

<Section spacing="comfortable" width="wide">
	{#if articles.length === 0}
		<Card variant="muted" padding="lg" align="center" class="mx-auto max-w-2xl">
			<Title level="sub2" class="text-balance">{data.unavailable ? 'Articles indisponibles pour le moment' : 'Aucun article à afficher pour le moment'}</Title>
			<Text tone="muted" class="text-pretty">
				{data.unavailable ? 'Veuillez réessayer plus tard.' : 'Revenez bientôt pour découvrir les prochains articles.'}
			</Text>
			<Button variant="solid" tone="cta" href="/contactez-nous">Nous contacter</Button>
		</Card>
	{:else}
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
									width={article.imageWidth}
									height={article.imageHeight}
									class="h-60 w-full object-cover"
									loading="lazy"
								/>
							</figure>
						{/if}

						<div class="flex h-full flex-col gap-4 p-6">
							<div>
								{#if formatDate(article.publishedAt)}
									<Text variant="caption" tone="muted" class="mb-2 block">
										{formatDate(article.publishedAt)}
									</Text>
								{/if}
								<Text variant="eyebrow" tone="cta">Blog</Text>
								<Title level="sub1" class="text-pretty">{article.title}</Title>
								<Text weight="medium" class="text-pretty">{article.subtitle}</Text>
							</div>

							<!-- <Text tone="muted" class="text-pretty">{article.briefing}</Text> -->

							<div class="mt-auto flex items-center justify-between gap-3 pt-4">
								<Text variant="body-sm" tone="cta" weight="semibold">Lire l'article</Text>
								<MoveRight class="text-cta size-5" aria-hidden="true" />
							</div>
						</div>
					</Card>
				</a>
			{/each}
		</div>
	{/if}
</Section>
