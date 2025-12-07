<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageThreeIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Déchirures de la rétine et lésions rhegmatogènes</Title>
	</div>

	<Title level="h2">La rétine : qu'est-ce que c'est ?</Title>
	<Text>
		La rétine est une fine pellicule qui tapisse la partie postérieure de l'oeil. Elle est composée
		de 10 couches permettant de recevoir, traiter et transmettre l'information visuelle au cerveau
		via le nerf optique.
	</Text>
	<Text>La rétine est en rapport :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			En avant, la rétine est accolée au vitré (la poche de gel transparent qui remplit le globe
			oculaire)
		</li>
		<li>
			En arrière, la rétine repose sur la choroïde qui est un tissu vasculaire. Plus en arrière se
			situe la sclére qui est le tissu fibreux permettant la rigidité du globe oculaire.
		</li>
	</ul>
	<Title class="mt-10" level="h2">La rétine peut être le siège de déchirures et de trous</Title>
	<Text>
		Dans certaines circonstances, notamment lorsque se produit un décollement postérieur du vitré,
		la rétine peut se trouer ou se déchirer.  Ces lésions peuvent favoriser la survenue
		d'un décollement de rétine, si du liquide intra-oculaire s'engouffre dans la déchirure et
		soulève la rétine.
	</Text>
	<figure class="mx-auto w-full max-w-lg">
		<img
			src={RetineChirurgicalePageThreeIlluOne}
			alt="Schéma illustrant une déchirure rétinienne"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Text>
		Les signes suivants doivent vous amener à consulter en urgence, car ils peuvent révéler une
		complication rétinienne du DPV : mouches volantes nombreuses (myodésopsies), éclairs lumineux
		persistants (phosphènes), amputation du champ de vision, baisse de vision.
	</Text>
	<Text>
		Votre ophtalmologiste réalisera un fond d'oeil dilaté, afin de s’assurer de l’absence de lésion
		rétinienne et de décollement de rétine.
	</Text>
	<Text>
		Mieux vaut donc venir accompagné à votre consultation, afin de pouvoir repartir en sécurité
		après votre fond d'oeil. La conduite est en fait vivement déconseillée après dilatation
		pupillaire.
	</Text>

	<Title class="mt-10" level="h2"
		>Facteurs favorisant la survenue des lésions rétiniennes (déchirures et trous)
	</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Décollement Postérieur du Vitré (DPV) ;</li>
		<li>Chirurgie de la cataracte, récente ou ancienne ;</li>
		<li>Myopie forte ;</li>
		<li>Traumatisme oculaire ;</li>
		<li>Antécédents personnels de déchirure ou de trou.</li>
	</ul>
	<Text
		>Si vous avez déjà présenté un trou ou une déchirure de la rétine, votre ophtalmologiste
		réalisera certainement un fond d'oeil dilaté pour chacune de vos consultations de contrôle, afin
		de s'assurer de l'absence de nouvelle lésion.</Text
	>

	<Text>
		Certaines lésions rétiniennes favorisent la survenue de déchirures de rétine. Il s'agit de zones
		de fragilité, que l'on appelle "lésions rhegmatogènes". Les plus fréquentes sont les pallissades
		rétiniennes et les zones de "givre" périphériques. Face à de telles lésions, dépistées lors de
		l'examen du fond d'oeil, votre ophtalmologiste pourra vous proposer un traitement préventif par
		laser. Ce traitement n'est pas systématique et dépend de certains facteurs cliniques.
	</Text>

	<Title class="mt-10" level="h2">Fond d'oeil dilaté</Title>
	<Text>
		En cas de symptômes faisant suspecter une déchirure de la rétine, votre ophtalmologiste
		réalisera un examen complet de la rétine, au fond de l'oeil. Une dilatation de la pupille
		(ou mydriase), via des collyres instillés en consultation, sera alors nécessaire, afin d'accéder
		aux zones les plus périphériques.
	</Text>
	<Text
		>Dans d'autres circonstances, un examen du fond d'oeil peut être proposé sans dilatation
		pupillaire. Il peut être réalisé cliniquement (à l'aide de lentilles optiques spécialement
		adaptées) ou encore via des clichés dits "rétinophotographiques".</Text
	>
	<Text
		>En cas de dilatation pupillaire, mieux vaudra venir accompagné(e) pour la consultation. En
		effet, la conduite automobile est vivement déconseillée dans l'heure qui suit l'instillation de
		collyres mydriatiques.</Text
	>

	<Title class="mt-10" level="h2">Traitement rétinien au laser Argon</Title>
	<Title level="sub2">Objectifs du traitement laser</Title>
	<Text>
		Les déchirures rétiniennes sont, le plus souvent, de petite taille et n'ont aucune conséquence
		sur la vision. Dans ce cas, il n'est pas nécessaire de les traiter.
	</Text>
	<Text>
		Par contre, si la déchirure est étendue, du liquide intra-oculaire peut s'y engouffrer. Il
		existe alors un risque de décollement de la rétine. C'est pour éviter ce phénomène qu'un barrage
		au laser peut être réalisé tout autour de la déchirure. Ce barrage réalise un véritable obstacle
		au liquide, en "fusionnant" les différentes couches de la rétine.
	</Text>

	<Title level="sub2">Réalisation du barrage laser</Title>
	<Text>
		La séance se déroule dans le cadre d'une consultation dédiée, au cabinet d'Ophtalmologie.
	</Text>
	<Text
		>Après l'instillation de collyres anesthésiants sur la surface oculaire, un verre est appliqué
		sur l'oeil. Le traitement peut dès lors débuter. En règle générale, la séance dure quelques
		minutes.</Text
	>
	<Text
		>Quelques douleurs peuvent être ressenties, essentiellement à type d'échauffement. Votre
		ophtalmologiste adaptera évidemment la puissance du traitement laser pour qu'elles restent
		minimes.</Text
	>
	<Title level="sub2">Efficacité du laser</Title>

	<Text>
		Le laser permet d'éviter la survenue d'un décollement de rétine dans une grande majorité de cas.
	</Text>
	<Text>
		Par contre, son efficacité n'est pas immédiate ! Quelques semaines de repos sont nécessaires
		pour permettre une cicatrisation suffisamment solide de la rétine.
	</Text>
	<Text>
		Si vous avez bénéficié d'un barrage au laser et que, dans les jours suivants, vous présentez une
		baisse de vision ou une amputation du champ de vision, il est possible que la rétine se soit
		décollée. Nous vous invitons, dans ce cas, à vous rendre en urgence dans l'un de nos cabinets.
	</Text>
</Section>
