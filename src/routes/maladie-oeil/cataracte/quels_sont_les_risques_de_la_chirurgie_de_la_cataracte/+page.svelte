<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { CataractePageFiveIlluOne, CataractePageFiveIlluTwo } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/cataracte" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mb-12">
		<Title level="h1">Quels sont les risques de la chirurgie de la cataracte ?</Title>
		<Text class="mt-4">
			La chirurgie de la cataracte est une procédure très sécurisée, mais elle reste une
			intervention chirurgicale qui comporte des risques potentiels. Voici les principaux éléments à
			connaître.
		</Text>
	</div>

	<Title level="h2">Infection de l'œil : l'endophtalmie</Title>
	<Text class="mt-4">
		Complication post-opératoire la plus redoutée, elle survient en général dans les sept jours qui
		suivent l'intervention lorsque des germes pénètrent dans les milieux intra-oculaires malgré
		toutes les précautions prises.
	</Text>
	<figure
		class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-xl overflow-hidden rounded-md"
	>
		<img
			src={CataractePageFiveIlluOne}
			alt="Illustration d'un œil examiné après une chirurgie"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Text class="mt-4 font-semibold"
		>En période post-opératoire, vous devez absolument consulter votre ophtalmologiste en urgence en
		cas :</Text
	>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>D'œil rouge ;</li>
		<li>D'œil douloureux ;</li>
		<li>De sécrétions purulentes ;</li>
		<li>De baisse de vision anormale.</li>
	</ul>
	<Text class="mt-4 font-semibold">Tout est mis en oeuvre pour éviter cette complication :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Bloc opératoire en milieu stérile avec air filtré ;</li>
		<li>Désinfection rigoureuse de l'œil, des paupières et des cils ;</li>
		<li>Instillation de collyres antiseptiques avant l'intervention ;</li>
		<li>Utilisation d'instruments opératoires stériles ;</li>
		<li>Injection d'antibiotiques dans l'œil en fin d'intervention ;</li>
		<li>Collyres antibiotiques post-opératoires plusieurs fois par jour.</li>
	</ul>
	<TextWithCorners class="mt-6">
		Le traitement d'une endophtalmie est une urgence : injections intra-oculaires d'antibiotiques,
		parfois complétées par une antibiothérapie intraveineuse ou une vitrectomie.
	</TextWithCorners>

	<Title class="mt-10" level="h2">Déchirure et décollement de rétine</Title>
	<Text class="mt-4">
		Le risque de déchirure ou de décollement de rétine reste augmenté après une chirurgie de
		cataracte et peut survenir plusieurs années après l'intervention.
	</Text>
	<Text class="mt-4 font-semibold">Signes d'alerte :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Mouches volantes persistantes ;</li>
		<li>Éclairs lumineux répétés ;</li>
		<li>Voile dans le champ visuel ;</li>
		<li>Baisse de vision.</li>
	</ul>
	<Text class="mt-4">
		Une déchirure simple peut être traitée au laser, tandis qu'un décollement nécessite une prise en
		charge chirurgicale.
	</Text>

	<Title class="mt-10" level="h2">Rupture capsulaire postérieure</Title>
	<Text class="mt-4">
		Durant la chirurgie, une fragilité ou un aléa peut provoquer la rupture du sac cristallinien.
		Selon la situation, la réparation est réalisée immédiatement ou lors d'une seconde intervention.
	</Text>
	<Text class="mt-4">
		Dans ce cas, l'implant intra-oculaire peut être fixé sur un autre support afin d'assurer une
		stabilité optimale.
	</Text>

	<Title class="mt-10" level="h2">Décompensation de la cornée</Title>
	<Text class="mt-4">
		La phaco-émulsification utilise des ultrasons, ce qui représente un traumatisme pour
		l'endothélium cornéen.
	</Text>
	<TextWithCorners class="mt-6">
		Une diminution du nombre de cellules endothéliales existe toujours après une chirurgie de
		cataracte, même lorsque la quantité d'ultrasons est minimale.
	</TextWithCorners>
	<Text class="mt-4">Les complications sont plus probables :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Si la cataracte était très dense et a nécessité beaucoup d'énergie ;</li>
		<li>En cas de fragilité cornéenne préexistante (cornea guttata, dystrophie de Fuchs).</li>
	</ul>
	<Text class="mt-4">
		Lorsque l'endothélium ne pompe plus suffisamment l'eau, un œdème cornéen peut apparaître et
		altérer la vision.
	</Text>

	<figure class="mx-auto mt-8 w-full max-w-xl overflow-hidden rounded-md">
		<img
			src={CataractePageFiveIlluTwo}
			alt="Illustration des structures oculaires"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<Text class="mt-4">
		Le dépistage de la cornea guttata, de la dystrophie de Fuchs ou de toute atteinte endothéliale
		fait partie du bilan pré-opératoire.
	</Text>

	<Title class="mt-10" level="h2">Risques liés à l'anesthésie</Title>
	<Text class="mt-4">
		Ils varient selon la technique retenue. L'anesthésie péri-bulbaire expose notamment au risque
		d'hématome orbitaire ou de neuropathie optique, sujets abordés lors de la consultation
		pré-anesthésique.
	</Text>

	<Title class="mt-10" level="h2">Autres complications possibles</Title>
	<Title class="mt-4" level="sub2">Œdème maculaire post-opératoire (œdème d'Irvine-Gass)</Title>
	<Text class="mt-3">
		Cette complication peut expliquer une récupération visuelle incomplète entre 4 et 12 semaines
		après la chirurgie. Elle régresse généralement avec les traitements anti-inflammatoires mais
		peut devenir chronique dans environ 1 % des cas.
	</Text>
	<Title class="mt-6" level="sub2">Sécheresse et troubles de la surface oculaire</Title>
	<Text class="mt-3">
		L'inflammation post-opératoire peut majorer une sécheresse préexistante. Les collyres
		lubrifiants suffisent le plus souvent, mais certaines situations nécessitent une prescription
		plus longue.
	</Text>
	<Title class="mt-6" level="sub2">Hémorragie choroïdienne expulsive</Title>
	<Text class="mt-3">
		Complication peropératoire exceptionnelle, elle serait liée aux variations de pression
		intra-oculaire pendant la chirurgie. Elle impose d'interrompre immédiatement l'intervention et
		de suturer l'œil. Il s'agit d'un incident grave pouvant laisser des séquelles si l'hématome ne
		se résorbe pas.
	</Text>
</Section>
