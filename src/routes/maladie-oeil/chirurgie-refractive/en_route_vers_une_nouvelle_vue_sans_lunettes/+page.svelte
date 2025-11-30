<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import {
		ChirurgieRefactivePageFiveImgOne,
		ChirurgieRefactivePageFiveImgTwo,
		ChirurgieRefactivePageFiveImgThree
	} from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/chirurgie-refractive" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">En route vers une nouvelle vue sans lunettes !</Title>
		<Text class="mt-4">
			Vous souhaitez vous lancer ? Suivez le parcours d'un patient décidé à ne plus porter de
			lunettes.
		</Text>
		<Text class="mt-4">
			Au COF, tout est mis en place pour vous assurer, une procédure sécurisée, réalisée par
			une équipe expérimentée. Le parcours de nos patients est étudié et permet à chacun de
			bien comprendre les ressorts de l'intervention.
		</Text>
	</div>

	<Title level="h2">Bilan pré-opératoire</Title>

	<Title class="mt-6" level="sub2">Le 1er rendez-vous</Title>
	<Text class="mt-4">
		Au cours de cette consultation spécialisée, nous réalisons un bilan visuel complet, comprenant
		un examen clinique visuel exhaustif, ainsi qu’un bilan morphologique de votre cornée. Ceci va
		permettre de rechercher d'éventuelles contre-indications à la chirurgie. Pour que ce bilan soit
		fiable, vous ne devez pas porter vos lentilles pendant les 3 jours qui précèdent le rendez-vous.
	</Text>
	<div class="my-8 flex items-center gap-12">
		<Text class="mt-4">
			Dans un premier temps, vous serez reçu par un assistant spécialisé en soins visuels, qui
			mesurera votre acuité visuelle avec et sans correction optique. Ensuite, différents paramètres
			de votre réfraction seront étudiés, la pression intra-oculaire se relevée, tout
			comme l'épaisseur de votre cornée et sa topographie.
		</Text>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={ChirurgieRefactivePageFiveImgOne}
				alt="Consultation pré-opératoire de chirurgie réfractive"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>

	<div class="my-8 flex items-center gap-12">
		<figure class="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-md">
			<img
				src={ChirurgieRefactivePageFiveImgTwo}
				alt="Analyse des yeux avant la chirurgie réfractive"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
		<Text class="mt-4">
			Puis vous rencontrez le chirurgien réfractif, qui vous poursuivra l'examen et réalisera la
			synthèse de votre dossier. Si vous êtes éligible à une intervention, il vous exposera la
			technique opératoire la plus adaptée à votre vision et à vos besoins visuels. Tous les
			principes de l’intervention, ses bénéfices et ses risques, vous seront alors exposés.
		</Text>
	</div>

	<Text class="mt-4">
		Au terme de ce bilan, une fiche d’informations vous sera remise, ainsi qu’un devis détaillé, que
		vous pourrez communiquer à votre complémentaire santé, pour connaître le niveau éventuel de
		remboursement du geste.
	</Text>

	<div class="my-8 flex items-center gap-12">
		<div>
			<Title class="mt-8" level="sub2">Le 2ème rendez-vous</Title>
			<Text class="mt-4">
				Après un délai de réflexion, systématique avant une chirurgie réfractive, une deuxième
				consultation est programmée. Elle permet de compléter le bilan ophtalmologique initial
				(cycloplégie, fond œil…) et de confirmer la date d'intervention.
			</Text>
		</div>
		<figure class="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-md">
			<img
				src={ChirurgieRefactivePageFiveImgThree}
				alt="Discussion avec le chirurgien réfractif"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>

	<Title class="mt-10" level="h2">Le jour de l’intervention</Title>
	<TextWithCorners class="mt-4">
		Vous ne devez pas porter vos lentilles 3 jours avant l’intervention.
	</TextWithCorners>
	<Text class="mt-4">
		L’opération laser se déroule dans l'une de nos filiales, spécialement consacrée à la chirurgie
		réfractive, située au Centre Pôle Vision, au 44 rue du Faubourg de Roubaix à Lille.
	</Text>
	<Text class="mt-4">Dès votre arrivée, vous êtes pris(e) en charge par notre équipe.</Text>
	<Text class="mt-4">
		Nous vous administrons des collyres anesthésiants, qui vous assureront une intervention sans
		douleur.
	</Text>
	<Text class="mt-4">
		En salle opératoire, vous êtes allongé(e) sur un lit pivotant, permettant les traitements lasers
		successifs. Pendant l’intervention, vous vous laisserez guider par votre chirurgien, qui  vous
		accompagnera lors des étapes successives de l’opération. Sur la totalité du temps opératoire
		(environ 15 à 25 minutes pour les 2 yeux, selon la technique choisie), le temps laser à
		proprement parler est bref et n’excède jamais quelques minutes.
	</Text>
	<Text class="mt-4">
		Une fois l’intervention terminée, nous vous rappelons les consignes à respecter pendant la
		période post-opératoire.
	</Text>
	<Text class="mt-4">
		La présence d’un accompagnant est vivement recommandée pour faciliter votre retour à la maison.
	</Text>

	<Title class="mt-10" level="h2">Le contrôle post-opératoire</Title>
	<Text class="mt-4">
		Immédiatement après l’intervention, vous sentirez une sensation de grain de sable et de légères
		brûlures oculaires. Cette gêne est tout à fait normale dans les premières heures qui suivent
		l’intervention laser. Elle s’estompe progressivement, notamment lorsque vous fermez les yeux.
		Pour vous soulager, vous pouvez débuter, le jour même, l’instillation des collyres prescrits par
		votre chirurgien
	</Text>
	<Text class="mt-4">Pensez à bien laver vos mains avant de manipuler vos collyres.</Text>
	<Text class="mt-4">
		Les rendez-vous post-opératoires sont fixés au préalable avec votre chirurgien, en fonction de
		la technique opératoire. Le but de ces consultations est de contrôler la cicatrisation de
		la cornée et de veiller à la bonne récupération visuelle.
	</Text>
	<TextWithCorners class="mt-6">
		Dès le surlendemain de l’intervention, vous pourrez reprendre la quasi-totalité de vos activités
		professionnelles.
	</TextWithCorners>
</Section>
