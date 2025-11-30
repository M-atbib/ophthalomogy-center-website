<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { ChirurgieRefactivePageOneImgOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/chirurgie-refractive" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Les bonnes raisons de bénéficier d'une chirurgie réfractive</Title>
			<Text class="mt-4">
				Vous ne voulez plus porter de lunettes ? La chirurgie réfractive est probablement la solution.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-3xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={ChirurgieRefactivePageOneImgOne}
				alt="Patiente heureuse après une chirurgie réfractive"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable">
	<Title level="h2">Une contrainte permanente</Title>
	<Text class="mt-4">
		Vous vivez le port de vos lunettes comme une contrainte quotidienne.  La qualité visuelle est
		souvent mise à mal en raison de la non transparence de vos verres (verres sales, embués ou
		rayés) ou d’une usure de la monture (branches ou patins desserrés). Finies les contraintes, la
		chirurgie réfractive vous permet une parfaite indépendance.
	</Text>

	<Title class="mt-8" level="h2">Une pratique sportive libérée</Title>
	<Text class="mt-4">
		Que vous soyez un(e) sportif(ve) occasionnel(le) ou un(e) athlète confirmé(e),  les lunettes
		sont une entrave incontestable à la pratique de vos loisirs. Vous en avez assez de ne rien voir
		à la piscine ? Vous en avez assez de vos lunettes qui bougent lorsque vous courez ? De la buée
		dans votre masque au ski ? La chirurgie réfractive vous permet de profiter pleinement de vos
		activités sportives.
	</Text>

	<Title class="mt-8" level="h2">Une démarche esthétique</Title>
	<Text class="mt-4">
		Conscient(e) de l’importance d’une bonne vision, vous n’êtes cependant pas prêt(e) à
		compromettre votre apparence physique. Que vos lunettes vous soient indispensables depuis
		l’enfance ou qu’elles s’imposent à vous vers l’âge de 45ans (pour corriger une presbytie), nous
		pouvons vous proposer une alternative satisfaisante sur le plan esthétique.
	</Text>

	<Title class="mt-8" level="h2">Votre capital lentille est épuisé ?</Title>
	<Text class="mt-4">
		Vous ressentir de plus en plus un inconfort avec vos lentilles après une journée passée sur
		écran ? Votre vision se brouille en fin de journée ? Vous ne tolérez probablement plus vos
		lentilles de contact. La chirurgie réfractive est une alternative au retour aux lunettes.
	</Text>

	<Title class="mt-8" level="h2">Un bon investissement</Title>
	<Text class="mt-4">
		Le renouvellement de vos lunettes et lentilles est fréquent. Le coût de ces dispositifs de
		correction est important, lorsqu'on fait le cumul sur plusieurs années. Réaliser une chirurgie
		réfractive constitue souvent une dépense qui rapporte à long terme.
	</Text>

	<Title class="mt-8" level="h2">Une inaptitude professionnelle</Title>
	<Text class="mt-4">
		Vous ne répondez pas à certains critères d’aptitude visuelle réglementaire pour exercer votre
		profession (concours de gendarmerie, pompier…) ? Une correction laser peut parfois vous
		permettre de faire le métier que vous désirez.
	</Text>

	<Title class="mt-8" level="h2">Parce que le confort n'attend pas</Title>
	<Text class="mt-4">
		L'intervention vous tente ? Vous réfléchissez depuis longtemps ? Sachez que plus vous attendez,
		plus le nombre d'années passées sans lunettes sera court. Profitez de votre nouvelle vue dès
		maintenant et lancez-vous !
	</Text>
	<TextWithCorners class="mt-6">
		Vous vous reconnaissez ? N'hésitez plus et venez rencontrer nos experts en chirurgie réfractive
		!
	</TextWithCorners>
</Section>
