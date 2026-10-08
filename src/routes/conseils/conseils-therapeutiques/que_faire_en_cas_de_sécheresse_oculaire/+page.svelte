<script lang="ts">
	import { DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';

	const backHref = '/conseils/conseils-therapeutiques';
</script>

<DiseaseArticleLayout title="Que faire en cas de sécheresse oculaire ?" {backHref}>
	<!-- The question-led structure is retained because the source presents practical daily guidance. -->
	<Text>
		Si vous êtes atteint d’un syndrome de l’œil sec, voici quelques conseils simples à appliquer au
		quotidien. Ils permettront de soulager vos symptômes.
	</Text>

	<section>
		<Title level="h3" as="h2">
			Le niveau d'hydratation influence-t-il les signes de sécheresse oculaire ?
		</Title>
		<Text>
			De manière générale, une hydratation abondante est nécessaire. Il est recommandé de boire
			entre 1,5 et 2 litres d’eau par jour, si vous êtes un adulte en bonne santé. Le film lacrymal
			est, en effet, majoritairement composé d’eau.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">
			Peut-on agir sur son environnement pour réduire les signes de sécheresse ?
		</Title>
		<Text>
			De manière générale, il est conseillé d'éviter les environnement climatisés et les courants
			d'air. L’air sec, surtout s’il est projeté vers le visage, peut accentuer l’évaporation des
			larmes. Il est donc recommandé de ne pas s’asseoir face au souffle d’un ventilateur ou d’un
			appareil de climatisation.
		</Text>
		<TextWithCorners
			>En voiture, détournez les buses de climatisation de votre visage.</TextWithCorners
		>
	</section>

	<section>
		<Title level="h3" as="h2">
			Le travail sur écran est-il compatible avec une sécheresse oculaire ?
		</Title>
		<Text>
			Pour les personnes qui travaillent sur écran, il est recommandé de garder la ligne des yeux
			au-dessus du poste. Ainsi, la direction du regard, orienté vers le bas, maintient le globe
			oculaire au contact de la paupière inférieure et des larmes.
		</Text>
		<Text>
			Il est conseillé, entre chaque heure de travail, de marquer une courte pause, de lever le nez,
			d’arrêter la lecture ou la fixation et de cligner régulièrement des paupières, quelques
			dizaines de fois.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">
			Comment réaliser les soins et massages des paupières en cas de sécheresse oculaire ?
		</Title>
		<Text>
			Les soins des paupières quotidiens, s’ils vous ont été prescrits, sont indispensables pour
			réduire les manifestations de sécheresse et préserver la surface oculaire.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Est-il conseillé d'utiliser des collyres lubrifiants ?</Title>
		<Text>
			En cas de sécheresse oculaire, votre ophtalmologiste prescrira sans doute l'instillation,
			plusieurs fois par jour, de collyres lubrifiants.
		</Text>
		<Text>
			Ils permettent à la fois d'hydrater la surface oculaire et de faciliter la cicatrisation de
			certaines lésions. Il existe une très grande variété de collyres lubrifiants, dont la
			composition et les caractéristiques peuvent être très différentes.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">
			Le port de lentilles est-il dangereux en cas de sécheresse oculaire ?
		</Title>
		<Text>
			Le port prolongé de lentilles de contact peut aggraver le syndrome sec oculaire. Il est donc
			primordial de respecter formellement les consignes de port de votre ophtalmologiste et il peut
			être prudent de limiter la durée de port de vos lentilles.
		</Text>
		<TextWithCorners>
			Le modèle de lentilles prescrit ne doit pas être modifié sans l’accord de votre médecin ; le
			matériau ne serait alors peut-être plus adapté à votre surface oculaire.
		</TextWithCorners>
	</section>
</DiseaseArticleLayout>
