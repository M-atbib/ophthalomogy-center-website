<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Il faut imaginer l’Herpès comme un ensemble de maladies, plutôt que comme une infection simple.",
  "Ces virus sont très répandus dans le monde et vont infecter la majorité des espèces animales. L’Homme n’est évidemment pas épargné."
];
const blocks = [
  {
    "type": "heading",
    "text": "Épidémiologie",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "Ce terme désigne en effet toute une famille de virus : les Herpesviridae."
  },
  {
    "type": "paragraph",
    "text": "Parmi les virus de cette famille, certains nous intéressent plus spécifiquement en Ophtalmologie :"
  },
  {
    "type": "paragraph",
    "text": "HSV1 (Herpes Simplex Virus 1)"
  },
  {
    "type": "paragraph",
    "text": "HSV2 (Herpes Simplex Virus 2)"
  },
  {
    "type": "paragraph",
    "text": "VZV (Virus Zona-Varicelle)"
  },
  {
    "type": "paragraph",
    "text": "CMV (CytoMegaloVirus)"
  },
  {
    "type": "heading",
    "text": "Infection herpétique",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Primo-infection",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La majorité de la population a déjà été en contact avec l’Herpes."
  },
  {
    "type": "paragraph",
    "text": "La primo-infection (c’est-à-dire la première contamination) par le virus HSV1 est, dans l’immense majorité des cas, complètement asymptomatique. Dans d’autres cas, elle peut occasionner des éruptions cutanées et labiales (le classique « bouton de fièvre ») ou des épisodes de gingivites. Dans le cas d’une infection à HSV2, qui est une infection sexuellement transmissible, les lésions peuvent atteindre les muqueuses génitales."
  },
  {
    "type": "highlight",
    "text": "La primo-infection au virus VZV est plus connue : il s’agit de la varicelle, que la plupart d'entre nous contractent dans l’enfance."
  },
  {
    "type": "paragraph",
    "text": "Une fois infecté, un individu ne se débarasse jamais complètement du virus herpétique. On parle d’infection latente. C’est-à-dire que le virus est encore présent dans le corps humain, de façon silencieuse."
  },
  {
    "type": "heading",
    "text": "Récurrences",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ce qui caractérise l’infection herpétique, c’est son caractère récurrent. Différentes situations peuvent déclencher un « réveil » de l’infection et donc une nouvelle poussée, comme :"
  },
  {
    "type": "paragraph",
    "text": "une fatigue importante"
  },
  {
    "type": "paragraph",
    "text": "une immuno-dépression"
  },
  {
    "type": "paragraph",
    "text": "le stress"
  },
  {
    "type": "paragraph",
    "text": "l’exposition aux UVs"
  },
  {
    "type": "paragraph",
    "text": "un traumatisme oculaire, dans le cas des atteintes ophtalmologiques"
  },
  {
    "type": "heading",
    "text": "Herpès oculaire",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les virus du groupe Herpes peuvent atteindre, théoriquement, tous les tissus de l’organisme, dont l’œil. Toutes les structures oculaires peuvent être touchées par ce type d'infection."
  },
  {
    "type": "heading",
    "text": "Conjonctivite herpétique",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les conjonctivites d’origine herpétique prennent des formes souvent très proches des autres conjonctivites virales. La difficulté est d’en poser le diagnostic précis, puisque le traitement peut être différent. En particulier, l’utilisation de collyres cortisonés est formellement contre-indiquée en cas de conjonctivite herpétique, sous peine de voir l’infection s’aggraver."
  },
  {
    "type": "heading",
    "text": "Kératite herpétique",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Toutes les couches de la cornée peuvent être atteintes. Il s’agit d’une infection sévère, puisque des cicatrices indélébiles peuvent apparaître et entraîner une baisse de l’acuité visuelle, parfois profonde et irréversible. La présence de l’herpès au sein des couches de la cornée va entraîner une réaction inflammatoire locale très importante, aboutissant parfois à une nécrose du stroma cornéen. Il s’agit d’une urgence diagnostique et thérapeutique."
  },
  {
    "type": "heading",
    "text": "Uvéite et kérato-uvéite herpétiques",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Cette situation allie très souvent des lésions de la cornée et de l’uvée, à l’intérieur de l’œil. Les uvéites herpétiques génèrent très souvent une hypertonie oculaire, parfois majeure, et des lésions de l’iris. Le tableau clinique est douloureux, l'oeil très rouge et la vision très souvent abaissée."
  },
  {
    "type": "heading",
    "text": "Syndrome de Nécrose Rétinienne Aigüe (ARN syndrome)",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Il s’agit de l’une des affections ophtalmologiques les plus graves."
  },
  {
    "type": "highlight",
    "text": "Ce diagnostic doit être éliminé devant tout tableau d’inflammation intra-oculaire."
  },
  {
    "type": "paragraph",
    "text": "C’est une urgence thérapeutique, dont la prise en charge est extrêmement complexe et le pronostic malheureusement plutôt sombre pour la fonction visuelle. L’infection se développe au sein du tissu rétinien, qui tapisse le fond de l’œil et entraîne sa destruction. La cicatrisation est souvent fragile et ce tableau se complique, dans 50% des cas, d’un décollement de rétine."
  },
  {
    "type": "heading",
    "text": "Traitements",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Le traitement va dépendre du type d’infection et, éventuellement, du diagnostic virologique précis, si des analyses complémentaires ont pu être effectuées."
  },
  {
    "type": "heading",
    "text": "Traitement de l’infection",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Traitements anti-herpétiques locaux",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Des collyres et pommades sont disponibles pour traiter les formes strictement oculaires d’infections herpétiques. L’ARN syndrome peut nécessiter des injections intra-vitréennes de molécules anti-virales."
  },
  {
    "type": "heading",
    "text": "Traitements généraux",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les traitements anti-herpétiques sont aussi disponibles en sirop, en comprimés ou en perfusion. Ces traitements peuvent être suffisants, utilisés seuls, pour traiter une infection pourtant oculaire."
  },
  {
    "type": "heading",
    "text": "Traitement préventif",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Le caractère récidivant des infections herpétiques conduira peut-être votre médecin à vous proposer un traitement préventif. Les indications de ces traitements sont précises et concernent surtout les épisodes fréquentes, sévères ou les patients fragiles, notamment les patients ayant bénéficié d’une greffe de cornée."
  },
  {
    "type": "heading",
    "text": "Traitement des complications",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Une fois l’épisode aigü résolu, des séquelles peuvent persister, notamment des cicatrices cornéennes. Lorsqu’elles sont très étendues et atteignent l’axe visuel, la récupération visuelle n’est pas toujours possible. Une greffe de cornée peut être envisagée, dans certains cas."
  },
  {
    "type": "heading",
    "text": "Mesures associées",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "Le port de lentilles est vivement déconseillé chez les patients atteints d’herpes oculaire. En effet, la pose et la dépose des lentilles occasionnent des micro-traumatismes de la cornée, qui peuvent déclencher une récidive locale."
  },
  {
    "type": "highlight",
    "text": "Il faut absolument éviter l’instillation oculaire de collyres ou pommades présentant de la cortisone sans examen ophtalmologique préalable. Méconnaître la présence de l’herpès entraîne un risque d’aggravation sévère de l’infection."
  },
  {
    "type": "highlight",
    "text": "Pour les mêmes raisons, mieux vaut éviter l’auto-médication. En cas de doute sur une récidive, mieux vaut consulter votre ophtalmologiste au plus vite."
  },
  {
    "type": "heading",
    "text": "Glaucome aigu",
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
	<Button variant="ghost" href="/maladie-oeil/urgences-et-infections" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-7/12">
			<Title level="h1">Herpès oculaire</Title>
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
