<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ExplorationsPageThreeIlluOne, ExplorationsPageTwoIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/explorations-et-aptitudes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Rétinopathies héréditaires</Title>

	<div class="flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-7/12">
			<Title level="h3">Les dystrophies rétiniennes héréditaires</Title>
			<Text>
				C’est un ensemble de maladies qui touchent l’ensemble de la rétine. Les rétinites
				pigmentaires sont les plus fréquentes. En France, elles atteignent entre 30 000 à 40 000
				patients. Elles correspondent à une atteinte dégénérative des photorécepteurs : les
				bâtonnets et les cônes. Ce sont les cellules qui reçoivent, à proprement parler, la lumière
				et la transforment en signal "électrique", conduit jusqu'au cerveau.
			</Text>
			<Text>La plupart de ces maladies conduisent à un déficit visuel sévère.</Text>
			<Title level="sub2">Exemples de dystrophies rétiniennes</Title>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>Amaurose congénitale de Leber ;</li>
				<li>Rétinopathie pigmentaire ” type rod-cone”, ou "bâtonnets-cônes" ;</li>
				<li>Rétinopathie pigmentaire inverse ”type cone-rod”, ou "cônes-bâtonnets" ;</li>
				<li>Syndrome de Usher (associée à une surdité) ...</li>
			</ul>
		</div>
		<figure class="mx-auto w-full max-w-md overflow-hidden">
			<img
				src={ExplorationsPageThreeIlluOne}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>

	<Title level="h3">Les dystrophies maculaires héréditaires</Title>
	<Text>
		Dans ce groupe de maladies, c'est plus précisément  la macula qui est atteinte (la région
		centrale de la rétine, très importante car responsable de la vision la plus précise). Elles se
		développent essentiellement chez les enfants ou les jeunes adultes (10-30 ans). Les gènes
		responsables sont, pour l’essentiel, identifiés et localisés.
	</Text>
	<Title level="sub2">Exemples de dystrophies maculaires</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>La maladie de Stargardt ;</li>
		<li>La maladie de Best ;</li>
		<li>La dystrophie progressive des cônes ;</li>
		<li>Le rétinoschisis maculaire lié à l’X ;</li>
		<li>La dystrophie réticulée ;</li>
		<li>Les drusens dominants ;</li>
		<li>
			Dystrophies maculaires entrant dans un tableau syndromique, par exemple l’albinisme
			oculo-cutané...
		</li>
	</ul>

	<Title level="h3">Quels sont les symptômes ?</Title>
	<Title level="sub2">Dystrophies rétiniennes</Title>
	<Text>
		Les signes cliniques sont bilatéraux et commencent le plus souvent par des difficultés
		d’adaptation à l’obscurité ou une gêne lorsque l’intensité lumineuse diminue (héméralopie).
	</Text>
	<Text>
		Par la suite, il apparaît un rétrécissement concentrique du champ visuel, qui est discret au
		départ et évolue jusqu’à donner l’aspect d’une vision tubulaire. Des anomalies dans la vision
		des couleurs (dyschromatopsie), la sensibilité à la lumière (photophobie) ou la vision centrale
		(baisse d’acuité visuelle) sont possibles.
	</Text>
	<Title level="sub2">Dystrophies maculaires</Title>
	<Text>
		Les symptômes sont d’apparition plus précoce habituellement. Une baisse d’acuité visuelle
		centrale, progressive, bilatérale est le signe le plus commun.
	</Text>

	<Title level="h3">Comment faire le diagnostic ?</Title>
	<Title level="sub3">Clinique et Paraclinique</Title>
	<Text>
		Dans la moitié des cas, la maladie s’inscrit dans un contexte familial, avec une histoire
		génétique connue (gène causal et mutation identifiés). La réalisation
		d’un arbre généalogique est essentielle, afin de définir le mode de transmission et d’orienter
		les examens cliniques et paracliniques.
	</Text>
	<Text>
		Dans les autres cas, l’apparition de la mutation génétique responsable est dite ”de novo” : le
		patient est le premier porteur et transmetteur de celle-ci.
	</Text>
	<Text>
		L’interrogatoire (symptômes, histoire familiale …) et l’analyse du fond d’œil dilaté sont des
		éléments essentiels au diagnostic. Ils vont orienter vers la demande d’examens complémentaires
		ciblés, selon la pathologie suspectée : électrorétinogramme, électro-oculogramme, tomographie à
		cohérence optique, angiographie rétinienne à la fluorescéine ou au vert d’indocyanine …
	</Text>

	<Title level="sub3">Génétique</Title>
	<Text>
		La détection de l’anomalie génétique responsable est nécessaire au diagnostic précis de la
		maladie. L’utilisation récente de la technologie d’analyse par puces à ADN (array CGH) permet
		d’étudier l’ensemble du génome dans un délai restreint et facilite la découverte de nouvelles
		mutations.
	</Text>

	<Title level="h3">Quel est le risque de transmission ?</Title>
	<Text>
		C’est une question essentielle revenant très régulièrement au cours des consultations :
	</Text>
	<TextWithCorners>
		Est-ce que je peux transmettre la mutation à un de mes enfants ?
	</TextWithCorners>
	<Text>
		De nombreux modes de transmission existent selon les mutations : autosomique dominant,
		autosomique récessif, lié à l’X, transmission mitochondriale...
	</Text>
	<Text>
		Si vous avez le projet de concevoir un enfant et si vous avez des antécédents familiaux de
		dystrophie rétinienne ou maculaire, il est recommandé de prendre rendez-vous au près d’un
		médecin généticien, qui apportera son expertise et répondra à vos questions.
	</Text>
	<Text>
		Dans certains cas, à l’issu du conseil génétique et si une grossesse est effective, il est
		possible de demander un dépistage anténatal, par amniocentèse par exemple, afin de savoir si le
		fœtus est porteur de la mutation.
	</Text>
	<Title level="h3">Quels traitements ?</Title>
	<Text>
		Actuellement, il n’y a pas de traitement curatif pour ces pathologies. La thérapie génique
		apportera probablement des réponses dans les années à venir.
	</Text>
	<Text>
		Certaines précautions, comme le port de verres teintés adaptés et la protection solaire
		(notamment, contre les rayonnements ultraviolets) permettent de limiter l’évolution de ce type
		de pathologie. Les aides matérielles spécifiques à la basse vision sont également précieuses
		dans le quotidien des patients atteints.
	</Text>
	<Title level="sub2">Thérapie génique</Title>
	<Text>
		La thérapie génique consiste à introduire du matériel génétique dans des cellules pour soigner
		une maladie. Le domaine est en plein essor ces dernières années et les perspectives sont
		encourageantes. Les premiers médicaments de thérapie génique commencent à être commercialisés.
	</Text>
	<Text>
		Un traitement de thérapie génique pour une forme particulière de dystrophie rétinienne
		héréditaire est commercialisé en France depuis avril 2019. Il s’injecte directement sous la
		rétine, par un chirurgien ophtalmologiste expérimenté. Seuls 5 centres de référence sont
		autorisés à l'utiliser pour le moment. Il s’agit du Luxturna® , utilisé dans la prise en
		charge des dystrophies rétiniennes héréditaires résultant de mutations bi-alléliques du gène RPE
		65.
	</Text>
	<Title level="sub2">Aides Visuelles et Matérielles</Title>
	<Text>
		Des aides visuelles techniques spécifiquement adaptées à la ”Basse Vision” sont disponibles
		: télé-agrandisseurs, loupes grossissantes, systèmes audio-numériques perfectionnés …
		L’adaptation au handicap est possible avec l’apprentissage du braille ou des aides à la
		locomotion, par exemple.
	</Text>
	<Text>
		En France, vous pouvez constituer un dossier auprès de la Maison Départementale des Personnes
		Handicapés (MDPH). Des aides financières sont possibles : Allocation Adulte
		Handicapé (AAH), Allocation Éducation Enfant Handicapé (AEEH), Reconnaissance en Qualité de
		Travailleur Handicapé (RQTH), Carte d’invalidité …
	</Text>

	<Title level="h3">Contacts</Title>
	<Text>
		En 2014, dans le cadre du Plan National Maladies Rares 3,
		<a href="https://www.maladiesraresinfo.org/" target="_blank" class="link">
			les filières de santé maladies rares
		</a>  ont été renforcées.
	</Text>
	<Text>
		<a href="https://www.sensgene.com/" target="_blank" class="link"> La filière SENSGENE </a>
		 concerne les maladies affectant les yeux et les oreilles.
	</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Elle a 3 missions principales :</li>
		<li>Améliorer la prise en charge des patients</li>
		<li>Coordonner et améliorer la recherche</li>
		<li>Développer la formation et l’information</li>
	</ul>
	<Text>
		Nous vous recommandons, si vous ou un proche êtes concernés, de visiter le site web de SENSGENE
		qui est récent, lisible, riche d’informations
	</Text>

	<a href="https://www.sensgene.com/" target="_blank" class="link"> Lien vers le site SENSGENE </a>

	<Text>
		Une prise en charge psychologique est utile afin d’optimiser l’insertion socio-professionnelle
		et d’apprendre à vivre avec une maladie progressive qui peut aboutir à la cécité.
	</Text>
	<Text>De nombreuses associations aident et soutiennent les patients au quotidien.</Text>
	<a href="https://www.sensgene.com/les-partenaires-de-la-filiere" target="_blank" class="link">
		Lien information associations
	</a>
</Section>
