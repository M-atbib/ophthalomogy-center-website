<script lang="ts">
	import { Section, Text, Title } from '$lib';
	import Card from '$lib/components/general/Card.svelte';
	import type { EyeDisease } from '$lib/content';
	import { MoveRight } from '@lucide/svelte';
	import ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';
	import Breadcrumb from '$lib/components/general/Breadcrumb.svelte';

	export let disease: EyeDisease | undefined;

	const heroAltByTopic: Record<string, string> = {
		Cataracte: 'Examen de la vue d’un patient à la lampe à fente',
		'Chirurgie réfractive': 'Chirurgien auprès d’un microscope opératoire',
		'Rétine médicale': 'Examen de la vue d’un patient à la lampe à fente',
		'Paupières et Voies Lacrymales': 'Examen de l’œil d’un patient avec une loupe',
		'Chirurgie et médecine esthétique du regard': 'Gros plan sur les yeux de deux hommes',
		'Explorations et aptitudes': 'Examen de la vue d’un patient à la lampe à fente',
		'Ophtalmo-pédiatrie': 'Enfant lors d’un examen ophtalmologique',
		'Strabologie - chirurgie du strabisme': 'Examen de l’œil d’un enfant',
		Kératocône: 'Examen de la cornée d’un patient à la lampe à fente',
		Lunettes: 'Patient portant une monture d’essai pour un examen de la vue'
	};
</script>

{#if disease}
	<Section spacing="comfortable" width="wide" variant="muted">
		<Breadcrumb current={disease.diseases} />
		<div class="site-hero-grid">
			<div>
				<Text variant="eyebrow" tone="cta" class="mb-5">Santé des yeux</Text>
				<Title level="h1" class="mb-4">{disease.diseases}</Title>
				{#each disease.content as content}
					<Text variant="body-lg" tone="muted" class="text-pretty">
						{content}
					</Text>
				{/each}
			</div>
			<figure class="site-hero-media">
				<ResponsiveImage
					src={disease.img}
					alt={heroAltByTopic[disease.diseases] ?? `Illustration pour ${disease.diseases}`}
					class="h-full w-full object-cover"
					loading="lazy"
					sizes="(min-width: 1024px) 60vw, 100vw"
				/>
			</figure>
		</div>
	</Section>

	<Section spacing="tight" width="wide">
		<Title level="h2" class="mb-4">En savoir plus sur ces sujets</Title>
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
			{#each disease.questions as question}
				<Card variant="accent" class="h-full" radius="md">
					<Text>{question.question}</Text>
					<a
						href={question.href}
						class="text-cta flex h-full items-end justify-end gap-2 font-semibold"
					>
						En savoir plus
						<MoveRight class="size-5" aria-hidden="true" />
					</a>
				</Card>
			{/each}
		</div>
		<nav aria-label="Ressources utiles" class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
			<a href="/conseils" class="font-semibold text-cta underline underline-offset-4">Lire les conseils pour la santé des yeux</a>
			<a href="/contactez-nous" class="font-semibold text-cta underline underline-offset-4">Adresse et contact du cabinet à Salé</a>
		</nav>
	</Section>
{:else}
	<Section spacing="comfortable" width="wide">
		<Title level="h1" class="text-pretty">Maladie introuvable</Title>
		<Text variant="body-lg" tone="muted">La ressource demandée n'est pas disponible.</Text>
	</Section>
{/if}
