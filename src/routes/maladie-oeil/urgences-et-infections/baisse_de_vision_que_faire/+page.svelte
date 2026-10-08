<script lang="ts">
	import { DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Baisse de vision : que faire ?" {backHref}>
	<Text
		>Une baisse de l’acuité visuelle est un événement souvent très anxiogène pour la personne
		atteinte. Il est essentiel de bien caractériser un tel épisode pour pouvoir orienter le
		diagnostic et la prise en charge de manière efficace.</Text
	>
	<TextWithCorners
		>Il est nécessaire de consulter votre ophtalmologiste sans délai (moins de 48 heures) si la
		baisse de vision est :</TextWithCorners
	>

	<section>
		<Title level="sub2" as="h2">Profonde :</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				si vous ne parvenez plus à lire des caractères normalement aisément déchiffrables, avec
				votre correction optique habituelle ;
			</li>
			<li>
				si vous percevez une tache sombre, fixe, qui empiète sur le point de fixation centrale ;
			</li>
			<li>
				si la baisse de vision consiste en une amputation, plus ou moins nette, de votre champ de
				vision.
			</li>
		</ul>
		<Title level="sub2" as="h2">Brutale :</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				La rapidité d’installation de la baisse de vision est un élément fondamental d’orientation
				vers certains diagnostiques.
			</li>
			<li>
				Si, à l’inverse, la vision s’est détériorée en plusieurs mois, le degré d’urgence est
				probablement moindre.
			</li>
		</ul>
		<Title level="sub2" as="h2">Consécutive à une chirurgie oculaire :</Title>
		<Text
			>Une chirurgie oculaire récente est toujours un argument fort en faveur d’un examen
			ophtalmologique précoce.</Text
		>
		<Text
			>Une baisse d’acuité visuelle profonde dans les jours qui suivent une chirurgie de la
			cataracte peuvent signifier la présence d’une infection post-opératoire, à prendre en charge
			sans délai.</Text
		>
		<Title level="sub2" as="h2">Non spontanément résolutive</Title>
		<Title level="sub2" as="h2">Survenue dans un contexte ophtalmologique particulier :</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				La myopie forte expose à des complications rétiniennes graves, telles que la déchirure
				rétinienne ou le décollement de rétine.
			</li>
			<li>
				Un antécédent de DMLA impose la plus grande réactivité en cas de baisse d’acuité visuelle
				brutale et profonde, signant parfois la présence d’un hématome rétinien ou la récidive d’un
				œdème maculaire.
			</li>
			<li>Chez un enfant, une baisse de vision doit toujours être prise au sérieux.</li>
		</ul>
	</section>

	<TextWithCorners
		>L’absence de douleur ou de rougeur n’est pas un bon élément pour définir le caractère urgent ou
		non de la situation.</TextWithCorners
	>
	<section>
		<Title level="h3" as="h2"
			>L’examen ophtalmologique pourra être différé de 48 heures à quelques jours si la baisse de
			vision est :</Title
		>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Survenue progressivement, en quelques semaines ou mois ;</li>
			<li>Fluctuante, notamment avec le clignement de la paupière ;</li>
			<li>Minime.</li>
		</ul>
	</section>
</DiseaseArticleLayout>
