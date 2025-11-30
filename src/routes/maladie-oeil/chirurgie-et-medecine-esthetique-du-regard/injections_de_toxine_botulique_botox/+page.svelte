<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4">
		<Title level="h1">Injections de toxine botulique (Botox®)</Title>
		<Text>
			Des dosages adaptés permettent d’obtenir un visage détendu et naturel, loin des aspects figés.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Produit et action</Title>
			<Text>
				La toxine botulique bloque la transmission nerveuse à l’origine de la contraction musculaire. Utilisée
				par les ophtalmologistes depuis les années 1970 (strabisme, spasmes), elle possède un excellent profil de
				sécurité.
			</Text>
			<TextWithCorners>Les effets apparaissent en trois jours, progressent sur trois semaines et durent 4 à 6 mois.</TextWithCorners>
			<Text>Elle cible le tiers supérieur du visage (front, rides du lion, pattes d’oie) et peut être injectée à titre préventif chez le patient jeune.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Déroulement d’une séance</Title>
			<Text>
				Après analyse du visage et plan personnalisé, les injections se déroulent dans une salle dédiée avec
				aiguilles fines ; la crème anesthésiante réduit l’appréhension.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Complications et contre-indications</Title>
			<Text>
				Complications possibles (rares et réversibles) : petits hématomes, céphalées, asymétrie, chute de paupière.
			</Text>
			<Text>
				Contre-indications principales : maladies neuro-musculaires. Pas d’injection durant la grossesse ou
				l’allaitement par précaution.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Tarifs et précautions</Title>
			<Text>Une séance coûte 250 à 350 € (non remboursée).</Text>
			<TextWithCorners>Ne pas appuyer sur les zones injectées pendant 6 heures et éviter sport/fortes chaleurs 24 h.</TextWithCorners>
		</div>
	</div>
</Section>
