<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/strabologie-chirurgie-du-strabisme" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Principes de la chirurgie du strabisme</Title>
		<Text>
			La chirurgie du strabisme vise à réduire ou faire disparaître une déviation oculaire persistante malgré le port
			de lunettes en agissant directement sur les muscles responsables de l’alignement des yeux.
		</Text>
		<Text>
			Chaque œil possède six muscles oculomoteurs qui assurent les mouvements dans toutes les directions du regard.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Anatomie et principes chirurgicaux</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Muscle droit supérieur</li>
				<li>Muscle droit inférieur</li>
				<li>Muscle droit médial</li>
				<li>Muscle droit latéral</li>
				<li>Grand oblique</li>
				<li>Petit oblique</li>
			</ul>
			<Text>
				L’intervention concerne le plus souvent les muscles horizontaux (droit médial et droit latéral). Elle peut
				porter sur un ou deux muscles, sur un seul œil ou sur les deux, selon le type et l’ampleur du strabisme.
			</Text>
			<TextWithCorners>
				Le chirurgien renforce certains muscles et en affaiblit d’autres afin de corriger l’axe visuel et compenser la
				déviation.
			</TextWithCorners>
			<TextWithCorners>
				La chirurgie du strabisme répond avant tout à une indication esthétique : elle ne corrige ni l’acuité visuelle
				ni la dépendance aux lunettes.
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Complications possibles</Title>
			<Text>
				Les complications restent rares mais peuvent inclure une vision double passagère (surtout chez l’adulte), un
				traitement incomplet nécessitant une ré-intervention, ainsi que des risques exceptionnels d’infection,
				d’hémorragie, de rupture musculaire ou de perforation de la paroi oculaire.
			</Text>
			<Text>
				Le strabisme pouvant évoluer au cours de la vie, une récidive est possible même plusieurs années après la
				chirurgie. Une nouvelle opération peut alors être proposée.
			</Text>
			<TextWithCorners>
				La chirurgie du strabisme est réalisée sous anesthésie générale, en ambulatoire, avec des suites généralement
				simples.
			</TextWithCorners>
		</div>
	</div>
</Section>
