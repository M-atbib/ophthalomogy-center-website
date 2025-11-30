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
		<Title level="h1">Amblyopie : le syndrome de l'œil paresseux</Title>
		<Text>
			L’amblyopie correspond à une différence de vision entre les deux yeux : l’un voit bien, l’autre non. Elle
			touche 2 à 3 % des enfants et résulte d’un défaut de développement du lien œil-cerveau.
		</Text>
		<TextWithCorners>
			Après 7-8 ans, le déficit devient irréversible : un diagnostic précoce et un traitement bien conduit permettent
			de récupérer en quelques mois.
		</TextWithCorners>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Causes principales</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Strabisme (déviation permanente d’un œil) ;</li>
				<li>Amétropies non corrigées (forte hypermétropie, myopie, astigmatisme) ;</li>
				<li>Anomalies morphologiques (cataracte ou glaucome congénital, pathologies héréditaires) ;</li>
				<li>Ptosis congénital obstruant l’axe pupillaire.</li>
			</ul>
			<Title level="sub2">Facteurs de risque</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Prématurité ;</li>
				<li>Antécédents familiaux d’amblyopie ;</li>
				<li>Pathologies neurologiques ou troubles du développement.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Signes d’alerte</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>L’enfant se frotte les yeux, cligne ou plisse fréquemment ;</li>
				<li>Présence d’un strabisme, maux de tête ou oculaires ;</li>
				<li>Retard ou difficultés d’apprentissage ;</li>
				<li>Chalazions à répétition ;</li>
				<li>Vision floue de loin ou de près.</li>
			</ul>
			<TextWithCorners>Quand un œil voit bien, aucun symptôme n’est parfois perçu : dépistage systématique indispensable.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Traitement et évolution</Title>
			<Text>
				Le traitement associe lunettes portées en permanence et occlusion de l’œil sain (cache) pour stimuler l’œil
				paresseux.
			</Text>
			<Text>
				Pris en charge avant 8 ans, la vision remonte progressivement jusqu’à égaler l’autre œil. Sans traitement,
				la malvoyance devient définitive ; la chirurgie laser adulte ne corrige pas l’amblyopie.
			</Text>
			<TextWithCorners>
				Chaque enfant devrait bénéficier d’un examen ophtalmologique avant l’entrée en CP.
			</TextWithCorners>
		</div>
	</div>
</Section>
