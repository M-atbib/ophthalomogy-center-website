<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';
	import { InfectionPageFiveIlluOne } from '$lib/assets';

	const backHref = '/maladie-oeil/lentilles-contactologie';
</script>

<DiseaseArticleLayout title="Les différents types de lentilles" {backHref}>
	<section>
		<Title level="h3" as="h2">Corriger la vue par le port de lentilles</Title>
		<Text
			>Le port de lentilles de contact est un mode de correction optique très répandu. Ces dernières
			années, les progrès technologiques en la matière ont été importants et la plupart des
			amétropies (myopie, hypermétropie, astigmatisme) peuvent désormais être corrigées.</Text
		>
		<TextWithCorners
			>Son principe : porter des lentilles la nuit, pendant le sommeil, pour ne plus porter de
			correction la journée.</TextWithCorners
		>
		<Text
			>Il implique impérativement un examen ophtalmologique complet, afin de s’assurer de l’absence
			de contre-indication. En fonction de vos besoins, de votre amétropie mais aussi de vos
			éventuels antécédents ophtalmologiques ou généraux, votre ophtalmologiste vous proposera un
			modèle précis de lentille. Ce modèle ne peut pas être modifié sans son accord. En effet, les
			caractéristiques physico-chimiques des lentilles varient beaucoup d’un modèle à l’autre, en
			particulier leur degré d’hydratation et leur perméabilité à l’oxygène. La géométrie de la
			lentille (son diamètre, son rayon, ses moyens de stabilisation) doit aussi faire l’objet d’une
			attention toute particulière.</Text
		>
		<ArticleImage
			src={InfectionPageFiveIlluOne}
			alt="Lentille de contact posée sur un doigt"
			class="max-w-md"
		/>
	</section>

	<section>
		<Title level="h3" as="h2">Types de lentilles et caractéristiques techniques</Title>
		<div class="space-y-3">
			<Title level="sub2" as="h3">Les lentilles rigides perméables aux gaz</Title>
			<Text
				>Elles représentent le mode de correction en lentilles le plus sécuritaire. Ces lentilles
				sont mobiles à la surface de l’œil et le film lacrymal circule donc librement à la surface
				de la cornée, garantissant son oxygénation et sa nutrition malgré un port prolongé. Elles
				permettent la plus large amplitude de correction. Elles doivent être envisagées en première
				intention, tout particulièrement en cas de myopie forte ou d’astigmatisme prononcé. Elles
				peuvent également permettre l’appareillage de patients atteints de pathologies déformant la
				surface oculaire (comme le kératocône, ou une greffe de cornée), avec des résultats optiques
				impossible à atteindre avec le port de lunettes. L’adaptation en lentilles rigides nécessite
				un certain degré d’expertise de la part de l’ophtalmologiste ; elle n’est possible que dans
				le cadre d’une consultation dédiée. Plusieurs essais peuvent être nécessaires avant de
				parvenir à un équipement parfait. Une fois la bonne lentille trouvée, elle est renouvelée,
				de manière générale, tous les 18 à 24 mois.</Text
			>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Les lentilles souples</Title>
			<Text
				>Elles sont d’usage plus courant. Elles exposent cependant à des complications plus
				nombreuses et, potentiellement, très sévères pour la surface oculaire. L’oxygénation
				cornéenne est moins bonne qu’avec les lentilles rigides. Malgré tout, l’adaptation est plus
				aisée, sauf pour les amétropies fortes. Le renouvellement des lentilles est variable : il
				existe des lentilles journalières, qui ne peuvent être portées qu’une seule journée.
				D’autres sont à renouveler tous les 15 jours ou, plus fréquemment, tous les mois. Dans ce
				cas, un entretien quotidien et méticuleux est nécessaire. Le port nocturne est formellement
				déconseillé ; celui-ci augmente fortement le risque d’abcès cornéen. Les lentilles souples
				les plus récentes sont fabriquées à partir de mélanges de silicone et d’hydrogel. Ceci
				permet à la fois d’assurer un confort satisfaisant et un passage correct de l’oxygène à
				travers la lentille. Les règles de bon usage vous seront rappelées, lors de la consultation,
				par votre ophtalmologiste.</Text
			>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Les lentilles cosmétiques</Title>
			<Text
				>Ce sont des lentilles portées à visée esthétique. Leur port est le plus souvent vivement
				déconseillé par l’ophtalmologiste, étant donné le risque majeur de complications sévères. Il
				s’agit de lentilles colorées, parfois achetées sans aucun contrôle médical. Malheureusement,
				rares sont les modèles à même d’apporter la garantie d’une bonne oxygénation cornéenne.</Text
			>
			<Text tone="accent" weight="medium"
				>Si vous envisagez de porter ce type de lentilles, parlez-en à votre ophtalmologiste !</Text
			>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">L’orthokératologie</Title>
			<Text
				>C'est une technique très récente, dont les résultats sont extrêmement prometteurs. Son
				principe : porter des lentilles la nuit, pendant le sommeil, pour ne plus porter de
				correction la journée. L’analogie est souvent faite avec une chirurgie réfractive, sauf
				qu’aucun geste définitif ou invasif n’est réalisé sur la cornée. Le matériau est conçu pour
				garantir une sécurité de port tout à fait satisfaisante. Leur effet est totalement
				réversible et, chez le patient qui ne souhaite plus poursuivre le port, ses effets
				s’estompent en quelques jours, avec retour vers l’amétropie initiale. L’adaptation se
				rapproche de celle des lentilles rigides. Le délai de renouvellement est identique. Ces
				lentilles peuvent permettre, dans certains cas, de freiner une progression myopique chez
				l’adolescent.</Text
			>
		</div>
	</section>
</DiseaseArticleLayout>
