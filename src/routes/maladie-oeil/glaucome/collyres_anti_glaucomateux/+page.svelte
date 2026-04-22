<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';

	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/glaucome" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Collyres anti-glaucomateux</Title>
	<Text>
		Le glaucome est une affection chronique et évolutive, dont le traitement ne peut pas, à l'heure
		actuelle, permettre la récupération des déficits visuels constitués. Les moyens thérapeutiques
		ne sont que suspensifs et ont pour objectif principal de ralentir au maximum l'évolution de la
		maladie.
	</Text>

	<Text>
		Il est largement admis que c'est en faisant baisser la pression intra-oculaire de manière
		durable que le glaucome cesse d'évoluer. La pression intra-oculaire est donc un élément
		essentiel de la surveillance clinique, tout comme l'évaluation du champ visuel et du nerf
		optique.
	</Text>
	<Text>
		On vise une pression en-dessous de laquelle la maladie cesse de s'aggraver: c'est la pression
		intra-oculaire cible. Elle est propre à chaque individu, en fonction de son âge, de la sévérité
		du glaucome et de l'épaisseur de la cornée (ou "pachymétrie"), qui peut perturber la
		fiabilité de mesure de la pression intra-oculaire.
	</Text>

	<Title level="h3">Molécules anti-glaucomateuses</Title>
	<Text>
		Plusieurs molécules sont disponibles en France, sous forme de collyres, pour permettre de faire
		chuter la pression intra-oculaire. Un même collyre peut contenir jusqu’à deux molécules
		différentes ; on parle alors de « combinaison fixe ».  L’addition de plusieurs molécules n’est
		pas obligatoire mais peut, dans certains cas, permettre d’accroître l’efficacité thérapeutique
		et d’atteindre une pression intra-oculaire suffisamment basse.
	</Text>
	<Title level="sub1">Mécanismes d'action</Title>
	<Text>Les collyres anti-glaucomateux peuvent agir de deux manières :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			En diminuant la fabrication de l’humeur aqueuse, le liquide intra-oculaire. Celle-ci est
			produite par les corps ciliaires, situés juste en arrière de l'iris.
		</li>
		<li>
			En facilitant sa résorption et donc, sa sortie de l’oeil. De manière générale, les collyres
			n'agissent pas sur le trabéculum, mais sur une voie "accessoire" de sortie: la voie
			uvéo-sclérale.
		</li>
	</ul>

	<Title level="sub1">Différentes classes thérapeutiques disponibles</Title>
	<Text>
		Le choix de la molécule est une décision importante, qui pourra dépendre du type de glaucome,
		mais aussi de vos antécédents médicaux généraux et d’éventuelles allergies.
	</Text>
	<Text>4 grandes familles thérapeutiques sont actuellement disponibles, en France.</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Les béta-bloquants</li>
		<li>Les analogues des prostaglandines</li>
		<li>Les inhibiteurs de l'anhydrase carbonique</li>
		<li>Les agonistes alpha2- adrénergiques</li>
	</ul>

	<Text>
		Tous les yeux ne répondent pas de la même façon aux différentes molécules. La stratégie
		d'addition des collyres ne porte pas toujours ses fruits et il n'est pas toujours possible
		d'associer les 4 familles.
	</Text>

	<Title level="h3">Principes thérapeutiques</Title>

	<Text>
		Le traitement par collyres anti-glaucomateux impose une grande rigueur ; les oublis
		d’instillation constituent l’une des principales causes d’échec du traitement.
		Une mauvaise technique d’instillation peut aussi impacter les résultats pressionnels.
	</Text>
	<TextWithCorners>
		Le traitement d’une crise de glaucome aigü est une urgence. Elle nécessite la mise en place d’un
		traitement sans délai !
	</TextWithCorners>

	<Text>
		Évidemment, si vous bénéficiez d'autres alternatives thérapeutiques, comme un traitement
		laser ou une chirurgie, votre ophtalmologiste suspendra peut-être toute ou partie de votre
		traitement hypotonisant.
	</Text>
	<Text>
		De manière générale, n'arrêtez pas votre traitement sans en informer votre ophtalmologiste. Ne
		le modifiez pas non plus sans son avis.
	</Text>
	<Text>
		Exceptionnellement, un traitement par comprimés peut être également prescrit. De manière
		générale, il s’agit d’un traitement d’appoint, en cas de mauvais contrôle par collyres seuls.
	</Text>
</Section>
