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
		<Title level="h1">Injections d'acide hyaluronique et comblement</Title>
		<Text>
			L’acide hyaluronique redonne du volume, comble les rides et améliore l’hydratation cutanée. C’est un outil
			clé pour embellir et rajeunir le visage.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Molécule naturelle</Title>
			<Text>
				Présente naturellement dans la peau et les articulations, sa quantité diminue avec l’âge. La version
				synthétisée utilisée en médecine esthétique est biocompatible et résorbable, retenant l’eau dans les
				couches profondes.
			</Text>
			<TextWithCorners>Les effets durent en moyenne 6 à 12 mois selon les zones.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Indications</Title>
			<Text>
				Toutes les zones nécessitant du volume : pommettes, joues, tempes, vallée des larmes, cernes, lèvres,
				ovale du visage.
			</Text>
			<Text>
				Comblement des plis : sillons naso-géniens, plis d’amertume, rides des joues, des lèvres, du menton.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Déroulement d’une séance</Title>
			<Text>
				Après analyse du visage et plan de traitement personnalisé, les injections se pratiquent dans une salle
				dédiée avec des aiguilles fines. Une crème anesthésiante peut réduire l’appréhension.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Complications et contre-indications</Title>
			<Text>
				Complications possibles : petits hématomes, granulomes, asymétries, rougeurs. Elles restent rares.
			</Text>
			<Text>
				Contre-indications principales : maladies neuro-musculaires ou auto-immunes, troubles de la coagulation,
				antécédents de granulomes, allergies (très rares). Pas d’injections pendant la grossesse ou l’allaitement
				par précaution.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Tarifs</Title>
			<Text>Une séance coûte 300 €, produit et acte inclus (non remboursé par l’Assurance Maladie).</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Après la séance</Title>
			<TextWithCorners>Ne pas appuyer sur les zones injectées pendant 6 heures.</TextWithCorners>
			<Text>
				Éviter sport et fortes chaleurs (sauna, hammam) pendant 24 heures.
			</Text>
		</div>
	</div>
</Section>
