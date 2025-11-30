<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "L’orbite osseuse est un véritable cadre formé par les différents os du massif facial. Il contient, en plus de l’œil, les muscles oculo-moteurs, des vaisseaux sanguins, des nerfs et du tissu graisseux et la glande lacrymale principale.",
  "Malheureusement, ce système de protection n’est pas infaillible et il arrive fréquemment que le globe oculaire soit touché en cas de traumatisme atteignant le visage."
];
const blocks = [
  {
    "type": "paragraph",
    "text": "Les conséquences peuvent en être dramatiques, selon la nature du choc et de l’objet en cause. Il faut prendre rendez vous en urgence."
  },
  {
    "type": "heading",
    "text": "Traumatismes à globe fermé",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "On parle de traumatisme à globe fermé lorsque le traumatisme n’occasionne pas d’ouverture du globe, par perforation ou éclatement."
  },
  {
    "type": "heading",
    "text": "Contusions oculaires",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ce type d’accident peut survenir en milieu professionnel, ou dans le cadre des loisirs. Les sports de raquette sont des pourvoyeurs particulièrement fréquents de ce type de situation : badminton, squash… En effet, plus l’objet qui entre en contact avec le globe est petit, plus les chances qu’il soit amorti ou qu’il rebondisse sur le cadre orbitaire (arcade sourcilière, pommette) sont minces."
  },
  {
    "type": "paragraph",
    "text": "Le choc avec l’œil va induire une augmentation brutale et transitoire de la pression intra-oculaire, par compression. Par ailleurs, il peut se produire une déformation importante, elle aussi transitoire, du globe oculaire. Ce phénomène peut avoir des conséquences délétères sur les tissus intra-oculaires."
  },
  {
    "type": "heading",
    "text": "Conséquences potentielles sur la cornée et la chambre antérieure de l’œil",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Rupture traumatique de la membrane de Descemet. Lorsque la cornée est soumise à des déformations importantes, ses couches les plus fines sont les plus vulnérables. La membrane de Descemet est l’une des strates les plus profondes de la cornée, mais aussi la plus fine : au maximum, elle mesure 15 microns, soit quelques centièmes de millimètres. Lorsqu’elle se rompt, des dommages se produisent aussi sur l’endothélium, à son voisinage direct. L’humeur aqueuse, liquide intra-oculaire, va alors pouvoir pénétrer dans l’épaisseur de la cornée (son stroma) et y produire un œdème. La perte de transparence induite est responsable d’une baisse de la vision et de photophobie (gène majeure à la lumière). La cicatrisation est possible, mais parfois incomplète. On peut voir, à distance du traumatisme, persister des cicatrices cornéennes, véritables vergetures post-contusives. A titre d’exemple, un traumatisme obstétrical par forceps peut entraîner ce type de lésion anatomique ; on les appelle les stries de Haab. Chez le patient atteint de kératocône, ce mécanisme est à l’origine de l’hydrops cornéen, possible « décompensation aigüe » du kératocône."
  },
  {
    "type": "paragraph",
    "text": "Hyphéma. L’hyphéma correspond à la survenue d’un saignement dans la chambre antérieure de l’œil, c’est-à-dire entre la cornée et l’iris. Ce saignement est souvent visible à l’œil nu. Il peut être d’importance viariable et la remplit parfois complètement ; on parle alors d’hyphéma total. L’hyphéma peut se compliquer d’une élévation de la pression intra-oculaire. Des traitements sont nécessaires pour la contrôler, le cas échéant. Le plus souvent, le sang va régresser spontanément, en quelques jours ou semaines. Si l’hyphéma est très important ou si sa régression est trop lente, une intervention chirurgicale peut être nécessaire pour en limiter les conséquences, potentiellement sévères."
  },
  {
    "type": "heading",
    "text": "Conséquences potentielles sur l’iris et l’angle irido-cornéen",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Iridodialyse : il s’agit d’une désinsertion de la base de l’iris, plus ou moins étendue."
  },
  {
    "type": "paragraph",
    "text": "Rupture du sphincter de l’iris : la pupille apparaît alors déformée et n’est plus symétrique à l’autre œil. Si le fonctionnement du sphincter est lésé, le réflexe photomoteur est perturbé. Il peut en résulter des troubles de la vision, en fonction des conditions de luminosité."
  },
  {
    "type": "paragraph",
    "text": "Cyclodialyse : c’est une situation délicate. Une partie du corps ciliaire, qui produit l’humeur aqueuse, est décollée. Les liquides intra-oculaires peuvent alors s’engouffrer dans des espaces habituellement virtuels. Un décollement de la rétine et de la choroïde peuvent survenir, de même qu’une baisse importante de la pression intra-oculaire"
  },
  {
    "type": "paragraph",
    "text": "Récession angulaire : il s’agit d’une déformation de l’angle irido-cornéen, lieu de résorption de l’humeur aqueuse. Le trabéculum, qui en est le principal filtre, peut être endommagé par cette déformation et son fonctionnement perturbé, parfois très à distance de l’accident."
  },
  {
    "type": "heading",
    "text": "Conséquences potentielles sur le cristallin",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Cataracte contusive : lors d’une contusion oculaire, l’iris peut « tatouer » la face antérieure du cristallin, en y laissant la marque de ses pigments : c’est «l’anneau de Vossius ». Mais c’est surtout la capsule du cristallin qui subit des dommages et qui, par une perte d’étanchéité, va aboutir à la formation d’une cataracte, de forme typiquement sous-capsulaire postérieure. Cette forme de cataracte est très gênante et occasionne une baisse de la vision souvent rapide et marquée. De même, la photophobie (gène à la lumière) est importante."
  },
  {
    "type": "paragraph",
    "text": "Subluxation du cristallin : la zonule est un ligament qui maintient le cristallin attaché à la paroi du globe oculaire, sur 360°. Lorsqu’elle est partiellement lésée par le traumatisme, le cristallin devient beaucoup plus mobile (phacodonésis) et son orientation est souvent modifiée."
  },
  {
    "type": "paragraph",
    "text": "Luxation du cristallin : cette fois, la rupture de la zonule est complète et le cristallin tombe vers l’avant ou vers l’arrière. Les complications potentielles sont extrêmement sévères."
  },
  {
    "type": "heading",
    "text": "Conséquences potentielles sur la rétine",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La rétine tapisse le fond de l’œil et permet de traiter l’information lumineuse qui pénètre dans l’œil. Les complications rétiniennes des traumatismes sont plus fréquentes et souvent plus sévères chez les grands myopes. Ils peuvent évidemment survenir chez tout patient, en fonction de la nature et de la violence du choc."
  },
  {
    "type": "paragraph",
    "text": "Maculopathie traumatique aigüe (ou « œdème de Berlin »): il s’agit d’un blanchiment transitoire de la partie centrale de la rétine. Il traduit l’atteinte des photorécepteurs, surtout de leurs segments externes. La vision est souvent effondrée, avec un scotome (une tache) perçue à la place du point de fixation. Cette lésion est de bon pronostic, avec un taux de récupération élevé."
  },
  {
    "type": "paragraph",
    "text": "Rupture de la membrane de Bruch : la membrane de Bruch est une fine couche de tissu située entre la rétine et la choroïde sous-jacente. La déformation du globe oculaire, lors du traumatisme, peut générer des contraintes mécaniques telles que cette couche se rompt. La vision est, là encore, effondrée. Il est possible que des complications surviennent, même longtemps après l’accident, à ce niveau, notamment la survenue de néo-vaisseaux choroïdiens."
  },
  {
    "type": "paragraph",
    "text": "Trou maculaire post-traumatique : leur aspect ne diffère pas des trous maculaires idiopathiques et les traumatismes représentent environ 10% des causes de survenue de ce type de lésion"
  },
  {
    "type": "paragraph",
    "text": "Décollement de rétine, hémorragie intra-vitréenne : le traumatisme est une cause extrêmement fréquente de survenue de ces pathologies, en particulier chez les sujets de moins de 40 ans."
  },
  {
    "type": "heading",
    "text": "Lacérations lamellaires",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Il s’agit de plaies, causées par un objet tranchant qui entre en contact avec le globe oculaire. Tous les tissus de la paroi du globe peuvent être atteints."
  },
  {
    "type": "highlight",
    "text": "Le point commun des lacérations lamellaires, c'est que l'étanchéité du globe est préservée."
  },
  {
    "type": "paragraph",
    "text": "Les plaies ne concernent pas toute l’épaisseur de la paroi ; le globe n’est donc pas ouvert à proprement parler."
  },
  {
    "type": "heading",
    "text": "Traumatismes à globe ouvert",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Dans ce cas, on parle de traumatisme « de pleine épaisseur ». Que ce soit la cornée, la sclère ou les deux à la fois, l’ouverture est profonde et fait communiquer les milieux intra-oculaires avec l’air environnant."
  },
  {
    "type": "paragraph",
    "text": "Deux types de mécanismes sont possibles :"
  },
  {
    "type": "paragraph",
    "text": "Rupture du globe, par éclatement. En cas de traumatisme violent, comme dans le cadre des contusions, la pression intra-oculaire va monter brutalement. Parfois, le niveau est tel que la paroi du globe finit par céder, en particulier au niveau de zones de fragilité, comme d’anciennes cicatrices. La rupture du globe survient à distance du point d’impact entre l’œil et l’objet contondant."
  },
  {
    "type": "paragraph",
    "text": "Lacération transfixiante. Cette fois, la rupture se situe au niveau du point d’impact. L’objet, pointu ou tranchant, s’enfonce dans la paroi du globe, jusqu’à l’ouvrir. Il se produit souvent des lésions associées des structures intra-oculaires, comme le cristallin ou l’iris."
  },
  {
    "type": "highlight",
    "text": "Il y a évidemment urgence !"
  },
  {
    "type": "paragraph",
    "text": "Ces plaies doivent être explorées chirurgicalement et suturées avec un soin tout particulier. Il est impératif de restaurer l’étanchéité du globe oculaire. Le pronostic pour la vision est variable, selon l’étendue des lésions, le délabrement éventuel des structures intra-oculaires et le délai de prise en charge. Les complications sont évidemment nombreuses, au premier rang desquels l’infection."
  },
  {
    "type": "heading",
    "text": "Herpès oculaire",
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
			<Title level="h1">Traumatismes oculaires</Title>
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
