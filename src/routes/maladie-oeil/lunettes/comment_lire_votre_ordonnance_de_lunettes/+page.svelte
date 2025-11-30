<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Une ordonnance de lunettes n’est pas toujours facile à lire. En effet, il n’y est pas précisé, textuellement, si vous êtes myope, hypermétrope, astigmate ou presbyte. Le type de verres prescrits ne définit pas leur puissance.",
  "Tout est contenu dans des formules, peu lisibles pour un public non averti."
];
const blocks = [
  {
    "type": "heading",
    "text": "Comment lire une ordonnance de lunettes ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Voici donc quelques clés de lecture pour une meilleure compréhension."
  },
  {
    "type": "paragraph",
    "text": "Dans la plupart des cas, la correction n’est pas identique sur les deux yeux. Ceci n’est absolument pas pathologique. Chaque oeil fait l’objet d’une ligne qui lui est propre."
  },
  {
    "type": "paragraph",
    "text": "La formule de correction comporte de 1 à 3 éléments et désigne le pouvoir correcteur du verre ou de la lentille."
  },
  {
    "type": "paragraph",
    "text": "Ces éléments sont des valeurs chiffrées, qui correspondent à la puissance nécessaire du verre, exprimée en dioptries, qui est l’unité de mesure employée."
  },
  {
    "type": "paragraph",
    "text": "la première valeur est la puissance sphérique du verre (ou, plus simplement, la “sphère”). Si cette valeur est précédée par un “+”, le verre est dit “convergent” et permet la correction de l’hypermétropie. La lumière est avancée vers votre rétine. Si cette valeur est précédée par un “-”, le verre est dit “divergent” et permet la correction de la myopie. La lumière est, cette fois, reculée vers la rétine. Si le verre est neutre, le terme “plan” indique à l’opticien qu’aucune correction sphérique n’est nécessaire."
  },
  {
    "type": "paragraph",
    "text": "la deuxième valeur est indiquée entre parenthèses. Il s’agit de la puissance cylindrique du verre, qui permet de corriger l’astigmatisme. Cette correction n’est pas obligatoire si vous n’êtes pas astigmate. La plupart des ophtalmologistes utilisent une formule dite “en cylindre négatif” et la valeur est précédée du signe “-”. Il s’agit simplement d’une convention de rédaction."
  },
  {
    "type": "paragraph",
    "text": "la troisième valeur n’est présente que pour compléter la deuxième. Il s’agit d’un axe de rotation par rapport à l’horizontale. En effet, l’opticien, pour fabriquer correctement votre verre, doit savoir dans quel sens est orienté celui-ci, en cas d’astigmatisme."
  },
  {
    "type": "heading",
    "text": "Comment savoir si les verres prescrits sont progressifs sur mon ordonnance ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les verres progressifs permettent de corriger la presbytie, trouble de la vision de près qui empêche le patient de voir net un objet qui s’approche de son oeil."
  },
  {
    "type": "paragraph",
    "text": "Si les verres prescrits sont progressifs, une 4ème valeur chiffrée apparaît sur l’ordonnance, qui correspond à l’addition sphérique."
  },
  {
    "type": "paragraph",
    "text": "Cette valeur est toujours précédée du terme “Addition” (ou “Add”) et du signe “+”. Dans l’immense majorité des cas, la valeur est la même pour les deux yeux."
  },
  {
    "type": "paragraph",
    "text": "Si vous préférez utiliser une paire de lunettes pour la vision de loin et une autre paire pour la vision de près, une correction par des verres monofocaux est prescrite. Dans ce cas, deux prescriptions distinctes sont réalisées. Elles comportent de 1 à 3 valeurs chacune, comme expliqué dans le paragraphe précédent."
  },
  {
    "type": "heading",
    "text": "Quelques exemples pour aller plus loin",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Je suis uniquement myope, comment est rédigée mon ordonnance ?",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "Si vous êtes uniquement myope, chaque formule ne comportera qu’une seule valeur, précédée par un “-”."
  },
  {
    "type": "heading",
    "text": "Je suis presbyte et j’ai toujours été corrigé(e) pour une myopie et un astigmatisme, comment est rédigée mon ordonnance ?",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Deux solutions sont possibles :"
  },
  {
    "type": "paragraph",
    "text": "si vous souhaitez porter des verres progressifs, votre ordonnance comportera les 4 éléments : puissance sphérique, puissance cylindre entre parenthèses, axe de rotation du verre et, enfin, l’addition sphérique."
  },
  {
    "type": "paragraph",
    "text": "si vous ne souhaitez pas porter de verres progressifs, votre ordonnance comportera deux prescriptions distinctes. La seule différence entre les deux concernera la première valeur (puissance sphérique), selon le niveau d’addition nécessaire."
  },
  {
    "type": "highlight",
    "text": "Vous avez bien compris ? À vous de lire ces ordonnances !"
  },
  {
    "type": "heading",
    "text": "Cas n°1",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Mr W. a 25 ans. Il sort de sa consultation avec l’ordonnance suivante :"
  },
  {
    "type": "paragraph",
    "text": "**Oeil droit : +2.00 (-1,25) 55° Oeil gauche : +1,75 (-1,25) 65° **"
  },
  {
    "type": "heading",
    "text": "Solution",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Mr W. est hypermétrope et astigmate aux deux yeux."
  },
  {
    "type": "paragraph",
    "text": "À droite, il est hypermétrope de 2 dioptries. Il est astigmate de 1,25 dioptries et le verre doit être orienté à 55° de l’horizontale pour que la puissance du cylindre soit adaptée."
  },
  {
    "type": "paragraph",
    "text": "À gauche, il est hypermétrope de 1,75 dioptries et astigmate de 1,25 dioptries. Le verre doit être orienté à 65° de l’horizontale."
  },
  {
    "type": "heading",
    "text": "Cas n°2",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Mr G. a 55 ans. Il sort de sa consultation avec l’ordonnance suivante :"
  },
  {
    "type": "paragraph",
    "text": "**Oeil droit : -1,25 Oeil gauche : -2,00 Add: + 2,25**"
  },
  {
    "type": "heading",
    "text": "Solution",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Mr G. est myope et presbyte. Il va porter des verres progressifs."
  },
  {
    "type": "paragraph",
    "text": "À droite, il est myope de 1,25 dioptries."
  },
  {
    "type": "paragraph",
    "text": "À gauche, il est myope de 2 dioptries."
  },
  {
    "type": "paragraph",
    "text": "Sa presbytie nécessite une addition sphérique de 2,25 dioptries pour permettre une lecture confortable en vision de près."
  },
  {
    "type": "heading",
    "text": "Cas n°3",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Mme N. a 47 ans. Elle sort de sa consultation avec l’ordonnance suivante :"
  },
  {
    "type": "paragraph",
    "text": "**Vision de loin :"
  },
  {
    "type": "list",
    "items": [
      "Oeil droit: -4,25 (-0,75) 170°",
      "Oeil gauche : -4,00 (-1,00) 175°",
      "Vision de près :",
      "Oeil droit : -3,25 (-0,75)170°",
      "Oeil gauche : -3,00 (-1,00) 175°**"
    ],
    "style": "disc"
  },
  {
    "type": "heading",
    "text": "Solution",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Mme N. est myope, astigmate et presbyte. Elle va porter deux paires de lunettes différentes : une pour la vision de loin et une autre pour la vision de près."
  },
  {
    "type": "paragraph",
    "text": "À droite, elle est myope de 4,25 dioptries et astigmate de 0,75 dioptries."
  },
  {
    "type": "paragraph",
    "text": "À gauche, elle est myope de 4 dioptries et astigmate de 1 dioptrie."
  },
  {
    "type": "paragraph",
    "text": "Sa presbytie nécessite une addition sphérique de 1 dioptrie pour permettre une lecture confortable en vision de près."
  },
  {
    "type": "heading",
    "text": "Cas n°4",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Mme V. a 52 ans. Elle sort de sa consultation avec l’ordonnance suivante :"
  },
  {
    "type": "paragraph",
    "text": "**Oeil droit : +2,25 Oeil gauche : +2,25**"
  },
  {
    "type": "heading",
    "text": "Solution",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Mme V. est emmétrope et presbyte."
  },
  {
    "type": "paragraph",
    "text": "En vision de loin, elle n’a pas besoin de correction."
  },
  {
    "type": "paragraph",
    "text": "Par contre, sa presbytie nécessite une correction sphérique de 2,25 dioptries pour permettre une lecture confortable en vision de près."
  },
  {
    "type": "heading",
    "text": "Comment bien choisir vos lunettes ?",
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
			<Title level="h1">Comment lire votre ordonnance de lunettes ?</Title>
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
