<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "La presbytie est un phénomène tout à fait normal, qui survient avec le temps. Elle consiste en une perte des capacités d’accommodation de l’œil et entraîne des difficultés de plus en plus importantes pour bien voir de près.",
  "À noter que la chirurgie de cataracte, a pour conséquence systématique une presbytie complète. L’ablation du cristallin cataracté empêche, de manière tout à fait normale, l’accomodation de l’œil."
];
const blocks = [
  {
    "type": "heading",
    "text": "Quelles sont les causes de la presbytie ?",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "La presbytie surviendra aussi bien sur les yeux myopes, qu’astigmates et/ou hypermétropes."
  },
  {
    "type": "heading",
    "text": "Quand survient-elle et comment la corriger ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La presbytie survient le plus souvent à partir de l'âge de 45 ans. Elle est ressentie plus ou moins tardivement, en fonction des activités et des besoins visuels de chacun."
  },
  {
    "type": "paragraph",
    "text": "Elle est accessible à une correction par :"
  },
  {
    "type": "paragraph",
    "text": "Lunettes : verres de près uniquement, verres double-foyers, verres progressifs ;"
  },
  {
    "type": "paragraph",
    "text": "Lentilles : lentilles multifocales, monovision / bascule ;"
  },
  {
    "type": "paragraph",
    "text": "Chirurgie réfractive : techniques au laser, techniques implantaires."
  },
  {
    "type": "heading",
    "text": "De nombreuses solutions existent pour améliorer la vision de près",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les verres progressifs ne sont pas obligatoires pour corriger une presbytie. Par exemple, certaines personnes myopes peuvent lire de manière tout à fait satisfaisante en enlevant leur correction habituelle. D'autres préfèreront porter une correction monofocale, c'est-à-dire uniquement adaptée à la vision de près."
  },
  {
    "type": "heading",
    "text": "La survenue de la presbytie est-elle l'occasion d'un dépistage chez l'ophtalmologiste ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Beaucoup de patients se passent de dépistage médical en raison d'une bonne vison ressentie. Cependant, de nombreuses maladies ophtalmologiques peuvent se développer, sans qu'aucun symptôme ne soit perçu avant un stade d'évolution parfois dramatique."
  },
  {
    "type": "highlight",
    "text": "C'est pourquoi il est obligatoire que la première prescription de verres corrigeant la presbytie soit faite par un ophtalmologiste, à l'issue d'un examen ophtalmologique complet."
  },
  {
    "type": "heading",
    "text": "Emmétropie : l'oeil parfait",
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
	<Button variant="ghost" href="/maladie-oeil/lunettes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-7/12">
			<Title level="h1">Presbytie : qu'est-ce que c'est ?</Title>
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
