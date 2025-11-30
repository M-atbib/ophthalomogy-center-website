<script lang="ts">
	import { Section, Title, Text, Button } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/explorations-et-aptitudes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Rétinopathies héréditaires</Title>
		<Text>
			Les dystrophies rétiniennes regroupent de nombreuses maladies génétiques atteignant soit toute la rétine,
			soit la macula (rétinites pigmentaires, maladies de Stargardt, Best, etc.). Elles évoluent souvent vers un
			déficit visuel sévère.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Dystrophies rétiniennes</Title>
			<Text>
				Atteignent les photorécepteurs (bâtonnets/cônes). Exemples : amaurose de Leber, rétinite pigmentaire
				(rod-cone ou cone-rod), syndrome de Usher.
			</Text>
			<Title level="sub2">Symptômes</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Difficultés d’adaptation à l’obscurité (héméralopie) ;</li>
				<li>Rétrécissement concentrique du champ visuel jusqu’à la vision tubulaire ;</li>
				<li>Dyschromatopsie, photophobie, baisse d’acuité centrale possible.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Dystrophies maculaires</Title>
			<Text>
				Touchent préférentiellement la macula (enfants/jeunes adultes). Exemples : Stargardt, Best, dystrophie des
				cônes, rétinoschisis lié à l’X, drusens dominants, syndromes (albinisme…).
			</Text>
			<Title level="sub2">Symptômes</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Baisse d’acuité visuelle centrale bilatérale et progressive ;</li>
				<li>Débute plus précocement.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Diagnostic</Title>
			<Text>
				Moitié des cas : mutation familiale connue. Sinon mutation de novo. L’interrogatoire, l’arbre généalogique
				et le fond d’œil orientent les examens (ERG, EOG, OCT, angiographie…).
			</Text>
			<Text>
				La génétique (array CGH, séquençage ciblé) identifie le gène responsable, indispensable pour le conseil
				et l’inclusion dans des essais thérapeutiques.
			</Text>
		</div>
	</div>
</Section>
