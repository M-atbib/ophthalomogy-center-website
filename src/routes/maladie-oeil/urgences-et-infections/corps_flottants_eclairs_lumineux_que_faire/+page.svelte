<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Le terme exact utilisé par l’ophtalmologiste pour décrire ce phénomène visuel est « myodésopsie ».",
  "Les patients décrivent souvent les myodésopsies comme des « mouches volantes », des images « d’insectes ondulés » ou, plus simplement, comme des « points noirs » qui, en flottant à l’intérieur de l’œil, suivent le regard avec un léger décalage. Souvent, les corps flottants ne sont pas invalidants. Ils sont particulièrement visibles en cas de forte luminosité ou lorsque l’œil fixe un fond clair et uniforme."
];
const blocks = [
  {
    "type": "heading",
    "text": "Corps flottants",
    "level": "h2"
  },
  {
    "type": "highlight",
    "text": "C’est un symptôme extrêmement fréquent, qui peut toucher tout individu, quel que soit son âge ou ses antécédents médico-chirurgicaux."
  },
  {
    "type": "highlight",
    "text": "En cas d’apparition récente de corps flottants ou de majoration importante de leur nombre, consultez votre ophtalmologiste dans les 48 heures, afin de bénéficier d’un fond d’œil attentif."
  },
  {
    "type": "heading",
    "text": "Causes possibles d'apparition",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Dans l’immense majorité des cas, ils sont expliqués par la présence d'un décollement postérieur du vitré. Les synérèses vitréennes, petites zones de condensation du gel vitréen, vont projeter leur ombre sur la rétine. Cette ombre est mobile et accompagne les mouvements du globe oculaire. Isolé, cet événement est sans gravité pour l'oeil."
  },
  {
    "type": "paragraph",
    "text": "Dans d’autres cas, l’apparition de corps flottants peut être liée à la présence de cellules sanguines à l’intérieur de la cavité vitréenne. Le saignement peut provenir d’une déchirure rétinienne ou de la présence de néo-vaisseaux rétiniens, conséquences possible du diabète ou d’une occlusion de la veine centrale de la rétine."
  },
  {
    "type": "paragraph",
    "text": "L’apparition de corps flottants, surtout s’ils sont très fins et très nombreux, peut également traduire la présence d’une inflammation ou d’une infection intra-oculaire. Des explorations complémentaires seront, dès lors, absolument indispensables."
  },
  {
    "type": "highlight",
    "text": "Les corps flottants secondaires à des synérèses vitréennes et au décollement postérieur du vitré n’ont pas tendance à disparaître. Il est tout à fait normal de les percevoir à plusieurs mois du diagnostic initial."
  },
  {
    "type": "paragraph",
    "text": "Avec le temps, cependant, leur impact s’atténue et leur caractère gênant est de moins en moins marqué."
  },
  {
    "type": "highlight",
    "text": "Les corps flottants ne nécessitent pas de traitement, dans l’immense majorité des cas."
  },
  {
    "type": "paragraph",
    "text": "Lorsqu’ils deviennent trop volumineux et ont un impact majeur sur la vision, leur ablation chirurgicale ou via un geste thérapeutique au laser peut être discutée. Il convient cependant d’en comprendre les risques, exposés par votre ophtalmologiste, avant d’envisager ce type de démarche."
  },
  {
    "type": "heading",
    "text": "Éclairs lumineux",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Il s’agit d’une manifestation visuelle fréquente, motif de nombreuses consultations aux urgences ophtalmologiques. La survenue d’éclairs lumineux nécessite une description précise du trouble, afin d’orienter finement le diagnostic."
  },
  {
    "type": "heading",
    "text": "Différentes situations sont possibles:",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Lorsque le patient perçoit de véritables flashes lumineux, persistants, localisés dans une partie assez précise du champ de vision et présents depuis plusieurs heures, y compris lorsque les yeux sont fermés, on parle de « phosphènes ». Ceux-ci ont une origine rétinienne. Il n’y a pas, dans le tissu rétinien, de cellules sensitives conduisant un signal douloureux. Par contre, une lésion de la rétine se manifeste par des signes visuels inhabituels. Les phosphènes sont observés essentiellement dans le cadre d’un décollement postérieur du vitré pathologique. Lorsque la hyaloïde tire fortement sur la rétine et s’en détache, elle peut entraîner une traction sur les fibres nerveuses rétiniennes et, dans ce cas, occasionner une déchirure, en forme de clapet ou de trou."
  },
  {
    "type": "highlight",
    "text": "Cette situation représente une urgence thérapeutique et une prise en charge s’impose dans les 24 heures. En effet, du liquide intra-oculaire peut s’engouffrer dans la déchirure et entraîner un                         , avec une menace importante pour la fonction visuelle."
  },
  {
    "type": "paragraph",
    "text": "La découverte d’une déchirure rétinienne récente va donc amener votre ophtalmologiste à entourer celle-ci avec des impacts laser. Ce traitement porte le nom de \"barrage au laser Argon\". Ceci va permettre la constitution d’une barrière, qui empêchera la rétine de se décoller autour de la déchirure. Ce geste est réalisé directement au cabinet d’Ophtalmologie, sans nécessité d’hospitalisation ou de passage au bloc opératoire."
  },
  {
    "type": "paragraph",
    "text": "L’examen attentif du fond d’œil peut s’avérer normal, même en présence de phosphènes persistants. C’est une situation fréquente qui traduit la traction simple de la hyaloïde. Une surveillance rapprochée, avec un nouveau fond d’œil au moindre nouveau symptôme est alors mise en place."
  },
  {
    "type": "paragraph",
    "text": "Lorsque les éclairs lumineux apparaissent sur les deux yeux, sur les côtés latéraux, sont décrits comme « diffus » et régressent après quelques dizaines de minutes, alors on parlera plutôt de « scotomes scintillants ». Cette situation est le plus souvent suivie (mais pas toujours) de maux de tête importants ; ils constituent alors une aura migraineuse, dans le cadre de migraines ophtalmiques."
  },
  {
    "type": "highlight",
    "text": "Les migraines ophtalmiques n’ont aucune cause oculaire."
  },
  {
    "type": "paragraph",
    "text": "Il s’agit de productions sensorielles d’origine uniquement cérébrale, émanant plus précisément du cortex. Une fois cette hypothèse confirmée, un avis neurologique spécialisé est souhaitable, afin de permettre une prise en charge diagnostique et thérapeutique optimale de la migraine."
  },
  {
    "type": "paragraph",
    "text": "Dans d’autres circonstances, les éclairs lumineux prennent plutôt la forme de points brillants éparpillés dans le champ de vision. Le patient éprouve des difficultés pour les dénombrer et les décrire précisément. On parle dans ce cas de « photopsies ». Il s’agit d’un terme générique qui peut orienter vers de nombreuses situations cliniques, allant de l’hypoglycémie symptomatique à la rétinite auto-immune."
  },
  {
    "type": "highlight",
    "text": "D’une manière générale, la survenue d’éclairs lumineux, surtout s’ils sont inhabituels, doit motiver une demande de consultation ophtalmologique rapide, au mieux dans les 48 heures."
  },
  {
    "type": "heading",
    "text": "Que faire en cas de conjonctivite infectieuse et contagieuse ?",
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
			<Title level="h1">Corps flottants, éclairs lumineux : que faire ?</Title>
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
