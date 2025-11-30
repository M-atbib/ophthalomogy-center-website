<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import {
		RetineMedicalPageTwoIlluOne,
		RetineMedicalPageTwoIlluTwo,
		RetineMedicalPageTwoIlluThree
	} from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-medicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Diabète et rétine</Title>
	</div>

	<Title level="h2">Un véritable enjeu de santé publique</Title>
	<Text class="mt-4">
		L’épidémie de diabète est extrêmement répandue en France et ne cesse croître.
	</Text>
	<TextWithCorners>
		En 2019, on estime que plus de 3,3 millions de personnes sont traitées pour un diabète, soit
		environ 5% de la population.
	</TextWithCorners>
	<Text class="mt-4">
		Le diabète est un ensemble de maladies dont le point commun est une élévation chronique de la
		glycémie (quantité de sucre dans le sang).
	</Text>
	<Text class="mt-4">Schématiquement, on distingue :.</Text>
	<Text class="mt-4">
		L’épidémie de diabète est extrêmement répandue en France et ne cesse croître.
	</Text>
	<ul>
		<li>
			Le diabète de type 1, qui représente environ 10% des cas diagnostiqués. Il correspond  un
			déficit complet de la sécrétion d’insuline, l’hormone permettant de réguler la glycémie
		</li>
		<li>
			Le diabète de type 2, qui représente environ 90% des cas. Il est lié à un déficit de la
			sécrétion d’insuline, mais aussi à une insulino-résistance. Les cellules sur lesquelles agit
			normalement l’insuline y répondent moins bien.
		</li>
	</ul>
	<Text class="mt-4">
		Le diabète dégrade le fonctionnement de la plupart des organes du corps humain, souvent à bas
		bruit, avec des conséquences très sévères. L’œil n’est pas épargné, plus précisément la rétine.
	</Text>

	<TextWithCorners>
		La rétinopathie diabétique est l’une des principales causes de cécité dans le monde. On estime
		qu’en France, chaque année, 1000 personnes deviennent aveugles à cause du diabète.
	</TextWithCorners>

	<Title class="mt-10" level="h2">Rétinopathie et maculopathie diabétiques</Title>
	<Text class="mt-4">
		Le diabète a des conséquences sur les vaisseaux sanguins et tout particulièrement sur les plus
		petits d’entre eux : les capillaires.  On parle de micro-angiopathie rétinienne. Certains
		capillaires se dilatent, d’autres se bouchent, aboutissant à une mauvaise perfusion sanguine. La
		rétine n’est alors plus correctement oxygénée.
	</Text>
	<Text class="mt-4">
		L’hypo-oxygénation de la rétine, ou ischémie rétinienne, est responsable des complications
		oculaires. Les cellules rétiniennes cherchent des moyens de retrouver une perfusion suffisante
		pour garantir leurs besoins métaboliques. Elles sécrètent alors du VEGF (Vascular Endothélial
		Growth Factor, « Facteur de croissance de l’endothélium vasculaire » en français) qui stimule la
		fabrication de nouveaux vaisseaux sanguins.
	</Text>
	<Text class="mt-4">
		Problème : ces néo-vaisseaux sont anormaux, aussi bien d’un point de vue anatomique que
		fonctionnel. Ils sont fragiles, peuvent se rompre et saigner. Ils se développent aussi de
		manière anarchique, en profondeur dans la rétine ou en avant de celle-ci.
	</Text>

	<figure class="mx-auto mt-6 w-full max-w-lg overflow-hidden rounded-md">
		<img
			src={RetineMedicalPageTwoIlluOne}
			alt="Illustration d'une rétinopathie diabétique"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>
	<Text class="mt-4">
		L’examen attentif du fond d’œil est la pierre angulaire du diagnostic. Votre ophtalmologiste
		pourra dépister certains signes caractéristiques comme des micro-anévrysmes rétiniens,
		des hémorragies rétiniennes, des nodules cotonneux ou encore la présence de néo-vaisseaux
		anormaux et d’exsudats secs.
	</Text>
	<Text class="mt-4">
		Ces signes sont présents aussi bien sur la rétine périphérique qu’au niveau de la macula, le
		centre de la vision. Des examens complémentaires peuvent être nécessaires, en particulier
		l’angiographie fluorescéinique ; celle-ci permet d’apprécier le degré d’ischémie rétinienne, en
		étudiant la circulation sanguine à l’intérieur des vaisseaux rétiniens.
	</Text>

	<Title class="mt-10" level="h2">Complications</Title>
	<div class="mt-4">
		<Title level="sub2">Hémorragie intra-vitréenne</Title>
		<Text class="mt-2">
			Lorsque les néo-vaisseaux rétiniens se rompent, du sang frais se déverse à l’intérieur de la
			cavité vitréenne. La vision baisse de manière brutale et souvent profonde. La plupart des
			patients décrivent d’abord des corps flottants très nombreux, qui évoquent une « pluie de
			suie ». Ce tableau n’est pas douloureux. L’hémorragie intra-vitréenne peut masquer un
			décollement de rétine et une échographie oculaire sera parfois nécessaire pour en avoir la
			certitude.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Décollement de rétine</Title>
		<Text class="mt-2">
			Les néo-vaisseaux rétiniens peuvent se développer en avant de la rétine. Ils prennent alors
			pour support la hyaloïde postérieure, surtout si celle-ci n’est pas encore décollée.
		</Text>
		<Text class="mt-2">
			En cas de traumatisme, ou lorsque le décollement postérieur du vitré se produit, une traction
			excessive peut avoir lieu sur la membrane des vaisseaux. Si elle ne se rompt pas, elle peut
			tirer sur la rétine et la décoller. Un saignement associé est extrêmement fréquent. La vision
			baisse brutalement et profondément. L’œil reste blanc et indolore. Une consultation
			ophtalmologique urgent pour organiser une prise en charge chirurgicale en urgence.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Glaucome néo-vasculaire</Title>
		<Text class="mt-2">
			C’est une complication redoutable de la rétinopathie diabétique. Le VEGF, fabriqué par les
			cellules rétiniennes ischémiques, peut circuler à l’intérieur de l’œil. Avec le temps, il se
			fixe sur les récepteurs de l’iris et entraîner l’apparition de néo-vaisseaux anormaux sur
			celui-ci. Ce phénomène est appelé la « rubéose irienne ». Lorsqu’elle se produit, elle peut
			abimer l’angle irido-cornéen et le trabéculum. La pression intra-oculaire monte à des niveaux
			souvent dramatiques. La cornée peut perdre sa transparence et le nerf optique s’abime
			rapidement. Le risque de cécité est, dans ce cas, extrêmement important.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Œdème maculaire diabétique</Title>
		<Text class="mt-2">
			C’est une complication spécifiquement maculaire. Son mécanisme précis est encore débattu, mais
			c’est une cause fréquente de baisse de la vision importante du patient diabétique. La
			maculopathie oedémateuse se caractérise par la présence de liquide intra-rétinien, qui
			désorganise les cellules. Le liquide contient également des molécules toxiques pour les
			photorécepteurs, dont le nombre et le fonctionnement se dégradent.
		</Text>
	</div>

	<Title class="mt-10" level="h2">Arsenal thérapeutique de l’ophtalmologiste</Title>
	<div class="mt-4">
		<Title level="sub2">Photocoagulation rétinienne au laser Argon</Title>
		<Text class="mt-2">
			Ce geste est effectué au cabinet d’Ophtalmologie est n’est pas, à proprement parler, une
			chirurgie oculaire. C’est malgré tout un acte délicat, qui nécessite toute la concentration du
			patient et l’habileté de son médecin. Le laser délivre une énergie précisément localisée sur
			les zones rétiniennes en manque d’oxygène. Ceci favorise leur oxygénation par la choroïde,
			système vasculaire sous-rétinien.  Malheureusement, les cellules rétiniennes photocoagulées
			sont détruites et cessent de fonctionner. Il faut donc toujours limiter au maximum le
			traitement aux zones en souffrance.
		</Text>
		<figure class="mx-auto mt-4 w-full max-w-2xl overflow-hidden rounded-md">
			<img
				src={RetineMedicalPageTwoIlluTwo}
				alt="Laser argon pour la rétinopathie diabétique"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
		<Text class="mt-2">
			Le laser Argon peut également être utilisé pour traiter un œdème maculaire. Les indications en
			sont très précises, pour des raisons évidentes de sécurité.
		</Text>
	</div>
	<div class="mt-8">
		<Title level="sub2">Injections intra-vitréennes</Title>
		<Text class="mt-2">
			Deux familles de molécules peuvent être utilisées, à ce jour, dans le cadre du traitement des
			complications oculaires du diabète : les anti-VEGF et les corticoïdes.
		</Text>
		<figure class="mx-auto mt-4 w-full max-w-2xl overflow-hidden rounded-md">
			<img
				src={RetineMedicalPageTwoIlluThree}
				alt="Préparation d'une injection intra-vitréenne"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
		<Text class="mt-2">
			La principale indication retenue pour débuter des injections intra-vitréennes est l’œdème
			maculaire du diabétique impactant ou menaçant la fonction visuelle. Le schéma d’injection
			dépendra de chaque patient, mais il s’agit, dans la plupart des cas, d’un traitement long,
			avec des piqûres répétées.
		</Text>
	</div>
	<div class="mt-8">
		<Title level="sub2">Chirurgie vitréo-rétinienne</Title>
		<Text class="mt-2">
			En cas d'hémorragie intra-vitréenne persistante, de rétinopathie diabétique non contrôlée de
			décollement de rétine tractionnel ou encore d'oedème maculaire persistant, un chirurgie de
			rétine peut être nécessaire. Cette chirurgie est souvent complexe dans le cas du diabète et
			doit associer vitrectomie (ablation du vitré), dissection des adhérences, pelage de membranes,
			photocoagulation laser, ...
		</Text>
	</div>

	<Title class="mt-10" level="h2">Dépistage et prévention</Title>
	<Text class="mt-4">
		Le dépistage systématique est le principal facteur protecteur de cécité chez les patients
		diabétiques.
	</Text>
	<Text class="mt-4">
		Au [Nom de Clinique], nous mettons en place la réalisation d’un fond d’œil annuel pour tous les
		patients diabétiques.
	</Text>
	<TextWithCorners class="mt-6">
		La sensation d’avoir une bonne vision ne doit absolument pas vous rassurer sur l’absence de
		complications oculaires du diabète.
	</TextWithCorners>
	<Text class="mt-4">
		La maladie doit être dépistée précocément pour améliorer le pronostic visuel final.
	</Text>

	<Text class="mt-4">
		Le diabète est une pathologie chronique dont le suivi est pluridisciplinaire. Votre médecin
		traitant et votre diabétologue seront des interlocuteurs privilégiés de l’ophtalmologiste. Un
		bon contrôle glycémique et une tension artérielle équilibrée sont absolument nécessaires pour
		prévenir la survenue de complications rétiniennes.
	</Text>
</Section>
