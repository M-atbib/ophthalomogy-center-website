<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "La conjonctive est souvent comparée à une peau, transparente, qui recouvre la sclère, partie blanche de la surface oculaire. Elle tapisse également la face interne des paupières. La zone de transition entre ces deux zones est formée par le cul-de-sac conjonctival.",
  "Lorsque la conjonctive est colonisée par certains micro-organismes pathogènes, elle est le siège d’une inflammation ; c’est le stade de conjonctivite."
];
const blocks = [
  {
    "type": "heading",
    "text": "Qu'est-ce qu'une conjonctivite ?",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Quels sont les signes de conjonctivite ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les signes les plus fréquents sont les suivants :"
  },
  {
    "type": "paragraph",
    "text": "Rougeur oculaire diffuse"
  },
  {
    "type": "paragraph",
    "text": "Larmoiement"
  },
  {
    "type": "paragraph",
    "text": "Sécrétions oculaires"
  },
  {
    "type": "paragraph",
    "text": "Pas de baisse de vision ou baisse de la vision modérée"
  },
  {
    "type": "paragraph",
    "text": "Paupières parfois gonflées (en raison de l'oedème de la conjonctive)"
  },
  {
    "type": "paragraph",
    "text": "Peu ou pas de douleurs. Malgré tout, de nombreux patients atteints se plaignent d’une sensation de corps étranger sous-palpébral, liée au frottement des follicules ou des papilles (structures hypertrophiées au cours de l’épisode) sur la surface oculaire."
  },
  {
    "type": "heading",
    "text": "Quels sont les germes responsables ?",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Conjonctivites virales",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La conjonctivite virale survient dans le cadre de véritables épidémies. La cause la plus typique est une atteinte par les virus de type «Adénovirus ». Elle est extrêmement contagieuse. Certaines règles sont à respecter pour éviter sa propagation. L’épisode touche très souvent les deux yeux. Il peut être associé à une fièvre ou à des symptômes de rhino-pharyngite ; c’est en effet le même virus qui est en cause pour ces deux pathologies. Les sécrétions, en cas de conjonctivite virale, sont claires."
  },
  {
    "type": "paragraph",
    "text": "L’inflammation locale est parfois telle que des membranes se développent à la surface de la conjonctive palpébrale, avec, pour possible conséquence, des cicatrices localisées. Une kératite s’y associe quand la réplication virale est très intense, avec des séquelles possibles pour la vision."
  },
  {
    "type": "highlight",
    "text": "Si vous êtes traité pour une conjonctivite virale et que votre vision continue de baisser, mieux vaut reconsulter votre ophtalmologiste en urgence !"
  },
  {
    "type": "paragraph",
    "text": "Comme pour toute infection virale, les antibiotiques ne sont pas efficaces sur ce type d’épisode. Mieux vaut donc éviter d’en instiller par vous-même."
  },
  {
    "type": "paragraph",
    "text": "La conjonctive est le siège d’une réplication virale longue. Même en cas de régression des symptômes, un patient reste contagieux plusieurs semaines et il est conseillé de poursuivre le traitement pour toute la durée de prescription, sous peine de voir récidiver le tableau clinique ou d’infecter son entourage, familial ou professionnel."
  },
  {
    "type": "paragraph",
    "text": "D'autres familles de virus peuvent être en cause. Les virus de la famille des herpès sont extrêmement pathogènes pour l'oeil et ses annexes. La conjonctivite est, dans ce cas, présente sur un oeil. Certains symptômes associés font fortement suspecter le diagnostic, comme la présence de lésions cutanées sur les paupières ou une éruption labiale récente."
  },
  {
    "type": "paragraph",
    "text": "Seul un examen ophtalmologique attentif pourra vous permettre de bénéficier du traitement le plus adapté à la forme de conjonctivite virale diagnostiquée."
  },
  {
    "type": "heading",
    "text": "Conjonctivites bactériennes",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les conjonctivites bactériennes sont plus souvent unilatérales. Les sécrétions sont plus sales que dans le cadre des infections virales. Elles peuvent prendre une coloration verdâtre et une consistance épaisse. L'âge de survenue de l'infection est important à connaître."
  },
  {
    "type": "paragraph",
    "text": "Les conjonctivites bactériennes de l'enfant sont les plus sérieuses. Certaines bactéries peuvent en effet entraîner des lésions cornéennes extrêmement sévères. Dans certaines régions du monde, le trachome est un diagnostic encore courant de conjonctivite bactérienne, avec des conséquences parfois dramatiques."
  },
  {
    "type": "paragraph",
    "text": "Chez un enfant en bas âge, et plus encore chez un nouveau-né, la conjonctivite bactérienne est une urgence et il est nécessaire de consulter votre ophtalmologiste sans délai."
  },
  {
    "type": "highlight",
    "text": "En cas de conjonctivite bactérienne, l’utilisation d’antibiotiques ne sera pas systématique!"
  },
  {
    "type": "heading",
    "text": "Conjonctivite allergique",
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
			<Title level="h1">Conjonctivite infectieuse : qu'est-ce que c'est ?</Title>
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
