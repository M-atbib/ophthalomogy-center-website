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
		<Title level="h1">Chirurgie du glaucome</Title>
		<Text>
			Quand les collyres ou le laser ne suffisent plus, une chirurgie peut être envisagée pour abaisser la
			pression intra-oculaire. L’objectif est de stabiliser la maladie, pas de guérir le glaucome.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Chirurgies filtrantes traditionnelles</Title>
			<Title level="sub2">Trabéculectomie</Title>
			<Text>
				Technique perforante qui crée une nouvelle voie d’évacuation : l’humeur aqueuse s’écoule sous la
				conjonctive pour former une bulle de filtration. Une surveillance rapprochée est nécessaire car la
				cicatrisation influence l’efficacité.
			</Text>
			<Text>La plupart des patients réduisent leur traitement mais ne s’en passent pas totalement.</Text>
			<Title level="sub2">Sclérectomie non perforante</Title>
			<Text>
				Le globe n’est pas ouvert complètement : on amincit le trabéculum par l’extérieur afin de faciliter
				la filtration. Une goniopuncture au laser peut être réalisée plus tard pour relancer le site filtrant.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Complications possibles</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Hypotonie oculaire (repos et hydratation recommandés) ;</li>
				<li>Infections : blébite, endophtalmie ;</li>
				<li>Cataracte secondaire ;</li>
				<li>Fuites post-opératoires (Seidel) ;</li>
				<li>Encapsulation de la bulle nécessitant parfois un needling.</li>
			</ul>
			<TextWithCorners>Douleur, rougeur ou baisse de vision après chirurgie = urgence ophtalmologique.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Chirurgies mini-invasives (MIGS)</Title>
			<Text>
				Techniques plus récentes consistant à implanter de petits dispositifs pour abaisser la pression. Elles
				peuvent être combinées à une chirurgie de cataracte ou réalisées seules. Toutes ne sont pas encore
				remboursées ; les indications dépendent du type de glaucome et de la pression cible.
			</Text>
		</div>
	</div>
</Section>
