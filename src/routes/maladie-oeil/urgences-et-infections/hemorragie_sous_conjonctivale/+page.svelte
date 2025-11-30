<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "La survenue d’une rougeur oculaire est un motif de recours extrêmement fréquent aux urgences ophtalmologiques. Les diagnostics potentiels sont multiples et vont évidemment dépendre d’un contexte propre à chaque patient : chirurgie oculaire récente, traumatisme évident, traitements en cours, antécédents généraux…",
  "L’apparition d’une rougeur n’est pas toujours associée à la présence de douleurs. L’hémorragie sous-conjonctivale en est l’exemple-type. Il s’agit d’une plage de sang frais, donc rouge vif, localisée sous la conjonctive, tissu transparent recouvrant la surface du globe oculaire et la face interne des paupières. Elle survient, dans la majorité des cas, brutalement. La plupart des patients la remarquent le matin au réveil. Cette atteinte n’est pas douloureuse ; tout au plus, il existe une sensation de corps étranger sous-palpébral."
];
const blocks = [
  {
    "type": "heading",
    "text": "L'hémorragie sous-conjonctivale : une affection bénigne",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La rougeur sera plus ou moins étendue en fonction de la quantité de sang étalée sous la conjonctive. Elle peut rester très localisée ou occuper plusieurs quadrants de la surface oculaire. L’hémorragie sous-conjonctivale n’entraîne pas de baisse de la vision."
  },
  {
    "type": "heading",
    "text": "Causes les plus fréquentes",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Une hypertension artérielle mal équilibrée. En cas d’hémorragie sous-conjonctivale, une vérification devra toujours être effectuée. Des pics d’hypertension artérielle, peu symptomatiques par ailleurs, peuvent tout à fait se manifester par ce biais. La coordination avec le cardiologue ou le médecin traitant sera, dès lors, essentielle."
  },
  {
    "type": "paragraph",
    "text": "Un traumatisme, même minime de la surface oculaire. Avec l’âge, la paroi des vaisseaux sanguins épiscléraux et conjonctivaux se fragilise. Il arrive que l’un d’eux se rompent et déverse son contenu dans l’espace sous-conjonctival. Si le patient prend un traitement anti-coagulant ou anti-agrégant plaquettaire, dans le cadre de pathologies cardio-vasculaires, le saignement est plus abondant."
  },
  {
    "type": "paragraph",
    "text": "En cas d’épisodes récidivants, sans cause évidente, un bilan sanguin à la recherche de troubles de la coagulation peut également être discuté."
  },
  {
    "type": "heading",
    "text": "Traitement",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "Aucun traitement n’est nécessaire en cas d’hémorragie sous-conjonctivale."
  },
  {
    "type": "paragraph",
    "text": "Il faut plusieurs semaines pour que la rougeur disparaisse. La présence de sang à quelques jour du début des symptômes n'est absolument pas inquiétante."
  },
  {
    "type": "paragraph",
    "text": "Si vous présentez un épisode de rougeur oculaire, une consultation ophtalmologique d’urgence peut être nécessaire afin de permettre une confirmation diagnostique précise."
  },
  {
    "type": "heading",
    "text": "Hémorragies intra-oculaires",
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
			<Title level="h1">Hémorragie sous-conjonctivale</Title>
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
