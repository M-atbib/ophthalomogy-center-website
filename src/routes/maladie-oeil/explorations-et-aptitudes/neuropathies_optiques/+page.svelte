<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ExplorationsPageTwoIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/explorations-et-aptitudes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Neuropathies optiquesl</Title>
	<Title level="h3">Définitions</Title>
	<Text>
		Le nerf optique relie l'oeil au cerveau. C'est lui qui conduit l'influx lumineux, perçu par la
		rétine au fond de l'oeil, jusqu'au cortex cérébral (cortex occipital), qui la "traduit" en
		information visuelle.
	</Text>
	<Text>
		Le nerf optique est composé d’environ 1,2 million d’axones, ou fibres, issus des cellules
		ganglionnaires de la rétine. Lorsqu'il est lésé par un processus pathologique, l’information
		visuelle, bien que perçue par la rétine, n’est plus transmise en quantité ou qualité suffisantes
		au cortex occipital afin d’y être intégrée et comprise.
	</Text>
	<Text>
		Les neuropathies optiques peuvent avoir des causes nombreuses et le pronostic visuel est
		variable.
	</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={ExplorationsPageTwoIlluOne}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Title level="h3">Neuropathies optiques inflammatoires</Title>

	<Text>Classiquement, on distingue :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Les atteintes antérieures, qui peuvent être intra-oculaires (papillites) ou rétro-oculaires
			(névrites à proprement parler).
		</li>
	</ul>
	<Text>
		Les papillites sont rares et d’origine essentiellement inflammatoire ou infectieuse.  En cas de
		papillite, c'est la tête du nerf optique, à l'intérieur de l'oeil, qui est atteinte. Au fond
		d'oeil, l'ophtalmologiste perçoit d'ailleurs un oedème papillaire. La gamme des symptômes
		ressentis par le patient est variable, avec une perte d'acuité visuelle qui dépend de chacun. Il
		n'y a généralement aucune douleur associée.
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Les atteintes postérieures, ou névrites optiques rétro-bulbaires.</li>
	</ul>

	<Text>
		Ce diagnostic est plus fréquent. La NORB est plus fréquente chez les femmes jeunes et survient
		entre 20 et 40 ans. Cette fois, le tableau clinique est plus "riche", avec, notamment :
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Des douleurs rétro-orbitaires, qui sont majorées par la mobilisation du globe oculaire avec le
			regard,
		</li>
		<li>
			Des perturbations du réflexe photomoteur ; on note un déficit pupillaire afférent relatif
			(signe de Marcus Günn),
		</li>
		<li>Une baisse de l'acuité visuelle,</li>
		<li>Des perturbations de la vision des couleurs (dyschromatopsie d'axe rouge/vert)</li>
		<li>Des altérations du champ visuel.</li>
	</ul>
	<Text>
		En cas de NORB, il est essentiel de réaliser un bilan clinique complet, en étroite collaboration
		avec un neurologue. Ce type d'épisode traduit, en effet, souvent une pathologie du système
		nerveux plus générale. La sclérose en plaques (SEP) y est fréquemment associée.
	</Text>

	<Title level="h3">Neuropathies optiques ischémiques</Title>
	<Title level="sub2">Neuropathie Optique Ischémique Antérieure Aigue (NOIAA)</Title>
	<Text>
		Le nerf optique est vascularisé par les artères ciliaires courtes postérieures. La
		physiopathogénie des neuropathies ischémiques demeure mal comprise, mais l’hypothèse la plus
		probable serait une ischémie aigüe de la tête du nerf optique secondaire à une occlusion de ces
		artères.
	</Text>
	<Text>
		Classiquement le patient atteint consulte en urgence, suite à une baisse d’acuité visuelle
		unilatérale, brutale et indolore, souvent découverte le matin au réveil.
	</Text>
	<Text>Le diagnostic est confirmé, à l'examen, par :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Au fond d'oeil : la présence d'un oedème papillaire,</li>
		<li>Des perturbations du réflexe photomoteur,</li>
		<li>Des perturbations du champ visuel (amputation dite "altitudinale")</li>
	</ul>

	<Title level="sub2">NOIAA Non Artéritique</Title>
	<Text>
		C’est la cause la plus fréquente de NOIAA. Elle représente plus de 90% des cas. Elle est
		favorisée par la présence de pathologies cardio-vasculaires, comme le diabète, l'hypertension
		artérielle ou un tabagisme actif. Le Syndrome d'Apnée-Hypopnée Obstructive du Sommeil (SAHOS)
		est fréquemment incriminé.
	</Text>
	<Text>
		Certains semblent prédisposés, avec une anatomie oculaire particulière (yeux hypermétropes, avec
		une papille de petite taille).
	</Text>
	<Text>
		Il n’y a malheureusement pas de traitement curatif, à l’heure actuelle. La récupération visuelle
		n’est généralement pas satisfaisante, à moyen ou long terme. Il est néanmoins essentiel
		d’effectuer un bilan cardiovasculaire complet, afin de rechercher les éventuels facteurs de
		risques et les supprimer, pour éviter qu'un événement similaire ne survienne sur l’œil
		controlatéral.
	</Text>
	<Title level="sub3">NOIAA Artéritique</Title>
	<Text>
		Une NOIAA artéritique est la conséquence d'une maladie inflammatoire qui touche la paroi des
		vaisseaux sanguin : la maladie de Horton (autrement appelée "Artérite Giganto-cellulaire").
		L'inflammation qui touche les vaisseaux entraîne l'occlusion des artères ciliaires postérieures.
		La souffrance du nerf optique, qui n'est plus perfusé, est rapide.
	</Text>

	<TextWithCorners>Il s'agit d'une urgence diagnostique et thérapeutique.</TextWithCorners>

	<Text>
		Un bilan complet, à la recherche d'un syndrome inflammatoire biologique, doit être réalisé sans
		délai. En cas de doute diagnostique, une biopsie de l'artère temporale doit être réalisée. Cette
		artère est, en effet, facilement accessible et fréquemment atteinte par les phénomènes
		inflammatoires.
	</Text>
	<Text>
		La confirmation de la maladie de Horton doit faire débuter un traitement anti-inflammatoires
		(cortisone à fortes doses) le plus rapidement possible.
	</Text>
	<Text>
		Le risque, sinon, est la bilatéralisation de la neuropathie optique, qui peut survenir dans les
		15 jours.
	</Text>
	<Title level="h3">Neuropathies optiques carentielles et toxiques</Title>
	<Title level="sub2">Neuropathies carentielles et alcoolo-tabagiques</Title>
	<Text>
		Ce type d'atteinte survient essentiellement en cas de malabsorption vitaminique (par exemple,
		après une chirurgie bariatrique mal accompagnée d'un point de vue nutritionnel, ou en cas de
		pathologie digestive chronique) ou en cas d'importantes carences d'apports alimentaires. Le
		tabagisme chronique et la consommation d'alcool excessive sont également responsables, par
		toxicité directe sur les cellules nerveuses.
	</Text>
	<Text>
		La baisse d'acuité visuelle s'installe de manière progressive, tout comme les altérations du
		champ visuel.
	</Text>
	<Text>La prise en charge s'articule autour de deux axes :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>La supplémentation vitaminique : essentiellement en vitamines B1, B6 et B12 ;</li>
		<li>
			Le sevrage tabagique complet et définitif et l'arrêt de la consommation de boissons
			alcoolisées.
		</li>
	</ul>

	<Text>
		La récupération visuelle est plutôt aléatoire. Elle dépend surtout du degré d'atteinte au moment
		du diagnostic et du respect des mesures thérapeutiques.
	</Text>
	<Title level="sub2">Neuropathies optiques médicamenteuses</Title>
	<Text>
		Il est souvent difficile d’établir un lien direct entre la survenue d'une neuropathie optique et
		une toxicité médicamenteuse. Malgré tout, certains traitements sont formellement identifiés
		comme à risque.
	</Text>
	<Text>Les molécules suivantes sont fréquemment incriminées :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Éthambutol,</li>
		<li>Isoniazide,</li>
		<li>Chloramphénicol,</li>
		<li>Amiodarone,</li>
		<li>Vincristine,</li>
		<li>Sildénafil</li>
	</ul>
	<Title level="h3">Neuropathies optiques héréditaires</Title>
	<Text>
		Les neuropathies optiques héréditaires sont des affections dégénératives, qui favorisent la
		destruction des cellules ganglionnaires de la rétine et de leurs axones, qui composent le nerf
		optique. Elles sont rares et concernent environ 1 naissance sur 10 000.
	</Text>
	<Text>
		Ce sont des maladies génétiques. Certaines sont dites "syndromiques" ; c'est-à-dire qu'elles
		sont associées à des manifestations cliniques extra-oculaires. D’autres sont isolés et ne
		touchent que l'appareil visuel.
	</Text>
	<Title level="sub2">Atrophie Optique Dominante (Maladie de KJER)</Title>
	<Text>
		Il s'agit d'une neuropathie bilatérale et symétrique. Elle est diagnostiquée dans l'enfance ou à
		l'adolescence. L'examen ophtalmologique est motivé par une vision médiocre, peu améliorée par le
		port de lunettes.
	</Text>
	<Text>
		Au fond d'oeil, l'ophtalmologiste notera un signe typique : une pâleur bilatérale des papilles
		optiques, sur leur versant temporal. Un examen de la vision des couleurs sera effectué ; il
		montrera une dyschromatopsie d'axe bleu/jaune, tout à fait caractéristique de la maladie.
	</Text>
	<Text>
		L'atrophie optique dominante est peu évolutive. Un individu atteint ne perdra pas complètement
		la vue.
	</Text>
	<Text>
		Les progrès de la génétique médicale ont permis d'identifier le gène en cause : le gène OPA1. La
		transmission se fait sur un mode "autosomique dominant". Il suffit que l'un des parents soit
		atteint pour que le risque de transmission existe, quel que soit le sexe de l'enfant.
	</Text>
	<Title level="sub2">Neuropathie Optique Héréditaire de Leber</Title>
	<Text>
		La baisse d'acuité visuelle est, dans cas, brutale. Elle survient d'abord sur un oeil, puis
		atteindra l'autre, après un délai de quelques semaines (typiquement 6 à 8 semaines). L'âge de
		survenue est variable.
	</Text>
	<Text>Le pronostic visuel est plutôt sombre, avec une récupération souvent médiocre.</Text>
	<Text>Des atteintes extra-oculaires sont possibles, notamment cardiaques.</Text>
	<Text>
		La mutation est transmise par la mère, via l'ADN mitochondrial. Hommes et femmes peuvent être
		atteints, mais les hommes ne transmettent pas la maladie.
	</Text>
	<Text>
		Des études thérapeutiques récentes orientent la prise en charge vers la prescription de
		l'idébénone. Ce traitement est réservé aux atteintes récentes. Il doit, bien sûr, s'associer à
		un sevrage tabagique complet et à l'arrêt de l'alcool, afin d'éliminer toute neurotoxicité
		surajoutée à la maladie.
	</Text>
</Section>
