<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/ophtalmo-pediatrie" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Faut-il emmener son enfant chez l’ophtalmologiste ?</Title>
		<Text>
			Oui : un dépistage régulier assure un développement visuel normal et permet de traiter les troubles avant
			qu’ils ne deviennent irréversibles.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Enjeux</Title>
			<Text>
				Un enfant peut se débrouiller avec un seul œil performant. Le dépistage révèle les amblyopies ou
				amétropies silencieuses : avant 7 ans, la récupération est généralement possible.
			</Text>
			<TextWithCorners>L’amblyopie est la cause la plus fréquente de mauvaise vision chez l’enfant.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Comment se déroule l’examen ?</Title>
			<Title level="sub2">Acuité visuelle</Title>
			<Text>Tests adaptés à l’âge : comportement visuel chez le nourrisson, dessins chez le jeune enfant, échelles standard ensuite.</Text>
			<Title level="sub2">Cycloplégie</Title>
			<Text>
				La majorité des enfants reçoivent des collyres pour bloquer l’accommodation et mesurer correctement le défaut visuel.
				Un bébé peut porter des lunettes dès un an (fréquent vers 2-3 ans).
			</Text>
			<TextWithCorners>Une adaptation précoce en lunettes est la clé d’une bonne vision adulte.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Autres examens</Title>
			<Title level="sub2">Oculomotricité</Title>
			<Text>Évaluation de la motilité de chaque œil pour dépister strabismes ou anomalies neuro-musculaires.</Text>
			<Title level="sub2">Examen oculaire complet</Title>
			<Text>
				Toutes les structures sont inspectées (cornée, cristallin, rétine, nerf optique, voies lacrymales…) pour rechercher cataracte congénitale, glaucome, infections, tumeurs, etc.
			</Text>
			<TextWithCorners>Seul l’ophtalmologiste réalise l’ensemble de ce dépistage.</TextWithCorners>
		</div>
	</div>
</Section>
