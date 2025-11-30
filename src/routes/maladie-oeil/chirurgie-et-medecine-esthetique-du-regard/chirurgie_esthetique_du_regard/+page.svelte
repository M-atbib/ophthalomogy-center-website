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
		<Title level="h1">Chirurgie esthétique du regard</Title>
		<Text>
			La blépharoplastie rajeunit le regard en retirant l’excès de peau ou de graisse des paupières supérieures
			et/ou inférieures.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Principe</Title>
			<Text>
				Le vieillissement provoque un relâchement cutané, une modification des graisses faciales, l’apparition de
				cernes et la disparition du pli naturel de la paupière. La blépharoplastie corrige ces éléments.
			</Text>
			<Text>
				Les incisions sont dissimulées : dans le pli palpébral supérieur ou au ras des cils pour la paupière
				inférieure ; un abord conjonctival est possible.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Modalités</Title>
			<Title level="sub2">Hospitalisation</Title>
			<Text>Intervention ambulatoire : retour à domicile quelques heures après l’opération.</Text>
			<Title level="sub2">Anesthésie</Title>
			<Text>Anesthésie locale dans la plupart des cas ; générale si les quatre paupières sont traitées.</Text>
			<Title level="sub2">Durée</Title>
			<Text>Environ une heure de bloc opératoire.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Complications possibles</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Hématomes ;</li>
				<li>Lagophtalmie ;</li>
				<li>Ectropion ;</li>
				<li>Infection.</li>
			</ul>
			<TextWithCorners>Arrêter de fumer avant et après l’intervention limite les risques et favorise la cicatrisation.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Après l’opération</Title>
			<Text>
				Prévoyez une éviction sociale d’une dizaine de jours (œdème, ecchymoses). Les fils sont retirés vers J+7.
				Des soins locaux et des antalgiques légers peuvent être nécessaires. La reprise du sport est possible au
				bout d’un mois.
			</Text>
		</div>
	</div>
</Section>
