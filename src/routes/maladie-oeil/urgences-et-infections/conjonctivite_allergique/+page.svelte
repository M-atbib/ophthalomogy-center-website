<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "L’allergie est un phénomène extrêmement fréquent, qui atteint, tous types d’allergies confondus, 20 à 25% de la population française.",
  "L’allergie est une réaction de l’organisme à certaines molécules de l’environnement. L’exposition répétée à ces molécules entraînent des manifestations variables : troubles digestifs, symptômes respiratoires, éruptions cutanées…"
];
const blocks = [
  {
    "type": "paragraph",
    "text": "L’appareil oculaire est lui aussi touché par ces phénomènes, notamment la surface oculaire. La conjonctive (la fine « peau » transparente qui recouvre l’œil et tapisse l’intérieur des paupières) devient, au contact des molécules allergisantes, inflammatoire, de manière plus ou moins importante et pour une durée variable."
  },
  {
    "type": "heading",
    "text": "Différentes formes de conjonctivite allergique",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Conjonctivite allergique aigüe",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "C’est l’épisode classique, au cours duquel l’œil devient rouge. Les paupières peuvent être gonflées et il existe, le plus souvent, un larmoiement abondant responsable d’une baisse modérée de la vision. Les patients rapportent la présence de sécrétions claires. Il s’agit d’une manifestation dite « anaphylactique » aigüe, qui survient en cas de contact massif avec l’allergène."
  },
  {
    "type": "heading",
    "text": "Conjonctivite allergique saisonnière",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ce terme désigne les manifestations oculaires liées aux phénomènes allergiques et qui s’étendent pendant toute la durée d’exposition à l’allergène. L’exemple typique est l’allergie aux pollens ; ceux-ci, pendant le printemps et l’été, sont présents dans l’air et viennent se fixer à la conjonctive. S’ensuivent des symptômes, moins marqués en intensité que dans le cas d’une conjonctivite aigüe, mais plus durables dans le temps. Les patients se plaignent de démangeaisons importantes, de sécrétions régulières, de ressentir une impression de corps étranger sous la paupière. En l’absence de traitement et, surtout, d’arrêt de l’exposition à l’allergène, les symptômes ne vont pas régresser."
  },
  {
    "type": "heading",
    "text": "Conjonctivite allergique perannuelle",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ce tableau est marqué par le même type de symptômes, parfois d’intensité minime, mais ressentis tout au long de l’année. Les allergènes responsables sont souvent difficiles à identifier ; il faut penser à certaines expositions professionnelles ou encore aux moisissures et champignons présents dans les lieux d’habitation."
  },
  {
    "type": "paragraph",
    "text": "Les symptômes oculaires sont rarement isolés. Ils s’associent fréquemment à des manifestations de la sphère ORL (toux, irritation de la gorge, rhinorrhée claire…)"
  },
  {
    "type": "paragraph",
    "text": "Même si la majorité des cas évolue, sous traitement, de manière favorable, on peut observer des atteintes chroniques beaucoup plus sévères."
  },
  {
    "type": "heading",
    "text": "Une forme particulière et sévère d'allergie: la kérato-conjonctivite vernale",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Elle survient chez les enfants et les jeunes adultes. Les signes inflammatoires locaux sont particulièrement marqués. Le phénomène, s’il n’est pas diagnostiqué en urgence, peut aboutir à des lésions de la cornée, qui peut alors perdre sa transparence de façon irrémédiable."
  },
  {
    "type": "heading",
    "text": "Prise en charge",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La première difficulté est de poser un diagnostic correct. Celui-ci est plus facile lorsque le patient se sait déjà allergique. Mais déceler une allergie devant des symptômes oculaires chroniques et parfois discrets est souvent plus difficile."
  },
  {
    "type": "highlight",
    "text": "La prise en charge diagnostique devra se faire en collaboration étroite avec l’allergologue."
  },
  {
    "type": "paragraph",
    "text": "Le traitement s’articule autour de deux axes principaux :"
  },
  {
    "type": "paragraph",
    "text": "Eviction de l’allergène, après son identification par des examens spécialisés"
  },
  {
    "type": "paragraph",
    "text": "Traitement de l’inflammation oculaire induite par les phénomènes allergiques."
  },
  {
    "type": "paragraph",
    "text": "Les traitements anti-allergiques en comprimés habituellement utilisés pour traiter les symptômes généraux de l’allergie sont, en règle général, assez peu efficaces sur les symptômes oculaires. Il faudra souvent y adjoindre des traitements locaux, instillés sous la forme de collyres. Les principales molécules utilisées pourront être : les anti-histaminiques, les anti-dégranulants mastocytaires, les anti-inflammatoires stéroïdiens ou non stéroïdiens…"
  },
  {
    "type": "highlight",
    "text": "La prise en charge diagnostique devra se faire en collaboration étroite avec l’allergologue."
  },
  {
    "type": "paragraph",
    "text": "Dans les cas d’exposition chronique, ils permettent de réduire la quantité d’allergènes présents dans les replis conjonctivaux."
  },
  {
    "type": "heading",
    "text": "Hémorragie sous-conjonctivale",
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
			<Title level="h1">Conjonctivite allergique</Title>
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
