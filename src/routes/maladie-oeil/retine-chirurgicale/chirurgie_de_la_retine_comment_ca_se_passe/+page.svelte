<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicale } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Chirurgie de la rétine : comment ça se passe ?</Title>
			<Text class="mt-4">
				Cette page illustre les grands principes de la vitrectomie, intervention vitréo-rétinienne
				la plus courante au sein de notre équipe. Les spécificités liées à chaque pathologie
				(membrane épi-rétinienne, décollement de rétine, trou maculaire, luxation d’implant…) vous
				seront expliquées par votre chirurgien si nécessaire.
			</Text>
		</div>
		<figure
			class="mx-auto w-full max-w-xl overflow-hidden rounded-md border border-light-grey/60 bg-primary-background shadow-sm"
		>
			<img
				src={RetineChirurgicale}
				alt="Matériel dédié à la chirurgie vitréo-rétinienne"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Title level="h2">Installation du patient et anesthésie</Title>
	<Text class="mt-4">
		Comme toutes les chirurgies endo-oculaires, l’intervention se déroule au bloc opératoire dans
		des conditions d’hygiène strictes. Vous êtes installé(e) allongé(e), tête fixée pour limiter les
		mouvements involontaires, avec une arrivée d’oxygène sous le champ pour conserver une
		respiration confortable.
	</Text>
	<Text class="mt-4">
		L’œil doit rester immobile et indolore. Deux techniques sont le plus souvent utilisées :
	</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Anesthésie péri-oculaire : injection d’un anesthésiant autour de l’œil ;</li>
		<li>Anesthésie générale lorsque la situation l’exige.</li>
	</ul>

	<Title class="mt-10" level="h2">Principes chirurgicaux</Title>
	<div class="mt-4 [&>*+*]:mt-6">
		<div>
			<Title level="sub2">Accès à la cavité vitréenne</Title>
			<Text class="mt-2">
				Le chirurgien place de minuscules trocarts qui traversent la paroi oculaire : ils
				constituent des « puits » par lesquels les instruments sont introduits. Les incisions sont
				micro-invasives, comparables à une coelioscopie oculaire.
			</Text>
		</div>
		<div>
			<Title level="sub2">Illumination et visualisation</Title>
			<Text class="mt-2">
				Une sonde d’endo-illumination est insérée pour éclairer l’intérieur de l’œil, car la lumière
				du microscope n’est pas suffisante en profondeur. Des lentilles de contact ou non contact
				complètent le microscope opératoire afin d’agrandir les structures.
			</Text>
		</div>
		<div>
			<Title level="sub2">Maintenir un volume constant</Title>
			<Text class="mt-2">
				Une ligne d’infusion apporte en continu un liquide dans l’œil pour stabiliser la pression et
				le volume oculaires tout au long de la chirurgie.
			</Text>
		</div>
		<div>
			<Title level="sub2">Vitrectomie</Title>
			<Text class="mt-2">
				Le vitré, gel transparent qui occupe la cavité postérieure, est retiré à l’aide d’un
				vitréotome (instrument qui coupe et aspire). Ce geste libère la rétine et permet d’accéder à
				la zone pathologique.
			</Text>
		</div>
	</div>

	<Title class="mt-10" level="h2">Gestes complémentaires</Title>
	<div class="mt-4 [&>*+*]:mt-6">
		<div>
			<Title level="sub2">Laser et cryothérapie</Title>
			<Text class="mt-2">
				Pour traiter une lésion rétinienne ou fusionner les feuillets, le chirurgien peut réaliser :
			</Text>
			<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
				<li>Un laser endoculaire ou externe ;</li>
				<li>Une cryothérapie via une sonde refroidie appliquée sur la paroi du globe.</li>
			</ul>
		</div>
		<div>
			<Title level="sub2">Coloration et pelage</Title>
			<Text class="mt-2">
				Des colorants spécifiques mettent en évidence le vitré ou certaines membranes pour en
				faciliter le pelage microchirurgical (membrane épi-rétinienne, membrane limitante interne,
				proliférations vitré-rétiniennes, etc.).
			</Text>
		</div>
		<div>
			<Title level="sub2">Produits pharmacologiques</Title>
			<Text class="mt-2">
				Anti-VEGF, rt-PA, corticoïdes ou antibiotiques peuvent être injectés directement dans l’œil,
				selon la pathologie traitée.
			</Text>
		</div>
		<div>
			<Title level="sub2">Tamponnement</Title>
			<Text class="mt-2">
				Pour maintenir la rétine appliquée ou limiter les saignements, un gaz ou une huile de
				silicone peut être utilisé. Le gaz se résorbe naturellement en quelques semaines ; l’huile
				de silicone doit être retirée lors d’une intervention ultérieure.
			</Text>
			<Text class="mt-2">
				En fonction du contexte, des gestes additionnels (ablation de corps étranger, récupération
				d’implant, aspiration de cristallin luxé…) peuvent être nécessaires.
			</Text>
		</div>
	</div>

	<Title class="mt-10" level="h2">Segment antérieur</Title>
	<Text class="mt-4">
		Si le cristallin est opacifié ou si cela facilite l’intervention, une chirurgie de la cataracte
		avec pose d’implant peut être réalisée dans le même temps. La vitrectomie favorise d’ailleurs la
		survenue d’une cataracte : 95 % des patients sont opérés du cristallin dans les cinq ans.
	</Text>
	<Text class="mt-4">
		Le chirurgien peut choisir différents modes de fixation d’implant (iris, sclère, sulcus
		ciliaire) selon l’indication.
	</Text>

	<Title class="mt-10" level="h2">Complications et suivi</Title>
	<Text class="mt-4">
		Les principaux risques sont la cataracte, l’endophtalmie, les déchirures ou décollements de
		rétine, les fuites sur les trocarts, l’inflammation ou l’hypertonie oculaires.
	</Text>
	<TextWithCorners class="mt-4">
		Une surveillance post-opératoire régulière est indispensable pour détecter précocement ces
		complications et adapter le traitement.
	</TextWithCorners>
</Section>
