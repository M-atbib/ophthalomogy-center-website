<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, Title } from '$lib';
	import { LunettePageThreeIlluOne } from '$lib/assets';

	const backHref = '/maladie-oeil/lunettes';
</script>

<DiseaseArticleLayout title="Emmétropie : l'œil parfait" {backHref}>
	<section>
		<Text
			>Un oeil emmétrope est un oeil qui permet une excellente vision, sans correction optique.</Text
		>
		<Text
			>L'image d'un objet se forme directement sur la rétine, parce que la lumière y est
			parfaitement focalisée.</Text
		>
		<ArticleImage
			src={LunettePageThreeIlluOne}
			alt="Trajet des rayons lumineux dans un œil emmétrope"
			class="max-w-xl"
		/>
	</section>

	<section>
		<Title level="h3" as="h2">Ceci dépend, schématiquement, de deux facteurs :</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>La longueur axiale de l'oeil, qui est optimale (en général, 24 mm) ;</li>
			<li>Les rayons de courbure de la cornée sont équilibrés et la cornée est régulière.</li>
		</ul>
		<Text
			>Contrairement à un oeil myope, hypermétrope et/ou astigmate, il n'est pas nécessaire, via une
			correction optique, de dévier les rayons lumineux pour qu'ils s'orientent au mieux</Text
		>
		<Text
			>Néanmoins, un oeil emmétrope perdra, de manière tout à fait normale, ses capacités
			d'accomodation avec le temps. Ainsi se développera une presbytie. Un patient emmétrope devra
			donc, malgré tout, porter une correction optique pour la vision de près, dès que celle-ci lui
			semblera insuffisante.</Text
		>
		<Text tone="accent" weight="medium"
			>Attention, un oeil emmétrope, même si la vision est excellente, peut être porteur d'une
			maladie oculaire. Il convient d'être prudent et de bénéficier régulièrement d'un bilan
			ophtalmologique complet, pour assurer un dépistage de ce type de maladie.</Text
		>
	</section>
</DiseaseArticleLayout>
