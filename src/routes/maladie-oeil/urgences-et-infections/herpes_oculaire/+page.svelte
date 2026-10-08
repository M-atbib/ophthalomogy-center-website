<script lang="ts">
	import { DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Herpès oculaire" {backHref}>
	<section>
		<Title level="h3" as="h2">Épidémiologie</Title>
		<Text
			>Il faut imaginer l’Herpès comme un ensemble de maladies, plutôt que comme une infection
			simple.</Text
		>
		<TextWithCorners
			>Ce terme désigne en effet toute une famille de virus : les Herpesviridae.</TextWithCorners
		>
		<Text
			>Ces virus sont très répandus dans le monde et vont infecter la majorité des espèces animales.
			L’Homme n’est évidemment pas épargné.</Text
		>
		<Text
			>Parmi les virus de cette famille, certains nous intéressent plus spécifiquement en
			Ophtalmologie :</Text
		>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>HSV1 (Herpes Simplex Virus 1)</li>
			<li>HSV2 (Herpes Simplex Virus 2)</li>
			<li>VZV (Virus Zona-Varicelle)</li>
			<li>CMV (CytoMegaloVirus)</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Infection herpétique</Title>
		<Title level="sub2" as="h3">Primo-infection</Title>
		<Text>La majorité de la population a déjà été en contact avec l’Herpes.</Text>
		<Text
			>La primo-infection (c’est-à-dire la première contamination) par le virus HSV1 est, dans
			l’immense majorité des cas, complètement asymptomatique. Dans d’autres cas, elle peut
			occasionner des éruptions cutanées et labiales (le classique « bouton de fièvre ») ou des
			épisodes de gingivites. Dans le cas d’une infection à HSV2, qui est une infection sexuellement
			transmissible, les lésions peuvent atteindre les muqueuses génitales.</Text
		>
		<TextWithCorners
			>La primo-infection au virus VZV est plus connue : il s’agit de la varicelle, que la plupart
			d'entre nous contractent dans l’enfance.</TextWithCorners
		>
		<Text
			>Une fois infecté, un individu ne se débarasse jamais complètement du virus herpétique. On
			parle d’infection latente. C’est-à-dire que le virus est encore présent dans le corps humain,
			de façon silencieuse.</Text
		>
		<Title level="sub2" as="h3">Récurrences</Title>
		<Text
			>Ce qui caractérise l’infection herpétique, c’est son caractère récurrent. Différentes
			situations peuvent déclencher un « réveil » de l’infection et donc une nouvelle poussée, comme
			:</Text
		>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>une fatigue importante</li>
			<li>une immuno-dépression</li>
			<li>le stress</li>
			<li>l’exposition aux UVs</li>
			<li>un traumatisme oculaire, dans le cas des atteintes ophtalmologiques</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Herpès oculaire</Title>
		<Text
			>Les virus du groupe Herpes peuvent atteindre, théoriquement, tous les tissus de l’organisme,
			dont l’œil. Toutes les structures oculaires peuvent être touchées par ce type d'infection.</Text
		>
		<Title level="sub2" as="h3">Conjonctivite herpétique</Title>
		<Text
			>Les conjonctivites d’origine herpétique prennent des formes souvent très proches des autres
			conjonctivites virales. La difficulté est d’en poser le diagnostic précis, puisque le
			traitement peut être différent. En particulier, l’utilisation de collyres cortisonés est
			formellement contre-indiquée en cas de conjonctivite herpétique, sous peine de voir
			l’infection s’aggraver.</Text
		>
		<Title level="sub2" as="h3">Kératite herpétique</Title>
		<Text
			>Toutes les couches de la cornée peuvent être atteintes. Il s’agit d’une infection sévère,
			puisque des cicatrices indélébiles peuvent apparaître et entraîner une baisse de l’acuité
			visuelle, parfois profonde et irréversible. La présence de l’herpès au sein des couches de la
			cornée va entraîner une réaction inflammatoire locale très importante, aboutissant parfois à
			une nécrose du stroma cornéen. Il s’agit d’une urgence diagnostique et thérapeutique.</Text
		>
		<Title level="sub2" as="h3">Uvéite et kérato-uvéite herpétiques</Title>
		<Text
			>Cette situation allie très souvent des lésions de la cornée et de l’uvée, à l’intérieur de
			l’œil. Les uvéites herpétiques génèrent très souvent une hypertonie oculaire, parfois majeure,
			et des lésions de l’iris. Le tableau clinique est douloureux, l'œil très rouge et la vision
			très souvent abaissée.</Text
		>
		<Title level="sub2" as="h3">Syndrome de Nécrose Rétinienne Aigüe (ARN syndrome)</Title>
		<Text>Il s’agit de l’une des affections ophtalmologiques les plus graves.</Text>
		<Text tone="accent" weight="medium"
			>Ce diagnostic doit être éliminé devant tout tableau d’inflammation intra-oculaire.</Text
		>
		<Text
			>C’est une urgence thérapeutique, dont la prise en charge est extrêmement complexe et le
			pronostic malheureusement plutôt sombre pour la fonction visuelle. L’infection se développe au
			sein du tissu rétinien, qui tapisse le fond de l’œil et entraîne sa destruction. La
			cicatrisation est souvent fragile et ce tableau se complique, dans 50% des cas, d’un
			décollement de rétine.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Traitements</Title>
		<Text
			>Le traitement va dépendre du type d’infection et, éventuellement, du diagnostic virologique
			précis, si des analyses complémentaires ont pu être effectuées.</Text
		>
		<Title level="sub2" as="h3">Traitement de l’infection</Title>
		<Title level="sub3" as="h4">Traitements anti-herpétiques locaux</Title>
		<Text
			>Des collyres et pommades sont disponibles pour traiter les formes strictement oculaires
			d’infections herpétiques. L’ARN syndrome peut nécessiter des injections intra-vitréennes de
			molécules anti-virales.</Text
		>
		<Title level="sub3" as="h4">Traitements généraux</Title>
		<Text
			>Les traitements anti-herpétiques sont aussi disponibles en sirop, en comprimés ou en
			perfusion. Ces traitements peuvent être suffisants, utilisés seuls, pour traiter une infection
			pourtant oculaire.</Text
		>
		<Title level="sub2" as="h3">Traitement préventif</Title>
		<Text
			>Le caractère récidivant des infections herpétiques conduira peut-être votre médecin à vous
			proposer un traitement préventif. Les indications de ces traitements sont précises et
			concernent surtout les épisodes fréquentes, sévères ou les patients fragiles, notamment les
			patients ayant bénéficié d’une greffe de cornée.</Text
		>
		<Title level="sub2" as="h3">Traitement des complications</Title>
		<Text
			>Une fois l’épisode aigü résolu, des séquelles peuvent persister, notamment des cicatrices
			cornéennes. Lorsqu’elles sont très étendues et atteignent l’axe visuel, la récupération
			visuelle n’est pas toujours possible. Une greffe de cornée peut être envisagée, dans certains
			cas.</Text
		>
		<Title level="sub2" as="h3">Mesures associées</Title>
		<div class="space-y-5 text-accent-one">
			<Text tone="accent" weight="medium"
				>Le port de lentilles est vivement déconseillé chez les patients atteints d’herpes oculaire.
				En effet, la pose et la dépose des lentilles occasionnent des micro-traumatismes de la
				cornée, qui peuvent déclencher une récidive locale.</Text
			>
			<Text tone="accent" weight="medium"
				>Il faut absolument éviter l’instillation oculaire de collyres ou pommades présentant de la
				cortisone sans examen ophtalmologique préalable. Méconnaître la présence de l’herpès
				entraîne un risque d’aggravation sévère de l’infection.</Text
			>
			<Text tone="accent" weight="medium"
				>Pour les mêmes raisons, mieux vaut éviter l’auto-médication. En cas de doute sur une
				récidive, mieux vaut consulter votre ophtalmologiste au plus vite.</Text
			>
		</div>
	</section>
</DiseaseArticleLayout>
