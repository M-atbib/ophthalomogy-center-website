<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Le port de lentilles comme dispositif médical de correction optique n’est pas anodin et les quelques règles suivantes sont à suivre de manière stricte pour éviter tout accident, potentiellement très grave :",
  "Toujours manipuler les lentilles avec les mains propres, lavées à l’eau et au savon et convenablement séchées ;"
];
const blocks = [
  {
    "type": "heading",
    "text": "Comment bien utiliser des lentilles souples à renouvellement mensuel ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ne jamais poser ou garder une lentille sur un œil rouge et/ou douloureux ;"
  },
  {
    "type": "paragraph",
    "text": "Ne jamais utiliser de l’eau du robinet, ni des eaux minérales en bouteille pour nettoyer, rincer ou stocker les lentilles et les étuis ;"
  },
  {
    "type": "highlight",
    "text": "La baignade avec des lentilles est formellement contre-indiquées, quel que soit le type de lentilles portées et quel que soit le lieu de baignade (piscine, lac, rivière, jacuzzi, sauna, douche…)."
  },
  {
    "type": "heading",
    "text": "Consignes importantes :",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ne jamais dormir avec vos lentilles"
  },
  {
    "type": "paragraph",
    "text": "Ne porter que la lentille prescrite (marque, type, paramètres indiqués sur l’ordonnance)"
  },
  {
    "type": "paragraph",
    "text": "Respecter la fréquence de renouvellement"
  },
  {
    "type": "paragraph",
    "text": "Respecter la durée de port"
  },
  {
    "type": "paragraph",
    "text": "Respecter les modalités d’entretien conseillées"
  },
  {
    "type": "paragraph",
    "text": "Ne pas modifier la solution d’entretien sans avis médical"
  },
  {
    "type": "paragraph",
    "text": "Après la pose des lentilles, vider complètement l’étui, le sécher et le laisser ouvert"
  },
  {
    "type": "paragraph",
    "text": "Une lentille abîmée ou en mauvais état ne doit pas être posée sur l’œil"
  },
  {
    "type": "paragraph",
    "text": "Toujours renouveler, chaque jour, la totalité de la solution contenue dans l’étui"
  },
  {
    "type": "highlight",
    "text": "L’étui de stockage doit être remplacé tous les mois !"
  },
  {
    "type": "highlight",
    "text": "Dans tous les cas, des douleurs oculaires, une rougeur ou une baisse de la vision associée au port de lentilles nécessitent l’arrêt du port. Si les symptômes ne régressent pas rapidement, il est vivement conseillé de consulter votre ophtalmologiste en urgence."
  },
  {
    "type": "heading",
    "text": "Comment bien utiliser des lentilles souples à renouvellement journalier ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Le port de lentilles comme dispositif médical de correction optique n’est pas anodin et les quelques règles suivantes sont à suivre de manière stricte pour éviter tout accident, potentiellement très grave :"
  },
  {
    "type": "paragraph",
    "text": "Toujours manipuler les lentilles avec les mains propres, lavées à l’eau et au savon et convenablement séchées"
  },
  {
    "type": "paragraph",
    "text": "Ne jamais poser ou garder une lentille sur un œil rouge et/ou douloureux"
  },
  {
    "type": "paragraph",
    "text": "Ne jamais utiliser de l’eau du robinet, ni des eaux minérales en bouteille pour nettoyer, rincer ou stocker les lentilles et les étuis"
  },
  {
    "type": "paragraph",
    "text": "La baignade avec des lentilles est formellement contre-indiquées, quel que soit le type de lentilles portées et quel que soit le lieu de baignade (piscine, lac, rivière, jacuzzi, sauna, douche…)"
  },
  {
    "type": "heading",
    "text": "Consignes importantes :",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ne jamais dormir avec vos lentilles"
  },
  {
    "type": "paragraph",
    "text": "Ne porter que la lentille prescrite (marque, type, paramètres indiqués sur l’ordonnance)"
  },
  {
    "type": "paragraph",
    "text": "Respecter la fréquence de renouvellement"
  },
  {
    "type": "paragraph",
    "text": "Respecter la durée de port"
  },
  {
    "type": "paragraph",
    "text": "Une lentille abîmée ou en mauvais état ne doit pas être posée sur l’œil"
  },
  {
    "type": "paragraph",
    "text": "Toujours jeter la lentille après la journée de port"
  },
  {
    "type": "highlight",
    "text": "Dans tous les cas, des douleurs oculaires, une rougeur ou une baisse de la vision associée au port de lentilles nécessitent l’arrêt du port. Si les symptômes ne régressent pas rapidement, il est vivement conseillé de consulter votre ophtalmologiste en urgence."
  },
  {
    "type": "heading",
    "text": "Comment entretenir vos lentilles de contact ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "L’entretien rigoureux de vos lentilles de contact est le meilleur moyen d’assurer à la fois un port confortable et une protection suffisante contre les infections sous lentilles."
  },
  {
    "type": "paragraph",
    "text": "L’entretien des lentilles ne concerne que les lentilles souples à renouvellement mensuel et les lentilles rigides perméables aux gaz, y compris les lentilles d’ortho-kératologie."
  },
  {
    "type": "paragraph",
    "text": "En aucun cas, une lentille journalière ne peut être réutilisée. Il n’est donc pas nécessaire de procéder à son nettoyage, puisqu’elle peut être portée immédiatement après ouverture du blister."
  },
  {
    "type": "paragraph",
    "text": "Voici les principales étapes de l’entretien :"
  },
  {
    "type": "paragraph",
    "text": "Toujours commencer par se laver soigneusement les mains. Celles-ci doivent être propres et sèches pour la manipulation d’une lentille de contact (pose et dépose)."
  },
  {
    "type": "paragraph",
    "text": "Enlevez délicatement la lentille de la surface de l’œil et la placer dans le creux de la main"
  },
  {
    "type": "paragraph",
    "text": "Y déposer quelques gouttes de la solution d’entretien et en imprégner la lentille."
  },
  {
    "type": "paragraph",
    "text": "S’il s’agit d’une lentille souple, chaque face peut être massée délicatement, pendant quelques secondes. Le massage n’est pas nécessaire pour les lentilles rigides."
  },
  {
    "type": "paragraph",
    "text": "Remplir l’étui de conservation de la solution d’entretien."
  },
  {
    "type": "paragraph",
    "text": "Y plonger la lentille pour une durée minimale de 6 heures."
  },
  {
    "type": "paragraph",
    "text": "Pour les lentilles rigides, une déprotéinisation peut être nécessaire, à intervalle régulier. Il est nécessaire de se reporter, dans ce cas, aux consignes précises formulées par votre ophtalmologiste lors de la prescription. Celles-ci sont propres à chaque modèle de lentille et à chaque marque de produit d’entretien."
  },
  {
    "type": "paragraph",
    "text": "Lorsque vous sortez les lentilles de contact de leur étui de conservation, il n’est pas nécessaire de les rincer."
  },
  {
    "type": "heading",
    "text": "Quelques principes simples sont à respecter",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Il est conseillé de respecter la prescription médicale de produit d’entretien. Par précaution, le choix d’une autre marque ne se fera qu’après accord de votre ophtalmologiste."
  },
  {
    "type": "paragraph",
    "text": "Les lentilles de contact ne doivent jamais entrer en contact avec l’eau du robinet"
  },
  {
    "type": "paragraph",
    "text": "Une fois les lentilles sorties, l’étui de conservation doit être vidé complètement, rincé avec la solution d’entretien et séché, ouvert, sur un mouchoir propre, toute la journée, si possible à distance des points d’eau de la salle de bains."
  },
  {
    "type": "paragraph",
    "text": "Pensez à nettoyer et sécher correctement les bouchons de l’étui de conservation."
  },
  {
    "type": "paragraph",
    "text": "L’étui de conservation doit être changé tous les mois !"
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
			<Title level="h1">Comment mettre et entretenir vos lentilles ?</Title>
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
