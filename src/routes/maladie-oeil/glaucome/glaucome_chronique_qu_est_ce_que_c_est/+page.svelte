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
		<Title level="h1">Glaucome chronique : qu'est-ce que c'est ?</Title>
		<Text>
			Le glaucome est une neuropathie optique chronique, fréquente et potentiellement cécitante. Il touche
			près de 4 % de la population française et représente la première cause de cécité irréversible dans le
			monde.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Définition</Title>
			<Text>
				La maladie détruit progressivement les fibres nerveuses rétiniennes qui composent le nerf optique. Les
				territoires périphériques du champ visuel sont touchés en premier, expliquant l’absence de symptômes
				jusqu’à un stade avancé.
			</Text>
			<TextWithCorners>
				Sans prise en charge, la vision devient tubulaire puis disparaît.
			</TextWithCorners>
			<Text>Un examen ophtalmologique complet est le seul moyen de dépister une neuropathie glaucomateuse.</Text>
		</div>

t	<div class="space-y-4">
			<Title level="h2">Facteurs de risque</Title>
			<Text>
				La pression intra-oculaire (PIO) élevée est le facteur principal, mais hypertonie ne signifie pas
				nécessairement glaucome et inversement. Il n’existe pas de lien avec la tension artérielle.
			</Text>
			<TextWithCorners>PIO et glaucome sont deux notions distinctes : surveillez les deux.</TextWithCorners>
			<Text>Autres facteurs :</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Hérédité (glaucome dans la famille) ;</li>
				<li>Âge &gt; 60 ans ;</li>
				<li>Myopie forte, kératocône, maladies vasculaires ;</li>
				<li>Traitements prolongés par corticoïdes.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Dépistage et suivi</Title>
			<Text>
				Le glaucome est une maladie chronique qui nécessite un suivi à vie. Le contrôle comprend la mesure de
				la PIO, l’examen du nerf optique et la réalisation régulière de champs visuels.
			</Text>
			<TextWithCorners>
				Un dépistage régulier permet d’instaurer un traitement avant l’apparition d’un handicap visuel.
			</TextWithCorners>
		</div>
	</div>
</Section>
