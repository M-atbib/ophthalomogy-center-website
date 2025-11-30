<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageThreeIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Déchirures de la rétine et lésions rhegmatogènes</Title>
			<Text class="mt-4">
				La rétine est une fine pellicule composée de dix couches qui reçoit, traite et transmet
				l’information visuelle au cerveau. Elle est en contact en avant avec le vitré et repose en
				arrière sur la choroïde.
			</Text>
		</div>
		<figure
			class="mx-auto w-full max-w-xl overflow-hidden rounded-md border border-light-grey/60 bg-primary-background shadow-sm"
		>
			<img
				src={RetineChirurgicalePageThreeIlluOne}
				alt="Schéma illustrant une déchirure rétinienne"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Title level="h2">Pourquoi la rétine peut-elle se déchirer ?</Title>
	<Text class="mt-4">
		Lors d’un décollement postérieur du vitré, celui-ci peut tirer sur la rétine et créer un trou ou
		une déchirure. Si du liquide intra-oculaire s’y engouffre, un décollement de rétine peut
		survenir.
	</Text>
	<TextWithCorners class="mt-6">
		Consultez en urgence en cas de myodésopsies nombreuses, d’éclairs lumineux persistants,
		d’amputation du champ visuel ou de baisse de vision.
	</TextWithCorners>
	<Text class="mt-4">
		L’examen de référence est le fond d’œil dilaté ; mieux vaut venir accompagné, la conduite étant
		vivement déconseillée après la dilatation pupillaire.
	</Text>

	<Title class="mt-10" level="h2">Facteurs favorisants</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Décollement postérieur du vitré ;</li>
		<li>Chirurgie de la cataracte récente ou ancienne ;</li>
		<li>Myopie forte ;</li>
		<li>Traumatisme oculaire ;</li>
		<li>Antécédents personnels de déchirure ou de trou.</li>
	</ul>
	<TextWithCorners class="mt-6">
		Un patient ayant déjà présenté une déchirure bénéficiera d’un fond d’œil dilaté à chaque
		contrôle.
	</TextWithCorners>

	<Title class="mt-10" level="h2">Lésions rhegmatogènes</Title>
	<Text class="mt-4">
		Certaines zones fragiles (palisades rétiniennes, givre périphérique…) favorisent l’apparition
		d’une déchirure. Selon leur aspect, un traitement préventif par laser peut être proposé.
	</Text>

	<Title class="mt-10" level="h2">Le fond d’œil dilaté</Title>
	<Text class="mt-4">
		En cas de symptômes, votre ophtalmologiste examine minutieusement la périphérie rétinienne après
		dilatation pupillaire. Dans d’autres contextes, il peut réaliser un examen sans mydriase ou
		recourir à la rétinophotographie.
	</Text>
	<TextWithCorners class="mt-6">
		Après instillation de collyres mydriatiques, la conduite est déconseillée pendant au moins une
		heure.
	</TextWithCorners>

	<Title class="mt-10" level="h2">Laser Argon : objectifs et déroulement</Title>
	<Text class="mt-4">
		Les petites déchirures asymptomatiques peuvent rester sous surveillance. En revanche,
		lorsqu’elles sont étendues et laissent passer le liquide vitreux, un barrage laser est réalisé
		tout autour pour prévenir un décollement de rétine.
	</Text>
	<Text class="mt-4">
		La séance a lieu au cabinet. Après anesthésie par collyres, un verre est appliqué sur l’œil et
		le traitement dure quelques minutes. De légères douleurs à type d’échauffement peuvent survenir,
		mais la puissance est ajustée pour rester confortable.
	</Text>
	<TextWithCorners class="mt-6">
		Dans la grande majorité des cas, le laser empêche l’apparition d’un décollement de rétine.
	</TextWithCorners>
</Section>
