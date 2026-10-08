<script lang="ts">
	import { DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';

	const backHref = '/maladie-oeil/lunettes';
</script>

<DiseaseArticleLayout title="Presbytie : qu'est-ce que c'est ?" {backHref}>
	<section>
		<Title level="h3" as="h2">Quelles sont les causes de la presbytie ?</Title>
		<Text
			>La presbytie est un phénomène tout à fait normal, qui survient avec le temps. Elle consiste
			en une perte des capacités d’accommodation de l’œil et entraîne des difficultés de plus en
			plus importantes pour bien voir de près.</Text
		>
		<Text
			>La presbytie surviendra aussi bien sur les yeux myopes, qu’astigmates et/ou hypermétropes.</Text
		>
		<Text
			>À noter que la chirurgie de cataracte, a pour conséquence systématique une presbytie
			complète. L’ablation du cristallin cataracté empêche, de manière tout à fait normale,
			l’accomodation de l’œil.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Quand survient-elle et comment la corriger ?</Title>
		<Text
			>La presbytie survient le plus souvent à partir de l'âge de 45 ans. Elle est ressentie plus ou
			moins tardivement, en fonction des activités et des besoins visuels de chacun.</Text
		>
		<Text>Elle est accessible à une correction par :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Lunettes : verres de près uniquement, verres double-foyers, verres progressifs ;</li>
			<li>Lentilles : lentilles multifocales, monovision / bascule ;</li>
			<li>Chirurgie réfractive : techniques au laser, techniques implantaires.</li>
		</ul>
		<TextWithCorners
			>De nombreuses solutions existent pour améliorer la vision de près</TextWithCorners
		>
		<Text
			>Les verres progressifs ne sont pas obligatoires pour corriger une presbytie. Par exemple,
			certaines personnes myopes peuvent lire de manière tout à fait satisfaisante en enlevant leur
			correction habituelle. D'autres préfèreront porter une correction monofocale, c'est-à-dire
			uniquement adaptée à la vision de près.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2"
			>La survenue de la presbytie est-elle l'occasion d'un dépistage chez l'ophtalmologiste ?</Title
		>
		<Text
			>Beaucoup de patients se passent de dépistage médical en raison d'une bonne vison ressentie.
			Cependant, de nombreuses maladies ophtalmologiques peuvent se développer, sans qu'aucun
			symptôme ne soit perçu avant un stade d'évolution parfois dramatique.</Text
		>
		<Text tone="accent" weight="medium"
			>C'est pourquoi il est obligatoire que la première prescription de verres corrigeant la
			presbytie soit faite par un ophtalmologiste, à l'issue d'un examen ophtalmologique complet.</Text
		>
	</section>
</DiseaseArticleLayout>
