<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/cornee-et-greffes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Cornéa guttata et dystrophie de Fuchs</Title>
		<Text>
			Pour comprendre la cornea guttata (« cornée en gouttes »), il faut revenir à l’anatomie de la cornée, véritable
			pare-brise transparent de l’œil qui laisse passer la lumière sans obstacle.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">La cornée : cinq couches essentielles</Title>
			<Text>L’épithélium, la membrane de Bowman, le stroma, la membrane de Descemet et l’endothélium.</Text>
			<Text>
				L’endothélium, épais d’une seule cellule, tapisse la face interne et empêche l’eau intraoculaire d’infiltrer le
				stroma. Une défaillance de cette couche entraîne un œdème cornéen, une baisse visuelle et, à terme, une
				kératopathie bulleuse douloureuse.
			</Text>
			<Text>
				La dystrophie de Fuchs, maladie héréditaire touchant environ 1 personne sur 2000, altère ce métabolisme : des
				cellules disparaissent, laissant place à des dépôts protéiques qui donnent l’aspect en gouttes (« cornea
				guttata »).
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Stades cliniques</Title>
			<Text>
				Les stades précoces sont asymptomatiques. L’examen ophtalmologique suffit à repérer la maladie tant que la
				transparence est conservée.
			</Text>
			<Text>
				Lorsque les gouttes se multiplient, l’endothélium faiblit : un œdème apparaît, souvent plus marqué au réveil et
				radoce au fil de la journée. Des collyres hyperosmolaires peuvent accélérer sa résorption.
			</Text>
			<Text>
				Au stade de kératopathie bulleuse, les ulcères sont nombreux et peuvent se surinfecter. Seule une greffe de
				cornée permet alors de restaurer la fonction endothéliale normale.
			</Text>
			<TextWithCorners>Aux stades évolués, seule une greffe peut restaurer l’endothélium.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Cornea guttata et chirurgie de cataracte</Title>
			<Text>
				La recherche d’une dystrophie de Fuchs fait partie du bilan systématique avant toute chirurgie de cataracte.
				L’usage des ultrasons lors de la phacoémulsification entraîne toujours une perte de cellules endothéliales, ce qui
				peut précipiter les complications lorsque la réserve cellulaire est réduite.
			</Text>
			<TextWithCorners>
				Votre ophtalmologiste informe systématiquement du risque de kératopathie bulleuse du pseudophaque (patient opéré
				de cataracte) et peut demander des examens pour mesurer la densité endothéliale avant l’intervention.
			</TextWithCorners>
		</div>
	</div>
</Section>
