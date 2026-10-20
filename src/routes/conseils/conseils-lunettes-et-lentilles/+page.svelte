<script lang="ts">
	import ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';
	import { Button, Card, Section, Text, Title } from '$lib';
	import { LunetteHero } from '$lib/assets';
	import { ArrowLeft, MoveRight } from '@lucide/svelte';

	type AdvicePage = {
		title: string;
		description: string;
		href: string;
	};

	// The category covers both optical equipment and contact-lens care advice.
	const pages: AdvicePage[] = [
		{
			title: 'Comment bien choisir vos lunettes ?',
			description:
				'Matériaux, types de verres, traitements et filtres pour guider votre équipement.',
			href: '/conseils/conseils-lunettes-et-lentilles/comment_bien_choisir_vos_lunettes'
		},
		{
			title: 'Comment lire votre ordonnance de lunettes ?',
			description: 'Clés de lecture pour comprendre sphère, cylindre, axe et addition.',
			href: '/conseils/conseils-lunettes-et-lentilles/comment_lire_votre_ordonnance_de_lunettes'
		},
		{
			title: 'Comment bien entretenir vos lunettes ?',
			description: 'Conseils simples pour protéger vos montures et nettoyer vos verres.',
			href: '/conseils/conseils-lunettes-et-lentilles/comment_bien_entretenir_vos_lunettes'
		},
		{
			title: 'Comment mettre et entretenir vos lentilles ?',
			description: 'Règles de manipulation, port, renouvellement et entretien des lentilles.',
			href: '/conseils/conseils-lunettes-et-lentilles/comment_mettre_et_entretenir_vos_lentilles'
		},
		{
			title: 'Comment bien choisir les lunettes de votre enfant ?',
			description: 'Montures, verres et adaptation pour une correction portée en sécurité.',
			href: '/conseils/conseils-lunettes-et-lentilles/comment_bien_choisir_les_lunettes_de_votre_enfant'
		}
	];
</script>

<Section width="wide" spacing="comfortable" variant="muted">
	<Button variant="ghost" href="/conseils" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="site-hero-grid mt-10">
		<div>
			<Text variant="eyebrow" tone="cta" class="mb-5">Conseils aux patients</Text>
			<Title level="h1">Conseils lunettes et lentilles</Title>
			<Text variant="body-lg" tone="muted" class="mt-4 text-pretty">
				Des repères pour comprendre vos prescriptions, choisir votre équipement optique et adopter
				les bons gestes d’entretien.
			</Text>
		</div>

		<figure class="site-hero-media">
			<ResponsiveImage
				src={LunetteHero}
				imageKey="lunette-hero-male"
				alt="Patient portant une monture d’essai pour un examen de la vue"
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
