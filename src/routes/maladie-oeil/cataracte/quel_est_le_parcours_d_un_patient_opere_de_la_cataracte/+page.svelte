<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		CataractePageFourImgOne,
		CataractePageFourImgTwo,
		CataractePageFourImgThree
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/cataracte" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-1/2">
			<Title level="h1">Quel est le parcours d'un patient opéré de la cataracte ?</Title>
			<Text class="mt-4">
				La chirurgie de cataracte est couramment pratiquée au [Nom de Clinique]. Notre expérience
				nous a permis de construire un parcours sécurisé et fluide dans nos différents cabinets.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-3xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={CataractePageFourImgOne}
				alt="Patient accueilli pour une chirurgie de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable">
	<Title level="h2">Avant l'intervention</Title>

	<Title class="mt-6" level="sub2">Prise de rendez-vous</Title>
	<Text class="mt-4">
		Une baisse de vision liée à la cataracte justifie un rendez-vous prioritaire dans l'un de nos
		cabinets. Plusieurs solutions existent pour nous contacter :
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Par téléphone, en précisant le motif de votre appel ;</li>
		<li>Par internet, en indiquant qu'il s'agit d'une chirurgie de cataracte ;</li>
		<li>En vous déplaçant directement dans l'un de nos cabinets.</li>
	</ul>
	<TextWithCorners class="mt-6"
		>Nos secrétaires vous proposeront le rendez-vous le plus adapté.</TextWithCorners
	>

	<Title class="mt-8" level="sub2">Consultation préopératoire</Title>
	<Text class="mt-4">Cette consultation regroupe tous les examens nécessaires :</Text>
	<div class="=flex">
		<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
			<li>Mesure de votre vision ;</li>
			<li>
				Examens complémentaires : biométrie (pour calculer l'implant) et OCT maculaire (recherche de
				pathologie rétinienne) ;
			</li>
			<li>
				Rencontre avec votre chirurgien : examen complet, confirmation du diagnostic, recherche de
				maladies associées, explication de la technique opératoire et choix de l'implant.
			</li>
		</ul>

		<figure class="mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-md">
			<img
				src={CataractePageFourImgTwo}
				alt="Consultation préopératoire en cabinet"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>

	<Title class="mt-8" level="sub2">Programmation administrative</Title>
	<Text class="mt-4">
		Vous rencontrez une secrétaire spécialisée qui construit votre parcours chirurgical :
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Remise des documents d'information ;</li>
		<li>Choix de la date d'intervention ;</li>
		<li>Transmission éventuelle d'un devis ;</li>
		<li>Explication de la procédure administrative ;</li>
		<li>Remise des ordonnances pré et post-opératoires.</li>
	</ul>

	<Title class="mt-8" level="sub2">Consultation d'anesthésie pré-opératoire</Title>
	<Text class="mt-4">
		Cette étape obligatoire permet de relever vos traitements, choisir la technique d'anesthésie et
		répondre à vos questions sur la prise en charge de la douleur.
	</Text>

	<Title class="mt-8" level="sub2">Choix de la technique d'anesthésie</Title>
	<Text class="mt-4">Trois techniques principales peuvent être retenues :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			<Text>
				Anesthésie topique : des collyres anesthésiants endorment l'œil tout en conservant sa
				mobilité ;
			</Text>
		</li>
		<li>
			<Text>
				Anesthésie sous-ténonienne : un produit est injecté sous la conjonctive, rendant l'œil
				insensible tout en permettant certains mouvements ;
			</Text>
		</li>
		<li>
			<Text>
				Anesthésie péri-bulbaire : des injections autour de l'œil entraînent une immobilité complète
				et l'absence de douleur.
			</Text>
		</li>
	</ul>
	<Text class="mt-4">
		La technique retenue dépend de vos antécédents, des habitudes de l'anesthésiste et des souhaits
		du chirurgien.
	</Text>

	<Title class="mt-8" level="sub2">Une chirurgie en deux temps</Title>
	<Text class="mt-4">Les deux yeux ne sont généralement pas opérés le même jour.</Text>
	<TextWithCorners class="mt-6">
		Un délai d'au moins 15 jours est respecté entre les deux interventions si les deux côtés doivent
		être opérés.
	</TextWithCorners>
</Section>

<Section width="wide" spacing="comfortable">
	<Title level="h2">Le jour de l'intervention</Title>

	<Title class="mt-6" level="sub2">Le matin de la chirurgie</Title>
	<Text class="mt-4">Quelques consignes sont indispensables :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Être à jeun selon les recommandations de l'anesthésiste ;</li>
		<li>Se laver intégralement au savon doux et porter des vêtements propres ;</li>
		<li>Éviter d'apporter des objets de valeur ;</li>
		<li>Instiller les collyres pré-opératoires prescrits.</li>
	</ul>

	<Title class="mt-8" level="sub2">Arrivée à la clinique ou à l'hôpital</Title>
	<Text class="mt-4">
		Respectez l'heure de convocation. Vous êtes accueilli(e) par des infirmiers spécialisés qui vous
		aident à enfiler la tenue stérile nécessaire pour entrer au bloc opératoire.
	</Text>

	<Title class="mt-8" level="sub2">Arrivée au bloc opératoire</Title>
	<Text class="mt-4">
		Vous êtes accompagné(e) tout au long du parcours. Un fauteuil confortable vous est proposé et le
		médecin anesthésiste endort votre œil selon la technique choisie.
	</Text>

	<Title class="mt-8" level="sub2">Le temps chirurgical</Title>
	<Text class="mt-4">Plusieurs professionnels se relaient pour garantir la sécurité :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Installation en position allongée ;</li>
		<li>Nettoyage et désinfection minutieux de l'œil ;</li>
		<li>Mise en place d'un champ opératoire stérile avec apport d'oxygène ;</li>
		<li>Début de la chirurgie selon les étapes prévues.</li>
	</ul>
	<TextWithCorners class="mt-6"
		>La chirurgie dure environ 15 minutes et reste indolore dans la majorité des cas.</TextWithCorners
	>
	<Text class="mt-4">
		En fin d'intervention, des antibiotiques sont instillés et un pansement stérile est posé.
	</Text>

	<figure class="mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-md">
		<img
			src={CataractePageFourImgThree}
			alt="Equipe médicale après une chirurgie de la cataracte"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>
