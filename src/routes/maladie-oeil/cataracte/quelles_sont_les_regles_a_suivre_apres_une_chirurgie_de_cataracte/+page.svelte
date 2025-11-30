<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { CataractePageSixIlluOne, CataractePageSixIlluTwo } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/cataracte" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Quelles sont les règles à suivre après une chirurgie de cataracte ?</Title>
		<Text class="mt-4">
			Vous venez d'être opéré(e) ? Voici l'ensemble des consignes partagées par les chirurgiens du
			[Nom de Clinique] pour assurer une récupération sereine.
		</Text>
	</div>

	<Title level="h2">Y a-t-il un pansement à porter ?</Title>
	<Text class="mt-4">
		Votre pansement oculaire doit être gardé uniquement le jour de l'intervention.
	</Text>
	<Text class="mt-4">
		Vous sortez du bloc opératoire et de l'établissement avec un pansement sur l'oeil opéré.
		Celui-ci a été réalisé dans des conditions stériles, à la fin de l'intervention. Vous pourrez le
		retirer dès le lendemain matin et n'aurez plus à en remettre par la suite. Votre oeil peut
		rester à l'air libre.  D'ailleurs, si le pansement venait à se détacher quelques heures après
		votre retour à domicile, pas de panique : vous pouvez aussi passer la première nuit sans
		pansement.
	</Text>

	<Title class="mt-8" level="h2">Y-a-t-il des traitements à instiller ?</Title>
	<Text class="mt-4">Des collyres post-opératoires sont à instiller tous les jours.</Text>
	<Text class="mt-4">
		Une ordonnance vous a été transmise à la fin de la consultation pré-opératoire, pour vous
		permettre d'aller chercher vos collyres à la pharmacie. Nous vous invitons à bien respecter
		l'ordre, les doses et les durées de traitement inscrites sur l'ordonnance.
	</Text>

	<Title class="mt-8" level="h2">Quand peut-on reprendre une activité physique normale ?</Title>
	<Text class="mt-4">Vous devez vous reposer les jours suivant l'intervention.</Text>
	<Text class="mt-3 font-semibold">Vous pouvez :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Vous balader et faire vos courses ;</li>
		<li>Vous pencher ou vous baisser.</li>
	</ul>
	<Text class="mt-4 font-semibold">Il faut éviter :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Les endroits sales ;</li>
		<li>Le bricolage, le port de charges lourdes ou le jardinage ;</li>
		<li>La baignade ou l'immersion de la tête ;</li>
		<li>Les activités exposant à un traumatisme oculaire.</li>
	</ul>

	<Title class="mt-8" level="h2">Quels sont les signes qui ne doivent pas vous inquiéter ?</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Vision encore imparfaite ou trouble ;</li>
		<li>Sensation de grain de sable sous la paupière ;</li>
		<li>Larmoiement inhabituel de l'œil opéré ;</li>
		<li>Rougeur modérée ;</li>
		<li>Douleurs superficielles modérées.</li>
	</ul>

	<Title class="mt-8" level="h2"
		>Quels sont les signes qui doivent vous amener à nous consulter en urgence ?</Title
	>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Baisse de vision rapide ;</li>
		<li>Éclairs lumineux ;</li>
		<li>Sensation de voile ou apparition de mouches volantes ;</li>
		<li>Rougeur prononcée ;</li>
		<li>Douleurs oculaires importantes.</li>
	</ul>

	<figure
		class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-lg overflow-hidden"
	>
		<img
			src={CataractePageSixIlluOne}
			alt="Patiente suivant les consignes post-opératoires"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Text class="text-accent-one mt-4">
		Si vous présentez un de ces symptômes, nous vous invitons à appeler notre standard (05 37 810
		828) en journée et en semaine. Sinon, vous pouvez également vous rendre dans l'un de nos
		cabinets, sans rendez-vous. En dehors de nos horaires d'ouverture, appelez l'établissement
		(Clinique ou Centre Hospitalier) dans lequel vous avez été opéré(e). Les chirurgiens du [Nom de
		Clinique] organisent des astreintes pour s'occuper de leurs patients dans ce type de situation.
	</Text>

	<Title class="mt-8" level="h2"
		>Que faire de vos lunettes dans les suites immédiates de l'intervention ?</Title
	>
	<Text class="mt-4">
		Après l'intervention, vos lunettes ne sont plus adaptées. En effet, l'implant intra-oculaire est
		correcteur. Vos besoins changent de façon tout à fait attendue. Plusieurs solutions s'offrent à
		vous:
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Vous pouvez continuer à porter vos anciennes lunettes. Même inadaptées, elles n'abîment pas
			votre oeil.
		</li>
		<li>
			Vous pouvez aussi ne porter aucune correction jusqu'à ce que les contrôles post-opératoires
			soient effectués.
		</li>
		<li>
			Vous pouvez aussi faire poser, en contactant votre opticien, un verre neutre sur votre
			monture.
		</li>
	</ul>
	<Text class="mt-4">
		La meilleure solution est celle qui apportera le plus de confort. Vous ne risquez pas de
		compromettre le résultat de l'intervention, quel que soit votre choix.
	</Text>

	<figure class="mx-auto mt-8 w-full max-w-lg overflow-hidden rounded-md">
		<img
			src={CataractePageSixIlluTwo}
			alt="Patient appliquant des collyres"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<TextWithCorners class="mt-8">
		Au moindre doute, l'équipe du [Nom de Clinique] se tient à votre disposition pour répondre à vos
		questions, vous prendre en charge et vous suivre de manière attentive à la suite de votre
		intervention.
	</TextWithCorners>
</Section>
