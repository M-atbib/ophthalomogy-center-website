<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Le port de lentilles de contact est un mode de correction optique très répandu. Ces dernières années, les progrès technologiques en la matière ont été importants et la plupart des amétropies (myopie, hypermétropie, astigmatisme) peuvent désormais être corrigées.",
  "Il implique impérativement un examen ophtalmologique complet, afin de s’assurer de l’absence de contre-indication. En fonction de vos besoins, de votre amétropie mais aussi de vos éventuels antécédents ophtalmologiques ou généraux, votre ophtalmologiste vous proposera un modèle précis de lentille. Ce modèle ne peut pas être modifié sans son accord. En effet, les caractéristiques physico-chimiques des lentilles varient beaucoup d’un modèle à l’autre, en particulier leur degré d’hydratation et leur perméabilité à l’oxygène. La géométrie de la lentille (son diamètre, son rayon, ses moyens de stabilisation) doit aussi faire l’objet d’une attention toute particulière."
];
const blocks = [
  {
    "type": "heading",
    "text": "Corriger la vue par le port de lentilles",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "Son principe : porter des lentilles la nuit, pendant le sommeil, pour ne plus porter de correction la journée."
  },
  {
    "type": "heading",
    "text": "Types de lentilles et caractéristiques techniques",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Les lentilles rigides perméables aux gaz",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Elles représentent le mode de correction en lentilles le plus sécuritaire. Ces lentilles sont mobiles à la surface de l’œil et le film lacrymal circule donc librement à la surface de la cornée, garantissant son oxygénation et sa nutrition malgré un port prolongé. Elles permettent la plus large amplitude de correction. Elles doivent être envisagées en première intention, tout particulièrement en cas de myopie forte ou d’astigmatisme prononcé. Elles peuvent également permettre l’appareillage de patients atteints de pathologies déformant la surface oculaire (comme le kératocône, ou une greffe de cornée), avec des résultats optiques impossible à atteindre avec le port de lunettes. L’adaptation en lentilles rigides nécessite un certain degré d’expertise de la part de l’ophtalmologiste ; elle n’est possible que dans le cadre d’une consultation dédiée. Plusieurs essais peuvent être nécessaires avant de parvenir à un équipement parfait. Une fois la bonne lentille trouvée, elle est renouvelée, de manière générale, tous les 18 à 24 mois."
  },
  {
    "type": "heading",
    "text": "Les lentilles souples",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Elles sont d’usage plus courant. Elles exposent cependant à des complications plus nombreuses et, potentiellement, très sévères pour la surface oculaire. L’oxygénation cornéenne est moins bonne qu’avec les lentilles rigides. Malgré tout, l’adaptation est plus aisée, sauf pour les amétropies fortes. Le renouvellement des lentilles est variable : il existe des lentilles journalières, qui ne peuvent être portées qu’une seule journée. D’autres sont à renouveler tous les 15 jours ou, plus fréquemment, tous les mois. Dans ce cas, un entretien quotidien et méticuleux est nécessaire. Le port nocturne est formellement déconseillé ; celui-ci augmente fortement le risque d’abcès cornéen. Les lentilles souples les plus récentes sont fabriquées à partir de mélanges de silicone et d’hydrogel. Ceci permet à la fois d’assurer un confort satisfaisant et un passage correct de l’oxygène à travers la lentille. Les règles de bon usage vous seront rappelées, lors de la consultation, par votre ophtalmologiste."
  },
  {
    "type": "heading",
    "text": "Les lentilles cosmétiques",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ce sont des lentilles portées à visée esthétique. Leur port est le plus souvent vivement déconseillé par l’ophtalmologiste, étant donné le risque majeur de complications sévères. Il s’agit de lentilles colorées, parfois achetées sans aucun contrôle médical. Malheureusement, rares sont les modèles à même d’apporter la garantie d’une bonne oxygénation cornéenne."
  },
  {
    "type": "highlight",
    "text": "Si vous envisagez de porter ce type de lentilles, parlez-en à votre ophtalmologiste !"
  },
  {
    "type": "heading",
    "text": "L’orthokératologie",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "C'est une technique très récente, dont les résultats sont extrêmement prometteurs. Son principe : porter des lentilles la nuit, pendant le sommeil, pour ne plus porter de correction la journée. L’analogie est souvent faite avec une chirurgie réfractive, sauf qu’aucun geste définitif ou invasif n’est réalisé sur la cornée. Le matériau est conçu pour garantir une sécurité de port tout à fait satisfaisante. Leur effet est totalement réversible et, chez le patient qui ne souhaite plus poursuivre le port, ses effets s’estompent en quelques jours, avec retour vers l’amétropie initiale. L’adaptation se rapproche de celle des lentilles rigides. Le délai de renouvellement est identique. Ces lentilles peuvent permettre, dans certains cas, de freiner une progression myopique chez l’adolescent."
  },
  {
    "type": "heading",
    "text": "Comment mettre et entretenir vos lentilles ?",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Suivant",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Liens utiles",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Appelez-nous"
  },
  {
    "type": "paragraph",
    "text": "05 37 810 828"
  },
  {
    "type": "paragraph",
    "text": "Accueil"
  },
  {
    "type": "paragraph",
    "text": "Mentions légales"
  },
  {
    "type": "paragraph",
    "text": "06 66 82 42 47"
  },
  {
    "type": "paragraph",
    "text": "À propos"
  },
  {
    "type": "paragraph",
    "text": "Confidentialité des données"
  },
  {
    "type": "paragraph",
    "text": "Envoyez-nous un e-mail"
  },
  {
    "type": "paragraph",
    "text": "Les maladies de l’oeil"
  },
  {
    "type": "paragraph",
    "text": "Cookies"
  },
  {
    "type": "paragraph",
    "text": "[dr.amalalouan@gmail.com](mailto:dr.amalalouan@gmail.com)"
  },
  {
    "type": "paragraph",
    "text": "Les conseils de votre ophtalmo"
  },
  {
    "type": "paragraph",
    "text": "Visitez-nous"
  },
  {
    "type": "paragraph",
    "text": "Contactez-nous"
  },
  {
    "type": "paragraph",
    "text": "Imm.67,APPT 1 Lot AI Andalouss, Avenue Abderrahim Bouaabid, Hay Essalam Salé"
  },
  {
    "type": "heading",
    "text": "All rights are reserved © 2025",
    "level": "h2"
  }
];
const assets = {};
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/lentilles-contactologie" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-7/12">
			<Title level="h1">Les différents types de lentilles</Title>
			{#each introParagraphs as intro}<Text>{intro}</Text>{/each}
		</div>
		{#if heroImage}
			<figure class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-xl overflow-hidden rounded-md border shadow-sm">
				<img src={assets[heroImage.source]} alt={heroImage.alt} class="h-full w-full object-cover" />
			</figure>
		{/if}
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-6">
		{#each blocks as block}
			{#if block.type === 'heading'}
				<Title level={block.level}>{block.text}</Title>
			{:else if block.type === 'paragraph'}
				<Text>{block.text}</Text>
			{:else if block.type === 'list'}
				<ul class="list-disc space-y-2 pl-5">
					{#each block.items as item}<li>{item}</li>{/each}
				</ul>
			{:else if block.type === 'highlight'}
				<TextWithCorners>{block.text}</TextWithCorners>
			{:else if block.type === 'image'}
				<figure class="mx-auto w-full max-w-2xl overflow-hidden rounded-md">
					<img src={assets[block.source]} alt={block.alt} class="h-full w-full object-cover" loading="lazy" />
				</figure>
			{/if}
		{/each}
	</div>
</Section>
