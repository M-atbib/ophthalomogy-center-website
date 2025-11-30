<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/chirurgie-refractive" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">
			Quelles sont les règles à respecter après une chirurgie réfractive laser ?
		</Title>
		<Text class="mt-4">
			Vous venez de bénéficier d'une chirurgie réfractive ? Après l’intervention, il est primordial
			de respecter quelques règles, afin d’optimiser la cicatrisation et la récupération visuelle
		</Text>
	</div>

	<Title level="h2">Y a-t-il un traitement post-opératoire ?</Title>
	<Text class="mt-4">
		Après chaque opération de chirurgie réfractive, une ordonnance vous est remise par votre
		ophtalmologiste. Il est indispensable d’aller chercher en pharmacie votre traitement dans les
		jours qui précèdent votre intervention. Il convient de débuter, le jour même, après
		l’intervention, l’instillation des collyres, en espaçant chaque goutte de quelques minutes.
		Respectez bien la dose, la durée et l'ordre d'instillation de vos collyres. Pensez à bien vous
		lavez les mains avant de les manipuler.
	</Text>

	<Title class="mt-8" level="h2">Peut-on se frotter les yeux ?</Title>
	<Text class="mt-4">
		Quelle que soit la technique opératoire réalisée, il est essentiel de ne pas se frotter les
		yeux, même si votre œil vous gêne. Un frottement intempestif pourrait compromettre votre
		résultat visuel, voire même imposer une reprise au bloc opératoire.
	</Text>

	<Title class="mt-8" level="h2">
		Quelles sont les activités autorisées dans les jours qui suivent la chirurgie ?
	</Title>
	<div class="mt-4 space-y-4">
		<div>
			<Title level="sub2">Conduite</Title>
			<Text class="mt-2">Après un LASIK : autorisée dès le surlendemain.</Text>
			<Text class="mt-2"
				>Après une PKR : autorisée après la cicatrisation cornéenne (environ 1 semaine).</Text
			>
		</div>
		<div>
			<Title level="sub2">Se laver les cheveux</Title>
			<Text class="mt-2">Possible dès le surlendemain.</Text>
		</div>
		<div>
			<Title level="sub2">Se maquiller</Title>
			<Text class="mt-2">Autorisé 8 jours après la chirurgie.</Text>
		</div>
		<div>
			<Title level="sub2">Se baigner</Title>
			<Text class="mt-2">
				Les sports aquatiques sont interdits pendant 15 jours. Au-delà, portez des lunettes de
				natation.
			</Text>
		</div>
		<div>
			<Title level="sub2">Prendre l’avion</Title>
			<Text class="mt-2">Aucune contre-indication après une chirurgie réfractive laser.</Text>
		</div>
		<div>
			<Title level="sub2">Travail sur écran</Title>
			<Text class="mt-2">Possible dès le lendemain ou le surlendemain.</Text>
		</div>
		<div>
			<Title level="sub2">Télévision</Title>
			<Text class="mt-2">Autorisé dès le lendemain.</Text>
		</div>
		<div>
			<Title level="sub2">Sport</Title>
			<Text class="mt-2"
				>Après un LASIK : reprise dès le surlendemain si le risque traumatique est nul.</Text
			>
			<Text class="mt-2">Après une PKR : reprise après 1 semaine.</Text>
		</div>
		<div>
			<Title level="sub2">S'exposer au soleil</Title>
			<Text class="mt-2"
				>Possible avec une paire de lunettes équipée de verres solaires pour protéger l’œil.</Text
			>
		</div>
	</div>

	<Title class="mt-10" level="h2">Quels sont les signes qui ne doivent pas vous inquiéter ?</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Vision imparfaite ou trouble pendant quelques jours ;</li>
		<li>Sensation de grain de sable ;</li>
		<li>Larmoiement ;</li>
		<li>Rougeur oculaire modérée ;</li>
		<li>Douleurs superficielles légères.</li>
	</ul>

	<Title class="mt-8" level="h2">
		Quels sont les signes qui doivent vous amener à nous consulter en urgence ?
	</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Baisse de vision rapide ou importante ;</li>
		<li>Rougeur oculaire marquée ;</li>
		<li>Douleurs oculaires importantes.</li>
	</ul>
	<TextWithCorners class="mt-6">
		Si vous présentez un de ces symptômes, nous vous invitons à appeler notre standard (05 37 810
		828) en journée et en semaine. Sinon, vous pouvez également vous rendre dans l'un de nos
		cabinets, sans rendez-vous. En dehors de nos horaires d'ouverture, appelez l'établissement
		(Clinique ou Centre Hospitalier) dans lequel vous avez été opéré(e). Les chirurgiens du [Nom de
		Clinique] organisent des astreintes pour s'occuper de leurs patients dans ce type de situation..
	</TextWithCorners>

	<Title class="mt-10" level="h2">
		Est-il conseillé de porter des lunettes de soleil après la chirurgie ?
	</Title>
	<Text class="mt-4">
		Le port de lunettes de soleil ne présente aucun danger après une chirurgie. Si un éblouissement
		important survient dans les jours qui suivent le geste laser, vous pouvez évidemment protéger
		vos yeux de la lumière du soleil.
	</Text>
	<Text class="mt-4">
		Vos anciennes lunettes, corrigées, ne seront plus adaptées à votre nouvelle vue.
	</Text>

	<Title class="mt-10" level="h2">
		Une surveillance médicale est-elle nécessaire après l'intervention ?
	</Title>
	<Text class="mt-4">
		Une consultation post-opératoire est prévue avec votre ophtalmologiste dans les jours qui
		suivent votre intervention. Cette consultation a pour but de s’assurer de la bonne cicatrisation
		de votre cornée.
	</Text>
	<TextWithCorners class="mt-4">
		Dans tous les cas, l'équipe du [Nom de Clinique] se tient à votre disposition pour répondre à
		vos questions, vous prendre en charge et vous suivre de manière attentive à la suite de votre
		intervention.
	</TextWithCorners>
</Section>
