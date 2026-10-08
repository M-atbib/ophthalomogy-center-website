<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		CataractePageOneHero,
		CataractePageOneIlluOne,
		CataractePageOneIlluTwo
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/blepharite-secheresse-surface-oculaire" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Sécheresse oculaire</Title>
	<Text>
		La sécheresse oculaire est une affection extrêmement fréquente, qui représenterait jusqu'à 25%
		des motifs de consultation en Ophtalmologie. Il s'agit d'une pathologie chronique, dont l'impact
		sur la qualité est souvent majeur.
	</Text>
	<Text>
		Ses conséquences sont potentiellement sévères, puisqu'elle peut entraîner des lésions de la
		surface oculaire invalidantes et irréversibles.
	</Text>

	<Title level="h2">Causes de la sécheresse</Title>
	<Text>
		C'est une maladie pluri-factorielle dont les mécanismes et les causes possibles sont extrêmement
		nombreuses et complexes. Elle peut être accentuée par le port de lentilles de contact,
		des allergies chroniques, des désordres endocriniens ou encore certaines pathologies
		dermatologiques atteignant les paupières et leur bord libre. Le principal élément en jeu est le
		film lacrymal, dont la densité et la stabilité sont altérées. Les larmes s'évaporent trop
		rapidement, la couverture conjonctivale et cornénne devient insuffisante. S'ensuivent des
		lésions inflammatoires et une irritation chronique des terminaisons nerveuses de la surface
		oculaire.
	</Text>

	<Title level="h2">Les symptômes</Title>

	<Text>
		Les symptômes les plus fréquemment décrits par les personnes atteintes de sécheresse oculaire
		sont :
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>L’impression d’avoir un corps étranger logé sous la paupière,</li>
		<li>Une sensation de brûlure oculaire, des picotements,</li>
		<li>Des démangeaisons persistantes.</li>
	</ul>

	<TextWithCorners>
		La sécheresse oculaire est une cause fréquente de larmoiement chronique, ce qui peut paraître
		paradoxal.
	</TextWithCorners>
	<Text>
		Les stratégies diagnostiques et thérapeutiques sont complexes. Elles nécessitent une
		collaboration étroite entre le patient et son ophtalmologiste. Il est important de mener un
		examen complet, qui permettra de comprendre le mécanismes dominant pour chaque patient.
	</Text>
	<Title level="h2">Prise en charge</Title>
	<Text>
		Plusieurs axes de prise en charge seront explorés, selon la sévérité et la cause de votre
		sécheresse :
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Des règles simples applicables au quotidien et qui visent à limiter la survenue et l'intensité
			des symptômes de sécheresse oculaire.
		</li>
		<li>
			Le traitement des pathologies associées. Le dysfonctionnement des glandes de Meibomius,
			associé à la blépharite chronique en est l'un des principaux exemples.
		</li>
		<li>
			Le traitement d'éventuelles pathologies endocriniennes, dermatologiques ou auto-immunes
			sous-jacentes.
		</li>
		<li>
			L'utilisation de traitements médicaux locaux et/ou généraux, au premier rang desquels
			les substituts lacrymaux.
		</li>
		<li>
			Des traitements associés, comme l'utilisation de la lumière pulsée polychromatique ou de
			dispositifs mécaniques de drainage des glandes de Meibomius.
		</li>
		<li>
			Des solutions chirurgicales sont parfois possibles: résection d'excès de tissu conjonctival
			(conjonctivochalasis), implantation de bouchons dans les méats lacrymaux, permettant de
			limiter le drainage des larmes et favorisant leur maintien au contact de la surface
			oculaire...
		</li>
	</ul>

	<Text>
		Il est important de comprendre le caractère chronique de cette affection. Les traitements sont
		prescrits pour une durée très longue, le plus souvent à vie.
	</Text>
</Section>
