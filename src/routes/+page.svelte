<script lang="ts">
	import { Button, Card, Map, Section, Text, Title } from '$lib';
	import { contactItems, ourEngagements } from '$lib/content';
	import { MoveRight } from '@lucide/svelte';
	import { Hero, PicOne, PicTwo, PicThree, PicFour } from '$lib/assets';

	const heroHighlights = [
		'Équipement et technologie de diagnostic de pointe',
		'Des soins attentionnés et sans douleur'
	];
</script>

<!-- Section 1, hero -->
<Section spacing="relaxed"  width="wide">
	<div class="flex flex-col gap-10 lg:flex-row">
		<div class="flex w-full flex-col gap-8 lg:w-1/2">
			<div class="space-y-4">
				<Title level="h1" tone="cta" class="max-w-2xl text-balance lg:max-w-xl xl:max-w-3xl">
					Le centre de référence en OPHTALMOLOGIE proche de chez vous
				</Title>
				<Text variant="body-lg" tone="muted" class="max-w-2xl text-pretty">
					[Nom de Clinique] renouvelle votre correction optique (lunettes, lentilles), prend en
					charge toutes vos pathologies médicales (DMLA, glaucome, diabète...) et chirurgicales
					(cataracte, rétine, chirurgie des paupières et des voies lacrymales, greffes, chirurgie
					réfractive, laser…).
				</Text>
			</div>
			<div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
				<Button variant="solid" tone="cta" size="lg" href="/contactez-nous" class="w-full shadow-sm sm:w-auto">
					Prendre rendez-vous
				</Button>
				<Button variant="outline" tone="cta" size="lg" href="/contactez-nous" class="w-full sm:w-auto">
					Demander un appel
				</Button>
			</div>
		</div>

		<div class="w-full space-y-6 lg:w-1/2">
			<img
				src={Hero}
				alt="Consultation ophtalmologique"
				class="h-auto w-full rounded-3xl object-cover"
				loading="lazy"
			/>

			<div class="flex flex-col gap-4 sm:flex-row">
				{#each heroHighlights as highlight (highlight)}
					<Card variant="muted" padding="md" elevation="none" radius="md" class="flex-1 gap-2">
						<Text weight="semibold" class="text-pretty text-base sm:text-lg">{highlight}</Text>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</Section>

<!-- Section 2, À propos -->
<Section variant="muted" spacing="comfortable"  width="wide">
	<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full overflow-hidden rounded-3xl border shadow-sm"
		>
			<img
				src={PicOne}
				alt="Équipe spécialisée"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>

		<div class="space-y-5">
			<Text variant="eyebrow" tone="cta">À propos [Clinic Name]</Text>
			<Title level="h3" class="text-pretty">Soins oculaires experts, personnalisés pour vous</Title>
			<Text tone="muted" class="text-pretty">
				Chez [Nom de Clinique], nous croyons que tout le monde mérite une vision claire et saine.
				Notre clinique rassemble une équipe d'ophtalmologistes et de spécialistes des soins
				oculaires certifiés, dévoués à la précision, à la compassion et à l'innovation.
			</Text>
			<Button variant="ghost" tone="cta" href="/a-propos" class="group w-fit">
				en savoir plus
				<MoveRight class="size-4 transition-transform group-hover:translate-x-1" />
			</Button>
		</div>
	</div>

	<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
		<div class="space-y-5">
			<Text variant="eyebrow" tone="cta">Traitement disponible</Text>
			<Title level="h3" class="text-pretty">Des protocoles adaptés à chaque pathologie</Title>
			<Text tone="muted" class="text-pretty">
				Chez [Nom de clinique], nous proposons des traitements avancés et personnalisés pour un
				large éventail de pathologies oculaires. Nous utilisons une technologie de pointe pour
				diagnostiquer et prendre en charge les maladies oculaires, vous aidant ainsi à préserver et
				à améliorer votre vision.
			</Text>
			<Button variant="ghost" tone="cta" href="/a-propos" class="group w-fit">
				en savoir plus
				<MoveRight class="size-4 transition-transform group-hover:translate-x-1" />
			</Button>
		</div>

		<figure
			class="border-light-grey/60 bg-primary-background order-first mx-auto w-full overflow-hidden rounded-4xl border shadow-sm lg:order-last"
		>
			<img
				src={PicTwo}
				alt="Matériel de traitement"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>
</Section>

<!-- Section 3, contact & map -->
<Section spacing="comfortable"  width="wide">
	<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
		<div class="space-y-6 lg:w-5/12">
			<Text variant="eyebrow" tone="cta">Visitez notre clinique</Text>
			<Title level="h3" class="text-pretty">Nous sommes là pour vous aider à mieux voir</Title>

			<Card variant="surface" class="space-y-5">
				{#each contactItems as { icon: Icon, title, lines, link } (title)}
					<div class="space-y-3">
						<div class="flex gap-2">
							<Icon class="size-5" />
							<p class="text-primary font-semibold">{title}</p>
						</div>
						{#each lines as line (line)}
							{#if link}
								<a href={link} class="text-secondary block underline underline-offset-4">{line}</a>
							{:else}
								<p class="text-secondary">{line}</p>
							{/if}
						{/each}
					</div>
				{/each}
			</Card>
		</div>

		<div class="w-full lg:flex-1">
			<Map title="Localisation de la clinique" />
		</div>
	</div>
</Section>

<!-- Section 4, video -->
<Section variant="muted" spacing="comfortable" align="center" >
	<div class="space-y-3 text-center">
		<Text variant="eyebrow" tone="cta" align="center">Le [Nom de Clinique] en vidéo</Text>
		<Title level="h2" align="center">Découvrez nos espaces et notre équipe</Title>
	</div>

	<div class="mx-auto w-full max-w-4xl">
		<div class="border-light-grey/60 bg-card/5 rounded-4xl overflow-hidden border shadow-md">
			<video
				class="h-full w-full"
				controls
				aria-label="Présentation vidéo du centre ophtalmologique"
			>
				<source type="video/mp4" />
				<track kind="captions" />
				Votre navigateur ne supporte pas la lecture vidéo.
			</video>
		</div>
	</div>
</Section>

<!-- Section 5, engagements -->
<Section spacing="comfortable" >
	<div class="space-y-3 text-center">
		<Text variant="eyebrow" tone="cta" align="center">Nos engagements</Text>
		<Title level="h2" align="center">Exigence médicale &amp; attention humaine</Title>
		<Text tone="muted" align="center" class="text-pretty">
			Des soins pensés pour rassurer, accompagner et apporter des solutions durables à chaque
			patient.
		</Text>
	</div>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each ourEngagements as { icon: Icon, title } (title)}
			<Card variant="muted" padding="lg" elevation="none" class="flex flex-row gap-4 shadow-none">
				<span
					class="bg-primary-background text-cta inline-flex h-12 w-12 items-center justify-center rounded-2xl"
				>
					<Icon class="h-5 w-5" />
				</span>
				<Text weight="semibold" class="flex-1 text-pretty">{title}</Text>
			</Card>
		{/each}
	</div>
</Section>

<Section variant="muted" spacing="comfortable"  width="wide">
	<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
		<figure
			class="border-light-grey/60 bg-primary-background max-w-2xl overflow-hidden rounded-3xl border shadow-sm"
		>
			<img
				src={PicThree}
				alt="Équipe spécialisée"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>

		<div class="space-y-5">
			<Title level="h3" class="text-pretty">Vous êtes un patient et avez une urgence ?</Title>
			<Text tone="muted" class="text-pretty">
				Nos centres sont aussi organisés pour vous recevoir rapidement dans le cadre de toute
				pathologie urgente
			</Text>
			<Button variant="ghost" tone="cta" href="/contactez-nous" class="group w-fit">
				Contactez-nous
			</Button>
		</div>
	</div>

	<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
		<div class="space-y-5">
			<Title level="h3" class="text-pretty">Vous êtes un professionnel ?</Title>
			<Text tone="muted" class="text-pretty">
				Le [Nom de Clinique] reçoit des patients à la demande de tout professionnel de santé
			</Text>
			<Button variant="ghost" tone="cta" href="/addresser-patient" class="group w-fit">
				Nous adresser un patient
			</Button>
		</div>

		<figure
			class="border-light-grey/60 bg-primary-background rounded-4xl order-first max-w-2xl overflow-hidden border shadow-sm lg:order-last"
		>
			<img
				src={PicFour}
				alt="Matériel de traitement"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>
</Section>

<!-- Section 6, urgences & professionnels -->

<!-- Section 7, final CTA -->
<Section align="center" spacing="comfortable" >
	<div class="space-y-6">
		<Title level="h2" align="center" class="text-pretty">
			Pour toute question, prenez rendez-vous ou appelez-nous au
			<span class="text-cta">05 37 810 828</span>
		</Title>
		<Button variant="solid" tone="cta" size="lg" href="/contactez-nous" class="shadow-sm">
			Prendre rendez-vous
		</Button>
	</div>
</Section>
