<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		ExplorationsPageTwoIlluOne,
		PediatriePageTwoIlluOne,
		PediatriePageTwoIlluThree,
		PediatriePageTwoIlluTwo
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/strabologie-chirurgie-du-strabisme" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Doit-on s'inquiéter devant un strabisme chez l'enfant ?</Title>
	<Text>
		Le terme "strabisme" signifie que les deux yeux ne regardent pas dans la même direction : un
		œil regarde droit devant, l'autre œil est dévié.
	</Text>
	<Text>Schématiquement, 3 situations sont possibles:</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>L'oeil dévié est orienté vers le nez : le strabisme est convergent ;</li>
		<figure class="mx-auto w-full max-w-md overflow-hidden">
			<img
				src={PediatriePageTwoIlluOne}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
		<li>
			L'oeil dévié est orienté vers l'extérieur (vers la tempe) : le strabisme est divergent ;
		</li>
		<figure class="mx-auto w-full max-w-md overflow-hidden">
			<img
				src={PediatriePageTwoIlluTwo}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
		<li>L'oeil dévié est orienté vers le haut ou vers le bas : le strabisme est vertical.</li>
		<figure class="mx-auto w-full max-w-md overflow-hidden">
			<img
				src={PediatriePageTwoIlluThree}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</ul>
	<Text>
		Un strabisme peut apparaître dès la naissance ou dans les premières années de vie. Dans ce cas,
		un désordre ophtalmologique ou neurologique est à l'origine de la déviation d'un œil. Mais
		un strabisme peut aussi se développer chez l'adulte, en particulier au décours d'un problème
		neuro-vasculaire ou sur un oeil non voyant.
	</Text>
	<TextWithCorners>Le strabisme touche environ 3% de la population.</TextWithCorners>

	<Title level="h3">Qu'appelle-t-on "strabisme" ?</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Un défaut visuel d’un œil ou des deux yeux : en particulier l’hypermétropie forte ou une
			asymétrie de vision entre les deux yeux. Un strabisme convergent peut être lié au fait de trop
			accommoder (forcer sur les yeux pour voir net).
		</li>
		<li>
			Il existe une part d'hérédité, si l'un des parents est atteint. Un ou des cas de strabisme
			dans la famille sont à signaler à l'ophtalmologiste.
		</li>
		<li>La prématurité et/ou un petit poids de naissance.</li>
		<li>
			Un œil non-voyant peut être à l'origine d'un strabisme divergent, surtout chez l'adulte
			(anomalie morphologique d'un œil ou dans les suites d'un traumatisme oculaire).
		</li>
	</ul>

	<Title level="h3">Quels sont les facteurs de risque de survenue d'un strabisme ?</Title>

	<Title level="h3">Quelles sont les conséquences possibles du strabisme ?</Title>
	<Title level="sub2">Impact sur l'acuité visuelle</Title>
	<Text>
		L'image de l'œil dévié est souvent neutralisée par le cerveau. L'œil dévié fonctionne, mais le
		cerveau "annule" son image, ce qui empêche le patient de voir double.
	</Text>
	<Text>
		Ce phénomène est extrêmement problématique chez un enfant en bas âge. En effet, si cette
		situation dure dans le temps et que rien n'est fait, le cerveau n'utilise plus l'oeil dévié et
		une malvoyance peut s'installer sur cet oeil. C'est ce qu'on appelle "l'amblyopie".
	</Text>
	<Text>
		L'amblyopie se développe si le strabisme survient avant l'âge de 8 ans. Chez un adulte,
		l'apparition d'un strabisme déclenche fréquemment une diplopie, ou "vision double".
	</Text>
	<Title level="sub2">Impact sur la vision binoculaire et la vision des reliefs</Title>
	<Text>
		L'anomalie de coordination des yeux est à l'origine d'une mauvaise, voire d'une absence de la
		vision du relief (vision 3D).
	</Text>
	<Title level="sub2">Impact esthétique</Title>
	<Text>
		Cette plainte est fréquente et peut pleinement justifier une intervention chirurgicale. Dans
		l'enfance, en milieu scolaire, à l'adolescence ou même chez les adultes, le strabisme représente
		souvent un fardeau pour les patients qui en souffrent. N'hésitez pas à en parler avec votre
		ophtalmologiste.
	</Text>
	<Title level="sub2">Strabisme précoce</Title>
	<Text>
		Ce terme désigne un strabisme présent dès la naissance ou qui apparaît dans les 6 premiers mois
		de vie. Il s'agit d'un strabisme convergent, dans la plupart des cas, mais un strabisme
		divergent peut également se voir. Il nécessite un examen ophtalmologique précoce, le port de
		lunettes en permanence et une surveillance médicale ophtalmologique rapprochée.
	</Text>
	<TextWithCorners>
		La présence d'un strabisme permanent ou d'un strabisme intermittent chez un enfant de plus de 3
		mois doit vous alerter.
	</TextWithCorners>

	<Title level="h3">Comment se traite un strabisme ?</Title>
	<Title level="sub2">Les lunettes</Title>
	<Text>
		Le port de lunettes peut permettre de diminuer ou de faire disparaître complètement le strabisme
		(dans ce dernier cas, l'opération n'est pas indiquée). Chez l'enfant, la correction est
		prescrite après une cycloplégie, qui permet de s'affranchir du phénomène d'accomodation pour la
		réalisation des mesures.
	</Text>
	<Title level="sub2">La toxine botulique</Title>
	<Text>
		Dans le cas des strabismes précoces, la toxine botulique peut être utilisée. Elle s’injecte
		directement dans les muscles oculomoteurs, au bloc opératoire. Cela permet le relâchement des
		muscles et de reporter une éventuelle intervention chirurgicale plus invasive.
	</Text>
	<Title level="sub2">La chirurgie</Title>
	<Text>
		Elle peut être réalisée à tout âge. Chez l’enfant il est conseillé d’attendre l’âge de 4-5 ans.
		Le plus souvent, l’opération est proposée avant l’entrée au CP.
	</Text>
	<Text>
		Elle peut être réalisée à plusieurs reprises si une récidive du strabisme apparaît au cours de
		la vie.
	</Text>
	<Text>
		Vous êtes gêné par votre strabisme ? Il peut probablement être opéré. Venez en parler avec votre
		ophtalmologiste !
	</Text>
</Section>
