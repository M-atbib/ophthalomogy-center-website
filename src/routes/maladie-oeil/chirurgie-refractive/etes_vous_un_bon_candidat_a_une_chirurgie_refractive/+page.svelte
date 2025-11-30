<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { ChirurgieRefactive, ChirurgieRefactivePageTwoImgOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/chirurgie-refractive" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Êtes-vous un bon candidat à une chirurgie réfractive ?</Title>
			<Text class="mt-4">
				Tout le monde peut-il être opéré ? Suis-je trop jeune ou trop vieux pour envisager cette
				intervention ? Le [Nom de Clinique] répond à toutes vos questions !
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-3xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={ChirurgieRefactivePageTwoImgOne}
				alt="Bloc opératoire de chirurgie réfractive"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable">
	<Title level="h2">Une chirurgie qui permet de traiter tous les défauts visuels</Title>
	<Text class="mt-4">
		La chirurgie réfractive, qu’elle soit cornéenne ou intra-oculaire, peut couvrir la
		quasi-totalité des défauts visuels.
	</Text>
	<TextWithCorners class="mt-6">
		Que vous soyez myope, hypermétrope, astigmate ou presbyte, des solutions réfractives existent.
	</TextWithCorners>

	<Title class="mt-10" level="h2">
		Avant d'envisager toute chirurgie réfractive, il faut s'assurer de l'absence de pathologie
		oculaire.
	</Title>
	<Text class="mt-4">
		Avant toute chose, quel que soit votre trouble réfractif, votre chirurgien s’attachera à
		réaliser un bilan médical exhaustif, afin d’éliminer toute pathologie oculaire déclarée ou
		méconnue (kératocône fruste, par exemple). Ce bilan sera garant de l’innocuité de la chirurgie
		et vous assurera une prise en charge sécurisée. Pour cela votre chirurgien réalisera :
	</Text>
	<Text class="mt-4">Il comprend :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Un bilan visuel approfondi ;</li>
		<li>Un fond d'œil dilaté ;</li>
		<li>Une cycloplégie ;</li>
		<li>Une analyse topographique de la cornée ;</li>
		<li>Une mesure de l'épaisseur cornéenne ;</li>
		<li>Une analyse de la pression intra-oculaire ;</li>
		<li>Un examen biomicroscopique avec test à la fluorescéine.</li>
	</ul>

	<Title class="mt-10" level="h2">La réfraction doit être stable</Title>
	<Text class="mt-4">
		Afin d’optimiser la pérennité du résultat de l’opération, il faudra s’assurer de la stabilité de
		votre défaut visuel. En effet, si votre amétropie évolue (une myopie qui progresse encore,
		par exemple), le résultat visuel post-opératoire risque d'être moins durable.
	</Text>
	<TextWithCorners class="mt-6">
		Pensez à amener, lors du bilan pré-opératoire, vos anciennes lunettes et ordonnances, afin que
		nous puissions nous assurer de la stabilité de votre correction.
	</TextWithCorners>

	<Title class="mt-10" level="h2">Une solution adaptée à chaque âge</Title>
	<Text class="mt-4">
		Les techniques varient selon l'anomalie réfractive de votre oeil, mais aussi selon votre âge.
	</Text>
	<div class="mt-6 grid gap-6 lg:grid-cols-3">
		<div class="border-light-grey/60 rounded-3xl border p-6 shadow-sm">
			<Title level="sub2">25 - 40 ans</Title>
			<Text class="mt-3">Solutions laser privilégiées : PKR, LASIK, SMILE.</Text>
		</div>
		<div class="border-light-grey/60 rounded-3xl border p-6 shadow-sm">
			<Title level="sub2">40 - 55 ans</Title>
			<Text class="mt-3">
				Techniques laser permettant de voir de près sans lunettes : presbyLASIK, monovision…
			</Text>
		</div>
		<div class="border-light-grey/60 rounded-3xl border p-6 shadow-sm">
			<Title level="sub2">Plus de 55 ans</Title>
			<Text class="mt-3">
				Solutions laser (presbyLASIK, bascule…) ou chirurgie intra-oculaire implantaire (PRELEX,
				bascule…).
			</Text>
		</div>
	</div>
	<TextWithCorners class="mt-6">
		Au terme du bilan pré-opératoire, votre chirurgien vous proposera la technique la plus adaptée à
		votre profil. À chaque défaut visuel, âge et patient sa solution personnalisée.
	</TextWithCorners>
</Section>
