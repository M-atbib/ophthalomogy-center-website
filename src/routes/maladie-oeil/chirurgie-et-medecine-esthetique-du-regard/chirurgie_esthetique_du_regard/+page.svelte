<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { EsthetiqueEyePageThreeImgOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button
		variant="ghost"
		href="/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard"
		class="w-fit"
	>
		<ArrowLeft />
		Retour
	</Button>

	<Title class="my-10" level="h1">Chirurgie esthétique du regard</Title>
	<Text>
		La blépharoplastie est une intervention chirurgicale visant à rajeunir le regard. Elle peut être
		réalisée sur vos paupières supérieures et/ou inférieures.
	</Text>

	<div class="mt-10 flex items-center gap-10">
		<div>
			<Title level="h2">La blépharoplastie : chirurgie des yeux et rajeunissement du regard</Title>
			<Text>
				Le vieillissement du regard est marqué par un relâchement cutané et une modification de la
				répartition des graisses du visage. Ceci conduit à l’apparition d’un excès de peau au niveau
				des paupières supérieures et à l’effacement du pli naturel de la paupière. Des poches de
				graisse peuvent faire saillie sous la peau. On voit également l'apparition de cernes.
			</Text>
			<Text>La blépharoplastie est une intervention chirurgicale visant à rajeunir le regard.</Text>
			<Text>
				La blépharoplastie supérieure consiste à retirer un excès de peau et/ou de graisse apparu(s)
				au niveau des paupières supérieures. L'incision chirurgicale sera cachée dans le pli naturel
				de la paupière.
			</Text>
			<Text>
				La blépharoplastie inférieure consiste à retirer un excès de peau et/ou de graisse apparu(s)
				au niveau des paupières inférieures. L'incision est, cette fois, réalisée à la racine des
				cils de la paupière inférieure. Une alternative consiste à aborder les tissus par la
				conjonctive, à l’intérieur du cul-de-sac de la paupière.
			</Text>
		</div>

		<figure class="mx-auto mt-10 w-full max-w-xl overflow-hidden rounded-md">
			<img
				src={EsthetiqueEyePageThreeImgOne}
				alt="Illustration du choix d'implant sur mesure"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>

	<Title level="h2">Modalités de l’intervention</Title>
	<Title level="sub2">Hospitalisation</Title>
	<Text>
		La blépharoplastie se pratique en chirurgie ambulatoire. Vous rentrez chez vous dans les heures
		qui suivent l'intervention.
	</Text>
	<Title level="sub2">Anesthésie</Title>
	<Text>
		La chirurgie se pratique, dans la grande majorité des cas, sous anesthésie locale. Malgré tout,
		il est possible de réaliser une anesthésie générale, essentiellement lorsque les quatre
		paupières nécessitent un geste.
	</Text>
	<Title level="sub2">Durée de l'intervention</Title>
	<Text>Le temps opératoire n'excède généralement pas une heure.</Text>

	<Title level="h2">Complications du geste</Title>
	<Text>Les principales complications de la blépharoplastie sont :</Text>
	<ul class="list-disc space-y-2 pl-5">
		<li>La survenue d'hématomes ;</li>
		<li>Un défaut de fermeture des paupières (lagophtalmie) ;</li>
		<li>Un ectropion (éversion de la paupière) ;</li>
		<li>L'infection.</li>
	</ul>

	<TextWithCorners>
		Un arrêt du tabac est vivement conseillé avant et après votre intervention, pour limiter tout
		risque de complication et favoriser la cicatrisation de la peau.
	</TextWithCorners>

	<Title level="sub2">Période post-opératoire</Title>
	<Text>
		En général, les patients opérés prévoient une éviction sociale d’une dizaine de jours, en raison
		de l’oedème et des possibles ecchymoses post-opératoires. Les fils sont retirés au bout d’une
		semaine. De simples soins locaux sont à réaliser à la maison. La prise d’antalgiques peut être
		nécessaire.
		<br />
		Une pratique sportive peut être reprise au bout d’un mois.
	</Text>
</Section>
