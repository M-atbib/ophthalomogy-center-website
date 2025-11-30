<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageFourIlluOne, RetineChirurgicalePageFourIlluTwo } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="[&>*+*]:mt-4 lg:w-7/12">
			<Title level="h1">Décollement de rétine</Title>
			<Text>
				Fine pellicule composée de dix couches, la rétine tapisse l’arrière de l’œil, accolée au vitré
				en avant et reposant sur la choroïde en arrière. Quand elle se soulève de son support, on parle de
				décollement de rétine.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={RetineChirurgicalePageFourIlluOne}
				alt="Illustration d'un décollement de rétine"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="[&>*+*]:mt-8">
		<div class="[&>*+*]:mt-4">
			<Title level="h2">Principales causes</Title>
			<Title level="sub2">Décollement rhegmatogène</Title>
			<Text>
				Une ou plusieurs déchirures permettent au liquide intra-oculaire de s’infiltrer et de soulever la
				ré‑tine. C’est la forme la plus fréquente.
			</Text>
			<Title level="sub2">Décollement tractionnel</Title>
			<Text>
				Observé notamment dans les diabètes évolués : le vitré se rétracte et tire sur la rétine jusqu’à la
				décoller.
			</Text>
			<Title level="sub2">Décollement exsudatif</Title>
			<Text>
				La rétine est soulevée par un liquide produit en profondeur (pathologies inflammatoires ou
				tumorales) sans déchirure ni traction.
			</Text>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Facteurs de risque (forme rhegmatogène)</Title>
			<ul class="list-disc [&>li+li]:mt-2 pl-5">
				<li>Chirurgie de la cataracte, récente ou ancienne ;</li>
				<li>Myopie forte ;</li>
				<li>Traumatisme oculaire ;</li>
				<li>Vitréorétinopathies ou maladies rétiniennes ;</li>
				<li>Antécédents familiaux ;</li>
				<li>Antécédents personnels de déchirure ou de décollement.</li>
			</ul>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Symptômes</Title>
			<Text>Ils associent :</Text>
			<ul class="list-disc [&>li+li]:mt-2 pl-5">
				<li>Signes liés à la déchirure : éclairs lumineux, mouches volantes ;</li>
				<li>Signes liés au décollement : scotome progressif, baisse de vision rapide ou graduelle.</li>
			</ul>
			<TextWithCorners>
				En cas d’apparition de ces symptômes, présentez-vous en urgence au cabinet pour vérifier la rétine.
			</TextWithCorners>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Traitement</Title>
			<TextWithCorners>Le décollement de rétine est une urgence chirurgicale.</TextWithCorners>
			<Text>
				L’objectif est de réappliquer la rétine décollée. La technique dépend de la localisation, du
				nombre de déchirures, de l’âge, du cristallin et de l’ancienneté du décollement.
			</Text>
			<Title level="sub2">Chirurgie interne (vitrectomie)</Title>
			<Text>
				Le vitré est aspiré pour supprimer les tractions puis la rétine est traitée de l’intérieur.
			</Text>
			<Title level="sub2">Chirurgie externe</Title>
			<Text>
				Une bande de silicone ou une éponge est suturée sur la sclère pour plaquer la rétine contre la
				choroïde.
			</Text>
			<figure class="mx-auto w-full max-w-2xl overflow-hidden rounded-md">
				<img
					src={RetineChirurgicalePageFourIlluTwo}
					alt="Techniques internes et externes pour traiter un décollement"
					class="h-full w-full object-cover"
					loading="lazy"
				/>
			</figure>
			<Title level="sub2">Laser, cryothérapie et tamponnement</Title>
			<Text>
				Les déchirures sont cerclées par laser ou cryothérapie pour souder les couches rétiniennes. Un gaz
				(expansif) ou de l’huile de silicone peut être injecté pour maintenir la rétine en place.
			</Text>
			<Text>
				Une position post-opératoire précise (côté droit/gauche, ventre, assis, alternance…) est
				nécessaire aussi longtemps que votre chirurgien l’indique.
			</Text>
			<TextWithCorners>
				Tant qu’il reste du gaz, l’avion et les séjours en altitude sont formellement contre-indiqués.
			</TextWithCorners>
			<Text>
				Dans certains cas, une chirurgie de la cataracte est réalisée dans le même temps opératoire pour
				faciliter l’intervention et prévenir l’opacification future du cristallin.
			</Text>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Risques et suivi</Title>
			<Text>
				Malgré une prise en charge précoce, des séquelles visuelles peuvent persister. Les complications
				possibles incluent :
			</Text>
			<ul class="list-disc [&>li+li]:mt-2 pl-5">
				<li>Cataracte (souvent rapide après vitrectomie) ;</li>
				<li>Récidive du décollement, précoce ou tardive ;</li>
				<li>Membrane épi-rétinienne secondaire ;</li>
				<li>Œdème maculaire d’Irvine-Gass ;</li>
				<li>Endophtalmie ;</li>
				<li>Hypertonie intra-oculaire.</li>
			</ul>
			<TextWithCorners>
				Un suivi régulier est indispensable toute la vie durant, avec consultation immédiate au moindre
				doute.
			</TextWithCorners>
		</div>
	</div>
</Section>
