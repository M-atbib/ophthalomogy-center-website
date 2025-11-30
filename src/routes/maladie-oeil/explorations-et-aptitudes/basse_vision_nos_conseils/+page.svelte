<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/explorations-et-aptitudes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Basse vision : nos conseils</Title>
		<Text>
			La basse vision correspond à une acuité &lt; 4/10e et/ou un champ visuel &lt; 60°. La prise en charge est
			pluridisciplinaire pour exploiter les capacités visuelles restantes et compenser le handicap.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Professionnels impliqués</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li><strong>Ophtalmologiste</strong> : diagnostic, traitement, coordination du projet de réadaptation.</li>
				<li><strong>Orthoptiste</strong> : rééducation (décentrement du regard, optimisation visuelle).</li>
				<li><strong>Opticien spécialisé</strong> : essais et choix des aides optiques.</li>
				<li><strong>Psychologue</strong> : soutien dans l’acceptation du handicap.</li>
				<li><strong>Instructeurs locomotion/autonomie</strong> : déplacements et gestes du quotidien.</li>
				<li><strong>Ergothérapeute</strong> : aménagements matériels et environnementaux.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Aides visuelles</Title>
			<Text>
				De nombreuses aides existent ; un conseil spécialisé est indispensable avant l’achat.
			</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Lampes orientables à intensité variable ;</li>
				<li>Filtres protecteurs (anti-UV, contraste) ;</li>
				<li>Lunettes ou loupes grossissantes ;</li>
				<li>Systèmes télescopiques ;</li>
				<li>Loupes électroniques et télé-agrandisseurs (paramétrables, parfois avec synthèse vocale) ;</li>
				<li>Tablettes tactiles avec applications d’aide visuelle.</li>
			</ul>
			<TextWithCorners>Testez les dispositifs avant de vous équiper.</TextWithCorners>
		</div>
	</div>
</Section>
