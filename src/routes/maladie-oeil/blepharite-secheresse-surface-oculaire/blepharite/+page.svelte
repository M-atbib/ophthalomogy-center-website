<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		BlepharitePageOneIlluOne,
		BlepharitePageOneIlluTwo,
		CataractePageOneHero,
		CataractePageOneIlluOne,
		CataractePageOneIlluTwo
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/blepharite-secheresse-surface-oculaire" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Text>
		Le film lacrymal est la couche de larmes qui recouvre la surface de l'oeil. Il est composé,
		schématiquement, de deux éléments: l'eau et le meibum.
	</Text>

	<Title>Le meibum</Title>
	<Text>
		Il peut être assimilé à une couche d’huile qui permet de rendre les larmes moins volatiles ;
		elles restent ainsi au contact de l’œil et s’évaporent moins rapidement.
	</Text>

	<figure
		class="mx-auto w-full max-w-lg overflow-hidden border-light-grey/60 bg-primary-background"
	>
		<img
			src={BlepharitePageOneIlluOne}
			alt="Illustration de la capsulotomie au laser YAG"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Text>
		Cette huile est produite par des glandes tubulaires, présentes dans les paupières,
		appelées « glandes de Meibomius ».
	</Text>

	<TextWithCorners>
		Les glandes de Meibomius peuvent être décrites comme des « tubes de dentifrice », verticaux et
		nombreux, dont l’ouverture se situe au contact de la surface oculaire.
	</TextWithCorners>

	<Text>
		Le clignement des paupières permet l’évacuation de leur contenu, huileux, qui va alors se mêler
		à l’eau pour former un film lacrymal de bonne qualité
	</Text>

	<Text>
		Il arrive cependant que cette huile reste bloquée à l’intérieur des glandes. Ceci peut être lié
		tout simplement à l’âge, mais aussi être secondaire à des phénomènes inflammatoires locaux.
		Votre médecin mentionnera dans ce cas le terme de « blépharite ».
	</Text>

	<TextWithCorners>
		La blépharite est une affection qui peut atteindre jusqu’à 2 personnes sur 3.
	</TextWithCorners>

	<figure
		class="mx-auto w-full max-w-lg overflow-hidden border-light-grey/60 bg-primary-background"
	>
		<img
			src={BlepharitePageOneIlluOne}
			alt="Illustration de la capsulotomie au laser YAG"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title>Flore cutanée et inflammation locale</Title>

	<Text>
		La peau et la base des cils ne sont pas des milieux stériles. Il est tout à fait normal d'y
		retrouver des bactéries et des acariens, qui participent à l'équilibre local.
	</Text>

	<Text>
		En cas de blépharite, on peut assister à la prolifération excessive de ces micro-organismes.
	</Text>

	<TextWithCorners>
		L'un des principaux germes incriminés est un acarien de la peau : Demodex folliculorum.
	</TextWithCorners>

	<Text>Cette prolifération a des conséquences sur les glandes de Meibomius et leur contenu :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Leur orifice est bouché par des protéines inflammatoires ;</li>
		<li>
			Le meibum durcit à l'intérieur des glandes. On parle d'élévation de sa température de
			fusion. Cela rend son écoulement plus difficile. Il stagne à l'intérieur des glandes.
		</li>
		<li>
			Un cercle vicieux s'installe : l'inflammation majore la sécheresse oculaire et la sécheresse
			majore l'inflammation.
		</li>
	</ul>

	<Title>Symptômes</Title>

	<Text>La blépharite peut se manifester par les symptômes suivants :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Rougeur du bord libre des paupières</li>
		<li>Chalazions à répétition</li>
		<li>Croûtes abondantes à la base des cils</li>
	</ul>

	<figure
		class="mx-auto w-full max-w-lg overflow-hidden border-light-grey/60 bg-primary-background"
	>
		<img
			src={BlepharitePageOneIlluTwo}
			alt="Illustration de la capsulotomie au laser YAG"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Text>
		Elle est, dans la majorité des cas, associée à une sécheresse oculaire, qui se manifeste par :
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Une impression de grains de sable ou de corps étranger sous la paupière,</li>
		<li>Des brûlures oculaires,</li>
		<li>La sensation que les yeux piquent,</li>
		<li>Un larmoiement gênant, majoré par le vent, lors des sorties à l'extérieur,</li>
		<li>Une rougeur oculaire modérée.</li>
	</ul>

	<Text>Il s'agit d'une maladie chronique, qui évolue sur de nombreuses années.</Text>

	<Title>Traitement</Title>

	<Text>
		Le traitement essentiel de la blépharite repose sur la réalisation des soins de paupières.
	</Text>
	<Text>
		Même si l'instillation de collyres peut soulager vos symptômes, ils ne permettent pas de
		corriger l'obstruction des glandes de Meibomius.
	</Text>
	<Text>
		Les soins de paupières sont à réaliser de manière très régulière. S'ils sont stoppés, les
		symptômes risquent en effet de réapparaître. La plupart du temps, il faut envisager leur
		réalisation à vie.
	</Text>
</Section>
