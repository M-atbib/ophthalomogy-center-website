<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageNineIlluTwo } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Membrane épi-rétinienne</Title>
			<Text class="mt-4">
				Une membrane épi-rétinienne (MER), ou membrane épi-maculaire, est une fine membrane fibreuse
				qui s’accroche à la surface de la rétine, le plus souvent au niveau de la macula. Ses
				propriétés contractiles modifient la forme de cette zone centrale, entraînant des troubles
				visuels.
			</Text>
		</div>
		<figure
			class="mx-auto w-full max-w-xl overflow-hidden rounded-md border border-light-grey/60 bg-primary-background shadow-sm"
		>
			<img
				src={RetineChirurgicalePageNineIlluTwo}
				alt="Illustration d'une membrane épi-rétinienne"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Title level="h2">Facteurs de risque</Title>
	<Text class="mt-4">
		La majorité des MER sont idiopathiques. Elles peuvent aussi apparaître après une déchirure
		rétinienne, un traitement laser, une inflammation chronique, un décollement de rétine ou toute
		autre affection rétinienne.
	</Text>

	<Title class="mt-10" level="h2">Symptômes</Title>
	<Text class="mt-4">
		La membrane se développe lentement. Au début, elle est asymptomatique et n’est détectée qu’à
		l’examen ophtalmologique. Avec le temps, sa contractilité entraîne :
	</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Baisse d’acuité visuelle ;</li>
		<li>Métamorphopsies (lignes ondulées) ;</li>
		<li>Macropsies (impression de grossissement) ;</li>
		<li>Parfois diplopie.</li>
	</ul>

	<Title class="mt-10" level="h2">Traitement</Title>
	<TextWithCorners class="mt-4">Le traitement est exclusivement chirurgical.</TextWithCorners>
	<Text class="mt-4">
		Une vitrectomie est réalisée, suivie du pelage minutieux de la membrane. La décision d’opérer se
		fonde sur l’importance de la gêne visuelle et la situation clinique de chaque patient.
		L’amélioration de la vue est partielle et progressive : la récupération est évaluée plusieurs
		mois après l’intervention.
	</Text>
</Section>
