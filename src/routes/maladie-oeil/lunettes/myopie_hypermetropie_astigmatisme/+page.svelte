<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';
	import {
		LunettePageOneIlluOne,
		LunettePageOneIlluThree,
		LunettePageOneIlluTwo
	} from '$lib/assets';

	const backHref = '/maladie-oeil/lunettes';
</script>

<DiseaseArticleLayout title="Myopie, Hypermétropie, Astigmatisme" {backHref}>
	<section>
		<Text
			>Les anomalies de la réfraction, ou amétropies, constituent un motif extrêmement fréquent de
			visite chez l’ophtalmologiste. Une prescription médicale est obligatoire pour permettre la
			délivrance de lunettes et/ou de lentilles de contact. En effet, sans consultation médicale, le
			dépistage des pathologies oculaires serait impossible.</Text
		>
		<TextWithCorners
			>Une consultation médicale est indispensable pour obtenir une ordonnance permettant la
			délivrance d’un dispositif médical de correction optique.</TextWithCorners
		>
	</section>

	<section>
		<Title level="h3" as="h2">Myopie</Title>
		<Text>Si une personne est myope, sa vision de loin est floue.</Text>
		<Text
			>En effet, l’œil myope est trop long et les rayons lumineux arrivent, par conséquent, en avant
			de la rétine. Une cornée trop courbe peut aussi expliquer ce phénomène. Une correction optique
			est alors indispensable, quel que soit l’âge du diagnostic. Le port de lunettes, de lentilles
			ou la chirurgie réfractive sont des solutions très efficaces pour permettre de corriger cette
			anomalie, extrêmement fréquente.</Text
		>
		<ArticleImage
			src={LunettePageOneIlluOne}
			alt="Trajet des rayons lumineux dans un œil myope"
			class="max-w-xl"
		/>
		<Text
			>La vision de près reste nette en cas de myopie. Elle ne s’altère qu’en cas de presbytie
			associée, mais pas toujours.</Text
		>
		<Text>La myopie peut aussi s’associer à l’astigmatisme.</Text>
		<Text tone="accent" weight="medium"
			>Il existe de nombreux arguments pour affirmer que la myopie est une affection en partie
			héréditaire. Si vous -ou plusieurs membres de votre famille- êtes myope(s), alors un dépistage
			sera essentiel chez vos enfants, dès l’âge de 2 ans, ou plus tôt en cas de symptômes dans la
			vie courante.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Hypermétropie</Title>
		<Text
			>À l’inverse du myope, l’hypermétrope a un œil trop court, ou une cornée trop plate. Les
			rayons lumineux arrivent, dès lors, virtuellement en arrière de la rétine. En fonction de son
			âge, un hypermétrope peut voir net aussi bien de loin que de près. Mais ceci se fait au prix
			d’un effort musculaire réflexe, totalement involontaire : l’accomodation</Text
		>
		<ArticleImage
			src={LunettePageOneIlluTwo}
			alt="Trajet des rayons lumineux dans un œil hypermétrope"
			class="max-w-xl"
		/>
		<Text
			>Avec le temps, et en fonction du degré d’hypermétropie, des symptômes tels que des maux de
			tête, un dédoublement des images à la fatigue, ou une vision floue, de loin et/ou de près,
			vont s’installer. Il conviendra alors de corriger l’hypermétropie.</Text
		>
		<Text
			>Les modes de correction sont les mêmes que pour la myopie : les lunettes, les lentilles ou la
			chirurgie réfractive.</Text
		>
		<Text>L’hypermétropie peut, elle aussi, s’associer à l’astigmatisme.</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Astigmatisme</Title>
		<Text
			>Pour comprendre l’astigmatisme, il faut imaginer l’œil en trois dimensions. Un œil non
			astigmate aurait une cornée plutôt sphérique, à l’image d’un ballon de football. Par contre,
			un œil astigmate aura une cornée dite « asphérique », grossièrement ovalaire, à l’image d’un
			ballon de rugby. En fonction de l’orientation de ce « ballon », l’astigmatisme sera qualifié
			de « direct » ou « d’indirect », avec des conséquences possibles sur la qualité visuelle.</Text
		>
		<Text
			>Une personne astigmate perçoit les images déformées, plus ou moins fortement selon le degré
			d’astigmatisme.</Text
		>
		<ArticleImage
			src={LunettePageOneIlluThree}
			alt="Trajet des rayons lumineux dans un œil astigmate"
			class="max-w-xl"
		/>
		<Text>Le plus souvent, l’astigmatisme est associé à une myopie ou une hypermétropie.</Text>
		<Text
			>Comme c’est le cas pour la myopie et l’hypermétropie, un astigmatisme symptomatique pourra
			être corrigé par le port de lunettes, de lentilles ou par la chirurgie réfractive.</Text
		>
	</section>
</DiseaseArticleLayout>
