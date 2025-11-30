<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/glaucome" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Laser et glaucome</Title>
		<Text>
			Les lasers occupent une place importante dans la prise en charge du glaucome, aussi bien pour abaisser
			la pression intra-oculaire que pour prévenir certaines crises.
		</Text>
		<TextWithCorners>
			Ces gestes se déroulent au cabinet, sans anesthésie générale ni hospitalisation, et durent seulement
			quelques minutes.
		</TextWithCorners>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Trabéculoplastie sélective (SLT)</Title>
			<Text>
				Le laser remodèle le trabéculum dans l’angle irido-cornéen pour améliorer l’évacuation de l’humeur
				aqueuse et faire baisser la pression. Elle s’adresse aux glaucomes à angle ouvert, soit d’emblée, soit en
				complément des collyres.
			</Text>
			<Text>Le geste est indolore après instillation de collyres anesthésiants.</Text>
			<TextWithCorners>
				La SLT n’est pas indiquée pour les glaucomes à angle fermé.
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Iridotomie périphérique</Title>
			<Text>
				Un fin orifice est créé au laser dans l’épaisseur de l’iris pour mieux répartir l’humeur aqueuse et
				lever le bloc pupillaire. Elle est réalisée dans les glaucomes par fermeture de l’angle ou préventivement
				sur les yeux à risque.
			</Text>
			<Text>
				Cette manœuvre rapide et indolore peut aussi corriger un bloc pupillaire inverse responsable de
				dispersion pigmentaire.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Iridoplastie périphérique (laser Argon)</Title>
			<Text>
				Lorsque la racine de l’iris reste trop bombée après iridotomie, des impacts de laser Argon sont appliqués
				pour amincir et rétracter la périphérie. Indication principale : syndrome iris-plateau compliquant des
				glaucomes par fermeture de l’angle.
			</Text>
		</div>
	</div>
</Section>