</Section>

<Section width="wide" spacing="comfortable">
	<Title level="h2">Après l'intervention</Title>

	<Title class="mt-6" level="sub2">Retour dans le service</Title>
	<Text class="mt-4">Dans le service chirurgical, vous bénéficiez :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>D'une surveillance post-opératoire rapprochée ;</li>
		<li>D'informations complémentaires et de réponses à vos questions ;</li>
		<li>D'une collation.</li>
	</ul>

	<Title class="mt-8" level="sub2">Retour à domicile</Title>
	<Text class="mt-4">Le retour est possible le jour même dans plus de 99 % des cas.</Text>
	<TextWithCorners class="mt-6"
		>La chirurgie de cataracte est dite ambulatoire : vous restez moins d'une demi-journée.</TextWithCorners
	>
	<Text class="mt-4">
		Prévoyez d'être accompagné(e) le soir de l'intervention et ne touchez pas au pansement jusqu'au
		lendemain.
	</Text>

	<Title class="mt-8" level="sub2">Le lendemain</Title>
	<Text class="mt-4">
		Vous pouvez retirer le pansement, débuter les collyres pendant un mois et vous attendre à une
		amélioration progressive de la vision. Picotements ou sensations de corps étranger sont
		fréquents.
	</Text>
	<TextWithCorners class="mt-6">
		Le suivi post-opératoire est une priorité : nous appelons systématiquement nos patients le
		lendemain de l'intervention.
	</TextWithCorners>

	<Title class="mt-8" level="sub2">La semaine qui suit</Title>
	<Text class="mt-4">Vous pouvez :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Vous balader et faire vos courses ;</li>
		<li>Vous pencher ou vous baisser.</li>
	</ul>
	<Text class="mt-4">Il faut éviter :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Les environnements sales ;</li>
		<li>Le bricolage, le port de charges lourdes ou le jardinage ;</li>
		<li>La baignade ou l'immersion de la tête ;</li>
		<li>Les activités à risque de traumatisme oculaire.</li>
	</ul>
	<Text class="mt-4">
		La vision s'améliore graduellement ; ressentir un léger inconfort est normal.
	</Text>
	<TextWithCorners class="mt-6">
		En cas d'œil rouge et douloureux, consultez rapidement sans attendre la visite post-opératoire.
	</TextWithCorners>

	<Title class="mt-8" level="sub2">Que faire de vos lunettes ?</Title>
	<Text class="mt-4">
		L'implant intra-oculaire modifie vos besoins visuels : les corrections précédentes deviennent
		inadaptées.
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Conserver vos anciennes lunettes, même si elles ne sont plus adaptées ;</li>
		<li>Ne porter aucune correction jusqu'aux contrôles ;</li>
		<li>Demander à votre opticien de placer un verre neutre sur la monture.</li>
	</ul>
	<Text class="mt-4">
		Choisissez la solution la plus confortable : vous ne compromettez pas le résultat de la
		chirurgie.
	</Text>

	<Title class="mt-8" level="sub2">Consultation post-opératoire</Title>
	<Text class="mt-4"
		>Un rendez-vous est systématiquement prévu un mois après la chirurgie pour vérifier :</Text
	>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>La bonne position de l'implant ;</li>
		<li>Votre récupération visuelle ;</li>
		<li>La nécessité d'une nouvelle prescription de lunettes.</li>
	</ul>

	<Title class="mt-8" level="sub2">Suivi ophtalmologique</Title>
	<Text class="mt-4">
		Même après une récupération satisfaisante, le dépistage des autres pathologies oculaires doit se
		poursuivre.
	</Text>
	<TextWithCorners class="mt-6">
		Au [Nom de Clinique], nous continuons à suivre tous les patients opérés, s'ils le souhaitent :
		la chirurgie de la cataracte n'est qu'une étape de leur parcours visuel.
	</TextWithCorners>

	<Title class="mt-10" level="h2">Et après ?</Title>
	<Title class="mt-4" level="sub2">L'opacification capsulaire postérieure</Title>
	<Text class="mt-4">
		Parfois appelée « cataracte secondaire », elle correspond à la formation d'une membrane opaque
		derrière l'implant au fil du temps. Cette évolution normale peut provoquer une nouvelle baisse
		de vision.
	</Text>
	<Text class="mt-4">
		Une capsulotomie au laser YAG suffit généralement à découper cette membrane. Le geste est
		indolore et réalisé au cabinet d'ophtalmologie, sans retour au bloc opératoire.
	</Text>
</Section>
