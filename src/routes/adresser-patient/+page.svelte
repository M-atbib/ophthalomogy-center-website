<script lang="ts">
	import ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';
	import { Card, Section, Text, Title } from '$lib';
	import { AdressingPatientHero, AdressingPatientIllustration } from '$lib/assets';
	import Breadcrumb from '$lib/components/general/Breadcrumb.svelte';
</script>

<Section spacing="comfortable" width="wide" variant="muted">
	<Breadcrumb current="Adresser un patient" />
	<div class="site-hero-grid">
		<div class="space-y-6">
			<Text variant="eyebrow" tone="cta">Professionnels de santé</Text>
			<Title level="h1" class="text-pretty">Nous adresser un patient</Title>
			<Text variant="body-lg" tone="muted" class="text-pretty">
				ATTENTION : Cette page s'adresse uniquement aux professionnels de santé<br />
				Vous êtes un professionnel de santé et vous souhaitez nous adresser l’un de vos patients ?
				<br />
				Plusieurs possibilités s’offrent à vous, selon le niveau d'urgence estimé de la situation.
			</Text>
		</div>
		<figure class="site-hero-media">
			<ResponsiveImage
				src={AdressingPatientHero}
				imageKey="adressin-patient-hero-male"
				alt="Groupe de professionnels de santé, image d’illustration"
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
