<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageSevenIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Hémorragie du vitré</Title>
			<Text class="mt-4">
				Une hémorragie du vitré correspond à la présence de sang dans la cavité vitréenne. Elle
				provoque une baisse de vision brutale, des taches sombres ou une impression de voile.
			</Text>
		</div>
		<figure
			class="mx-auto w-full max-w-xl overflow-hidden rounded-md border border-light-grey/60 bg-primary-background shadow-sm"
		>
			<img
				src={RetineChirurgicalePageSevenIlluOne}
				alt="Illustration d'une hémorragie du vitré"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Title level="h2">Causes fréquentes</Title>
	<Text class="mt-4">
		La rétinopathie diabétique proliférante reste la cause principale. D’autres étiologies :
		occlusion veineuse rétinienne, déchirure ou décollement de rétine, traumatisme, inflammation,
		néo-vaisseaux dans la DMLA ou les occlusions artérielles.
	</Text>

	<Title class="mt-10" level="h2">Symptômes</Title>
	<Text class="mt-4">
		L’hémorragie du vitré se manifeste par une pluie de suie, un voile mobile, voire une perte
		profonde de vision si la cavité est très remplie. Elle est indolore.
	</Text>

	<Title class="mt-10" level="h2">Prise en charge</Title>
	<Text class="mt-4">
		Une échographie oculaire est réalisée pour éliminer un décollement de rétine. Le traitement
		dépend de la cause : laser, injections intra-vitréennes, ou chirurgie vitréo-rétinienne si le
		sang ne se résorbe pas.
	</Text>
	<TextWithCorners class="mt-6">
		Lorsque la vision est très basse ou qu’un décollement de rétine est associé, une vitrectomie est
		indiquée.
	</TextWithCorners>

	<Title class="mt-10" level="h2">Après l’intervention</Title>
	<Text class="mt-4">
		La vision se rétablit progressivement, surtout si la macula n’a pas été atteinte. Un suivi
		régulier est indispensable pour traiter la cause initiale et prévenir les récidives.
	</Text>
</Section>
