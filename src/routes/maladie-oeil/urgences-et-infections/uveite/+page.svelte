<script lang="ts">
	import { DiseaseArticleLayout, OpeningImageSection, Text, TextWithCorners, Title } from '$lib';
	import { InfectionPageSixIlluOne } from '$lib/assets';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Uvéite" {backHref}>
	<OpeningImageSection
		src={InfectionPageSixIlluOne}
		alt="Anatomie des tissus touchés par une uvéite"
	>
		<Title level="h3" as="h2">Définition</Title>
		<Text
			>L’uvéite est une inflammation des tissus intra-oculaires, situés dans les couches profondes
			du globe : l’iris, la choroïde, la rétine et ses vaisseaux. Les formes d’uvéite sont très
			nombreuses et variées. Il en va de même pour leurs causes possibles.</Text
		>
		<Text
			>L’uvéite occasionne une rougeur oculaire diffuse, mais aussi des douleurs profondes. Ces
			douleurs sont également présentes la nuit et ne sont pas calmées par la fermeture de la
			paupière. Une baisse de vision, plus ou moins prononcée, est généralement présente. La
			pression intra-oculaire peut monter au cours de l’épisode.</Text
		>
	</OpeningImageSection>

	<section>
		<Title level="h3" as="h2">Formes cliniques</Title>
		<Text
			>Les uvéites antérieures atteignent surtout l’iris et la chambre d’antérieure de l’œil
			(l’espace situé entre l’iris et la cornée). La vision est très souvent perturbée, allant d’une
			discrète impression de brouillard à une baisse d’acuité visuelle profonde. L’œil est rouge,
			surtout au pourtour de la cornée ; on parle de cercle péri-kératique.</Text
		>
		<Text
			>Les uvéites intermédiaires sont plus rares. C’est la base du vitré qui est inflammatoire.
			Pour le patient atteint, aucun symtôme ne facilite vraiment l’orientation du diagnostic. L’œil
			n’est pas toujours rouge. La vision n’est pas toujours abaissée. Les douleurs sont parfois
			très discrètes.</Text
		>
		<Text
			>Les uvéites postérieures atteignent le fond de l’œil : la rétine, les vaisseaux rétiniens, la
			choroïde (réseau vasculaire en dessous de la rétine). La baisse de vision est très fréquente.
			La tête du nerf optique peut être le siège d’un œdème ; on parle alors de papillite.</Text
		>
		<Text
			>Les uvéites mixtes résultent d’une diffusion de l’inflammation à plusieurs régions de l’œil.
			Un tableau d’uvéite diagnostiquée tardivement prend fréquemment cet aspect.</Text
		>
		<Text
			>On peut également classer une uvéite en fonction de sa durée ou du nombre d'épisodes
			inflammatoires. Une uvéite peut être aigüe, chronique, récidivante ou isolée.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Causes possibles d'uvéite</Title>
		<div class="space-y-3">
			<Title level="sub2" as="h3">Uvéites infectieuses</Title>
			<Text
				>Tous les germes peuvent entraîner un tableau d’uvéite (virus, bactéries, champignons,
				parasites). Parmi les virus, ceux du groupe des Herpes représentent une cause fréquente
				d’uvéite virale. On retrouve même des tableaux de kérato-uvéite, alliant à la fois une
				infection de la cornée et de l’intérieur l’œil. Les parasites sont de grands pourvoyeurs
				d’uvéites infectieuses. La toxoplasmose est l’une des causes les plus fréquentes d’uvéite
				postérieure. Elle peut survenir à tout âge et à la particularité de se transmettre de la
				mère à l’enfant au cours de la grossesse.</Text
			>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Uvéites médicamenteuses</Title>
			<Text
				>Elles font suite à l’utilisation de certains traitements, surtout dans le cadre de maladies
				chroniques. Certains antibiotiques sont concernés, tout comme certains traitements
				anti-cancéreux.</Text
			>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Uvéites non infectieuses</Title>
			<Text
				>Elles peuvent être liées à des maladies auto-immunes n’ayant, a priori, pas de rapport
				direct avec l’appareil visuel. C’est le cas, par exemple, de la spondylarthrite ankylosante,
				de la maladie de Crohn ou de la maladie de Behçet. L’âge peut être un argument important
				pour pouvoir poser un diagnostic précis.</Text
			>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Uvéites idiopathiques</Title>
			<Text
				>Ce terme qualifie une uvéite dont la cause n’est pas retrouvée par les différents examens
				réalisés par votre médecin. C'est malheureusement une issue assez fréquente aux explorations
				diagnostiques.</Text
			>
		</div>
	</section>

	<section>
		<Title level="h3" as="h2">Prise en charge d’une uvéite</Title>
		<Text
			>Le diagnostic d’uvéite va amener votre ophtalmologiste à réaliser des examens
			complémentaires, afin d’essayer d’identifier son origine précise. Par exemple, en cas d'uvéite
			postérieure, une angiographie rétinienne pourra être proposée, afin de rechercher, par
			exemple, des lésions de choroïdite ou une vascularite. D’autres spécialistes pourront être
			consultés pour compléter la démarche diagnostique.</Text
		>
		<Text>Le traitement de l’uvéite s’articulera autour de deux axes :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Le traitement de sa cause, si celle-ci est retrouvée ;</li>
			<li>
				Le traitement de l’inflammation oculaire en elle-même. Le plus souvent, un traitement
				anti-inflammatoire et l’utilisation de cortico-stéroïdes sont nécessaires. La durée est
				variable et dépendra de la réponse de chaque patient.
			</li>
		</ul>
		<Text
			>La prise en charge des complications potentielles, notamment si l'uvéite devient chronique.
			L'inflammation oculaire prolongée et les différents traitements administrés peuvent générer la
			survenue d'une cataracte sur l'œil atteint, ou encore d'un glaucome chronique.</Text
		>
		<TextWithCorners
			>Une collaboration étroite entre le patient et son ophtalmologiste est nécessaire pour assurer
			une prise en charge optimale de cet épisode. Au moindre doute sur une récidive, une
			consultation ophtalmologique urgente s’impose.</TextWithCorners
		>
	</section>
</DiseaseArticleLayout>
