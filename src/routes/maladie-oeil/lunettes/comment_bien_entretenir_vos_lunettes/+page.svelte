<script lang="ts">
import { Section, Title, Text, Button } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Vous trouverez, sur cette page, quelques conseils qui vous aideront à prolonger la durée de vie de vos lunettes.",
  "Pour éviter la casse, mieux vaut conserver vos lunettes dans un étui solide, lorsqu'elle ne sont pas portées."
];
const blocks = [
  {
    "type": "heading",
    "text": "Comment protéger votre paire de lunettes ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Évidemment, il vaut mieux éviter les activités à risque de traumatisme (notamment les sports de contact, les jeux de ballon...), qui pourraient endommager la monture ou les verres."
  },
  {
    "type": "heading",
    "text": "Avec quoi pouvez-vous entretenir les verres de vos lunettes ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Pour l’entretien des verres, il est conseillé :"
  },
  {
    "type": "paragraph",
    "text": "D'utiliser des produits adaptés, des sprays, des lingettes ou, plus simplement, de l'eau tiède avec du savon doux."
  },
  {
    "type": "paragraph",
    "text": "D'utiliser un chiffon microfibres ou un mouchoir en papier pour frotter les verres."
  },
  {
    "type": "paragraph",
    "text": "Le papier essuie-tout est à éviter ; il peut en effet endommager les verres et les rayer. Il en est de même pour les accessoires en coton."
  },
  {
    "type": "paragraph",
    "text": "Pour augmenter la durée de vie de vos montures et vos verres, mieux vaut éviter de les exposer à de fortes sources de chaleur (sauna, hammam, plusieurs heures derrière le pare-brise d'une voiture stationnée au soleil…)"
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
			<Title level="h1">Comment bien entretenir vos lunettes ?</Title>
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
