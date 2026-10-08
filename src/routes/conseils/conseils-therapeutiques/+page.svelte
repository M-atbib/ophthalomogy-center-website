<script lang="ts">
	import { Button, Card, Section, Text, Title } from '$lib';
	import { BlephariteHero } from '$lib/assets';
	import { ArrowLeft, MoveRight } from '@lucide/svelte';

	type AdvicePage = {
		title: string;
		description: string;
		href: string;
	};

	// The list mirrors the available child routes so navigation remains explicit and easy to audit.
	const pages: AdvicePage[] = [
		{
			title: 'Comment mettre vos collyres ?',
			description:
				'Les règles utiles pour instiller vos collyres correctement et limiter les erreurs.',
			href: '/conseils/conseils-therapeutiques/comment-mettre-vos-collyres'
		},
		{
			title: 'Comment réaliser les soins et massages des paupières ?',
			description:
				'Les gestes d’hygiène palpébrale recommandés en cas de blépharite ou sécheresse.',
			href: '/conseils/conseils-therapeutiques/comment_réaliser_les_soins_et_massages_des_paupières'
		},
		{
			title: 'Que faire en cas de sécheresse oculaire ?',
			description: 'Les conseils simples pour limiter l’inconfort lié au syndrome de l’œil sec.',
			href: '/conseils/conseils-therapeutiques/que_faire_en_cas_de_sécheresse_oculaire'
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
			<Title level="h1">Conseils thérapeutiques</Title>
			<Text variant="body-lg" tone="muted" class="mt-4 text-pretty">
				Des fiches pratiques pour mieux appliquer vos traitements et réaliser les gestes prescrits
				par votre ophtalmologiste.
			</Text>
		</div>

		<figure class="overflow-hidden rounded-md border border-light-grey/60">
			<img
				src={BlephariteHero}
				alt="Illustration des soins de surface oculaire"
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
