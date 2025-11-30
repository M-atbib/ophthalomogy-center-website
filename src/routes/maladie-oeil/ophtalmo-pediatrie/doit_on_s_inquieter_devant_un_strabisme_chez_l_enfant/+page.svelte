<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/ophtalmo-pediatrie" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Doit-on s'inquiéter devant un strabisme chez l'enfant ?</Title>
		<Text>
			Le strabisme correspond à une déviation d’un œil (convergente, divergente ou verticale). Il touche environ
			3 % de la population et peut apparaître dès la naissance ou plus tard.
		</Text>
		<TextWithCorners>
			Tout strabisme permanent ou intermittent au-delà de 3 mois doit motiver une consultation.
		</TextWithCorners>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Facteurs de risque</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Défaut visuel (hypermétropie forte, anisométropie) ;</li>
				<li>Antécédents familiaux ;</li>
				<li>Prématurité/petit poids de naissance ;</li>
				<li>Œil non voyant (traumatisme, malformation) pouvant entraîner une déviation divergente.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Conséquences</Title>
			<Title level="sub2">Acuité visuelle</Title>
			<Text>
				Le cerveau neutralise l’image de l’œil dévié pour éviter la vision double. Chez l’enfant, ce mécanisme peut
				entraîner une amblyopie définitive si rien n’est fait avant 8 ans.
			</Text>
			<Title level="sub2">Vision binoculaire</Title>
			<Text>La coordination des deux yeux est perturbée, entraînant une mauvaise vision du relief.</Text>
			<Title level="sub2">Impact esthétique</Title>
			<Text>Le regard dévié peut être difficile à vivre à tout âge et constitue une indication à la chirurgie.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Strabisme précoce</Title>
			<Text>
				Présent dès la naissance ou avant 6 mois (le plus souvent convergent). Il nécessite un examen
				ophtalmologique rapide, des lunettes portées en permanence et un suivi rapproché.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Traitements</Title>
			<Title level="sub2">Lunettes</Title>
			<Text>Suppriment parfois le strabisme, notamment lorsqu’il est lié à une hypermétropie.</Text>
			<Title level="sub2">Toxine botulique</Title>
			<Text>Utilisée dans certains strabismes précoces pour relâcher temporairement les muscles oculomoteurs.</Text>
			<Title level="sub2">Chirurgie</Title>
			<Text>
				Possible à tout âge, idéalement avant l’entrée au CP (4-5 ans). Plusieurs interventions peuvent être
				nécessaires au cours de la vie en cas de récidive.
			</Text>
		</div>
	</div>
</Section>
