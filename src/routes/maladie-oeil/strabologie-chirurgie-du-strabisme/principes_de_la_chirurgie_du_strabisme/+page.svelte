<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { PediatriePageTwoIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/strabologie-chirurgie-du-strabisme" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Principes de la chirurgie du strabisme</Title>

	<Title level="h3">Anatomie et principes chirurgicaux</Title>
	<Text>
		La chirurgie du strabisme a pour but de faire disparaître ou de réduire une déviation oculaire,
		qui persiste malgré le port de lunettes.
	</Text>
	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={PediatriePageTwoIlluOne}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Text>Les muscles oculomoteurs sont au nombre de 6 par œil :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Le muscle droit supérieur,</li>
		<li>Le muscle droit inférieur,</li>
		<li>Le muscle droit médial,</li>
		<li>Le muscle droit latéral,</li>
		<li>Le muscle grand oblique,</li>
		<li>Le muscle petit oblique.</li>
	</ul>
	<Text>
		Dans la majorité des cas, l’intervention concerne les muscles horizontaux (muscles droit latéral
		et droit médial). Le chirurgien intervient sur un ou deux muscle(s) au cours de l’intervention
		et sur un seul œil ou sur les deux yeux, en fonction du type de strabisme et de son importance.
	</Text>
	<Text>
		La technique chirurgicale consiste à renforcer certains muscles et à en affaiblir certains
		autres. Ceci permet de corriger l'axe visuel et de lutter contre la déviation.
	</Text>
	<TextWithCorners>
		La chirurgie du strabisme est une intervention à visée essentiellement esthétique.
	</TextWithCorners>
	<Text>Elle ne permet pas d'améliorer la vision ni de diminuer le port de lunettes.</Text>

	<Title level="h3">Complications de la chirurgie</Title>
	<Text>
		Comme pour toute intervention, des complications sont possibles. Elles sont, toutefois, très
		rares.
	</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Vision double passagère (plus fréquente chez l’adulte) ;</li>
		<li>Traitement incomplet nécessitant un traitement chirurgical complémentaire à distance ;</li>
		<li>Infection et hémorragie sont rares ;</li>
		<li>
			La rupture d’un muscle anormal ou la perforation de la paroi de l’œil sont possible, mais
			exceptionnelles.
		</li>
	</ul>
	<Text>
		La récidive du strabisme peut se produire après la chirurgie, même après plusieurs années. En
		effet, le strabisme évolue tout au long de la vie. Une nouvelle opération pourra alors être
		proposée.
	</Text>
	<Text>
		La chirurgie du strabisme est réalisée sous anesthésie générale, en ambulatoire. Les suites sont
		simples dans la majorité des cas.
	</Text>
</Section>
