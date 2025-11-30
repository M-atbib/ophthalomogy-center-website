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
		<Title level="h1">Cycloplégie : atropine et cyclopentolate</Title>
		<Text>
			La cycloplégie est un examen indispensable chez l’enfant pour mesurer précisément le défaut visuel : les
			collyres bloquent l’accommodation et dilatent la pupille.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Principe</Title>
			<Text>
				L’enfant possède une accommodation très puissante qui fausse les mesures. En la paralysant, on détermine
				fiablement s’il est myope ou hypermétrope et le degré de correction.
			</Text>
			<Text>La cycloplégie dilate également la pupille, facilitant l’examen du fond d’œil et du cristallin.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Quand la réaliser ?</Title>
			<Text>Elle est systématique avant 3 ans, puis réalisée dès que les réponses sont incertaines ou qu’une forte accommodation est suspectée.</Text>
			<Title level="sub2">Collyres utilisés</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li><strong>Atropine</strong> 0,3 % (&lt;3 ans) ou 0,5 % : instillation pendant 5 jours ; dilatation 7-10 jours.</li>
				<li><strong>Cyclopentolate</strong> 0,5 % : dès 1 an, 3 instillations une heure avant l’examen ; vision floue jusqu’au lendemain.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">À savoir</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>L’accommodation bloquée entraîne une vision de près floue ; prévenir l’enseignant.</li>
				<li>La photophobie est fréquente : prévoir casquette et lunettes de soleil.</li>
				<li>Instiller les gouttes sur l’enfant allongé ; si doute, remettre une goutte. Se laver les mains avant/après.</li>
			</ul>
			<TextWithCorners>Les collyres sont destinés uniquement à l’enfant : ne les utilisez pas pour vous-même.</TextWithCorners>
			<Text>Ne laissez pas les flacons à portée et jetez-les après usage.</Text>
		</div>
	</div>
</Section>
