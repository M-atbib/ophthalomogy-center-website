<script lang="ts">
import { Section, Title, Text, Button } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "L’uvéite est une inflammation des tissus intra-oculaires, situés dans les couches profondes du globe : l’iris, la choroïde, la rétine et ses vaisseaux. Les formes d’uvéite sont très nombreuses et variées. Il en va de même pour leurs causes possibles.",
  "L’uvéite occasionne une rougeur oculaire diffuse, mais aussi des douleurs profondes. Ces douleurs sont également présentes la nuit et ne sont pas calmées par la fermeture de la paupière. Une baisse de vision, plus ou moins prononcée, est généralement présente. La pression intra-oculaire peut monter au cours de l’épisode."
];
const blocks = [
  {
    "type": "heading",
    "text": "Définition",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Formes cliniques",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les uvéites antérieures atteignent surtout l’iris et la chambre d’antérieure de l’œil (l’espace situé entre l’iris et la cornée). La vision est très souvent perturbée, allant d’une discrète impression de brouillard à une baisse d’acuité visuelle profonde. L’œil est rouge, surtout au pourtour de la cornée ; on parle de cercle péri-kératique."
  },
  {
    "type": "paragraph",
    "text": "Les uvéites intermédiaires sont plus rares. C’est la base du vitré qui est inflammatoire. Pour le patient atteint, aucun symtôme ne facilite vraiment l’orientation du diagnostic. L’œil n’est pas toujours rouge. La vision n’est pas toujours abaissée. Les douleurs sont parfois très discrètes."
  },
  {
    "type": "paragraph",
    "text": "Les uvéites postérieures atteignent le fond de l’œil : la rétine, les vaisseaux rétiniens, la choroïde (réseau vasculaire en dessous de la rétine). La baisse de vision est très fréquente. La tête du nerf optique peut être le siège d’un œdème ; on parle alors de papillite."
  },
  {
    "type": "paragraph",
    "text": "Les uvéites mixtes résultent d’une diffusion de l’inflammation à plusieurs régions de l’œil. Un tableau d’uvéite diagnostiquée tardivement prend fréquemment cet aspect."
  },
  {
    "type": "paragraph",
    "text": "On peut également classer une uvéite en fonction de sa durée ou du nombre d'épisodes inflammatoires. Une uvéite peut être aigüe, chronique, récidivante ou isolée."
  },
  {
    "type": "heading",
    "text": "Causes possibles d'uvéite",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Uvéites infectieuses",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Tous les germes peuvent entraîner un tableau d’uvéite (virus, bactéries, champignons, parasites). Parmi les virus, ceux du groupe des Herpes représentent une cause fréquente d’uvéite virale. On retrouve même des tableaux de kérato-uvéite, alliant à la fois une infection de la cornée et de l’intérieur l’œil. Les parasites sont de grands pourvoyeurs d’uvéites infectieuses. La toxoplasmose est l’une des causes les plus fréquentes d’uvéite postérieure. Elle peut survenir à tout âge et à la particularité de se transmettre de la mère à l’enfant au cours de la grossesse."
  },
  {
    "type": "heading",
    "text": "Uvéites médicamenteuses",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Elles font suite à l’utilisation de certains traitements, surtout dans le cadre de maladies chroniques. Certains antibiotiques sont concernés, tout comme certains traitements anti-cancéreux."
  },
  {
    "type": "heading",
    "text": "Uvéites non infectieuses",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Elles peuvent être liées à des maladies auto-immunes n’ayant, a priori, pas de rapport direct avec l’appareil visuel. C’est le cas, par exemple, de la spondylarthrite ankylosante, de la maladie de Crohn ou de la maladie de Behçet. L’âge peut être un argument important pour pouvoir poser un diagnostic précis."
  },
  {
    "type": "heading",
    "text": "Uvéites idiopathiques",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ce terme qualifie une uvéite dont la cause n’est pas retrouvée par les différents examens réalisés par votre médecin. C'est malheureusement une issue assez fréquente aux explorations diagnostiques."
  },
  {
    "type": "heading",
    "text": "Prise en charge d’une uvéite",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Le diagnostic d’uvéite va amener votre ophtalmologiste à réaliser des examens complémentaires, afin d’essayer d’identifier son origine précise. Par exemple, en cas d'uvéite postérieure, une angiographie rétinienne pourra être proposée, afin de rechercher, par exemple, des lésions de choroïdite ou une vascularite. D’autres spécialistes pourront être consultés pour compléter la démarche diagnostique."
  },
  {
    "type": "paragraph",
    "text": "Le traitement de l’uvéite s’articulera autour de deux axes :"
  },
  {
    "type": "paragraph",
    "text": "Le traitement de sa cause, si celle-ci est retrouvée ;"
  },
  {
    "type": "paragraph",
    "text": "Le traitement de l’inflammation oculaire en elle-même. Le plus souvent, un traitement anti-inflammatoire et l’utilisation de cortico-stéroïdes sont nécessaires. La durée est variable et dépendra de la réponse de chaque patient."
  },
  {
    "type": "paragraph",
    "text": "La prise en charge des complications potentielles, notamment si l'uvéite devient chronique. L'inflammation oculaire prolongée et les différents traitements administrés peuvent générer la survenue d'une cataracte sur l'oeil atteint, ou encore d'un glaucome chronique."
  },
  {
    "type": "paragraph",
    "text": "Une collaboration étroite entre le patient et son ophtalmologiste est nécessaire pour assurer une prise en charge optimale de cet épisode. Au moindre doute sur une récidive, une consultation ophtalmologique urgente s’impose."
  },
  {
    "type": "heading",
    "text": "Chalazion, Orgelet",
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
			<Title level="h1">Uvéite</Title>
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
