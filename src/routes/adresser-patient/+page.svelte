<script lang="ts">
	import { Card, Section, Text, Title } from '$lib';
	import { AdressingPatientHero, AdressingPatientIllustration } from '$lib/assets';
</script>

<Section spacing="comfortable" width="wide">
	<div class="flex flex-col gap-10 lg:flex-row lg:items-center">
		<div class="space-y-6 lg:w-6/12">
			<Title level="h1" class="text-pretty">Nous adresser un patient</Title>
			<Text variant="body-lg" tone="muted" class="text-pretty">
				ATTENTION : Cette page s'adresse uniquement aux professionnels de santé<br />
				Vous êtes un professionnel de santé et vous souhaitez nous adresser l’un de vos patients ?
				<br />
				Plusieurs possibilités s’offrent à vous, selon le niveau d'urgence estimé de la situation.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background rounded-4xl mx-auto w-full overflow-hidden border shadow-sm lg:w-6/12"
		>
			<img
				src={AdressingPatientHero}
				alt="Professionnel adressant un patient"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>
</Section>

<Section spacing="tight" width="wide">
	<div class="mb-8 space-y-4">
		<Title level="h3" class="text-pretty" tone="cta">A qui s'adresse ce service ?</Title>
		<Text tone="muted" class="text-pretty">
			Tous les professionnels de santé peuvent nous adresser des patients :
		</Text>
		<ul class="text-secondary list-disc space-y-2 pl-5">
			<li>
				Médecins ophtalmologues et non ophtalmologues (généralistes, diabétologues, cardiologues...)
				;
			</li>
			<li>Professionnels de la santé visuelle : orthoptistes, opticiens... ;</li>
			<li>Autres professionnels de santé : infirmiers, orthophonistes...</li>
		</ul>
	</div>

	<div class="space-y-6">
		<Title level="h3" class="text-pretty" tone="cta">
			Créneaux de rendez-vous dédiés aux professionnels de santé
		</Title>
		<Text tone="muted" class="text-pretty">
			Sur l'ensemble de nos agendas, 2 motifs sont dédiés aux professionnels de santé :
		</Text>
		<ul class="text-secondary list-disc space-y-4 pl-5">
			<li>"Urgence -pour toutes les urgences ophtalmologiques</li>
			<li>"Avis ophtalmologique pour un avis ophtalmologique rapide</li>
		</ul>
	</div>
</Section>
