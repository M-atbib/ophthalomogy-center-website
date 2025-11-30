<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageOneIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Corps flottants</Title>
			<Text class="mt-4">
				Les myodésopsies correspondent à ces « mouches volantes » ou « points noirs » qui semblent
				danser devant les yeux. Elles suivent les mouvements du regard avec un léger décalage et
				sont souvent plus visibles sur fond clair.
			</Text>
			<TextWithCorners class="mt-6"
				>C’est un symptôme très fréquent, tout âge confondu.</TextWithCorners
			>
		</div>
		<figure
			class="mx-auto w-full max-w-xl overflow-hidden rounded-md border border-light-grey/60 bg-primary-background shadow-sm"
		>
			<img
				src={RetineChirurgicalePageOneIlluOne}
				alt="Illustration des corps flottants"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Title level="h2">Quand consulter en urgence ?</Title>
	<Text class="mt-4">
		Si les corps flottants apparaissent brutalement ou s’intensifient, surtout s’ils s’accompagnent
		d’éclairs lumineux (phosphènes), d’une amputation du champ visuel ou d’une baisse de vision, il
		est impératif de consulter rapidement afin de dépister une déchirure ou un décollement de
		rétine.
	</Text>

	<Title class="mt-10" level="h2">Origine des corps flottants</Title>
	<Text class="mt-4">
		Dans la majorité des cas, ils sont liés à un décollement postérieur du vitré. Les condensations
		du gel vitréen projettent une ombre mobile sur la rétine – un phénomène généralement bénin.
	</Text>
	<Text class="mt-4">
		Parfois, il s’agit de cellules sanguines flottant dans le vitré après une déchirure rétinienne
		ou la présence de néo-vaisseaux (diabète, occlusion veineuse). Plus rarement, les myodésopsies
		témoignent d’une inflammation ou d’une infection intra-oculaire.
	</Text>

	<Title class="mt-10" level="h2">Prise en charge</Title>
	<TextWithCorners class="mt-4"
		>Les corps flottants bénins ne nécessitent aucun traitement.</TextWithCorners
	>
	<Text class="mt-4">
		Lorsque les condensations sont très gênantes, un traitement au laser ou une vitrectomie peuvent
		être envisagés après discussion avec l’ophtalmologiste, compte tenu des risques associés.
	</Text>

	<Title class="mt-10" level="h2">Évolution</Title>
	<Text class="mt-4">
		Les myodésopsies liées au décollement du vitré ne disparaissent pas, mais leur gêne diminue avec
		le temps. Il est normal de les percevoir encore plusieurs mois après le diagnostic.
	</Text>
</Section>
