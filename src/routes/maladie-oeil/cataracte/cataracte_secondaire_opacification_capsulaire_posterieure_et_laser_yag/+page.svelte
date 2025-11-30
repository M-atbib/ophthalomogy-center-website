<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		CataractePageSevenIlluOne,
		CataractePageSevenIlluTwo,
		CataractePageSevenIlluThree
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/cataracte" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">
			"Cataracte secondaire", opacification capsulaire postérieure et laser YAG
		</Title>
		<Text class="mt-4">
			L'opacification capsulaire postérieure est une situation fréquente après la chirurgie de la
			cataracte. On la surnomme parfois « cataracte secondaire », alors qu'elle n'impose pas une
			nouvelle intervention au bloc opératoire.
		</Text>
		<Text class="mt-4">
			Ce phénomène correspond à la formation progressive d'une membrane opaque derrière l'implant
			intra-oculaire, plusieurs mois ou années après la chirurgie. Il peut être responsable d'une
			nouvelle baisse visuelle et nécessite un examen complet pour confirmer le diagnostic.
		</Text>
	</div>

	<Title level="h2">L'opacification capsulaire postérieure, un processus très fréquent</Title>
	<TextWithCorners class="mt-6">
		L'opacification capsulaire postérieure est souvent appelée "cataracte secondaire".
	</TextWithCorners>
	<Text class="mt-4">
		C'est en fait un abus de langage. Il n'y aura pas lieu de vous réopérer.  C'est un phénomène
		tout à fait normal. L'implant intra-oculaire, pour rester stable dans l'oeil, a besoin d'un
		support. C'est le sac cristallinien, conservé pendant la chirurgie, qui remplit cette fonction.
	</Text>
	<Text class="mt-4">
		Dans les suites de l'opération, des phénomènes de cicatrisation intra-oculaires se produisent.
		Il arrive très fréquemment qu'ils conduisent à la formation, très lente, d'une membrane
		opaque derrière l'implant. Elle se produit dans les années qui suivent votre chirurgie et
		occasionne une nouvelle baisse de la vision.
	</Text>
	<Text class="mt-4">
		Attention, les signes de cataracte secondaire ne sont pas spécifiques de cette affection. Un
		examen ophtalmologique complet est nécessaire pour poser ce diagnostic et s'assurer que vous
		n'êtes pas atteint d'une autre pathologie.
	</Text>

	<Title class="mt-10" level="h2">Un seul traitement : la capsulotomie au laser YAG</Title>
	<Title class="mt-4" level="sub2">En quoi cela consiste-t-il ?</Title>
	<Text class="mt-3">
		Le laser YAG permet de pratiquer une découpe de haute précision à l'intérieur de votre oeil. Le
		faisceau peut être focalisé spécifiquement sur la capsule postérieure du sac cristallinien, qui
		ne mesure que quelques centièmes de millimètres. Ainsi, la membrane est découpée, sans toucher
		ou déstabiliser votre implant.
	</Text>

	<figure
		class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-lg overflow-hidden"
	>
		<img
			src={CataractePageSevenIlluOne}
			alt="Illustration de la capsulotomie au laser YAG"
			class="h-full w-full object-cover"
		/>
	</figure>

	<TextWithCorners class="mt-6">
		La capsulotomie au laser YAG est pratiquée au cabinet d'Ophtalmologie. Une nouveau passage au
		bloc opératoire n'est absolument pas nécessaire.
	</TextWithCorners>

	<figure class="mx-auto mt-8 w-full max-w-lg overflow-hidden rounded-md">
		<img
			src={CataractePageSevenIlluTwo}
			alt="Salle de traitement pour le laser YAG"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>
	<Title class="mt-8" level="sub2">Déroulement de la séance</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-3">
		<li>
			Dès votre arrivée au cabinet, votre pupille est dilatée à l'aide de collyres mydriatiques.
		</li>
		<li>Vous êtes orienté(e) vers une salle d'examen dédiée aux traitements laser.</li>
		<li>Pendant la séance, vous serez assis(e). Votre médecin est en face de vous.</li>
		<li>L'ophtalmologiste peut utiliser un verre de contact, qui sera posé sur votre oeil.</li>
		<li>La capsule est découpée au laser.</li>
	</ul>
	<TextWithCorners class="mt-6">
		La procédure ne dure que quelques minutes. Elle est complètement indolore.
	</TextWithCorners>

	<figure class="mx-auto mt-8 w-full max-w-xl overflow-hidden rounded-md">
		<img
			src={CataractePageSevenIlluThree}
			alt="Examens après le laser YAG"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<Title class="mt-10" level="sub2">Les jours suivants</Title>
	<Text class="mt-4">
		Après la capsulotomie, vous devrez instiller un traitement spécifique pendant quelques jours. Ce
		traitement permet d'éviter l'inflammation et une hypertonie intra-oculaire.
	</Text>
	<Text class="mt-4">
		Le plus souvent, la capsule découpée flotte en arrière de l'implant, avant de tomber au fond de
		l'oeil. Il est donc tout à fait normal de la voir, sous la forme d'un corps flottant ou d'une
		"mouche volante". Ce phénomène n'est que temporaire et ne doit absolument pas vous inquiéter.
	</Text>
	<Text class="mt-4">La vision s'améliore dès le lendemain du traitement laser.</Text>

	<Title class="mt-10" level="h2">Risques de la capsulotomie au laser YAG</Title>
	<Text class="mt-4">
		Comme toutes les procédures techniques, le laser YAG présente certains risques, heureusement peu
		fréquents :
	</Text>
	<Title class="mt-4" level="sub2">Risques immédiats</Title>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Hypertonie oculaire ;</li>
		<li>Inflammation intra-oculaire.</li>
	</ul>
	<Title class="mt-6" level="sub2">Risques tardifs</Title>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Déchirures rétiniennes ;</li>
		<li>Décollement de rétine.</li>
	</ul>
	<Text class="mt-4">
		Si, dans les suites d'un traitement au laser YAG, vous présentez des douleurs oculaires,
		des éclairs lumineux ou une baisse de vision, nous vous invitons à consulter votre
		ophtalmologiste en urgence.
	</Text>
</Section>
