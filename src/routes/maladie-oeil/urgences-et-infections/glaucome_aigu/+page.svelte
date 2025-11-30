<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Le glaucome aigü par fermeture de l’angle fait partie des urgences ophtalmologiques les plus impérieuses. Il correspond à une élévation brutale et très importante de la pression intra-oculaire qui peut conduire, si rien n’est fait, à des dommages parfois irréversibles pour l’œil et la fonction visuelle.",
  "Le terme « glaucome aigü » est, dans la réalité, inexact."
];
const blocks = [
  {
    "type": "paragraph",
    "text": "Il convient plutôt de parler de « crise aigüe de fermeture de l’angle irido-cornéen »."
  },
  {
    "type": "heading",
    "text": "Signes cliniques",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La douleur est le symptôme le plus fréquemment décrit par les patients atteints. Elle est parfois difficile à localiser et peut prendre la forme de maux tête latéralisés. Elle s’accompagne volontiers de vomissements. La douleur est dûe à l’élévation extrême de la pression intra-oculaire, parfois au-delà de 50 mmHg."
  },
  {
    "type": "paragraph",
    "text": "La rougeur oculaire est un autre symptôme fréquent. Plus précisément, on observe une collerette rouge sur le pourtour de la cornée ; on parle de « cercle péri-kératique »."
  },
  {
    "type": "paragraph",
    "text": "Les deux pupilles perdent leur symétrie. Lors d’une crise de glaucome aigü, la pupille de l’œil atteint reste figée en « semi-mydriase », que les ophtalmologistes qualifient d’« aréflective », puisqu’elle ne réagit plus à la lumière."
  },
  {
    "type": "paragraph",
    "text": "La baisse de vision est souvent profonde. Elle s’explique, d’une part, par une perte de transparence de la cornée, à cause d’un œdème consécutif à une souffrance de l’endothélium. D’autre part, le nerf optique s’altère rapidement, sous l’effet de la poussée tensionnelle."
  },
  {
    "type": "highlight",
    "text": "L’apparition d’une rougeur et de douleurs oculaires doit impérativement vous conduire à consulter un ophtalmologiste en urgence."
  },
  {
    "type": "heading",
    "text": "Mécanismes et facteurs de risque",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Lors d’une crise de glaucome aigü, la tension s’élève parce que l’humeur aqueuse (le liquide que contient la chambre antérieure de l’œil) ne peut plus s’écouler à travers le trabéculum, au fond de l’angle irido-cornéen."
  },
  {
    "type": "paragraph",
    "text": "Ce dernier est en effet obstrué par la racine de l’iris, projetée vers l’avant."
  },
  {
    "type": "paragraph",
    "text": "Cette situation se produit, dans la grande majorité des cas, sur un œil prédisposé :"
  },
  {
    "type": "paragraph",
    "text": "Œil fortement hypermétrope (hypermétropie supérieure à 4 dioptries)"
  },
  {
    "type": "paragraph",
    "text": "Œil non opéré de cataracte"
  },
  {
    "type": "paragraph",
    "text": "Œil dit « à angle fermable » , situation découverte de manière fortuite au cours des examens de suivi chez l’ophtalmologiste."
  },
  {
    "type": "paragraph",
    "text": "Les circonstances de survenue d’un glaucome aigüe sont variées :"
  },
  {
    "type": "paragraph",
    "text": "Prise de certains médicaments, ayant des effets sur la pupille et qui entraînent sa dilatation. Pour cette raison, la prise de certains sprays nasaux, de médicaments broncho-dilatateurs ou encore de certains anti-dépresseurs (ce ne sont que des exemples), requiert bien souvent un examen ophtalmologique complet."
  },
  {
    "type": "paragraph",
    "text": "La dilatation pupillaire dans l’obscurité peut également faciliter la survenue d’une telle crise."
  },
  {
    "type": "heading",
    "text": "Prise en charge",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "Le traitement d’une crise de glaucome aigü est une urgence. Elle nécessite la mise en place d’un traitement sans délai !"
  },
  {
    "type": "heading",
    "text": "Objectifs de la prise en charge en urgence",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Baisse de la pression intra-oculaire",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Celle-ci doit être obtenue par tous les moyens disponibles. Bien souvent, des traitements sont instaurés par voie générale (prise de comprimés ou perfusion intra-veineuse), en plus des traitements en collyres."
  },
  {
    "type": "heading",
    "text": "Levée du blocage pupillaire",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Dès que l’état oculaire le permet, votre ophtalmologiste réalisera une iridotomie périphérique, qui consiste en une perforation de la périphérique de l’iris au laser."
  },
  {
    "type": "paragraph",
    "text": "Ce geste est réalisé au cabinet d’Ophtalmologie. Il va permettre à l’humeur aqueuse de circuler à nouveau dans la chambre antérieure de l’oeil et de rouvrir l’angle irido-cornéen."
  },
  {
    "type": "heading",
    "text": "Empêcher la survenue d’une crise sur l’œil contro-latéral",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Si celui-ci est également à risque, l’iridotomie périphérique est réalisée dans les deux yeux."
  },
  {
    "type": "heading",
    "text": "Prise en charge secondaire",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Dès que possible, une chirurgie de cataracte est réalisée sur l’œil atteint. L’ablation du cristallin va, en effet, permettre des modifications géométriques importants à l’intérieur de l’œil et, ainsi, de rouvrir l’angle irido-cornéen de manière importante et définitive."
  },
  {
    "type": "heading",
    "text": "Autres traitements",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Malheureusement, les traitements décrits ci-dessus ne sont pas toujours suffisants pour contrôler la crise. Des gestes complémentaires, essentiellement chirurgicaux, peuvent être nécessaires pour permettre de réduire la tension intra-oculaire."
  },
  {
    "type": "heading",
    "text": "Collyres anti-glaucomateux",
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
			<Title level="h1">Glaucome aigu</Title>
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
