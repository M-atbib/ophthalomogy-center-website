<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "L'orthokératologie est une technique très récente, dont les résultats sont extrêmement prometteurs.",
  "L’analogie est souvent faite avec une chirurgie réfractive, sauf qu’aucun geste définitif ou invasif n’est réalisé sur la cornée. Le matériau est conçu pour garantir une sécurité de port tout à fait satisfaisante. Rappelez-vous, en effet, que le port de lentilles est normalement contre-indiqué la nuit, avec tout autre type de matériau. Leur effet est totalement réversible et, chez le patient qui ne souhaite plus poursuivre le port. Ses effets s’estompent en quelques jours, avec retour vers l’amétropie initiale."
];
const blocks = [
  {
    "type": "heading",
    "text": "L'orthokératologie : une avancée technologique",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "Son principe : porter des lentilles la nuit, pendant le sommeil, pour ne plus porter de correction la journée."
  },
  {
    "type": "heading",
    "text": "Principes d'adaptation en orthokératologie",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "L’adaptation se rapproche de celle des lentilles rigides. Malheureusement, toutes les amétropies ne peuvent pas être corrigées en orthokératologie, notamment les myopies fortes ou les astigmatismes très marqués."
  },
  {
    "type": "paragraph",
    "text": "Pour adapter une lentille d'orthokératologie, des explorations morphologiques de la cornée sont nécessaires. Nos médecins utilisent un topographe cornéen spécialement adapté et des logiciels de pointe, pour pouvoir calculer les paramètres géométriques de la lentille."
  },
  {
    "type": "highlight",
    "text": "Les lentilles d'orthokératologie sont véritablement des lentilles sur mesure."
  },
  {
    "type": "paragraph",
    "text": "Le délai de renouvellement est identique aux lentilles rigides perméables aux gaz (12 à 18 mois). Les modalités d'entretien sont identiques, alliant une désinfection quotidienne et une déprotéinisation régulière."
  },
  {
    "type": "heading",
    "text": "Orthokératologie et freination myopique",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "De plus en plus d'études tendent à montrer que l'orthokératologie freinerait la myopie évolutive. C'est donc une technique de correction particulièrement intéressante chez l'adolescent et le jeune adulte, surtout si des antécédents de myopie sont présents dans la famille."
  },
  {
    "type": "paragraph",
    "text": "Ce type de lentilles peut, selon la motivation du patient, être adaptées plus précocément que les lentilles souples. Évidemment, un recul plus important est encore nécessaire pour pouvoir affirmer cet effet"
  },
  {
    "type": "heading",
    "text": "Les différents types de lentilles",
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
			<Title level="h1">Orthokératologie</Title>
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
