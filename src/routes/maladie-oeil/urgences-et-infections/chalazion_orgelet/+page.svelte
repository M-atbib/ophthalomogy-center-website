<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/urgences-et-infections" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Chalazion & Orgelet</Title>
		<Text>
			Le chalazion correspond à une tuméfaction rouge et douloureuse d’une paupière résultant de l’obstruction d’une
			glande de Meibomius. Dans le langage courant, on parle parfois d’« orgelet », bien qu’il s’agisse d’une entité
			différente.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Mode d'apparition</Title>
			<Text>
				Les glandes de Meibomius, situées dans le tarse, s’ouvrent sur le bord palpébral pour libérer le meibum, huile
				stabilisant le film lacrymal. Lorsqu’une glande se bouche, le meibum continue d’être produit, dilate le “tube” et
				provoque l’inflammation.
			</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Pathologies inflammatoires de surface ;</li>
				<li>Dermatoses comme la rosacée ;</li>
				<li>Blépharite meibomienne ;</li>
				<li>Chez l’enfant, astigmatisme mal corrigé favorisant les récidives.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Évolution</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Fistulisation spontanée (création d’un chenal d’évacuation) puis disparition ;</li>
				<li>Enkystement durable avec nodule palpébral parfois volumineux.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Traitement</Title>
			<Text>
				Un traitement médical (pommades/collyres anti-inflammatoires prescrits par l’ophtalmologiste) soulage la phase
				aiguë. Des massages favorisent ensuite la vidange du kyste.
			</Text>
			<Text>
				Si la masse persiste, une ablation chirurgicale sous anesthésie locale permet de retirer la paroi pour limiter les
				récidives.
			</Text>
			<Text>
				Il est indispensable d’identifier la cause : hygiène palpébrale régulière en cas de blépharite, correction optique
				adaptée (avec cycloplégie si besoin) chez l’enfant.
			</Text>
			<TextWithCorners>Sans traitement de fond, les récidives sont fréquentes.</TextWithCorners>
			<TextWithCorners>Consultez sans délai si la lésion ne régresse pas malgré le traitement.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Orgelet</Title>
			<Text>
				L’orgelet est une infection bactérienne du follicule d’un cil. L’ablation du cil incriminé permet de drainer
				rapidement le foyer, associée à un traitement antibiotique local prescrit par l’ophtalmologiste.
			</Text>
		</div>
	</div>
</Section>
