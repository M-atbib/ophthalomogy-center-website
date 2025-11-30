<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Des corps étrangers de toute taille et de toute nature peuvent entrer en contact avec l’œil.",
  "Il arrive que ces corps étrangers ricochent sur la surface du globe oculaire ou se décollent spontanément de la conjonctive, mais il arrive également que l’intervention d’un ophtalmologiste soit nécessaire pour vous en débarrasser."
];
const blocks = [
  {
    "type": "heading",
    "text": "Corps étranger de la surface oculaire",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "C'est un motif extrêmement fréquent de consultation aux urgences ophtalmologiques, souvent suite à des accidents survenus en milieu professionnel. Le corps étranger peut être métallique, végétal ou tellurique et va se ficher dans l’épaisseur de la cornée, à la surface de l'oeil."
  },
  {
    "type": "paragraph",
    "text": "La présence d’un corps étranger cornéen réveille des douleurs parfois insupportables, exacerbées par le clignement palpébral. La conjonctive, qui tapisse l’intérieur de la paupière, s’irrite elle aussi en passant sur le corps étranger. La vision peut également être abaissée, soit par la position du corps étranger, soit par le larmoiement excessif induit par sa présence."
  },
  {
    "type": "highlight",
    "text": "La cornée est le tissu le plus densément innervé de l’organisme, ce qui explique des douleurs si vives."
  },
  {
    "type": "paragraph",
    "text": "En présence d'un corps étranger superficiel, il faut procéder à son ablation au plus vite. C'est un geste simple, qui ne nécessite pas de passage au bloc opératoire. Après anesthésie locale, via l’instillation de collyres, le corps étranger est enlevé par l’ophtalmologiste au cabinet, sans douleur pour le patient."
  },
  {
    "type": "paragraph",
    "text": "Il faut bien sûr vérifier que la cornée n'ait pas été perforée dans toute son épaisseur, ce qui occasionnerait une fuite de liquide oculaire et une cause d’infection potentiellement grave."
  },
  {
    "type": "paragraph",
    "text": "Après l’ablation, les douleurs peuvent persister pendant quelques jours et un traitement cicatrisant devra être instillé de manière pluri-quotidienne."
  },
  {
    "type": "highlight",
    "text": "En cas de persistance de douleurs importantes ou de baisse de la vision évolutive après ablation, il est préférable de reconsulter votre ophtalmologiste en urgence, afin d’éliminer la survenue de complications locales."
  },
  {
    "type": "paragraph",
    "text": "La vaccination anti-tétanique, si elle n’est pas à jour, doit être renouvelée."
  },
  {
    "type": "heading",
    "text": "Corps étranger intra-oculaire",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "C'est une situation beaucoup plus grave. Un corps étranger peut se loger à l’intérieur du globe oculaire, souvent à l'occasionnant d'un traumatisme à haute cinétique."
  },
  {
    "type": "highlight",
    "text": "Il faut toujours garder en tête cette situation en cas de traumatisme oculaire, quel qu'en soit le mécanisme."
  },
  {
    "type": "paragraph",
    "text": "Parfois, les symptômes et complications apparaissent à distance de l'accident initial, si l'oeil reste étanche en cas de perforation de petite taille."
  },
  {
    "type": "paragraph",
    "text": "La prise en charge doit être rapide et adaptée, pour éviter la survenue de conséquences sévères et potentiellement dramatiques pour la fonction visuelle, parmi lesquelles:"
  },
  {
    "type": "paragraph",
    "text": "L’endophtalmie post-traumatique, infection intra-oculaire sévère. Elle fait partie des principales craintes de l’ophtalmologiste dans ce type de situation. Le corps étranger n'est en effet pas stérile et va apporter, à l'intérieur de l'oeil, des microbes potentiellement très dangereux."
  },
  {
    "type": "paragraph",
    "text": "La sidérose bulbaire. Si le corps étranger est métallique, il peut imprégner lentement les tissus intra-oculaires. Cette imprégnation chronique est évidemment toxique. Ses conséquences sont généralement visibles plusieurs années après le traumatisme initial."
  },
  {
    "type": "paragraph",
    "text": "Le décollement de rétine, une cataracte traumatique, un glaucome post-traumatique font également partie des complications possibles, en fonction du trajet pris par le corps étranger et des structures qui auront été lésées par son passage."
  },
  {
    "type": "highlight",
    "text": "Il est préférable, pour tout patient ayant subi un traumatisme oculaire, de consulter un ophtalmologiste en urgence. Seul un examen complet permettra, en effet, d'orienter correctement la prise en charge médico-chirurgicale."
  },
  {
    "type": "heading",
    "text": "Traumatismes oculaires",
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
			<Title level="h1">Corps étrangers oculaires</Title>
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
