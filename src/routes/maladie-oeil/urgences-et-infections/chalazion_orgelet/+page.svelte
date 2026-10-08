<script lang="ts">
	import {
		ArticleImage,
		DiseaseArticleLayout,
		OpeningImageSection,
		Text,
		TextWithCorners,
		Title
	} from '$lib';
	import { InfectionPageSevenIlluTwo, PaupieresPageThreeIlluTwo } from '$lib/assets';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Chalazion, Orgelet" {backHref}>
	<section>
		<Title level="h2">Chalazion</Title>
		<OpeningImageSection src={PaupieresPageThreeIlluTwo} alt="Chalazion de la paupière inférieure">
			<Text
				>Le chalazion est une pathologie affectant la ou les paupière(s) et qui peut survenir à tout
				âge. Il se manifeste par l’apparition d’une tuméfaction rouge et douloureuse dans
				l’épaisseur de la paupière ou sur son bord libre.</Text
			>
			<Text
				>Dans le langage courant, cette lésion est appelée « compère » ou encore, de façon inexacte,
				« orgelet ».</Text
			>
			<Text
				>C’est un motif extrêmement fréquent de consultation en urgence chez l’ophtalmologiste.</Text
			>
		</OpeningImageSection>
	</section>

	<section>
		<Title level="h3" as="h2">Mode d'apparition</Title>
		<Text
			>D’un point de vue anatomique, le chalazion se développe au niveau d’une glande de Meibomius.
			Ces glandes, au nombre de plusieurs dizaines, sont situées dans la partie profonde de la
			paupière, le tarse. Elles sont verticales et viennent s’ouvrir au niveau du bord de la
			paupière, afin de libérer, dans le film lacrymal, une substance huileuse nécessaire à sa
			stabilité : le meibum.</Text
		>
		<ArticleImage
			src={InfectionPageSevenIlluTwo}
			alt="Vue anatomique des glandes de la paupière"
			class="max-w-sm"
		/>
		<Text
			>Lorsqu’une des glandes de Meibomius se bouche, elle continue à fabriquer le meibum, qui
			s’accumule alors dans la longueur du "tube", ce qui entraîne sa dilatation et une inflammation
			locale. C’est le stade de chalazion inflammatoire.</Text
		>
		<Text>Plusieurs causes peuvent amener une glande de Meibomius à se boucher :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Toutes les pathologies génératrices d’inflammation à la surface de l’œil,</li>
			<li>Certaines maladies de la peau (la rosacée en particulier),</li>
			<li>Plus fréquemment, la blépharite meibomienne commune.</li>
		</ul>
		<Text
			>Chez les enfants, l’astigmatisme insuffisamment corrigé est avancé comme une cause de
			survenue de chalazions à répétition. Le mécanisme précis en est encore débattu, mais le port
			d’une correction optique peut participer à la résolution du trouble.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Évolution</Title>
		<Text
			>En dehors des douleurs et de la gène esthétique occasionnées, le chalazion peut évoluer de
			deux manières :</Text
		>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				Une fistulisation spontanée à la peau ou en profondeur, c’est-à-dire la création d’un chenal
				d’évacuation du contenu de la lésion. Elle peut alors se vider et disparaître.
			</li>
			<li>
				Un enkystement durable, avec la constitution d’un nodule, parfois volumineux, dans
				l’épaisseur de la paupière.
			</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Traitement</Title>
		<Text>Pour traiter un chalazion, il faut évidemment prendre en charge deux éléments :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				L’épisode inflammatoire, aigü. Pour cela, un traitement médical est proposé en première
				intention, avec des pommades et collyres anti-inflammatoires (corticoïdes locaux), de
				préférence après un avis ophtalmologique, afin d’éviter les contre-indications de ces
				substances. Il est absolument nécessaire d’y associer, une fois la rougeur disparue, des
				massages de la lésion afin de favoriser la vidange du kyste.
			</li>
		</ul>
		<Text
			>Dans certains cas, les massages ne sont pas suffisants et, si un volumineux kyste persiste,
			une ablation chirurgicale peut être nécessaire. Ce geste est réalisé, le plus souvent, au
			cabinet d’Ophtalmologique, en salle de soins dédiée, sous anesthésie locale. La paroi du kyste
			est alors enlevée, afin d’éviter la récidive.</Text
		>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				Il faut absolument comprendre la cause de survenue du chalazion et la traiter, le cas
				échéant.
			</li>
		</ul>
		<TextWithCorners>Ne pas traiter la cause entraîne un risque de récidive.</TextWithCorners>
		<Text
			>En cas de blépharite, la réalisation régulière des soins des paupières au long cours est
			indispensable. Sinon, une autre glande risque de se boucher.</Text
		>
		<Text
			>Chez les enfants, en cas de chalazions à répétition, une cycloplégie est parfois nécessaire.</Text
		>
		<Text tone="accent" weight="medium"
			>Devant toute lésion inflammatoire de la paupière, surtout si celle-ci n’évolue pas
			correctement sous traitement, il est conseillé de consulter rapidement un ophtalmologiste.</Text
		>
	</section>

	<section>
		<Title level="h2">Orgelet</Title>
		<Text
			>L'orgelet est une infection bactérienne du follicule d'un cil. Cette affection est rare.</Text
		>
		<Text
			>Le plus souvent, l'ablation du cil incriminé permet le drainage rapide du foyer infecté. Un
			traitement antiobiotique local vous sera également prescrit par votre ophtalmologiste.</Text
		>
		<ArticleImage
			src={InfectionPageSevenIlluTwo}
			alt="Vue de profil d'un orgelet"
			class="max-w-sm"
		/>
	</section>
</DiseaseArticleLayout>
