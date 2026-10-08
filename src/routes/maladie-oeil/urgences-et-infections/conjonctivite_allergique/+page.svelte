<script lang="ts">
	import { DiseaseArticleLayout, OpeningImageSection, Text, TextWithCorners, Title } from '$lib';
	import { InfectionPageOneIlluOne } from '$lib/assets';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Conjonctivite allergique" {backHref}>
	<OpeningImageSection
		src={InfectionPageOneIlluOne}
		alt="Œil présentant une conjonctivite allergique"
	>
		<Text
			>L’allergie est une réaction de l’organisme à certaines molécules de l’environnement.
			L’exposition répétée à ces molécules entraînent des manifestations variables : troubles
			digestifs, symptômes respiratoires, éruptions cutanées…</Text
		>
		<Text
			>L’appareil oculaire est lui aussi touché par ces phénomènes, notamment la surface oculaire.
			La conjonctive (la fine « peau » transparente qui recouvre l’œil et tapisse l’intérieur des
			paupières) devient, au contact des molécules allergisantes, inflammatoire, de manière plus ou
			moins importante et pour une durée variable.</Text
		>
	</OpeningImageSection>

	<section>
		<Title level="h3" as="h2">Différentes formes de conjonctivite allergique</Title>
		<div class="space-y-3">
			<Title level="sub2" as="h3">Conjonctivite allergique aigüe</Title>
			<Text
				>C’est l’épisode classique, au cours duquel l’œil devient rouge. Les paupières peuvent être
				gonflées et il existe, le plus souvent, un larmoiement abondant responsable d’une baisse
				modérée de la vision. Les patients rapportent la présence de sécrétions claires. Il s’agit
				d’une manifestation dite « anaphylactique » aigüe, qui survient en cas de contact massif
				avec l’allergène.</Text
			>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Conjonctivite allergique saisonnière</Title>
			<Text
				>Ce terme désigne les manifestations oculaires liées aux phénomènes allergiques et qui
				s’étendent pendant toute la durée d’exposition à l’allergène. L’exemple typique est
				l’allergie aux pollens ; ceux-ci, pendant le printemps et l’été, sont présents dans l’air et
				viennent se fixer à la conjonctive. S’ensuivent des symptômes, moins marqués en intensité
				que dans le cas d’une conjonctivite aigüe, mais plus durables dans le temps. Les patients se
				plaignent de démangeaisons importantes, de sécrétions régulières, de ressentir une
				impression de corps étranger sous la paupière. En l’absence de traitement et, surtout,
				d’arrêt de l’exposition à l’allergène, les symptômes ne vont pas régresser.</Text
			>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Conjonctivite allergique perannuelle</Title>
			<Text
				>Ce tableau est marqué par le même type de symptômes, parfois d’intensité minime, mais
				ressentis tout au long de l’année. Les allergènes responsables sont souvent difficiles à
				identifier ; il faut penser à certaines expositions professionnelles ou encore aux
				moisissures et champignons présents dans les lieux d’habitation.</Text
			>
			<Text
				>Les symptômes oculaires sont rarement isolés. Ils s’associent fréquemment à des
				manifestations de la sphère ORL (toux, irritation de la gorge, rhinorrhée claire…)</Text
			>
			<Text
				>Même si la majorité des cas évolue, sous traitement, de manière favorable, on peut observer
				des atteintes chroniques beaucoup plus sévères.</Text
			>
		</div>
	</section>

	<section>
		<Title level="h3" as="h2"
			>Une forme particulière et sévère d'allergie : la kérato-conjonctivite vernale</Title
		>
		<Text
			>Elle survient chez les enfants et les jeunes adultes. Les signes inflammatoires locaux sont
			particulièrement marqués. Le phénomène, s’il n’est pas diagnostiqué en urgence, peut aboutir à
			des lésions de la cornée, qui peut alors perdre sa transparence de façon irrémédiable.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Prise en charge</Title>
		<Text
			>La première difficulté est de poser un diagnostic correct. Celui-ci est plus facile lorsque
			le patient se sait déjà allergique. Mais déceler une allergie devant des symptômes oculaires
			chroniques et parfois discrets est souvent plus difficile.</Text
		>
		<TextWithCorners
			>La prise en charge diagnostique devra se faire en collaboration étroite avec l’allergologue.</TextWithCorners
		>
		<Text>Le traitement s’articule autour de deux axes principaux :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Eviction de l’allergène, après son identification par des examens spécialisés</li>
			<li>Traitement de l’inflammation oculaire induite par les phénomènes allergiques.</li>
		</ul>
		<Text
			>Les traitements anti-allergiques en comprimés habituellement utilisés pour traiter les
			symptômes généraux de l’allergie sont, en règle général, assez peu efficaces sur les symptômes
			oculaires. Il faudra souvent y adjoindre des traitements locaux, instillés sous la forme de
			collyres. Les principales molécules utilisées pourront être : les anti-histaminiques, les
			anti-dégranulants mastocytaires, les anti-inflammatoires stéroïdiens ou non stéroïdiens…</Text
		>
		<TextWithCorners
			>La prise en charge diagnostique devra se faire en collaboration étroite avec l’allergologue.</TextWithCorners
		>
		<Text
			>Dans les cas d’exposition chronique, ils permettent de réduire la quantité d’allergènes
			présents dans les replis conjonctivaux.</Text
		>
	</section>
</DiseaseArticleLayout>
