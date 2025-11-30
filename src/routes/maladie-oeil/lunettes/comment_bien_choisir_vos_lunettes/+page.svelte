<script lang="ts">
import { Section, Title, Text, Button, TextWithCorners } from '$lib';
import { ArrowLeft } from '@lucide/svelte';

const heroImage = null;
const introParagraphs = [
  "Votre ophtalmologiste vient de vous prescrire une paire de lunettes afin de corriger votre amétropie ? La prochaine étape est donc de vous rendre chez votre opticien. Voici différents éléments qui vous permettront de comprendre la prescription et vous donneront des pistes pour guider le choix de votre équipement optique.",
  "Ils ont longtemps été les plus répandus, mais leur usage est désormais plus confidentiel. Aujourd'hui, Ils sont essentiellement recommandés pour certains cas particuliers, comme les fortes amétropies."
];
const blocks = [
  {
    "type": "heading",
    "text": "Quel matériau choisir pour les verres de lunettes ?",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Verres minéraux (à base de verre naturel)",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Propriétés",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Indices de réfraction élevés (pour une même correction, plus l’indice de réfraction est élevé, plus le verre sera fin) ;"
  },
  {
    "type": "paragraph",
    "text": "Surface dure, qui induit une bonne résistance aux rayures mais rend le matériau fragile, avec un risque de casse ;"
  },
  {
    "type": "paragraph",
    "text": "Poids supérieur aux verres organiques."
  },
  {
    "type": "heading",
    "text": "Verres organiques (à base de matériaux synthétiques)",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "C’est actuellement la matière la plus utilisée."
  },
  {
    "type": "heading",
    "text": "Propriétés",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Indices de réfraction moins élevés que les verres minéraux ;"
  },
  {
    "type": "paragraph",
    "text": "Grande résistance aux chocs (ils sont quasiment incassables) ;"
  },
  {
    "type": "paragraph",
    "text": "Surface plus tendre, qui entraîne une plus grande susceptibilité aux rayures. Cela peut être amélioré avec des traitements spécifiques ;"
  },
  {
    "type": "paragraph",
    "text": "Plus légers que les verres minéraux ;"
  },
  {
    "type": "paragraph",
    "text": "Compatibles avec l’ensemble des montures."
  },
  {
    "type": "heading",
    "text": "Verres en polycarbonate",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "C’est une sous-catégorie de verres organiques. Ils sont utilisés pour des cas particuliers, essentiellement pour des activités sportives."
  },
  {
    "type": "heading",
    "text": "Propriétés",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ultra-résistants, ils sont incassables ;"
  },
  {
    "type": "paragraph",
    "text": "Grande susceptibilité aux rayures ;"
  },
  {
    "type": "paragraph",
    "text": "Indice de réfraction unique (ils sont déconseillés en cas de forte amétropie, défaut d’amincissement)."
  },
  {
    "type": "heading",
    "text": "Quels sont les différents types de verres correcteurs ?",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Verres unifocaux (ou \"simple foyer\")",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les verres unifocaux possèdent la même puissance de correction sur l’ensemble de leur surface. Ils permettent la vision nette à une distance précise :"
  },
  {
    "type": "paragraph",
    "text": "vision de loin le plus souvent,"
  },
  {
    "type": "paragraph",
    "text": "vision intermédiaire,"
  },
  {
    "type": "paragraph",
    "text": "vision de près."
  },
  {
    "type": "paragraph",
    "text": "Ils peuvent corriger tout type d'amétropie : hypermétropie, myopie et astigmatisme."
  },
  {
    "type": "paragraph",
    "text": "Ces verres sont :"
  },
  {
    "type": "paragraph",
    "text": "Sphériques, pour corriger la myopie (concâves), l'hypermétropie (convexes) ou la presbytie."
  },
  {
    "type": "paragraph",
    "text": "Toriques, pour corriger un astigmatisme. Il y a, dans ce cas, une différence de puissance entre deux rayons de courbures perpendiculaires entre eux."
  },
  {
    "type": "paragraph",
    "text": "Asphériques, pour les corrections très importantes. Ce procédé permet d'obtenir des verres à la fois plus fins et plus légers. La qualité de correction en est améliorée."
  },
  {
    "type": "paragraph",
    "text": "Le port de lunettes \"loupes\", que l'on trouve en pharmacie ou dans les supermarchés, est possible pour soulager les difficultés en vision de près, à l'âge de la presbytie. Malgré tout, ces lunettes ne sont pas parfaitement adaptées à votre amétropie, à votre écart inter-pupillaire et génèrent, à long terme, un inconfort ou la survenue de maux de tête."
  },
  {
    "type": "highlight",
    "text": "Mieux vaut donc, si le port se prolonge, consulter votre ophtalmologiste pour obtenir une prescription adaptée."
  },
  {
    "type": "heading",
    "text": "Verres bifocaux (verres à double-foyer)",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ces verres sont de moins en moins utilisés. Ils permettent une vision de loin et une vision de près, grâce à deux zones de correction séparées dans le verre. Il n’y a, par contre, pas de vision intermédiaire et ils sont réputés moins esthétiques que les verres progressifs."
  },
  {
    "type": "heading",
    "text": "Verres multifocaux",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ils sont capables de corriger plusieurs anomalies réfractives et permettent, ainsi, une vision nette à différentes distances. Cela est utile pour les patients presbytes ou les patients opérés de cataracte."
  },
  {
    "type": "heading",
    "text": "Verres Progressifs",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Un verre progressif se compose de 4 zones distinctes :"
  },
  {
    "type": "paragraph",
    "text": "La partie supérieure correspond à la vision de loin."
  },
  {
    "type": "paragraph",
    "text": "La partie inférieure correspond à la vision de près (à 33 cm le plus souvent)."
  },
  {
    "type": "paragraph",
    "text": "La partie centrale correspond à la vision \"mi-distance\" ; c’est une zone de transition, avec plusieurs corrections successives permettant le passage progressif (d’où le nom) de la vision longue distance à la vision de près."
  },
  {
    "type": "paragraph",
    "text": "Des zones d’aberrations optiques sur les bords, de part et d’autre du couloir de dégressivité du verre."
  },
  {
    "type": "highlight",
    "text": "Les verres progressifs sont plutôt déconseillés chez les patients atteints d’une pathologie sévère de la vision centrale (comme une DMLA avancée) ou pour les patients ayant d'importantes difficultés de convergence binoculaire. Pour ce type de cas, mieux vaut, en règle générale, privilégier le port de deux paires de lunettes (l'une pour la vision de loin, l'autre pour la vision de près)."
  },
  {
    "type": "heading",
    "text": "Verres Dégressifs ou Mi-Distance",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Ce sont des verres multifocaux, qui corrigent la vision de près et offrant une profondeur de champ suffisante pour garantir le confort en vision intermédiaire. Ils ne corrigent pas la vision longue distance."
  },
  {
    "type": "paragraph",
    "text": "Ils constituent un choix intéressant pour le jeune presbyte, ou pour certaines activités, comme le travail sur ordinateur."
  },
  {
    "type": "paragraph",
    "text": "Si votre choix s'oriente vers ce type de correction, votre ophtalmologiste et votre opticien auront besoin d'informations précisés sur vos activités : la distance entre vos yeux et votre ordinateur par exemple."
  },
  {
    "type": "heading",
    "text": "Quels sont les traitements et filtres possibles pour les verres de lunettes ?",
    "level": "h2"
  },
  {
    "type": "heading",
    "text": "Traitement anti-rayures (traitement durci)",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "La plupart des verres vendus en France sont des verres organiques, qui sont sensibles aux rayures. Elles sont inesthétiques et altèrent la qualité visuelle. Il est donc nécessaire de protéger le verre, par des traitements de surface adéquats. La technique la plus courante consiste en l'application d'une résine à la surface du verre ; on parle de \"Hard-coating\". La couche de résine est extrêmement fine. Elle est durcie par cuisson ou par traitement ultra-violet, ce qui rend le verre beaucoup moins vulnérable aux altérations de sa surface."
  },
  {
    "type": "heading",
    "text": "Traitement anti-reflets",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les filtres anti-reflets sont des traitements de surface compatibles avec tous les verres (qu'ils soient blancs, teintés, polarisés, photochromiques…). Ils permettent une vision plus précise et plus nette, grâce à une amélioration de la transparence du verre et à une diminution des reflets lumineux."
  },
  {
    "type": "paragraph",
    "text": "D’un point de vue esthétique, ils limitent l'effet \"miroir\", très visible sur les photographies par exemple."
  },
  {
    "type": "paragraph",
    "text": "Par contre, ces traitements sont sensibles à l'élévation de la température et il faut éviter de laisser vos lunettes près d’une source de chaleur importante."
  },
  {
    "type": "heading",
    "text": "Filtres anti-lumière bleue",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Il n'existe, à l'heure actuelle, aucune preuve scientifique robuste concernant l'intérêt de ce type de filtre dans la protection contre la survenue de pathologies rétiniennes."
  },
  {
    "type": "paragraph",
    "text": "L'exposition excessive à la lumière bleue des écrans LED semble impliquée dans la perturbation du rythme circadien et donc, dans la génèse de troubles du sommeil, en particulier chez l'enfant et l'adolescent."
  },
  {
    "type": "paragraph",
    "text": "Par ailleurs, les dispositifs de filtrage de la lumière bleue ne peuvent, à l'heure actuelle, et d'après les données récentes de l'ANSES, pas être considérés comme des équipements de protection individuelle, par rapport à des verres ophtalmiques traités."
  },
  {
    "type": "highlight",
    "text": "Pour plus d'informations, nous vous invitons à lire [Expertise et Recommandations de l’ANSES](https://www.anses.fr/fr/system/files/PRES2019DPA01.pdf) (Agence Nationale de SÉcurité Sanitaire de l’alimentation, de l’environnement et du travail)."
  },
  {
    "type": "heading",
    "text": "Verres solaires",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les verres solaires bénéficient d'un traitement qui permet de limiter l’éblouissement et de filtrer les rayons ultraviolets (UV) du soleil, qui ont une toxicité rétinienne démontrée. Ce traitement s'ajoute, si nécessaire, à la correction optique du verre."
  },
  {
    "type": "paragraph",
    "text": "Il existe cinq catégories de protection solaire :"
  },
  {
    "type": "paragraph",
    "text": "Catégorie 0 : ne protège pas des UV solaires."
  },
  {
    "type": "paragraph",
    "text": "Réservée au confort et à l'esthétique."
  },
  {
    "type": "paragraph",
    "text": "Catégorie 1 : filtre 90% des rayons UV et 20-60% de la lumière visible."
  },
  {
    "type": "paragraph",
    "text": "Ces verres sont adaptés à une utilisation quotidienne, lors d’une luminosité solaire atténuée (hiver, nuageux), mais déconseillés pour de fortes expositions."
  },
  {
    "type": "paragraph",
    "text": "Catégorie 2 : filtre >95% des UV et 60-80% de la lumière visible."
  },
  {
    "type": "paragraph",
    "text": "Ces verres sont adaptés à une luminosité solaire moyenne."
  },
  {
    "type": "paragraph",
    "text": "Catégorie 3 : filtre > 98% des UV et 80-90 % de la lumière visible."
  },
  {
    "type": "paragraph",
    "text": "Ces verres sont adaptés à une forte luminosité solaire (été, mer, montagne)."
  },
  {
    "type": "paragraph",
    "text": "Catégorie 4 : filtre > 99% des UV et 90-95% de la lumière visible."
  },
  {
    "type": "paragraph",
    "text": "Ces verres sont adaptés à une luminosité solaire exceptionnelle (glaciers en été, alpinisme). Par contre, la conduite automobile est contre-indiquée avec ce type de verre."
  },
  {
    "type": "heading",
    "text": "Verres photochromiques",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Un verre photochromique est un verre correcteur capable de s’assombrir lorsqu’il est exposé à des rayonnements ultraviolets (UV). Il s’adapte à la forte luminosité en se teintant et revient à sa teinte d’origine lorsque l’exposition cesse."
  },
  {
    "type": "paragraph",
    "text": "Ce type de verre est appréciés des patients souffrant de photosensibilité et sujets à l’éblouissement lors de l’exposition solaire."
  },
  {
    "type": "heading",
    "text": "Verres polarisés",
    "level": "h2"
  },
  {
    "type": "paragraph",
    "text": "Les verres polarisés sont des verres solaires de haute performance, permettant une optimisation de la vision. Ils limitent les phénomènes d’éblouissement induits par la réverbération de la lumière sur des surfaces planes, comme des étendues d’eau ou de neige. Ils sont utiles également lors de la conduite automobile avec un soleil de face, ou encore lorsque la chaussée est humide. Ils sont surtout recommandés aux sportifs (golf, pêche, randonnée, ski…) ou pour les conducteurs réguliers. De manière générale, ils procurent un confort visuel indéniable pour tout type d'activité."
  },
  {
    "type": "heading",
    "text": "Comment bien entretenir vos lunettes ?",
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
			<Title level="h1">Comment bien choisir vos lunettes ?</Title>
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
