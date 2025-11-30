<script>
	import { Button, Section, Text, Title } from '$lib';
	import { AboutHero, AboutPicOne, AboutPicTwo } from '$lib/assets';
</script>

<Section spacing="comfortable" contentSpacing="none" width="wide">
	<div class="flex flex-col gap-10 lg:flex-row lg:items-center">
		<div class="space-y-6 lg:w-5/12">
			<Title level="h1" class="text-pretty">
				À Propos de [Nom de Clinique] : Excellence en Ophtalmologie
			</Title>
			<Text variant="body-lg" tone="muted" class="text-pretty">
				Au bloc opératoire ou dans nos cabinets, nous mettons quotidiennement tout en œuvre pour
				vous offrir une prise en charge performante et de haut niveau.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full overflow-hidden rounded-4xl border shadow-sm lg:w-7/12"
		>
			<img src={AboutHero} alt="" class="h-full w-full object-cover" loading="lazy" />
		</figure>
	</div>
</Section>

<Section variant="muted" spacing="comfortable" contentSpacing="lg" width="wide">
	<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
		<div class="space-y-6">
			<Text variant="eyebrow" tone="cta">Nos missions sont claires</Text>
			<div class="space-y-5">
				<Title level="sub1" class="text-pretty">Prendre en charge toutes les maladies oculaires</Title>
				<Text tone="muted" class="text-pretty">
					Sur le plan médical, [Nom de Clinique] possède du matériel de dernière génération. Ceci
					permet aux médecins de réaliser un ensemble très diversifié d’examens et de soins, alliant
					compétences et modernité
				</Text>
			</div>
			<div class="space-y-5">
				<Title level="sub1" class="text-pretty">Vous opérer dans les meilleures conditions</Title>
				<Text tone="muted" class="text-pretty">
					Sur le plan chirurgical, nos praticiens, au vu de leur niveau de spécialisation, sont en
					capacité de réaliser des chirurgies complexes et variées (cataracte, chirurgie
					palpébrale, greffe de cornée, strabisme, glaucome, chirurgie rétinenne…).
				</Text>
			</div>
		</div>
		<figure class="border-light-grey/60 bg-primary-background mx-auto w-full overflow-hidden rounded-4xl border shadow-sm">
			<img src={AboutPicOne} alt="" class="h-full w-full object-cover" loading="lazy" />
		</figure>
	</div>

	<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full overflow-hidden rounded-4xl border shadow-sm"
		>
			<img src={AboutPicTwo} alt="" class="h-full w-full object-cover" loading="lazy" />
		</figure>
		<div class="space-y-6">
			<Title level="sub1" class="text-pretty">Une seule ambition : le bien de nos patients</Title>
			<Text tone="muted" class="text-pretty">
				On assiste ces dernières années à une augmentation des besoins en soins ophtalmologiques
				(vieillissement de la population, DMLA, diabète, épidémie de myopie…). C’est pourquoi [Nom
				de la Clinique] se renouvelle sans cesse : modes de consultations innovant , compétences
				techniques à la pointe du progrès médical avec un souci profond d'humanité.
			</Text>
		</div>
	</div>
</Section>

<Section align="center" spacing="comfortable" contentSpacing="lg">
	<div class="mx-auto max-w-2xl space-y-6 text-center">
		<Title level="h2" align="center" class="text-pretty">Venez nous rencontrer !</Title>
		<Button
			variant="solid"
			tone="cta"
			size="lg"
			href="/contactez-nous"
			class="w-full shadow-sm sm:w-auto"
		>
			Prendre rendez-vous
		</Button>
	</div>
</Section>
