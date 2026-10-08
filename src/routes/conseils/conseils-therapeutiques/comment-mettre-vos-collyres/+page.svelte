<script lang="ts">
	import { DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';

	const backHref = '/conseils/conseils-therapeutiques';
</script>

<DiseaseArticleLayout title="Comment mettre vos collyres ?" {backHref}>
	<!-- The sequence follows the patient instructions from the Figma export: safety checks, technique, then medication cautions. -->
	<section>
		<Title level="h3" as="h2">
			Quelles sont les règles qui permettent un usage optimal de vos collyres ?
		</Title>
		<Text>
			Préalablement à l’instillation, vérifiez toujours que la date de péremption du produit n’est
			pas dépassée, surtout s’il s’agit d’un médicament que vous avez stocké chez vous.
		</Text>
		<Text>
			Le cas échéant, assurez-vous que la durée maximale de conservation du collyre après ouverture
			du flacon n’a pas été dépassée.
		</Text>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				Veillez à toujours avoir des mains propres et sèches avant de manipuler vos paupières.
			</li>
			<li>
				En cas de pathologie oculaire infectieuse ou dans le cas d’un traitement post-opératoire, il
				est préférable de ne pas utiliser un même flacon pour les deux yeux afin de limiter le
				risque de contamination du deuxième œil.
			</li>
			<li>Vous pouvez vous munir d’un miroir grossissant et vous asseoir, pour plus d’aisance.</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Comment instiller correctement une goutte ?</Title>
		<Text>
			Il n’est pas nécessaire d’instiller la goutte directement sur l’œil. Il est plus facile de la
			déposer dans la cul-de-sac conjonctival inférieur. Pour cela, tirez délicatement, vers le bas,
			sur la paupière inférieure. Ce geste va permettre d’exposer la conjonctive palpébrale, de
			couleur rosée. Déposez la goutte à ce niveau, puis clignez régulièrement des paupières. Le
			clignement permettra d’étaler le produit sur toute la surface du globe oculaire.
		</Text>
		<Text>
			Pour éviter que le médicament ne passe dans la circulation sanguine, il est conseillé de
			comprimer les voies lacrymales pendant la minute qui suit l’instillation. Pour cela, fermez
			les yeux et pincez la racine du nez, à l’angle interne des paupières.
		</Text>
		<TextWithCorners>
			En cas de doute, mieux vaut instiller plusieurs fois la goutte que l’inverse. Si la goutte
			avait été correctement déposée, le volume de la seconde va induire un phénomène de «
			trop-plein » et le collyre en excès ruissellera sur la joue.
		</TextWithCorners>
	</section>

	<section>
		<Title level="h3" as="h2">Que faire si plusieurs collyres sont prescrits ?</Title>
		<Text>
			Si vous devez instiller plusieurs collyres à la même heure, il est conseillé d’attendre 3 à 5
			minutes entre chaque instillation.
		</Text>
		<Text>
			Un délai moindre risquerait un lavage des collyres successifs. La deuxième goutte va laver la
			première, etc... avec pour risque de n’avoir, au contact de l’œil, que le dernier produit
			instillé.
		</Text>
		<Text>
			Dans la même logique, si vous devez effectuer des lavages oculaires, il est préférable de les
			réaliser avant d’instiller les collyres « actifs ».
		</Text>
		<Text>
			L’instillation d’un collyre peut générer un flou visuel dans les suites immédiates de
			l’application. C’est un phénomène tout à fait normal, plus ou moins marqué en fonction de la
			molécule concernée.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Les collyres sont-ils de véritables médicaments ?</Title>
		<Text>
			Beaucoup de pathologies ophtalmologiques vont nécessiter l’instillation de collyres. Ceux-ci
			ont un intérêt évident, puisqu’ils permettent d’appliquer le médicament directement au contact
			de l’œil et ainsi d’atteindre des concentrations élevées et une pénétration maximale dans les
			tissus oculaires.
		</Text>
		<Text>
			La plupart des médicaments à visée ophtalmologique sont donc prescrits sous cette forme
			galénique.
		</Text>
		<TextWithCorners>
			Les collyres sont des médicaments actifs, souvent dosés à de fortes concentrations dans de
			faibles volumes. Leur utilisation doit donc respecter une prescription médicale.
		</TextWithCorners>
		<Text>
			Pour votre sécurité, mieux vaut éviter de réutiliser un produit à disposition dans votre
			pharmacie personnelle sans l’avis de votre ophtalmologiste.
		</Text>
		<Text>
			Si, après l’instillation d’un collyre, vous présentez une éruption cutanée, des troubles de la
			respiration ou de la déglutition, vous présentez peut-être des signes d’allergie à l’un de ses
			composants. Même en cas de résolution rapide, mieux vaut alors suspendre le traitement et
			consulter votre ophtalmologiste rapidement.
		</Text>
		<Text>
			Les collyres ophtalmologiques sont conditionnés en flacons ou en unidoses. L’avantage de ces
			dernières est la moindre toxicité des solutions pour la surface oculaire. Une unidose est
			jetée immédiatement après usage ; il n’est alors pas nécessaire d’associer au médicament des
			conservateurs.
		</Text>
		<Text>
			Néanmoins, des innovations récentes permettent de plus en plus aux laboratoires
			pharmaceutiques, via différents procédés technologiques, de ne plus devoir ajouter de
			conservateurs aux médicaments contenus dans des flacons.
		</Text>
	</section>
</DiseaseArticleLayout>
