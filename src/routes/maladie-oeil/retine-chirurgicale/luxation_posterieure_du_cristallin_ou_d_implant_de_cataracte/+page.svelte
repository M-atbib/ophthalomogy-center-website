<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageEightIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Luxation postérieure du cristallin ou d’un implant</Title>
			<Text class="mt-4">
				Le cristallin est une lentille située derrière l’iris. Lorsqu’il est opacifié (cataracte),
				il est remplacé par un implant intra-oculaire. Dans certaines situations, le cristallin ou
				l’implant peut basculer en arrière dans la cavité vitréenne.
			</Text>
		</div>
		<figure
			class="mx-auto w-full max-w-xl overflow-hidden rounded-md border border-light-grey/60 bg-primary-background shadow-sm"
		>
			<img
				src={RetineChirurgicalePageEightIlluOne}
				alt="Luxation du cristallin dans le vitré"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Title level="h2">Causes et facteurs de risque</Title>
	<Text class="mt-4">
		La première cause est la chirurgie de la cataracte lorsqu’une rupture capsulaire entraîne la
		chute du cristallin. D’autres situations fragilisent le sac capsulaire ou la zonule :
		pseudo-exfoliation, syndrome de Marfan, traumatisme contusif, myopie forte.
	</Text>

	<Title class="mt-10" level="h2">Conséquences</Title>
	<Text class="mt-4">
		La vision chute car les rayons lumineux ne sont plus focalisés. Anatomiquement, le risque majeur
		est le décollement de rétine par traction sur le vitré, ainsi qu’une hypertonie oculaire (bloc
		pupillaire si la luxation est antérieure).
	</Text>
	<TextWithCorners class="mt-6">Une prise en charge précoce est préférable.</TextWithCorners>

	<Title class="mt-10" level="h2">Traitement chirurgical</Title>
	<Text class="mt-4">La prise en charge est réalisée par un chirurgien vitréo-rétinien.</Text>
	<div class="mt-4">
		<Title level="sub2">Vitrectomie</Title>
		<Text class="mt-2">
			On retire le vitré (vitrectomie) pour éliminer les tractions et accéder au cristallin ou à
			l’implant luxé.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Nettoyage</Title>
		<Text class="mt-2">
			Le cristallin résiduel est aspiré (phacophagie). Un implant luxé est retiré ou repositionné.
			Si la chirurgie de cataracte a été interrompue, les masses cristalliniennes restantes sont
			nettoyées.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Nouvel implant</Title>
		<Text class="mt-2">
			Plusieurs options existent selon l’état des tissus : injection dans le sulcus, fixation à
			l’iris ou à la sclère. L’objectif est d’assurer une stabilité durable.
		</Text>
	</div>
</Section>
