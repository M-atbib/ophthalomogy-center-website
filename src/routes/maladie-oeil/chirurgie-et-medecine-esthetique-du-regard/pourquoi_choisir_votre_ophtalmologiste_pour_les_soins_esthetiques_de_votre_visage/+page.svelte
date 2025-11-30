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
		<Title level="h1">Pourquoi choisir votre ophtalmologiste pour les soins esthétiques de votre visage ?</Title>
		<Text>
			Grâce à leur expertise chirurgicale, les ophtalmologistes sont des interlocuteurs privilégiés pour les
			soins esthétiques péri-orbitaires. Ils peuvent concevoir un plan de traitement global, médical et chirurgical.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<TextWithCorners>Ils maîtrisent l’anatomie fine de la région orbitaire et savent gérer les complications oculaires.</TextWithCorners>
		<div class="space-y-4">
			<Title level="h2">Prise en charge des complications</Title>
			<Text>
				Les traitements péri-oculaires (comblement, toxine, blépharoplastie…) peuvent exceptionnellement toucher l’œil.
				L’ophtalmologue anticipe ces risques et dispose des compétences pour les traiter.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Compétence microchirurgicale</Title>
			<Text>
				L’Ophtalmologie est la spécialité microchirurgicale par excellence : rigueur et minutie acquises au bloc
				cataracte se transposent aux gestes esthétiques.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Toxine botulique : une longue expérience</Title>
			<Text>
				Les ophtalmologistes utilisent la toxine botulique depuis les années 1970 et font partie des spécialités
				autorisées à l’injecter à visée esthétique.
			</Text>
		</div>
	</div>
</Section>
