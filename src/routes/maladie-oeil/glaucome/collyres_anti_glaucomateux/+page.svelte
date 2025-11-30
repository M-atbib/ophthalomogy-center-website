<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/glaucome" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Collyres anti-glaucomateux</Title>
		<Text>
			Le glaucome est une maladie chronique : les collyres n’inversent pas les déficits mais ralentissent
			l’évolution en abaissant durablement la pression intra-oculaire.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Objectif : atteindre la pression cible</Title>
			<Text>
				On fixe une pression « cible » propre à chaque patient selon l’âge, la sévérité du glaucome et l’épaisseur
				cornéenne. L’évaluation associe pression, champ visuel et aspect du nerf optique.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Mode d’action</Title>
			<Text>Les collyres agissent en :</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Diminuant la production d’humeur aqueuse (corps ciliaires) ;</li>
				<li>Facilitant son évacuation par la voie uvéo-sclérale.</li>
			</ul>
			<Text>Des combinaisons fixes peuvent contenir deux molécules pour renforcer l’efficacité.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Principales familles disponibles</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Bêta-bloquants ;</li>
				<li>Analogues des prostaglandines ;</li>
				<li>Inhibiteurs de l’anhydrase carbonique ;</li>
				<li>Agonistes alpha2-adrénergiques.</li>
			</ul>
			<Text>
				Le choix dépend du type de glaucome, des antécédents médicaux et des éventuelles allergies. Tous les yeux ne
				réagissent pas de la même manière aux différentes classes.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Principes thérapeutiques</Title>
			<TextWithCorners>Rigueur et bonne technique d’instillation sont indispensables.</TextWithCorners>
			<Text>
				Les oublis expliquent de nombreux échecs. Suivez précisément les prescriptions et n’arrêtez jamais le
				traitement sans l’avis de votre ophtalmologiste, même si un laser ou une chirurgie est programmée.
			</Text>
			<Text>
				Exceptionnellement, un traitement par comprimés peut être associé en appoint quand les collyres ne
				suffisent pas.
			</Text>
		</div>
	</div>
</Section>
