<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageSixIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Trou maculaire</Title>
			<Text class="mt-4">
				Un trou maculaire est une solution de continuité au niveau de la zone centrale de la rétine.
				Il entraîne une baisse d’acuité visuelle et des métamorphopsies (lignes ondulées).
			</Text>
		</div>
		<figure
			class="mx-auto w-full max-w-xl overflow-hidden rounded-md border border-light-grey/60 bg-primary-background shadow-sm"
		>
			<img
				src={RetineChirurgicalePageSixIlluOne}
				alt="Illustration d'un trou maculaire"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Title level="h2">Causes et symptômes</Title>
	<Text class="mt-4">
		La plupart des trous maculaires sont liés à l’évolution du vitré. En vieillissant, ce gel se
		contracte et peut adhérer fortement à la macula, provoquant la déchirure. Ils sont plus
		fréquents chez les femmes et les myopes et touchent un seul œil dans 90 % des cas.
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Baisse de vision centrale, notamment en lecture ;</li>
		<li>Déformation des lignes droites ;</li>
		<li>Scotome central (tache sombre) ;</li>
		<li>Parfois vision double.</li>
	</ul>

	<Title class="mt-10" level="h2">Diagnostic</Title>
	<Text class="mt-4">
		L’examen du fond d’œil et l’OCT (tomographie par cohérence optique) confirment le diagnostic et
		permettent de classer le trou maculaire (stades 1 à 4) pour orienter le traitement.
	</Text>

	<Title class="mt-10" level="h2">Traitement</Title>
	<Text class="mt-4">
		La prise en charge est chirurgicale. Elle consiste en une vitrectomie avec pelage de la membrane
		limitante interne pour libérer les tractions. Un tamponnement par gaz est souvent associé : il
		favorise la fermeture du trou.
	</Text>
	<TextWithCorners class="mt-6">
		Il est parfois demandé de garder la tête penchée vers l’avant quelques jours pour optimiser
		l’action du gaz.
	</TextWithCorners>

	<Title class="mt-10" level="h2">Résultats</Title>
	<Text class="mt-4">
		La fermeture anatomique est obtenue dans plus de 90 % des cas. L’amélioration visuelle dépend de
		la taille du trou et de l’ancienneté des symptômes. Une prise en charge précoce offre les
		meilleures chances de succès.
	</Text>
</Section>
