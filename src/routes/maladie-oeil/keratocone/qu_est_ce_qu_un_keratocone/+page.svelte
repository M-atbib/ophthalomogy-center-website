<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { KératocônePageOneIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/keratocone" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Qu'est-ce qu'un kératocône ?</Title>

	<Title level="h3">Que se passe-t-il en cas de kératocône ?</Title>

	<Text>
		Le kératocône est une maladie de la cornée, structure transparente à travers laquelle la lumière
		peut entrer dans l’œil. La forme de cette dernière varie généralement très peu au long de la vie
		d’un individu, passée l’adolescence.
	</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={KératocônePageOneIlluOne}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Text>
		À l’inverse, en cas de kératocône, un amincissement progressif se produit et une zone de
		bombement excessif et localisé va se former lentement, jusqu’à aboutir à certaines
		complications.
	</Text>
	<Text>Il s’agit d’une pathologie de l’adulte jeune.</Text>
	<TextWithCorners>
		En France, l’âge moyen des patients au diagnostic est de 27 ans.
	</TextWithCorners>

	<Text>
		Les causes du kératocône ne sont pas clairement identifiées. Mais il survient plus volontiers en
		cas d’antécédents familiaux de kératocône, en cas de pathologie du tissu conjonctif, comme
		la maladie de Marfan ou la maladie d’Ehlers-Danlos ou encore chez les patients porteurs
		d’une trisomie 21. Toutes ces observations permettent d’envisager des facteurs de risque
		génétiques dans le développement de cette pathologie.
	</Text>
	<Text>
		Les frottements oculaires excessifs, vigoureux, semblent également jouer un rôle dans la
		déformation de la cornée, puisqu’une grande partie des sujets atteints de kératocône sont
		également atteints d’allergies oculaires marquées et donc plus sujets à de tels gestes.
	</Text>

	<Title level="h3">Quelles sont les conséquences pour la fonction visuelle ?</Title>
	<Text>
		Le kératocône est responsable d’un astigmatisme myopique cornéen, secondaire à la déformation.
		Il peut atteindre un œil ou les deux, de manière très souvent asymétrique.
	</Text>
	<Text>
		Il va donc, en évoluant, entraîner une baisse de la vision, qui peut être, dans un premier
		temps, très bien corrigée par le port d’une correction adaptée (lunettes ou lentilles).
	</Text>
	<Text>
		C’est lorsque la maladie est très évoluée que les complications les plus sévères apparaissent :
		les opacités cornéennes (stries de Vogt et taches sous-épithéliales). La cornée perd alors sa
		transparence et des obstacles au passage de la lumière se forment. L’acuité visuelle baisse de
		manière irréversible et le port d’une correction optique (lunettes ou lentilles) est insuffisant
		pour y remédier.
	</Text>
	<Text>
		Seul un examen ophtalmologique complet est à même de poser le diagnostic de kératocône. Votre
		médecin pourra réaliser des explorations complémentaires, notamment une topographie
		cornéenne, véritable mesure en 3 dimensions de votre cornée. Il s’agit du meilleur outil
		diagnostique, à l’heure actuelle, pour poser un diagnostic précoce de kératocône.
	</Text>
	<Text>
		Le kératocône est une contre-indication à la réalisation d’une chirurgie réfractive au laser. Le
		dépistage de cette affection fait d’ailleurs partie du bilan pré-opératoire systématique
		pratiqué par votre chirurgien réfractif.
	</Text>
	<Text>
		Le kératocône est une maladie chronique et évolutive qui n’a, pour l’heure, pas de traitement
		curatif, c’est-à-dire que les mesures proposées ne peuvent que limiter ses conséquences sur la
		vision d’un patient atteint.
	</Text>
	<Text>
		Il peut également être à l’origine de troubles visuels et de complications aigüs. L’hydrops
		cornéen se développe sur des yeux atteints de kératocône. Schématiquement, les tissus déformés
		-et donc, fragilisés- se rompent, entraînant un œdème cornéen brutal. La vision baisse de
		manière très rapide et très importante. L’œil est rouge et douloureux.
	</Text>
	<Text>
		Si vous êtes atteints de kératocône et que vous présentez de tels symptômes, une consultation
		ophtalmologique s’impose en urgence.
	</Text>
</Section>
