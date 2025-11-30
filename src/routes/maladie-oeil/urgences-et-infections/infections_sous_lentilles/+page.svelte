<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "De manière générale, si vous êtes porteur de lentilles de contact et que votre œil est rouge, douloureux, ou que vous présentez une baisse de vision, il est recommandé d’arrêter le port de lentilles et de consulter rapidement un ophtalmologiste, en particulier si les symptômes ne s’amendent pas rapidement.",
  "En effet, en cas de kératite, le port de lentilles peut agir comme un masque et limiter la douleur et les premiers symptômes. Ceci a comme effet pervers de laisser la pathologie s’aggraver et de retarder la consultation et une prise en charge adaptée."
];
const blocks = [
  {
    "type": "highlight",
    "text": "Porter des lentilles peut sembler anodin mais attention au risque d'infection, potentiellement extrêmement sévère !"
  },
  {
    "type": "heading",
    "text": "Principes",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "Il est absolument nécessaire d’avoir, en parallèle de vos lentilles, des lunettes récentes, adaptées à votre vue, même si vous ne les portez que de manière occasionnelle."
  },
  {
    "type": "paragraph",
    "text": "Ce qui rend les kératites sous lentilles si dangereuses, ce sont les germes en cause : les porteurs de lentilles sont sujets aux kératites bactériennes, mais aussi fongiques (champignons) et parasitaires."
  },
  {
    "type": "heading",
    "text": "Flore conjonctivale et type de germes en cause",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La conjonctive (et la surface oculaire dans son ensemble) n’est pas un milieu stérile. Comme dans tout le reste de l’organisme, il est normal que des bactéries y prolifèrent ; on parle de flore conjonctivale."
  },
  {
    "type": "paragraph",
    "text": "Chez le porteur de lentilles, cette flore est très souvent déséquilibrée, avec parfois une surreprésentation de bactéries dangereuses pour la cornée. En cas de micro-traumatisme, lié à la manipulation des lentilles, à la pose ou à l’ablation, ces derniers vont se loger dans les brèches de l’épithélium cornéen et proliférer, jusqu’à la constitution d’un abcès."
  },
  {
    "type": "paragraph",
    "text": "Les infections parasitaires sont encore plus redoutables. On parle, plus précisément, de kératites amibiennes. Les amibes sont des micro-organismes extrêmement résistants aux traitements anti-infectieux et leur éradication totale est parfois impossible. Le risque est, dès lors, la perte de l’œil. Les amibes sont ubiquitaires, c’est-à-dire qu’ils sont présents partout dans l’environnement. On les retrouve, en particulier, dans l’eau."
  },
  {
    "type": "highlight",
    "text": "C’est la raison pour laquelle le port de lentilles est formellement contre-indiqué en cas de baignade ou lors de la douche."
  },
  {
    "type": "paragraph",
    "text": "Cette consigne est valable pour tous les types de lentilles, même si celles-ci sont jetées juste après la baignade. De la même manière, il est vivement déconseillé d’entretenir le boîtier de conservation ou les lentilles à l’eau du robinet. Seule la solution de nettoyage prescrite peut être utilisée dans ce but."
  },
  {
    "type": "paragraph",
    "text": "Le port de lentilles de contact est également un grand pourvoyeur de kératites fongiques. Cette fois, le micro-organisme en cause est un champignon. Il s’agit d’accidents extrêmement sévères, qui nécessitent des traitements lourds, de plusieurs mois. Ces germes sont en effet résistants à la plupart des collyres d’usage courant et il faut, le plus souvent, recourir à des solutions fortifiées de molécules antifongiques pour les éradiquer."
  },
  {
    "type": "highlight",
    "text": "La plupart de ces infections laissent d’importantes séquelles. La cornée devient le siège de cicatrices étendues, qui diminuent sa transparence."
  },
  {
    "type": "heading",
    "text": "Uvéite",
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
			<Title level="h1">Infections sous lentilles</Title>
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
