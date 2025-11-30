<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageTwoIlluOne, RetineChirurgicalePageTwoIlluTwo } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="[&>*+*]:mt-4 lg:w-7/12">
			<Title level="h1">Décollement du vitré</Title>
			<Text>
				Le vitré est un gel transparent occupant 80 % du volume intra-oculaire. Composé de collagène et
				d’acide hyaluronique, il laisse passer la lumière jusqu’à la rétine.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={RetineChirurgicalePageTwoIlluOne}
				alt="Structure du vitré"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="[&>*+*]:mt-8">
		<div class="[&>*+*]:mt-4">
			<Title level="h2">Décollement postérieur du vitré (DPV)</Title>
			<Text>
				Avec l’âge, le vitré central peut se liquéfier (synchisis) ou se condenser (synérèses). Ces
				remaniements tirent sur la paroi vitréenne – la hyaloïde – qui finit par se détacher de la rétine.
			</Text>
			<figure class="mx-auto w-full max-w-2xl overflow-hidden rounded-md">
				<img
					src={RetineChirurgicalePageTwoIlluTwo}
					alt="Décollement postérieur du vitré"
					class="h-full w-full object-cover"
					loading="lazy"
				/>
			</figure>
			<TextWithCorners>
				La consistance du vitré se modifie naturellement avec l’âge : le DPV est donc fréquent et souvent
				idiopathique.
			</TextWithCorners>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Facteurs favorisants</Title>
			<ul class="list-disc [&>li+li]:mt-2 pl-5">
				<li>Chirurgie de la cataracte ;</li>
				<li>Antécédents d’uvéite ;</li>
				<li>Myopie forte ;</li>
				<li>Traumatisme oculaire.</li>
			</ul>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Conséquences</Title>
			<Text>
				Le plus souvent, il s’agit d’un phénomène bénin ne nécessitant aucun traitement. Il se manifeste
				par des mouches volantes (myodésopsies) correspondant à l’ombre des synérèses projetée sur la
				ré‑tine.
			</Text>
			<TextWithCorners>
				En revanche, le DPV peut entraîner une déchirure rétinienne puis un décollement de rétine.
			</TextWithCorners>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Signes d’alerte</Title>
			<Text>Consultez en urgence si vous observez :</Text>
			<ul class="list-disc [&>li+li]:mt-2 pl-5">
				<li>Augmentation brutale des mouches volantes ;</li>
				<li>Éclairs lumineux persistants ;</li>
				<li>Amputation du champ visuel ;</li>
				<li>Baisse de vision.</li>
			</ul>
			<Text>
				Un fond d’œil dilaté sera réalisé pour éliminer toute complication. Après dilatation, ne conduisez
				pas : prévoyez un accompagnant.
			</Text>
			<Text>
				Chez les patients diabétiques, un DPV peut aussi se compliquer d’une hémorragie intra-oculaire. Là
				encore, un examen ophtalmologique rapide est nécessaire.
			</Text>
		</div>
	</div>
</Section>
