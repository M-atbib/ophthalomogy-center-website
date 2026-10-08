<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, Title } from '$lib';
	import { InfectionPageOneIlluOne } from '$lib/assets';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout
	title="Que faire en cas de conjonctivite infectieuse et contagieuse ?"
	{backHref}
>
	<ArticleImage
		src={InfectionPageOneIlluOne}
		alt="Œil atteint d'une conjonctivite infectieuse"
		class="max-w-xl"
	/>

	<section>
		<Title level="h3" as="h2">Pourquoi respecter des mesures d'hygiène ?</Title>
		<Text
			>Si vous, ou vos proches, êtes atteint(s) de conjonctivite virale, alors quelques règles
			simples s’imposent pour éviter sa propagation et la contamination de votre entourage.</Text
		>
		<Text
			>Vos mains sont le principal vecteur de propagation de la maladie. Il est donc essentiel de
			les laver très régulièrement, en particulier à l’aide d’une solution hydro-alcoolique ou du
			savon.</Text
		>
		<Text
			>Gardez à l’esprit que le virus est très résistant ! Une fois déposé sur une surface, il peut
			y survivre jusqu’à trois semaines, soit le temps nécessaire pour qu’une autre personne, en
			touchant cette même surface, soit contaminée. Une épidémie de conjonctivite peut alors se
			développer très rapidement. Evidemment, vos larmes et votre salive sont également contaminées.
			Celles-ci, une fois en contact avec un mouchoir ou un linge, y ont déposé le virus, ce qui en
			fait de nouveaux vecteurs de propagation de l’infection vers d’autres personnes.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Quelles sont les principales règles à respecter ?</Title>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				Lavez-vous et désinfectez-vous les mains à l’aide d’une solution hydro-alcoolique après
				avoir instillé vos collyres ou après vous être mouché(e).
			</li>
			<li>Ne touchez pas vos yeux avec vos mains.</li>
			<li>Utilisez des mouchoirs jetables.</li>
			<li>Jetez les mouchoirs usagés dans des poubelles à couvercle fermé.</li>
			<li>
				Ne partagez pas les serviettes de toilette, les taies d’oreillers, les draps… avec une
				personne infectée.
			</li>
			<li>
				Une éviction du milieu professionnel est souvent conseillée en cas de travail au contact des
				enfants ou en collectivité.
			</li>
			<li>
				Nettoyez et désinfectez les interrupteurs, les poignets de porte, les principales surfaces
				de la maison tous les jours, pendant la période de contagiosité.
			</li>
			<li>
				Respectez la durée totale de votre traitement ; vous restez contagieux(se) même après la
				régression des symptômes.
			</li>
			<li>Ne portez pas vos lentilles de contact pendant toute la durée de l’épisode.</li>
		</ul>
		<Text tone="accent" weight="medium"
			>Si votre vision baisse ou si des douleurs apparaissent, un nouvel examen ophtalmologique, à
			la recherche de complications, est conseillé rapidement.</Text
		>
	</section>
</DiseaseArticleLayout>
