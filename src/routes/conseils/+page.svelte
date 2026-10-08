<script lang="ts">
	import { Card, Section, Text, Title } from '$lib';
	import { BlephariteHero, LentillesHero, LunetteHero, RetineMedical } from '$lib/assets';
	import { MoveRight } from '@lucide/svelte';

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
</script>

<Section width="wide" spacing="comfortable">
	<div class="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
		<div>
			<Title level="h1">Les conseils de votre ophtalmo</Title>
			<Text variant="body-lg" tone="muted" class="mt-4 text-pretty">
				Retrouvez les recommandations pratiques du centre pour mieux suivre vos traitements,
				préparer vos soins et prendre soin de vos lunettes ou lentilles.
			</Text>
		</div>

		<figure
			class="max-h-[420px] overflow-hidden rounded-md border border-light-grey/60 bg-primary-background"
		>
			<img
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
				<img src={category.image} alt="" class="h-44 w-full object-cover" loading="lazy" />
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
