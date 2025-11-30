<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import {
		RetineMedicalPageThreeIlluOne,
		RetineMedicalPageThreeIlluTwo,
		RetineMedicalPageTwoIlluThree
	} from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-medicale" class="w-fit">
		<ArrowLeft />RetineMedicalPageThreeIlluThree Retour
	</Button>

	<div class="my-10">
		<div>
			<Title level="h1">Occlusions vasculaires rétiniennes</Title>
			<Text class="mt-4">
				La rétine tapisse la paroi interne de l’œil et transforme la lumière en signal visuel. Elle
				nécessite une vascularisation fine assurée par l’artère centrale de la rétine et la
				choroïde. Toute interruption du flux sanguin artériel ou veineux constitue une urgence.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-lg overflow-hidden"
		>
			<img
				src={RetineMedicalPageThreeIlluOne}
				alt="Schéma des vaisseaux de la rétine"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>

	<Text class="mt-4">Le sang est apporté aux cellules rétiniennes par deux systèmes :</Text>
	<Text class="mt-4">
		Une surveillance régulière et des examens complémentaires (angiographie, imagerie cérébrale)
		sont enessentiels. Malheureusement, la récupération visuelle est souvent limitée.
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			L’artère centrale de la rétine, qui vascularise les couches les plus profondes de la rétine.
			Elle se divise, une fois arrivée dans l’œil, en plusieurs branches, supérieures et
			inférieures, afin d’assurer la vascularisation de tous les secteurs rétiniens.
		</li>
		<li>
			Le système choroïdien, véritable tunique intermédiaire de l’œil, qui vascularise les couches
			les plus externes de la rétine.
		</li>
	</ul>
	<Text class="mt-4">
		En miroir avec le système artériel, le système veineux se charge d’évacuer le sang de l’oeil,
		déchargé d’une partie de son oxygène par les cellules rétiniennes, , afin de le reconduire, à
		terme, vers le système pulmonaire.
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			La veine centrale de la rétine et ses branches suivent le même trajet que l’artère centrale de
			la rétine.
		</li>
		<li>Les veines vortiqueuses se chargent d’acheminer le sang choroïdien.</li>
	</ul>

	<Title class="mt-10" level="h2">Occlusion de branche de l’artère centrale (OBACR)</Title>
	<Text class="mt-4">
		Le retentissement est moins étendu mais laisse fréquemment une amputation du champ visuel. La
		récupération reste rare.
	</Text>

	<Title class="mt-10" level="h2">Occlusion de l’artère centrale de la rétine (OACR)</Title>
	<Text class="mt-4">
		Il s’agit d’une pathologie grave, qui représente une menace pour la fonction visuelle. C’est une
		cause de baisse d’acuité visuelle profonde, indolore et de survenue rapide. Elle survient, le
		plus souvent, sans signe avant-coureur, mais des épisodes de baisse de vision spontanément
		résolutifs peuvent précéder sa survenue.
	</Text>
	<Text class="mt-4">
		Elle représente un épisode d’infarctus rétinien total, qui va occasionner des lésions de toutes
		les cellules rétiniennes concernées.
	</Text>
	<Text class="mt-4">
		Le type de symptômes va dépendre de l’anatomie vasculaire précise du patient atteint. Il peut
		arriver qu’une artère de substitution existe dans l’œil (on parle d’artère cilio-rétinienne);
		elle peut préserver une région localisée, mais ce cas n’est pas le cas le plus fréquent.
	</Text>
	<Text class="mt-4">Malheureusement, il n’y a pas de traitement curatif d’un tel épisode.</Text>

	<Title level="sub2">Les causes de l'OACR</Title>
	<Text class="mt-4">
		Différentes causes permettant d'expliquer l'épisode vont être récherchées, de façon
		systématique:
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Les anomalies de la coagulation sanguine</li>
		<li>Un trouble du rythme cardiaque</li>
		<li>La maladie de Horton (pathologie inflammatoire des artères)</li>
		<li>La présence de plaques d’athérome dans les artères carotides</li>
	</ul>

	<Text
		>On rejoint finalement, pour une large part, les causes de l’accident vasculaire cérébral. Ce
		dernier est d’ailleurs recherché de manière quasiment systématique, par un examen neurologique
		et une imagerie cérébrale rapide, en fonction de la cause suspectée.</Text
	>
	<Text
		>Toute cause devra être traitée spécifiquement et votre ophtalmologiste pourra, dès lors, vous
		adresser à d’autres spécialistes pour une prise en charge conjointe, même si vous ne présentez,
		a priori, pas d’autre symptôme général.</Text
	>
	<Text
		>La survenue d’une occlusion de l’artère centrale de la rétine imposera une surveillance
		ophtalmologique régulière. Des examens complémentaires, comme une angiographie fluorescéinique
		rétinienne peuvent être nécessaires.</Text
	>
	<Text
		>L’évolution et la récupération potentielles sont variables d’une personne à l’autre. Le
		pronostic est malheureusement plutôt sombre. Peu de patients vont récupérer une fonction
		visuelle satisfaisante sur un œil atteint.</Text
	>

	<Title level="sub2">Occlusion de branche de l'artère centrale de la rétine (OBACR)</Title>
	<Text
		>Le tableau clinique et le retentissement visuel sont moins prononcés en cas d’occlusion d’une
		branche de l’artère centrale de la rétine. De façon logique, le territoire rétinien impacté par
		l’infarctus et le manque d’oxygène est moins étendu et plus de cellules sont préservées. Le plus
		souvent, les patients décrivent une amputation du champ visuel qui, là encore, a malheureusement
		peu de chances de récupérer.</Text
	>
	<Title level="h2">Occlusion de la veine centrale de la rétine (OVCR)</Title>
	<Text
		>Les facteurs de risque d’un tel épisode ne sont pas tout à fait les mêmes que ceux de
		l’occlusion artérielle ; on suspecte, par exemple, un rôle de l’hypertonie intra-oculaire.</Text
	>
	<Text
		>Les symptômes ressentis par le patient sont, là encore, une baisse d’acuité
		visuelle importante, le plus souvent sur un seul œil, de survenue très rapide et totalement
		indolore. Il n’y a, en règle générale, aucun signe avant-coureur. L’occlusion de la veine
		centrale de la rétine entraîne une souffrance importante des cellules rétiniennes. En empêchant
		le sang de sortir de l’œil, elle créé une hyperpression dans tout le système vasculaire et le
		sang a donc également du mal à circuler dans le système d’amont : le système artériel.</Text
	>

	<Title level="sub3">Un examen ophtamologique complet s’impose en urgence.</Title>

	<Text
		>À l’instar de l’occlusion de l’artère centrale de la rétine, votre ophtalmologiste sera sans
		doute amené à vous prescrire des examens complémentaires, à visée cardio-vasculaire, même si
		vous ne présentez aucun autre symptôme général.</Text
	>
	<figure class="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-md">
		<img
			src={RetineMedicalPageThreeIlluTwo}
			alt="Fond d’œil présentant une occlusion veineuse"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>
	<Text
		>La récupération est variable ; il est extrêmement difficile pour votre ophtalmologiste d’en
		préjuger lors du diagnostic initial. Une surveillance régulière sera nécessaire, ainsi que des
		examens angiographiques, parfois répétés.</Text
	>

	<Title level="sub2">Principales complications</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			L’enjeu principal est de dépister l’ischémie rétinienne et ses complications. Lorsque les
			cellules ont souffert d’un manque d’oxygène prolongé et que la vascularisation ne se rétablit
			pas, elles vont activer un mécanisme de prolifération de nouveaux vaisseaux sanguins anormaux.
			Leurs conséquences peuvent être très graves, pouvant conduire à un tableau de glaucome
			néo-vasculaire, très difficile à traiter. Tout sera fait pour empêcher la survenue d’une telle
			complication. Un traitement laser pourra, par exemple, vous être proposé pour l’éviter.
		</li>
		<li>
			L’autre événement qui caractérise l’occlusion de la veine centrale de la rétine est
			l’apparition d’un œdème de la macula. Celui-ci est responsable d’une partie de la baisse de
			vision et il évolue, dans la majorité des cas, sur un mode chronique, c’est-à-dire qu’il
			persiste à long terme. Heureusement, des solutions thérapeutiques existent, notamment par le
			biais d’injections de produits pharmacologiques dans l’œil (injections intra-vitréennes). Ces
			injections seront, le plus souvent, répétées à intervalle régulier, pour une durée difficile à
			estimer.
		</li>
	</ul>
	<figure class="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-md">
		<img
			src={RetineMedicalPageTwoIlluThree}
			alt="Fond d’œil présentant une occlusion veineuse"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<Title level="sub2">Occlusion de branche de la veine centrale de la rétine</Title>

	<Text
		>Un tableau d’occlusion de branche de la veine centrale de la rétine peut également se produire,
		comme c’est le cas pour les branches de l’artère.</Text
	>

	<Text>
		Là encore, le tableau clinique est différent et le patient présente souvent une amputation d’une
		partie de son champ visuel. Les complications potentielles sont les mêmes que pour l’occlusion
		totale de la veine. Des examens complémentaires, des séances de traitement au laser peuvent être
		nécessaires.
	</Text>
	<Text>
		Si vous, ou l’un de vos proches, présentez une amputation brutale du champ visuel ou une baisse
		brutale de la vision, même sans douleur, il convient de consulter en urgence un ophtalmologiste.
	</Text>
</Section>
