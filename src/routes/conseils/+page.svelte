<script lang="ts">
	import ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';
	import { Card, Section, Text, Title } from '$lib';
	import { BlephariteHero, LentillesHero, LunetteHero, RetineMedical } from '$lib/assets';
	import { MoveRight } from '@lucide/svelte';
	import Breadcrumb from '$lib/components/general/Breadcrumb.svelte';

	type AdviceCategory = {
		title: string;
		description: string;
		href: string;
		image: string;
	};

	// The hub keeps the patient-facing advice taxonomy visible without coupling it to disease pages.
	const categories: AdviceCategory[] = [
		{
			title: 'Conseils thérapeutiques',
			description: 'Gestes quotidiens, collyres et soins utiles pour bien suivre votre traitement.',
			href: '/conseils/conseils-therapeutiques',
			image: BlephariteHero
		},
		{
			title: 'Conseils lunettes et lentilles',
			description: 'Repères pratiques pour choisir, lire et entretenir vos équipements optiques.',
			href: '/conseils/conseils-lunettes-et-lentilles',
			image: LunetteHero
		},
		{
			title: 'Conseils après soins et chirurgie oculaire',
			description: 'Consignes à suivre après les soins, injections ou chirurgies oculaires.',
			href: '/conseils/conseils-apres-soins-et-chirurgie-oculaire',
			image: RetineMedical
		}
	];

	const secondaryImage = LentillesHero;
	const relatedTopics = [
		{ label: 'Cataracte', href: '/maladie-oeil/cataracte' },
		{ label: 'Glaucome', href: '/maladie-oeil/glaucome' },
		{ label: 'Rétine médicale', href: '/maladie-oeil/retine-medicale' },
		{ label: 'Sécheresse oculaire', href: '/maladie-oeil/blepharite-secheresse-surface-oculaire' }
	];
</script>

<Section width="wide" spacing="comfortable" variant="muted">
	<Breadcrumb current="Conseils" />
	<div class="site-hero-grid">
		<div>
			<Text variant="eyebrow" tone="cta" class="mb-5">Conseils aux patients</Text>
			<Title level="h1">Les conseils de votre ophtalmo</Title>
			<Text variant="body-lg" tone="muted" class="mt-4 text-pretty">
				Retrouvez les recommandations pratiques du cabinet pour mieux suivre vos traitements,
				préparer vos soins et prendre soin de vos lunettes ou lentilles.
			</Text>
		</div>

		<figure class="site-hero-media">
			<ResponsiveImage
				src={secondaryImage}
				alt="Patiente portant des lentilles de contact"
				class="h-full w-full object-cover"
				loading="eager"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="tight">
	<div class="grid gap-5 md:grid-cols-3">
		{#each categories as category}
			<Card variant="accent" radius="md" class="h-full overflow-hidden" padding="none">
				<ResponsiveImage src={category.image} alt="" class="h-44 w-full object-cover" loading="lazy" />
				<div class="flex flex-1 flex-col gap-4 p-5 sm:p-6">
					<div>
						<Title level="h3">{category.title}</Title>
						<Text tone="muted" class="mt-3">{category.description}</Text>
					</div>
					<a
						href={category.href}
						class="mt-auto flex items-center justify-end gap-2 font-semibold text-cta"
					>
						Voir les conseils
						<MoveRight class="size-5" aria-hidden="true" />
					</a>
				</div>
			</Card>
		{/each}
	</div>
</Section>

<Section width="wide" spacing="tight" variant="muted" aria-labelledby="related-topics-title">
	<Title level="h2" id="related-topics-title">Explorer les sujets médicaux liés aux conseils</Title>
	<Text tone="muted" class="mt-3 max-w-3xl">Ces dossiers donnent accès aux articles déjà publiés sur le site. Pour une question liée à votre situation, contactez un professionnel de santé.</Text>
	<ul class="mt-6 flex flex-wrap gap-3">
		{#each relatedTopics as topic (topic.href)}
			<li><a href={topic.href} class="inline-flex min-h-11 items-center rounded-xl border border-light-grey/60 bg-white px-4 py-2 font-semibold text-cta underline-offset-4 hover:underline">{topic.label}</a></li>
		{/each}
	</ul>
</Section>
