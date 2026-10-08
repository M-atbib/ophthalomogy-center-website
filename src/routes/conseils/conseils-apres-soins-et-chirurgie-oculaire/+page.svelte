<script lang="ts">
	import { Button, Card, Section, Text, Title } from '$lib';
	import { CataracteHero } from '$lib/assets';
	import { ArrowLeft, MoveRight } from '@lucide/svelte';

	type AdvicePage = {
		title: string;
		description: string;
		href: string;
	};

	// These pages regroup post-care instructions that also exist in disease journeys.
	const pages: AdvicePage[] = [
		{
			title: 'Quelles sont les règles à suivre après une chirurgie de cataracte ?',
			description:
				'Pansement, collyres, activité physique et signes à surveiller après l’intervention.',
			href: '/conseils/conseils-apres-soins-et-chirurgie-oculaire/quelles_sont_les_règles_à_suivre_après_une_chirurgie_de_cataracte'
		},
		{
			title: 'Quelles sont les règles à respecter après une chirurgie réfractive laser ?',
			description:
				'Consignes de cicatrisation, reprise des activités et surveillance post-opératoire.',
			href: '/conseils/conseils-apres-soins-et-chirurgie-oculaire/quelles_sont_les_règles_à_respecter_après_une_chirurgie_réfractive_laser'
		},
		{
			title: 'Quelles sont les recommandations après une injection intra-vitréenne ?',
			description:
				'Symptômes attendus, complications possibles et situations nécessitant une urgence.',
			href: '/conseils/conseils-apres-soins-et-chirurgie-oculaire/quelles_sont_les_recommandations_après_avoir_rbénéficié_d_une_injection_intra-vitréenne'
		}
	];
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/conseils" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
		<div>
			<Title level="h1">Conseils après soins et chirurgie oculaire</Title>
			<Text variant="body-lg" tone="muted" class="mt-4 text-pretty">
				Retrouvez les règles de prudence à suivre après une intervention, un soin ou une injection
				oculaire.
			</Text>
		</div>

		<figure class="overflow-hidden rounded-md border border-light-grey/60">
			<img
				src={CataracteHero}
				alt="Bloc opératoire ophtalmologique"
				class="h-full w-full object-cover"
				loading="eager"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="tight">
	<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
		{#each pages as page}
			<Card variant="accent" radius="md" class="h-full">
				<Title level="h3">{page.title}</Title>
				<Text tone="muted">{page.description}</Text>
				<a href={page.href} class="mt-auto flex justify-end gap-2 font-semibold text-cta">
					Lire la fiche
					<MoveRight class="size-5" aria-hidden="true" />
				</a>
			</Card>
		{/each}
	</div>
</Section>
