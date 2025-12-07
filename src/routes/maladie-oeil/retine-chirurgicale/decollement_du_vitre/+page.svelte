<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageTwoIlluOne, RetineChirurgicalePageTwoIlluTwo } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Décollement du vitré</Title>
	</div>

	<Title level="h2">Le gel vitréen</Title>
	<Text>
		Le terme « vitré », ou « corps vitréen », désigne le gel qui occupe la majeure partie du volume
		intra-oculaire (80% environ). Il occupe la partie postérieure de l'oeil.
	</Text>
	<Text>
		Ce gel est transparent et composé de fibres de collagène et d’acide hyaluronique. La disposition
		de ces molécules est très particulière et permet au vitré d'être parfaitement transparent et de
		n'opposer aucun obstacle au passage de la lumière vers la rétine.
	</Text>
	<Text>De manière schématique, il faut considérer le corps vitréen comme une poche :</Text>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Sa paroi, ou « hyaloïde », est adhérente aux structures oculaires qui l’entourent : le
			cristallin, en avant, la rétine et ses différents éléments en arrière.
		</li>
		<li>Son centre est le vitré central.</li>
	</ul>

	<figure class=" mx-auto w-full max-w-lg overflow-hidden">
		<img
			src={RetineChirurgicalePageTwoIlluOne}
			alt="Structure du vitré"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="h2">Décollement postérieur du vitré (DPV)</Title>
	<Text>Avec le temps, le vitré central peut être le siège de :</Text>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Zones de liquéfaction = « synchisis vitréens » ;</li>
		<li>Zones de condensation = « synérèses vitréennes ».</li>
	</ul>
	<Text
		>Ces modifications de l’architecture vitréenne vont entraîner, mécaniquement, une attraction de
		la paroi du vitré, qui peut alors se détacher de la rétine.</Text
	>

	<figure class="mx-auto w-full max-w-lg overflow-hidden rounded-md">
		<img
			src={RetineChirurgicalePageTwoIlluTwo}
			alt="Décollement postérieur du vitré"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<TextWithCorners>
		La consistance du vitré se modifie avec l'âge ce qui entraîne son détachement de la rétine.
		C'est ce que l'on appelle le décollement postérieur du vitré.
	</TextWithCorners>

	<Title level="h2">Facteurs favorisants</Title>
	<Text>
		Le décollement postérieur du vitré est le plus souvent lié à l'âge, sans cause particulière. On
		parle de DPV idiopathique.
	</Text>

	<Text>D'autres situations facilitent sa survenue :</Text>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Une chirurgie de la cataracte récente ou ancienne ;</li>
		<li>Des antécédents d’uvéite ;</li>
		<li>La myopie forte ;</li>
		<li>Un traumatisme oculaire.</li>
	</ul>
	<Title level="h2">Conséquences possibles du décollement postérieur du vitré</Title>
	<TextWithCorners>
		Dans la plupart des cas, il s’agit d’une affection bénigne, qui ne nécessite pas de traitement
		particulier.
	</TextWithCorners>
	<Text
		>Lorsque le décollement se produit, les patients perçoivent des mouches volantes, corps
		flottants, ou « myodésopsies », qui correspondent à l’ombre projetée par les zones de
		condensations du vitré (ou synérèses) sur la rétine.</Text
	>
	<TextWithCorners>
		Malheureusement, le décollement postérieur du vitré peut aussi provoquer certaines complications
		rétiniennes.
	</TextWithCorners>
	<Text
		>En se détachant de la rétine, il peut entraîner une déchirure qui, lorsque du liquide
		intra-oculaire s'y engouffre, peut se compliquer d'un décollement de la rétine.</Text
	>

	<Text>Les signes suivants doivent vous amener à consulter votre ophtalmologiste en urgence :</Text
	>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Augmentation importante du nombre de mouches volantes ;</li>
		<li>Présence d'éclairs lumineux, persistant plusieurs heures ;</li>
		<li>Amputation du champ de vision ;</li>
		<li>Baisse de vision.</li>
	</ul>
	<Text>
		Il peuvent être des signes de complications du décollement postérieur du vitré et, pour les
		rechercher, votre ophtalmologiste réalisera un fond d'oeil dilaté.
	</Text>
	<Text>
		La réalisation d'un fond d'oeil dilaté vous empêche de conduire après votre rendez-vous. Mieux
		vaut donc venir accompagné(e)!
	</Text>
	<Text
		>Le décollement postérieur du vitré peut également, en particulier chez les patients
		diabétiques, occasionner un saignement intra-oculaire, plus ou moins important. Là encore, un
		examen ophtalmologique en urgence est recommandé.</Text
	>
	<Text
		>Lorsque le décollement postérieur du vitré est lent, ou si une adhérence forte existe entre la
		hyaloïde et la macula (centre de fixation de la rétine), des complications mécaniques peuvent se
		produire : le syndrome de traction vitréo-maculaire et ses conséquences.
	</Text>
</Section>
