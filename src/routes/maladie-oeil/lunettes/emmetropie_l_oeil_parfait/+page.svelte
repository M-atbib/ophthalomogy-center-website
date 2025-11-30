<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Un oeil emmétrope est un oeil qui permet une excellente vision, sans correction optique.",
  "L'image d'un objet se forme directement sur la rétine, parce que la lumière y est parfaitement focalisée."
];
const blocks = [
  {
    "type": "heading",
    "text": "Ceci dépend, schématiquement, de deux facteurs :",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La longueur axiale de l'oeil, qui est optimale (en général, 24 mm) ;"
  },
  {
    "type": "paragraph",
    "text": "Les rayons de courbure de la cornée sont équilibrés et la cornée est régulière."
  },
  {
    "type": "paragraph",
    "text": "Contrairement à un oeil [myope](https://www.cof.fr/lunettes/myopie-hypermetropie-astigmatisme), hypermétrope et/ou astigmate, il n'est pas nécessaire, via une correction optique, de dévier les rayons lumineux pour qu'ils s'orientent au mieux"
  },
  {
    "type": "paragraph",
    "text": "Néanmoins, un oeil emmétrope perdra, de manière tout à fait normale, ses capacités d'accomodation avec le temps. Ainsi se développera une [presbytie](https://www.cof.fr/lunettes/presbytie-qu-est-ce-que-c-est). Un patient emmétrope devra donc, malgré tout, porter une correction optique pour la vision de près, dès que celle-ci lui semblera insuffisante."
  },
  {
    "type": "highlight",
    "text": "Attention, un oeil emmétrope, même si la vision est excellente, peut être porteur d'une maladie oculaire. Il convient d'être prudent et de bénéficier régulièrement d'un bilan ophtalmologique complet, pour assurer un dépistage de ce type de maladie."
  },
  {
    "type": "heading",
    "text": "Comment lire votre ordonnance de lunettes ?",
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
			<Title level="h1">Emmétropie : l'oeil parfait</Title>
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
