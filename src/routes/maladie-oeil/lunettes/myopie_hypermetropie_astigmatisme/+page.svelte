<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Les anomalies de la réfraction, ou amétropies, constituent un motif extrêmement fréquent de visite chez l’ophtalmologiste. Une prescription médicale est obligatoire pour permettre la délivrance de lunettes et/ou de lentilles de contact. En effet, sans consultation médicale, le dépistage des pathologies oculaires serait impossible.",
  "En effet, l’œil myope est trop long et les rayons lumineux arrivent, par conséquent, en avant de la rétine. Une cornée trop courbe peut aussi expliquer ce phénomène. Une correction optique est alors indispensable, quel que soit l’âge du diagnostic. Le port de lunettes, de lentilles ou la chirurgie réfractive sont des solutions très efficaces pour permettre de corriger cette anomalie, extrêmement fréquente."
];
const blocks = [
  {
    "type": "highlight",
    "text": "Une consultation médicale est indispensable pour obtenir une ordonnance permettant la délivrance d’un dispositif médical de correction optique."
  },
  {
    "type": "heading",
    "text": "Myopie",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "Si une personne est myope, sa vision de loin est floue."
  },
  {
    "type": "paragraph",
    "text": "La vision de près reste nette en cas de myopie. Elle ne s’altère qu’en cas de presbytie associée, mais pas toujours."
  },
  {
    "type": "paragraph",
    "text": "La myopie peut aussi s’associer à l’astigmatisme."
  },
  {
    "type": "highlight",
    "text": "Il existe de nombreux arguments pour affirmer que la myopie est une affection en partie héréditaire. Si vous -ou plusieurs membres de votre famille- êtes myope(s), alors un dépistage sera essentiel chez vos enfants, dès l’âge de 2 ans, ou plus tôt en cas de symptômes dans la vie courante."
  },
  {
    "type": "heading",
    "text": "Hypermétropie",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "À l’inverse du myope, l’hypermétrope a un œil trop court, ou une cornée trop plate. Les rayons lumineux arrivent, dès lors, virtuellement en arrière de la rétine. En fonction de son âge, un hypermétrope peut voir net aussi bien de loin que de près. Mais ceci se fait au prix d’un effort musculaire réflexe, totalement involontaire : l’accomodation"
  },
  {
    "type": "paragraph",
    "text": "Avec le temps, et en fonction du degré d’hypermétropie, des symptômes tels que des maux de tête, un dédoublement des images à la fatigue, ou une vision floue, de loin et/ou de près, vont s’installer. Il conviendra alors de corriger l’hypermétropie."
  },
  {
    "type": "paragraph",
    "text": "Les modes de correction sont les mêmes que pour la myopie : les lunettes, les lentilles ou la chirurgie réfractive."
  },
  {
    "type": "paragraph",
    "text": "L’hypermétropie peut, elle aussi, s’associer à l’astigmatisme."
  },
  {
    "type": "heading",
    "text": "Astigmatisme",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Pour comprendre l’astigmatisme, il faut imaginer l’œil en trois dimensions. Un œil non astigmate aurait une cornée plutôt sphérique, à l’image d’un ballon de football. Par contre, un œil astigmate aura une cornée dite « asphérique », grossièrement ovalaire, à l’image d’un ballon de rugby. En fonction de l’orientation de ce « ballon », l’astigmatisme sera qualifié de « direct » ou « d’indirect », avec des conséquences possibles sur la qualité visuelle."
  },
  {
    "type": "highlight",
    "text": "Une personne astigmate perçoit les images déformées, plus ou moins fortement selon le degré d’astigmatisme."
  },
  {
    "type": "paragraph",
    "text": "Le plus souvent, l’astigmatisme est associé à une myopie ou une hypermétropie."
  },
  {
    "type": "paragraph",
    "text": "Comme c’est le cas pour la myopie et l’hypermétropie, un astigmatisme symptomatique pourra être corrigé par le port de lunettes, de lentilles ou par la chirurgie réfractive."
  },
  {
    "type": "heading",
    "text": "Presbytie : qu'est-ce que c'est ?",
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
			<Title level="h1">Myopie, Hypermétropie, Astigmatisme</Title>
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
