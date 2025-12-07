<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { PaupieresPageThreeIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/paupieres-et-voies-lacrymales" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Conseils après chirurgie de paupière</Title>
	<Text>
		Vous venez de bénéficier d'une chirurgie de paupière ?  <br />Alors ces quelques conseils vous
		seront sans doute utiles.
	</Text>

	<figure class="d mx-auto w-full max-w-lg overflow-hidden">
		<img
			src={PaupieresPageThreeIlluOne}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>

	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Protégez un maximum les cicatrices du soleil, pendant les 6 à 12 mois qui suivent le geste.
			Ainsi, vous éviterez une pigmentation potentiellement inesthétique de celles-ci. Le port de
			verres solaires peut ainsi avantageusement couvrir les paupières, tout comme l'application de
			crème solaire.
		</li>
		<li>
			Mieux vaut arrêter de fumer avant une chirurgie de paupière. La cicatrisation de la peau est,
			en effet, moins bonne en cas de tabagisme actif.
		</li>
		<li>Les points de suture sont généralement retirés une semaine après le geste chirurgical.</li>
		<li>
			Une rougeur persistante, des douleurs importantes ou un écoulement purulent peuvent traduire
			une infection du site opératoire. Mieux vaut, dès lors, nous consulter en urgence.
		</li>
		<li>
			Pour éviter les frottements intempestifs sur la cicatrice, en particulier dans les 7 jours qui
			suivent le bloc opératoire, vous pouvez porter une coque de protection nocturne, en plastique
			rigide.
		</li>
		<li>
			Une chirurgie palpébrale n'occasionne, dans les conditions normales, pas de baisse de l'acuité
			visuelle. Si ce symptôme survient, mieux vaut consulter en urgence votre ophtalmologiste.
		</li>
	</ul>
</Section>
