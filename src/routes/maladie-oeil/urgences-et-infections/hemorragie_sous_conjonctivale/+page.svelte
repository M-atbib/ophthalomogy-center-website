<script lang="ts">
	import { DiseaseArticleLayout, OpeningImageSection, Text, TextWithCorners, Title } from '$lib';
	import { InfectionPageThreeIlluOne } from '$lib/assets';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Hémorragie sous-conjonctivale" {backHref}>
	<OpeningImageSection
		src={InfectionPageThreeIlluOne}
		alt="Œil présentant une hémorragie sous-conjonctivale"
	>
		<Title level="h3" as="h2">L'hémorragie sous-conjonctivale : une affection bénigne</Title>
		<Text
			>La survenue d’une rougeur oculaire est un motif de recours extrêmement fréquent aux urgences
			ophtalmologiques. Les diagnostics potentiels sont multiples et vont évidemment dépendre d’un
			contexte propre à chaque patient : chirurgie oculaire récente, traumatisme évident,
			traitements en cours, antécédents généraux…</Text
		>
		<Text
			>L’apparition d’une rougeur n’est pas toujours associée à la présence de douleurs.
			L’hémorragie sous-conjonctivale en est l’exemple-type. Il s’agit d’une plage de sang frais,
			donc rouge vif, localisée sous la conjonctive, tissu transparent recouvrant la surface du
			globe oculaire et la face interne des paupières. Elle survient, dans la majorité des cas,
			brutalement. La plupart des patients la remarquent le matin au réveil. Cette atteinte n’est
			pas douloureuse ; tout au plus, il existe une sensation de corps étranger sous-palpébral.</Text
		>
		<Text
			>La rougeur sera plus ou moins étendue en fonction de la quantité de sang étalée sous la
			conjonctive. Elle peut rester très localisée ou occuper plusieurs quadrants de la surface
			oculaire. L’hémorragie sous-conjonctivale n’entraîne pas de baisse de la vision.</Text
		>
	</OpeningImageSection>

	<section>
		<Title level="h3" as="h2">Causes les plus fréquentes</Title>
		<ul class="mt-2 mb-6 list-disc space-y-4 pl-5">
			<li>
				Une hypertension artérielle mal équilibrée. En cas d’hémorragie sous-conjonctivale, une
				vérification devra toujours être effectuée. Des pics d’hypertension artérielle, peu
				symptomatiques par ailleurs, peuvent tout à fait se manifester par ce biais. La coordination
				avec le cardiologue ou le médecin traitant sera, dès lors, essentielle.
			</li>
			<li>
				Un traumatisme, même minime de la surface oculaire. Avec l’âge, la paroi des vaisseaux
				sanguins épiscléraux et conjonctivaux se fragilise. Il arrive que l’un d’eux se rompent et
				déverse son contenu dans l’espace sous-conjonctival. Si le patient prend un traitement
				anti-coagulant ou anti-agrégant plaquettaire, dans le cadre de pathologies
				cardio-vasculaires, le saignement est plus abondant.
			</li>
		</ul>
		<Text
			>En cas d’épisodes récidivants, sans cause évidente, un bilan sanguin à la recherche de
			troubles de la coagulation peut également être discuté.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Traitement</Title>
		<TextWithCorners
			>Aucun traitement n’est nécessaire en cas d’hémorragie sous-conjonctivale.</TextWithCorners
		>
		<Text
			>Il faut plusieurs semaines pour que la rougeur disparaisse. La présence de sang à quelques
			jour du début des symptômes n'est absolument pas inquiétante.</Text
		>
		<Text
			>Si vous présentez un épisode de rougeur oculaire, une consultation ophtalmologique d’urgence
			peut être nécessaire afin de permettre une confirmation diagnostique précise.</Text
		>
	</section>
</DiseaseArticleLayout>
