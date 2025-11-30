<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Pour votre sécurité, mieux vaut respecter les consignes suivantes:",
  "Si vous avez bénéficié d’une chirurgie oculaire il y a moins de 15 jours, alors vous devez sans délai consulter votre ophtalmologiste. Si celui-ci n’est pas disponible, vous devez vous rendre dans le service d’urgences ophtalmologiques le plus proche."
];
const blocks = [
  {
    "type": "highlight",
    "text": "La survenue d’une rougeur oculaire et de douleurs impose un examen ophtalmologique rapide."
  },
  {
    "type": "paragraph",
    "text": "Si vous êtes porteur(se) de lentilles de contact, il est formellement recommandé d’arrêter le port, même si celui-ci semble soulager les douleurs. Il pourrait aggraver une infection en cours. En consultation, il est nécessaire d’amener les lentilles actuellement portées, leur emballage, le boîtier de conservation et le flacon de produit d’entretien utilisé."
  },
  {
    "type": "paragraph",
    "text": "Dans la mesure du possible, amenez avec vous, pour la consultation, la liste de vos traitements en cours, même s’ils n’ont pas de rapport évident avec l’Ophtalmologie."
  },
  {
    "type": "highlight",
    "text": "Évitez l’auto-médication !"
  },
  {
    "type": "paragraph",
    "text": "Certains traitements, instillés dans le cadre de l’urgence sans examen ophtalmologique, peuvent aggraver la pathologie en cours."
  },
  {
    "type": "highlight",
    "text": "Si vous ne parvenez pas à joindre notre secrétariat téléphonique, vous pouvez vous rendre directement dans le centre [Nom de Clinique] le plus proche de chez vous. Une permanence d’accueil des urgences est mise en place pendant les heures d’ouverture du cabinet pour vous recevoir."
  },
  {
    "type": "heading",
    "text": "Corps flottants, éclairs lumineux : que faire ?",
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
			<Title level="h1">Oeil rouge et douloureux : que faire ?</Title>
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
