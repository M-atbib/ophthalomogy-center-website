<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/paupieres-et-voies-lacrymales" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title class="my-10" level="h1">Pathologies des voies lacrymales de l'enfant</Title>
	<Text>
		Il existe un équilibre entre la production des larmes et leur évacuation à travers les voies
		lacrymales. Lorsque cet équilibre est rompu, un larmoiement chronique produit. On
		parle « d’épiphora ».
	</Text>
	<Text>
		Les méats lacrymaux s’ouvrent au niveau du bord libre des paupières, tout près de la racine du
		nez. Ils permettent l’accès aux canalicules lacrymaux, enfouis sous la peau. Ces canalicules se
		réunissent, formant le canalicule commun et conduisent au sac lacrymal. Celui-ci prend la forme
		d’une ampoule, protégée par les structures osseuses du massif facial. Dans sa portion
		inférieure, le sac lacrymal se prolonge par le canal lacrymo-nasal, qui s’ouvre, via la valve de
		Hasner, dans les fosses nasales.
	</Text>

	<TextWithCorners>
		Toute pathologie des voies lacrymales va entraîner un larmoiement excessif, par l’augmentation
		du lac lacrymal et son reflux via l’écoulement sur la joue.
	</TextWithCorners>

	<Title level="h2">Imperforation lacrymo-nasale</Title>
	<Text>
		Il est très fréquent, chez le nourrisson, de constater la présence de membranes embryonnaires
		qui, au moment de la naissance, n’ont pas encore disparu. La plus fréquente se trouve au niveau
		de la valve de Hasner, donc tout au bout de la chaîne de drainage. Cette anomalie, appelée
		« imperforation lacrymo-nasale », est responsable de 90% des épiphora congénitaux d’origine
		obstructive.
	</Text>
	<TextWithCorners>
		Il s’agit plus d’une banale immaturité que d’une malformation à proprement parler.
	</TextWithCorners>
	<Text>
		Dans 20% des cas, cette imperforation est bilatérale et le larmoiement l’est donc
		également. D’autres malformations sont évidemment possibles à tout niveau de l’arbre lacrymal,
		comme, par exemple, une agénésie méatique ou canaliculaire. L’imperforation lacrymo-nasale va,
		dans la plupart des cas, régresser spontanément. La valvule de Hasner s’ouvre dans 75% des cas
		dans les 3 premiers mois de la vie. 85% des enfants n’ont plus d’imperméabilité à l’âge d’un
		an. Il convient donc de proposer un traitement peu aggressif, dans un premier temps. Les
		conjonctivites dites « lacrymales », répétées, doivent être traitées de manière symptomatique.
	</Text>
	<Text>
		Avant l’âge de 1 an, en cas d’imperforation lacrymo-nasale avérée, il est recommandé :
	</Text>
	<ul class="list-disc space-y-2 pl-5">
		<li>
			De masser régulièrement le sac lacrymal, pour stimuler sa vidange et éviter la stagnation de
			sécrétions chroniques, épaisses, et leur potentielle surinfection
		</li>
		<li>De traiter les conjonctivites par des lavages et des collyres antibiotiques</li>
	</ul>
	<Text>
		L’âge de réalisation de gestes plus invasifs est encore débattu. De manière générale, ceux-ci
		sont plutôt réalisés après l’âge de 12 mois.
	</Text>

	<Text>Deux types de gestes sont possibles, tous réalisés sous anesthésie générale :</Text>

	<ul class="list-disc space-y-2 pl-5">
		<li>
			Le sondage avec lavage: on guide tout simplement une sonde à travers les voies lacrymales
			jusqu’à perforer la valve de Hasner imperméable. Les voies lacrymales sont irriguées dans le
			même temps.
		</li>
		<li>
			L’intubation des voies lacrymales: plutôt réservée aux échecs du sondage simple. Un tube de
			silicone est placé dans les voies lacrymales afin de reconstituer une anatomie fonctionnelle
			plus efficace.
		</li>
	</ul>

	<Title level="h2">Mucocèle du sac lacrymal – Dacryocystocèle</Title>
	<Text>
		Cette pathologie est, elle aussi, un motif de recours fréquent à l’ophtalmologiste pour les
		nourrissons. Elle correspond à une dilatation du sac lacrymal, bien visible et palpable au coin
		interne de l’œil. Le mucocèle peut être bilatéral. <br />
		Cette affection est bénigne. La tuméfaction forme une masse que l’on peut facilement palper ; elle
		est souple et absolument indolore. Elle est observée dès les premières semaines de vie. Cette dilatation
		du sac lacrymal est une conséquence possible, là encore, de l’imperméabilité de la valve de Hasner. Elle
		va donc, dans une majorité de cas, régresser sans traitement dans les premiers mois de la vie de
		l’enfant. <br />
		La principale complication que l’on redoute est l’infection du sac : la dacryocystite précoce du
		nouveau-né. Pour cette raison, au moindre signe d’inflammation locale (rougeur, douleurs,
		fièvre), une consultation ophtalmologique urgente est nécessaire.
	</Text>
</Section>
