<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { ChirurgieRefactivePageThreeHero } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/chirurgie-refractive" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Techniques opératoires : chirurgie laser</Title>
			<Text class="mt-4">
				PKR, LASIK, SMILE, PresbyLASIK : le Cabinet d'Ophtalmologie des Flandres maîtrise toutes les
				technologies laser actuelles.
			</Text>
			<Text class="mt-4">
				Diverses techniques opératoires sont disponibles, afin de répondre au mieux à vos attentes
				en fonction de votre défaut visuel (myopie, hypermétropie, astigmatisme, presbytie).  On
				différencie les chirurgies cornéennes  (PKR, LASIK, SMILE, PresbyLASIK)  des chirurgies
				intra oculaires (PreLEX, implants phaques). Le choix entre ces différentes techniques sera
				effectué grâce à un bilan pré-opératoire complet et en concertation avec votre chirurgien.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-3xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={ChirurgieRefactivePageThreeHero}
				alt="Technologie de chirurgie laser"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable">
	<Title level="h2">La PKR (PhotoKératectomie Réfractive)</Title>
	<Text class="mt-4">
		Avec un recul de plus de 30 ans, la PKR est une chirurgie laser de surface cornéenne sûre. Dans
		un premier temps, votre chirurgien expose la zone à remodeler, en retirant la couche cellulaire
		superficielle, appelée épithélium. Puis dans un second temps, il utilise un laser excimer,  afin
		de réaliser une photoablation du stroma cornéen superficiel. Le laser permet donc une ablation
		précise du tissu cornéen, afin de moduler le pouvoir réfractif de la cornée pour compenser votre
		défaut visuel. En fin d’intervention, une lentille pansement est mise en place. Elle sera
		retirée par votre chirurgien au bout de 3 jours. L’opération est rapide et strictement indolore,
		grâce à l’anesthésie locale par collyres. Au bout de quelques jours, lorsque la cicatrisation
		épithéliale est complète, votre récupération visuelle est ressentie.
	</Text>

	<Title class="mt-4" level="sub2">Avantages</Title>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Technique avec le plus grand recul ;</li>
		<li>Geste chirurgical très précis.</li>
	</ul>
	<Text class="mt-4">
		Notez que cette méthode peut également être utilisée à visée thérapeutique, notamment en cas de
		défaut d'adhésion entre les différentes couches de la cornée, ou pour tenter d'effacer une
		opacité cornéenne pathologique... On parle alors de PhotoKératectomie Thérapeutique (PKT).
	</Text>

	<Title class="mt-10" level="h2">Le LASIK ou Laser in situ keratomileusis</Title>
	<Text class="mt-4">
		Le LASIK, ou femto-LASIK, est une chirurgie « tout » laser, utilisée depuis plus de 20 ans. Elle
		combine l’utilisation de deux lasers, dans le but d’accélérer la récupération visuelle, tout en
		limitant l’inconfort post-opératoire. Dans un premier temps, le laser femtoseconde découpe un
		capot cornéen, qui sera soulevé par votre chirurgien afin d’exposer la zone à remodeler. Puis on
		procède à la photoablation, grâce au laser excimer, dans le but de sculpter le stroma cornéen
		profond, pour corriger votre défaut visuel. Le capot est remis en place à la fin de
		l’intervention. L’opération est rapide et strictement indolore, grâce à une anesthésie locale.
		La récupération visuelle est satisfaisante dès le lendemain de l'intervention.
	</Text>
	<Title class="mt-4" level="sub2">Avantages</Title>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Technique indolore ;</li>
		<li>Récupération visuelle quasi immédiate ;</li>
		<li>Traitement des deux yeux le même jour.</li>
	</ul>

	<Title class="mt-10" level="h2">Le SMILE</Title>
	<Text class="mt-4">
		Le ReLex (Refractive Lenticule Extraction) SMILE (Small Incision Lenticule Extraction) est une
		chirurgie laser mise au point depuis environ 10 ansn qui n’utilise que le laser femtoseconde.
		Cette technique novatrice n’est disponible que dans certains centres de chirurgie réfractive. 
		Le laser femtoseconde Visumax de Zeiss découpe un lenticule dans l’épaisseur cornéenne. La forme
		de ce lenticule dépend de votre degré de myopie.  L’extraction du lenticule stromal est
		effectuée via une micro-incision de 3 à 4 mm. L’opération est rapide, totalement indolore et
		permet une récupération visuelle très précoce.
	</Text>
	<Text class="mt-4">
		La procédure est rapide, entièrement indolore et offre une récupération visuelle très précoce.
	</Text>
	<Title class="mt-4" level="sub2">Avantages</Title>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Technique laser la plus récente ;</li>
		<li>Geste indolore ;</li>
		<li>Récupération quasi immédiate ;</li>
		<li>Traitement des deux yeux le même jour.</li>
	</ul>

	<Title class="mt-10" level="h2">Le PresbyLASIK</Title>
	<Text class="mt-4">
		Le PresbyLASIK est l’unique solution laser pour la correction de la presbytie.  Dérivé du LASIK,
		il combine à la fois le traitement de votre trouble visuel de loin, mais également de
		votre presbytie, en vision de près. Le laser va moduler l'asphéricité cornéenne, afin de créer
		des aberrations sphériques permettant de retrouver une profondeur de champ, associée à une
		micro-monovision. En pratique, l’œil directeur assurera une bonne vision de loin et
		intermédiaire, alors que l’œil dominé permettra une bonne vision de près et intermédiaire. Les
		deux yeux permettent, simultanément, une bonne vision à toutes les distances.
	</Text>
	<Text class="mt-4">
		L’autonomie quotidienne sans correction est alors assurée, même si une paire de lunettes de
		confort pourra parfois être nécessaire.
	</Text>

	<TextWithCorners class="mt-8">
		Chaque technique présente des avantages et des inconvénients. Le choix est fait au décours de
		votre bilan pré-opératoire, après concertation avec votre chirurgien.
	</TextWithCorners>
</Section>
