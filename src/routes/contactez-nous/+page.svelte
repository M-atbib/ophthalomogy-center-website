<script lang="ts">
	import { Button, Card, Map, Section, Text, Title } from '$lib';
	import { ContactHero } from '$lib/assets';
	import { contactItems } from '$lib/content';

	const phoneMain = {
		label: '05 37 810 828',
		href: 'tel:+212537810828'
	};

	const phoneAlt = {
		label: '06 66 82 42 47',
		href: 'tel:+212666824247'
	};

	const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
		'Imm.67,APPT 1 Lot Al Andalouss, Avenue Abderrahim Bouaabid, Hay Essalam Salé'
	)}`;

	const contactGuidelines = [
		'Nos formulaires sont réservés aux demandes non-urgentes.',
		"Indiquez le motif de votre demande, le cabinet concerné et l'identité du patient.",
		'Les demandes hors périmètre ne recevront pas de réponse.'
	];
</script>

<svelte:head>
	<title>Contactez-nous | Formulaire</title>
	<meta
		name="description"
		content="Contactez notre équipe via notre formulaire dédié : raison du contact, identité du patient, cabinet sollicité."
	/>
</svelte:head>

<Section spacing="tight" width="wide" class="bg-primary-background">
	<div class="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-stretch lg:gap-12">
		<div class="space-y-8 sm:space-y-10 lg:flex-[1.05]">
			<div class="mb-8">
				<Text variant="eyebrow" tone="cta">contact clinique</Text>
				<Title level="h2" class="mb-3 max-w-4xl text-pretty">
					Nous traiterons votre demande avec toute l'attention nécessaire
				</Title>
				<Text tone="muted" class="max-w-2xl text-pretty">
					Choisissez le formulaire adapté et renseignez précisément les informations demandées pour
					permettre à nos équipes de vous répondre rapidement.
				</Text>
			</div>

			<Card variant="muted" class="gap-6">
				<div class="bg-light-grey/50 relative overflow-hidden rounded-xl" aria-hidden="true">
					<img
						src={ContactHero}
						alt=""
						class="h-52 w-full object-cover sm:h-60 lg:h-64"
						loading="lazy"
						decoding="async"
					/>
				</div>

				<div class="space-y-3">
					<Title level="sub2" class="mb-1">Avant de nous écrire</Title>
					<ul class="list-disc space-y-2 pl-5">
						{#each contactGuidelines as guideline (guideline)}
							<Text as="li" variant="body-sm" tone="muted" class="m-0">
								{guideline}
							</Text>
						{/each}
					</ul>
				</div>

				<Card variant="surface" padding="sm" class="border-cta/40 bg-white">
					<Text variant="eyebrow" tone="cta">urgence</Text>
					<Text variant="body-sm" tone="muted" class="m-0">
						En cas de problème médical urgent, appelez-nous ou rendez-vous directement au cabinet.
					</Text>
					<div class="flex flex-col gap-3 sm:flex-row">
						<Button href={phoneMain.href} tone="cta" size="md" fullWidth>
							<span class="flex flex-col items-center leading-tight">
								<span>Appeler</span>
								<span class="text-xs font-medium opacity-80 sm:text-sm">{phoneMain.label}</span>
							</span>
						</Button>
						<Button href={phoneAlt.href} variant="outline" tone="cta" size="md" fullWidth>
							<span class="flex flex-col items-center leading-tight">
								<span>Appeler</span>
								<span class="text-xs font-medium opacity-80 sm:text-sm">{phoneAlt.label}</span>
							</span>
						</Button>
					</div>
				</Card>
			</Card>
		</div>

		<div class="flex flex-col gap-6 lg:flex-[0.95]">
			<Card variant="surface" padding="sm" class="gap-4">
				<Text variant="eyebrow" tone="cta">actions rapides</Text>
				<Title level="h3" class="mb-1 text-pretty">Choisissez le bon canal</Title>
				<Text variant="body-sm" tone="muted" class="m-0 max-w-xl text-pretty">
					Pour une réponse rapide, utilisez la démarche qui correspond à votre besoin.
				</Text>

				<div class="grid gap-4">
					<Button
						href="https://docs.google.com/forms/d/e/1FAIpQLSdAIASA4P_Y4BXSHUcBpThsUTXYiBT6ApY8iJzV-FdCl_USIw/viewform"
						tone="cta"
						size="lg"
						fullWidth
						target="_blank"
						rel="noreferrer"
					>
						Prendre rendez-vous
					</Button>

					<Button href={phoneMain.href} variant="outline" tone="cta" size="lg" fullWidth>
						<span class="flex flex-col items-center leading-tight">
							<span>Appeler la clinique</span>
							<span class="text-xs font-medium opacity-80 sm:text-sm">{phoneMain.label}</span>
						</span>
					</Button>
				</div>

				<div class="border-light-grey/60 bg-sections-background/60 rounded-2xl border p-4">
					<Text variant="eyebrow" tone="cta">professionnels</Text>
					<Text variant="body-sm" tone="muted" class="m-0">
						Vous êtes médecin et souhaitez nous adresser un patient ?
					</Text>
					<div class="pt-3">
						<Button
							href="https://docs.google.com/forms/d/e/1FAIpQLSdgsBYGnQGjyrgFs4atjERX0qXcH9_-4e9Zt9VJtHQFD-t31Q/viewform?usp=header"
							variant="outline"
							tone="cta"
							fullWidth
							target="_blank"
							rel="noreferrer"
						>
							Adresser un patient
						</Button>
					</div>
				</div>
			</Card>

			<Card variant="surface" padding="md" class="flex-1 gap-5">
				<Text variant="eyebrow" tone="cta">coordonnées</Text>
				<Title level="sub2" class="mb-1">Nous joindre</Title>

				<div class="space-y-6">
					{#each contactItems as { icon: Icon, title, lines, link } (title)}
						<div class="space-y-3">
							<div class="flex items-center gap-2">
								<Icon class="size-5" />
								<p class="text-primary font-semibold">{title}</p>
							</div>
							<div class="space-y-2">
								{#each lines as line (line)}
									{#if title === 'Appelez-nous'}
										<a
											href={line === phoneMain.label ? phoneMain.href : phoneAlt.href}
											class="text-secondary block underline underline-offset-4"
										>
											{line}
										</a>
									{:else if link}
										<a href={link} class="text-secondary block underline underline-offset-4"
											>{line}</a
										>
									{:else if title === 'Visitez-nous'}
										<a
											href={mapsHref}
											target="_blank"
											rel="noreferrer"
											class="text-secondary block underline underline-offset-4"
										>
											{line}
										</a>
									{:else}
										<p class="text-secondary">{line}</p>
									{/if}
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</Card>
		</div>
	</div>
</Section>

<Section spacing="tight" width="wide" id="localisation">
	<div class="space-y-6">
		<div class="space-y-2">
			<Text variant="eyebrow" tone="cta">localisation</Text>
			<Title level="h3" class="text-pretty">Accès et itinéraire</Title>
			<Text variant="body-sm" tone="muted" class="m-0 max-w-2xl text-pretty">
				Retrouvez la clinique sur la carte et préparez votre trajet.
			</Text>
		</div>

		<Map title="Localisation de la clinique" />
	</div>
</Section>
