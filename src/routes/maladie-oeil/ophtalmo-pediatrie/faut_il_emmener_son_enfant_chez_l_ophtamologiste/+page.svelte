<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		ExplorationsPageTwoIlluOne,
		PediatriePageThreeImgOne,
		PediatriePageThreeImgTwo
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/ophtalmo-pediatrie" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Faut-il emmener son enfant chez l’ophtalmologiste ?</Title>
	<div class="my-8 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-6/12">
			<Title level="h3">Quels sont les enjeux du dépistage ?</Title>
			<Text>
				L'objectif est de dépister, par un examen médical complet, un trouble visuel asymptomatique
				chez le jeune enfant.
			</Text>
			<Text>
				Avec un seul œil qui voit bien, l'enfant va se débrouiller de façon complètement normale.
				Un défaut visuel sur l'autre oeil peut, dès lors, passer inaperçu, d'où l'intérêt
				d'un examen ophtalmologique précoce et d'une surveillance régulière.
			</Text>
			<Text>
				Repérer très tôt les situations à risque d'amblyopie est indispensable pour une prise en
				charge optimale. Si le traitement est débuté rapidement, des troubles dépistés avant l'âge
				de 7 ans sont, en général, réversibles.
			</Text>
		</div>
		<figure class="mx-auto w-full max-w-2xl overflow-hidden">
			<img
				src={PediatriePageThreeImgOne}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
	<TextWithCorners>
		L'amblyopie est la cause la plus fréquente de mauvaise vision chez l'enfant.
	</TextWithCorners>

	<Title level="h3">Comment examine-t-on un enfant en Ophtalmologie ?</Title>

	<div class="my-8 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-6/12">
			<Title level="sub2">Évaluation de l'acuité visuelle</Title>
			<Text>Il existe des tests de vue adaptés à chaque âge :</Text>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>
					Évaluation du comportement visuel chez le bébé, à l'aide de jouer calibrés ou de mires
					concentriques,
				</li>
				<li>Échelles de vision avec des dessins chez le jeune enfant,</li>
				<li>
					Échelles de vision standard chez l'enfant plus grand (chiffres, lettres ou dessins).
				</li>
			</ul>
			<Text>
				Un bébé peut être examiné dès la naissance. L'objectif est de dépister une asymétrie entre
				les deux yeux (asymétrie de comportement visuel) ou une amétropie nécessitant le port de
				lunettes.
			</Text>
			<Text>Dès que l'enfant sait parler, il est logiquement plus simple d'évaluer sa vision.</Text>
			<Title level="sub2">Cycloplégie</Title>
			<Text>
				Lors de l'évaluation médicale initiale, la majorité des enfants devra bénéficier d'une
				préparation oculaire à l'aide de collyres très particuliers. C'est la cycloplégie, qui
				présente l'avantage de supprimer, de façon temporaire, les capacités d'accomodation chez
				l'enfant. Sans cela, l'accomodation est trop importante pour pouvoir réaliser des mesures
				fiables de la réfraction.
			</Text>
			<Text>
				Un bébé peut porter des lunettes dès l'âge d'un an, mais il est plus fréquent de commencer
				l'adaptation vers l'âge de 2-3 ans.
			</Text>
		</div>
		<figure class="mx-auto w-full max-w-2xl overflow-hidden">
			<img
				src={PediatriePageThreeImgTwo}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>

	<TextWithCorners>
		En cas de trouble visuel, une adaptation précoce en lunettes est la clé d'une bonne vision à
		l'âge adulte.
	</TextWithCorners>
	<Title level="sub2">Examen oculomoteur</Title>
	<Text>
		La motilité de chaque oeil est évaluée avec précision. Difficile chez le nouveau-né, cet examen
		devient plus facile avec l'avancée en âge de l'enfant. L'évaluation se fait oeil par oeil, puis
		les deux yeux à la fois.
	</Text>
	<Text>
		Un strabisme ou des malformations neuro-musculaires (syndrome de Stilling-Duane par exemple)
		peuvent être découverts par ce biais.
	</Text>
	<Title level="sub2">Examen oculaire complet</Title>
	<TextWithCorners>
		Toutes les structures oculaires doivent être scrupuleusement examinées chez l'enfant.
	</TextWithCorners>
	<Text>
		La plupart des explorations réalisées chez l'adulte est possible en Ophtalmo-pédiatrie. Là
		encore, l'avancée en âge rend plus simple l'examen.
	</Text>
	<Text>Certaines anomalies doivent être recherchées, en particulier :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Une opacité du cristallin, ou cataracte congénitale,</li>
		<li>
			Des lésions et opacités de la cornée (syndrome de Peters, signes de glaucome congénital...),
		</li>
		<li>Une malformation palpébrale ou de l'arbre lacrymal,</li>
		<li>
			Une lésion rétinienne infectieuse (toxoplasmose congénitale, toxocarose...) ou tumorale
			(rétinoblastome...),
		</li>
		<li>Une anomalie du nerf optique...</li>
	</ul>
	<TextWithCorners>
		Seul le médecin ophtalmologiste est à même de réaliser toutes les étapes de ce dépistage.
	</TextWithCorners>

	<Title level="h3">Quelles sont les grandes étapes du développement visuel de l'enfant ?</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>À la naissance : le nouveau-né voit très flou et en noir et blanc ;</li>
		<li>
			Entre 0 et 6 mois : il reconnaît le visage de ses parents, il fixe et suit un objet. La vision
			des couleurs et du relief se met en place ;
		</li>
		<li>
			Entre 6 et 12 mois : l’acuité visuelle augmente, la couleur des yeux devient définitive ;
		</li>
		<li>Entre 12 et 18 mois : l'enfant coordonne les informations visuelles et motrices ;</li>
		<li>Vers 5 ans : le développement visuel est quasi-complet, la vision atteint 10/10ème.</li>
	</ul>

	<Title level="h3">Quand consulter pour votre nouveau-né ?</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Il ne suit pas du regard ;</li>
		<li>Il louche d'un œil en permanence ;</li>
		<li>
			Ses yeux présentent des mouvements permanents, comme des battements réguliers (nystagmus),
		</li>
		<li>Il existe une tâche ou lueur blanchâtre sur la pupille (leucocorie) ;</li>
		<li>Il présente une conjonctivite purulente dans les premiers jours de vie ;</li>
		<li>Il est très sensible à la lumière, voire ne la supporte pas du tout ;</li>
		<li>Ses yeux pleurent beaucoup (larmoiement excessif) ;</li>
		<li>Il semble avoir de très grands yeux ;</li>
		<li>
			Vous êtes atteint d'une maladie oculaire héréditaire et votre enfant pourrait en être porteur
			;
		</li>
		<li>
			Un enfant prématuré doit être suivi régulièrement sur le plan ophtalmologique dès sa
			naissance.
		</li>
	</ul>

	<Text>
		Une conjonctivite aiguë dans les jours qui suivent la naissance doit être traitée en URGENCE.
	</Text>
	<TextWithCorners>
		Si vous avez une inquiétude concernant la vision de votre bébé, consultez un ophtalmologiste
		sans tarder !
	</TextWithCorners>
	<TextWithCorners>
		Prévoyez un examen ophtalmologique systématique avant l'entrée au CP de votre enfant.
	</TextWithCorners>
</Section>
