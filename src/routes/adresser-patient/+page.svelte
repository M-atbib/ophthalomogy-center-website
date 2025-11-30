<script lang="ts">
	import { Card, Section, Text, Title } from '$lib';
	import { AdressingPatientHero, AdressingPatientIllustration } from '$lib/assets';
</script>

<Section spacing="comfortable" contentSpacing="none" width="wide">
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

<Section spacing="tight" contentSpacing="lg" width="wide">
	<div class="space-y-4">
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

	<div>
		<Title level="h3" class="text-pretty" tone="cta">Modalités d'accès</Title>
		<Text tone="muted" class="text-pretty">
			Les spécialistes en ophtalmologie du [Nom de Clinique] sont accessibles pour les autres
			professionnels de santé via SOS selon 3 moyens
		</Text>
		<ul class="text-secondary list-disc space-y-2 pl-5">
			<li>Numéro de téléphone unique</li>
			<li>Prise de rendez-vous sur des créneaux dédiés</li>
		</ul>
	</div>

	<div class="space-y-4">
		<Title level="h3" class="text-pretty" tone="cta">
			Numéro de téléphone : 05 37 810 828 (numéro dédié aux professionnels de santé)
		</Title>
		<Text tone="muted" class="text-pretty">
			Cette ligne téléphonique est prioritaire. Ainsi, tous les professionnels de santé souhaitant
			nous contacter via SOS-Oeil auront un accès privilégié au standard téléphonique.
		</Text>
	</div>

	<figure class=" bg-primary-background rounded-4xl mx-auto my-12 w-full max-w-xl overflow-hidden">
		<img
			src={AdressingPatientIllustration}
			alt="Illustration prise de rendez-vous"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

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
		<Text tone="muted" class="text-pretty">
			Pour cela, les professionnels de santé devront, s'il n'ont pas d'accès doctolib, créer une
			session gratuite et sans engagement à partir du lien suivant : https://pro.doctolib.fr/join .
		</Text>
	</div>
</Section>
