<script lang="ts">
	import { Section, Title, Text, Button } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import {
		ChirurgieRefactivePageThreeHero,
		ChirurgieRefactivePageFourIlluOne,
		ChirurgieRefactivePageFourIlluTwo,
		ChirurgieRefactivePageFourIlluThree
	} from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/chirurgie-refractive" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Techniques opératoires : chirurgie implantaire</Title>
		<Text class="mt-4">
			A l'inverse des techniques laser qui sont superficielles, la chirurgie implantaire consiste à
			mettre en place un implant correcteur à l'intérieur de votre oeil.
		</Text>
		<Text class="mt-4">
			Diverses techniques opératoires sont  disponibles, afin de répondre au mieux à vos attentes en
			fonction de votre défaut visuel (myopie, hypermétropie, astigmatisme, presbytie). On
			différencie les chirurgies cornéennes (PKR, LASIK, SMILE, PresbyLASIK) des chirurgies
			intra-oculaires (PreLEX, implants phaques). Le choix entre ces différentes techniques sera
			effectué au décours de votre bilan pré-opératoire, après concertation avec votre chirurgien.
		</Text>
	</div>

	<Title level="h2">PRELEX (PREsbyopic Lens EXchange)</Title>
	<Text class="mt-4">
		La chirurgie PRELEX est une variante de la chirurgie de la cataracte. Il s’agit d’une opération
		intra-oculaire, qui vise à remplacer le cristallin transparent, non cataracté, par un implant
		corrigeant l'ensemble de vos défauts visuels. L’intervention est réalisée au bloc opératoire,
		sous anesthésie loco-régionale, sans douleur, avec une récupération visuelle en quelques jours. 
		La chirurgie du deuxième œil se déroulera quelques semaines après la première.
	</Text>

	<div class="mt-6 flex items-center">
		<figure class="mx-auto w-full max-w-lg overflow-hidden rounded-md">
			<img
				src={ChirurgieRefactivePageFourIlluOne}
				alt="Illustration de la chirurgie PRELEX"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
		<figure class="mx-auto w-full max-w-lg overflow-hidden rounded-md">
			<img
				src={ChirurgieRefactivePageFourIlluTwo}
				alt="Implant posé lors d'une chirurgie PRELEX"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>

	<Title class="mt-10" level="h2">Les implants phaques</Title>
	<Text class="mt-4">
		La chirurgie réfractive par implant phaque est une chirurgie intra-oculaire réservée aux
		patients qui ne peuvent bénéficier d’une chirurgie cornéenne laser, soit en raison d’une cornée
		trop fine, soit en raison d’un défaut visuel trop important (myopie dépassant -10 Dioptries, par
		exemple). Notons que la correction des fortes hypermétropies, non accessible en LASIK, est
		parfois également délicate par implant phaque, en cas de chambre antérieure étroite, comme on le
		voit souvent chez les hypermétropes.
	</Text>
	<figure class="mx-auto mt-6 w-full max-w-lg overflow-hidden rounded-md">
		<img
			src={ChirurgieRefactivePageFourIlluThree}
			alt="Schéma d'un implant phaque"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>
	<Text class="mt-4">
		L’intervention se déroule sous anesthésie générale au bloc opératoire. Elle consiste
		en l’implantation, via une micro-incision, d’un implant calculé sur mesure et glissé en avant du
		cristallin. Cette technique a l’avantage d’être réversible, mais nécessite une surveillance
		ophtalmologique régulière, en raison d'un risque accru de cataracte, d’hypertonie oculaire et
		d’altération de la cornée.
	</Text>
</Section>
