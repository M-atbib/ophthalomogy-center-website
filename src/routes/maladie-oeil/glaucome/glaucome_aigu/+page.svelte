<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		GlaucomePageTwoIlluOne,
		GlaucomePageTwoIlluTwo,
		GlaucomePageTwoIlluThree
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/glaucome" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Glaucome aigu</Title>
	<Text>
		Le glaucome aigü par fermeture de l’angle fait partie des urgences ophtalmologiques les plus
		impérieuses. Il correspond à une élévation brutale et très importante de la pression
		intra-oculaire qui peut conduire, si rien n’est fait, à des dommages parfois irréversibles pour
		l’œil et la fonction visuelle.
	</Text>

	<Text>Le terme « glaucome aigü » est, dans la réalité, inexact.</Text>
	<Text>
		Il convient plutôt de parler de « crise aigüe de fermeture de l’angle irido-cornéen ».
	</Text>
	<Title level="h3">Signes cliniques</Title>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			La douleur est le symptôme le plus fréquemment décrit par les patients atteints. Elle est
			parfois difficile à localiser et peut prendre la forme de maux tête latéralisés. Elle
			s’accompagne volontiers de vomissements. La douleur est dûe à l’élévation extrême de la
			pression intra-oculaire, parfois au-delà de 50 mmHg.
		</li>
		<li>
			La rougeur oculaire est un autre symptôme fréquent. Plus précisément, on observe une
			collerette rouge sur le pourtour de la cornée ; on parle de « cercle péri-kératique ».
		</li>
		<li>
			Les deux pupilles perdent leur symétrie. Lors d’une crise de glaucome aigü, la pupille de
			l’œil atteint reste figée en « semi-mydriase », que les ophtalmologistes qualifient
			d’« aréflective », puisqu’elle ne réagit plus à la lumière.
		</li>
		<li>
			La baisse de vision est souvent profonde. Elle s’explique, d’une part, par une perte de
			transparence de la cornée, à cause d’un œdème consécutif à une souffrance de l’endothélium.
			D’autre part, le nerf optique s’altère rapidement, sous l’effet de la poussée tensionnelle.
		</li>
	</ul>

	<Text>
		L’apparition d’une rougeur et de douleurs oculaires doit impérativement vous conduire à
		consulter un ophtalmologiste en urgence.
	</Text>

	<Title level="h3">Mécanismes et facteurs de risque</Title>

	<Text>
		Lors d’une crise de glaucome aigü, la tension s’élève parce que l’humeur aqueuse (le liquide que
		contient la chambre antérieure de l’œil) ne peut plus s’écouler à travers le trabéculum, au fond
		de l’angle irido-cornéen.
	</Text>
	<Text>Ce dernier est en effet obstrué par la racine de l’iris, projetée vers l’avant.</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={GlaucomePageTwoIlluOne}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Text>Cette situation se produit, dans la grande majorité des cas, sur un œil prédisposé :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Œil fortement hypermétrope (hypermétropie supérieure à 4 dioptries)</li>
		<li>Œil non opéré de cataracte</li>
		<li>
			Œil dit « à angle fermable » , situation découverte de manière fortuite au cours des examens
			de suivi chez l’ophtalmologiste.
		</li>
		<Text>Les circonstances de survenue d’un glaucome aigüe sont variées :</Text>
		<li>
			Prise de certains médicaments, ayant des effets sur la pupille et qui entraînent sa
			dilatation. Pour cette raison, la prise de certains sprays nasaux, de médicaments
			broncho-dilatateurs ou encore de certains anti-dépresseurs (ce ne sont que des exemples),
			requiert bien souvent un examen ophtalmologique complet.
		</li>
		<li>
			La dilatation pupillaire dans l’obscurité peut également faciliter la survenue d’une telle
			crise.
		</li>
	</ul>

	<Text>Les circonstances de survenue d’un glaucome aigüe sont variées :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Prise de certains médicaments, ayant des effets sur la pupille et qui entraînent sa
			dilatation. Pour cette raison, la prise de certains sprays nasaux, de médicaments
			broncho-dilatateurs ou encore de certains anti-dépresseurs (ce ne sont que des exemples),
			requiert bien souvent un examen ophtalmologique complet.
		</li>
		<li>
			La dilatation pupillaire dans l’obscurité peut également faciliter la survenue d’une telle
			crise.
		</li>
	</ul>

	<Title level="h3">Prise en charge</Title>
	<TextWithCorners>
		Le traitement d’une crise de glaucome aigü est une urgence. Elle nécessite la mise en place d’un
		traitement sans délai !
	</TextWithCorners>

	<Title level="sub1">Objectifs de la prise en charge en urgence</Title>

	<Title level="sub3">
		Baisse de la pression intra-oculaireObjectifs de la prise en charge en urgence
	</Title>
	<Text>
		Celle-ci doit être obtenue par tous les moyens disponibles. Bien souvent, des traitements sont
		instaurés par voie générale (prise de comprimés ou perfusion intra-veineuse), en plus des
		traitements en collyres.
	</Text>

	<Title level="sub3">Levée du blocage pupillaire</Title>
	<Text>
		Dès que l’état oculaire le permet, votre ophtalmologiste réalisera une iridotomie périphérique,
		qui consiste en une perforation de la périphérique de l’iris au laser.
	</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={GlaucomePageTwoIlluTwo}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Text>
		Ce geste est réalisé au cabinet d’Ophtalmologie. Il va permettre à l’humeur aqueuse de circuler
		à nouveau dans la chambre antérieure de l’oeil et de rouvrir l’angle irido-cornéen.
	</Text>

	<figure class="mx-auto mt-10 w-full max-w-md overflow-hidden">
		<img
			src={GlaucomePageTwoIlluThree}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="sub3">Empêcher la survenue d’une crise sur l’œil contro-latéral</Title>
	<Text>
		Si celui-ci est également à risque, l’iridotomie périphérique est réalisée dans les deux yeux.
	</Text>
	<Title level="sub1">Prise en charge secondaire</Title>
	<Text>
		Dès que possible, une chirurgie de cataracte est réalisée sur l’œil atteint. L’ablation du
		cristallin va, en effet, permettre des modifications géométriques importants à l’intérieur de
		l’œil et, ainsi, de rouvrir l’angle irido-cornéen de manière importante et définitive.
	</Text>
	<Title level="sub1">Autres traitements</Title>
	<Text>
		Malheureusement, les traitements décrits ci-dessus ne sont pas toujours suffisants pour
		contrôler la crise. Des gestes complémentaires, essentiellement chirurgicaux, peuvent être
		nécessaires pour permettre de réduire la tension intra-oculaire.
	</Text>
</Section>
