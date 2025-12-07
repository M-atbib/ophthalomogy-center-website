<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { PaupieresPageFourIlluOne, PaupieresPageFourIlluTwo } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/paupieres-et-voies-lacrymales" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Pathologies des voies lacrymales de l'adult</Title>
	</div>

	<Text>
		Les voies lacrymales constituent une véritable pompe, qui draine les liquides de la surface
		oculaire vers les fosses nasales. Elles sont parfaitement invisibles, ayant un trajet
		sous-cutané, puis profond, sous la crête lacrymale osseuse, à la base du nez.
	</Text>

	<TextWithCorners>
		Toute pathologie des voies lacrymales va entraîner un larmoiement excessif, par l’augmentation
		du lac lacrymal et son reflux via l’écoulement sur la joue.
	</TextWithCorners>

	<Text>
		L’appareil palpébral et lacrymal est volontiers exploré en consultation spécialisée, à l’aide de
		techniques instrumentales. Parfois, des examens au bloc opératoire sont nécessaires pour mieux
		comprendre les phénomènes en cause.
	</Text>

	<Title level="h2">Anatomie des voies lacrymales</Title>
	<Text>
		L’arbre lacrymal commence, à l’extrémité interne du bord libre des paupières, par les méats
		lacrymaux, supérieur et inférieur. Il s’agit de deux petits orifices qui permettent l’accès
		aux canalicules lacrymaux, là encore, respectivement, supérieur et inférieur.
	</Text>
	<Text>
		Les canalicules se réunissent brièvement en un canalicule commun pour s’ouvrir dans le sac
		lacrymal. Un système anti-relux est présent à ce niveau, pour éviter que les larmes n’adoptent
		un trajet inversé : la valve de Rosenmüller. Le sac lacrymal a grossièrement la forme d’une
		ampoule verticale et constitue un véritable réservoir. À son extrémité inférieure, un goulot se
		forme et se poursuit par le canal lacrymo-nasal. C’est par la valve de Hasner, normalement
		complètement perméable, que l’accès aux fosses nasales est possible, sous le cornet moyen.
	</Text>

	<figure class=" mx-auto w-full max-w-lg overflow-hidden">
		<img
			src={PaupieresPageFourIlluOne}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="h2">La production lacrymale</Title>
	<Text>
		Elle est assurée, en grande partie, par la glande lacrymale principale, logée dans l’orbite
		osseuse, dans son quadrant latéral et supérieur (à l’opposé des voies lacrymales, organisées sur
		son versant nasal). Il existe également des glandes lacrymales accessoires, parmi lesquelles on
		retrouve les glandes de Meibomius.
	</Text>
	<Title level="h2">Pathologies fréquentes des voies lacrymales</Title>
	<Title level="sub2">Dacryocystite</Title>
	<Text>
		Elle désigne une infection du sac lacrymal, qui fait suite à la stagnation des larmes à
		l’intérieur de celui-ci. La principale cause de dacryocystite est la sténose du canal
		lacrymo-nasal, c’est-à-dire que ce canal est partiellement ou totalement bouché. Les larmes ne
		peuvent alors plus s’écouler vers les fosses nasales et stagnent à l’intérieur des voies
		lacrymales. Le sac se distend et les liquides s’infectent, entraînant des signes inflammatoires
		locaux.
	</Text>
	<figure class=" mx-auto w-full max-w-lg overflow-hidden">
		<img
			src={PaupieresPageFourIlluTwo}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Text>
		En cas de dacryocystite, on retrouve une tuméfaction, plus ou moins volumineuse, localisée au
		coin interne de l’œil. La peau est rouge à ce niveau et la pression en est douloureuse.
		<br />
		Les principales complications d’un tel épisode sont :
	</Text>
	<ul class="list-disc space-y-2 pl-5">
		<li>
			La fistulisation, avec, parfois, une nécrose de la peau en surface et la vidange de l’abcès
		</li>
		<li>La cellulite orbitaire et ses complications, potentiellement très sévères</li>
	</ul>
	<Text>La prise en charge d’une dacryocystite est médico-chirurgicale.</Text>
	<ul class="list-disc space-y-2 pl-5">
		<li>
			Dans un premier temps, il convient de prendre en charge l’infection et ses conséquences. Un
			traitement antibiotique est nécessaire. Parfois, votre ophtalmologiste devra inciser le sac
			lacrymal, pour évacuer le pus en excès dans celui-ci.
		</li>
		<li>
			Dans un second temps, il faudra prendre en charge la cause de cet épisode : l’obstruction du
			canal lacrymo-nasal. L’intervention privilégiée dans ce cas est
			la dacryo-cysto-rhinostomie (DCRS), qui permet de créer une nouvelle voie d’accès aux fosses
			nasales, via une incision dans le sac lacrymal et la mise en place d’une sonde d’intubation en
			silicone.
		</li>
	</ul>

	<Title level="sub2">Larmoiement chronique</Title>
	<Text>
		Tout rétrécissement ou obstacle présent sur le trajet des voies lacrymales est une cause
		potentielle de larmoiement chronique.
	</Text>
	<Text>Causes principales</Text>
	<ul class="list-disc space-y-2 pl-5">
		<li>
			Les lithiases lacrymales, ou dacryolithes. À l’image des calculs retrouvés ailleurs dans le
			corps humain, ceux-ci peuvent empêcher l’écoulement des larmes et même, parfois, entraîner de
			véritables crises de colique lacrymale, assez proches de l’épisode de dacryocystite aigüe.
		</li>
		<li>
			Les canaliculites, infectieuses, médicamenteuses ou inflammatoires. L’obstacle est haut situé
			et le larmoiement s’associe parfois à une douleur et une rougeur locales. La pression du bord
			libre de la paupière va entraîner un reflux de sécrétions par le méat lacrymal, qui peut
			orienter vers la cause de la canaliculite.
		</li>
		<li>
			Les canaliculites, infectieuses, médicamenteuses ou inflammatoires. L’obstacle est haut situé
			et le larmoiement s’associe parfois à une douleur et une rougeur locales. La pression du bord
			libre de la paupière va entraîner un reflux de sécrétions par le méat lacrymal, qui peut
			orienter vers la cause de la canaliculite.
		</li>
	</ul>

	<Text>
		De même, une malposition palpébrale, quelle qu’en soit la cause, peut déplacer le méat lacrymal.
		Il peut être nécessaire de réaliser un geste chirurgical palpébral pour corriger le larmoiement.
	</Text>

	<Title level="h2">Exploration des pathologies des voies lacrymales</Title>
	<TextWithCorners>
		Une consultation dédiée, avec un ophtalmologiste spécialisé dans ce type de pathologie est le
		plus souvent nécessaire.
	</TextWithCorners>
	<Text>
		Si l’examen clinique permet, dans un premier temps, d’apporter de premières hypothèses
		diagnostiques, des examens complémentaires sont très souvent nécessaires :
	</Text>
	<ul class="list-disc space-y-2 pl-5">
		<li>Le sondage doux, en salle de soins, permet de repérer un obstacle plutôt haut situé</li>
		<li>
			Le lavage lui est très souvent associé et permet une évaluation des flux liquidiens à travers
			les voies lacrymales.
		</li>
		<li>
			La dacryocystographie, le dacryo-scanner, le dacryo-IRM, la scintigraphie des voies
			lacrymales sont des examens d’imagerie possibles pour parfaire le diagnostic. Leurs
			indications sont propres à certaines hypothèses diagnostiques précises, que votre
			ophtalmologiste vous exposera le cas échéant.
		</li>
		<li>
			Une endoscopie nasale, par introduction d’une caméra dans les fosses nasales, fait également
			partie des moyens diagnostiques disponibles
		</li>
	</ul>
</Section>
