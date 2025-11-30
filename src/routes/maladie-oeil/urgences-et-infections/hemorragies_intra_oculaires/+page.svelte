<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Il est possible qu’un saignement survienne à l’intérieur de l’œil. Ce phénomène est souvent très inquiétant pour la personne atteinte et l’amène à consulter rapidement son ophtalmologiste. Évidemment, la localisation du saignement et le contexte dans lequel il survient sont des facteurs essentiels à connaître dans la démarche diagnostique et thérapeutique.",
  "L’hyphéma correspond à la présence de sang dans la chambre antérieure de l’œil, c’est-à-dire entre la cornée et l’iris. Ce saignement est souvent visible à l’œil nu. Il peut être d’importance viariable et la remplit parfois complètement ; on parle alors d’hyphéma total."
];
const blocks = [
  {
    "type": "heading",
    "text": "Hyphéma",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "L’hyphéma survient, dans l’immense majorité des cas, dans les suites d’un traumatisme oculaire violent."
  },
  {
    "type": "paragraph",
    "text": "Les contusions oculaires peuvent survenir au travail ou pendant les activités sportives. En cas de choc, le globe oculaire subit un phénomène de compression/décompression brutal, à l’origine de certaines lésions des tissus intra-oculaires. En cas d’hyphéma, un examen méticuleux sera abolument nécessaire en urgence, à la recherche, notamment, de lésions de la racine de l’iris."
  },
  {
    "type": "paragraph",
    "text": "L’hyphéma peut se compliquer d’une élévation de la pression intra-oculaire. Des traitements sont nécessaires pour la contrôler, le cas échéant."
  },
  {
    "type": "paragraph",
    "text": "Le plus souvent, le sang va régresser spontanément, en quelques jours ou semaines. Si l’hyphéma est très important ou si sa régression est trop lente, une intervention chirurgicale peut être nécessaire pour en limiter les conséquences, potentiellement sévères."
  },
  {
    "type": "heading",
    "text": "Hémorragie intra-vitréenne",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ce type de saignement survient dans le segment postérieur de l’œil (en arrière de l’iris) et, plus précisément, dans la cavité vitréenne."
  },
  {
    "type": "heading",
    "text": "Cavité vitréenne",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Le gel vitréen compose près de 80% du volume du globe oculaire."
  },
  {
    "type": "paragraph",
    "text": "Il peut être le siège de remaniements, parmi lesquels le plus fréquent est le décollement postérieur du vitré. Il peut occasionner des dommages à la rétine, comme des déchirures ou des trous. En cas de déchirure, lorsqu’un vaisseau sanguin passe à proximité, un saignement intra-oculaire, parfois très important, est possible."
  },
  {
    "type": "paragraph",
    "text": "L’hémorragie intra-vitréenne est une cause de baisse de vision rapide, d’importance variable et toujours indolore. Devant une telle situation, un examen ophtalmologique urgent est vivement recommandé."
  },
  {
    "type": "heading",
    "text": "Mode d'apparition et symptômes",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Le saignement, à son début, est souvent décrit par le patient comme un phénomène de « pluie de suie ». Il diffère ainsi des corps flottants classiquement peu nombreux et moins mobiles."
  },
  {
    "type": "paragraph",
    "text": "Le saignement provient forcément d’un vaisseau sanguin rétinien."
  },
  {
    "type": "paragraph",
    "text": "Il peut s’agir :"
  },
  {
    "type": "paragraph",
    "text": "D’un vaisseau normal, qui saigne pour un motif extra-oculaire, non ophtalmologique : effort à glotte fermé trop important, certains cas d’hémorragies intra-crâniennes…"
  },
  {
    "type": "paragraph",
    "text": "D’un vaisseau normal qui saigne pour un motif intra-oculaire : le décollement postérieur du vitré en est le principal pourvoyeur."
  },
  {
    "type": "paragraph",
    "text": "D’une malformation vasculaire, comme un anévrysme rétinien qui, au cours d’une poussée d’hypertension artérielle, peut saigner spontanément"
  },
  {
    "type": "paragraph",
    "text": "De vaisseaux rétiniens anormaux : les néo-vaisseaux rétiniens. Ceux-ci sont plus fragiles que l’arbre vasculaire normal et peuvent se rompre très facilement, occasionnant un saignement."
  },
  {
    "type": "highlight",
    "text": "La principale cause d’apparition de néo-vaisseaux rétiniens est la rétinopathie diabétique."
  },
  {
    "type": "paragraph",
    "text": "Ce phénomène est une réponse à la souffrance rétinienne chronique induite par une hypo-oxygénation des tissus oculaires. D’autres affections comme l’occlusion de la veine centrale de la rétine ou certaines formes de DMLA peuvent également entraîner la formation de vaisseaux anormaux et donc, d’hémorragies."
  },
  {
    "type": "heading",
    "text": "Prise en charge de l'hémorragie",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "L’évolution d’une hémorragie intra-vitréenne est variable. Parfois, le sang se lave spontanément en quelques jours ou semaines, avec une restauration complète de la vision."
  },
  {
    "type": "paragraph",
    "text": "Dans d'autres cas, à l'inverse, l’hémorragie se fixe, le sang coagule à l’intérieur de l’œil. Le traitement est, dès lors, plus complexe et souvent chirurgical."
  },
  {
    "type": "paragraph",
    "text": "Une hémorragie intra-vitréenne impose de considérer deux éléments distincts:"
  },
  {
    "type": "paragraph",
    "text": "Le saignement: il est conseillé au patient de s’hydrater abondamment, par voie orale et de boire 2 litres d’eau par jour, en l’absence de contre-indication cardio-vasculaire. Le repos est également vivement conseillé, en évitant les déplacements ou les exercices inutiles."
  },
  {
    "type": "paragraph",
    "text": "La cause du saignement: traitement rétinien au laser, injections intra-vitréennes ou intervention chirurgicale. Il est fondamental de connaître l'origine du saignement, parfois au moyen d'examens complémentaires."
  },
  {
    "type": "heading",
    "text": "Infections sous lentilles",
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
			<Title level="h1">Hémorragies intra-oculaires</Title>
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
