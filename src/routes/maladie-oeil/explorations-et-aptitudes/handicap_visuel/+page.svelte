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
		<Title level="h1">Handicap visuel</Title>
		<Text>
			La loi du 11 février 2005 définit le handicap comme toute limitation d’activité ou restriction de
			participation liée à une altération durable d’une fonction. Cinq familles sont reconnues : moteur,
			sensoriel, psychique, mental et maladies invalidantes.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<TextWithCorners>Le handicap visuel résulte des répercussions quotidiennes d’une déficience visuelle.</TextWithCorners>
		<div class="space-y-4">
			<Title level="h2">Déficience visuelle et cécité légale</Title>
			<Text>
				La déficience correspond à une insuffisance de perception persistante après traitement. Elle peut toucher
				l’œil, les voies optiques ou le cortex visuel et être congénitale ou acquise (pathologies héréditaires,
				DMLA, glaucome, traumatismes, infections…).
			</Text>
			<Title level="sub2">Définitions françaises</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li><strong>Cécité légale</strong> : acuité ≤ 1/20 au meilleur œil avec correction.</li>
				<li><strong>Malvoyance</strong> : acuité entre 4/10 et 1/20 ou champ visuel entre 10° et 20°.</li>
			</ul>
			<Title level="sub2">Classification OMS</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Déficience moyenne : acuité &lt; 3/10 ≥ 1/10 avec champ ≥ 20° ;</li>
				<li>Déficience sévère : acuité &lt; 1/10 ≥ 1/20 ;</li>
				<li>Déficience profonde : acuité &lt; 1/20 ≥ 1/50 ou champ 5° à 10°.</li>
			</ul>
		</div>
	</div>
</Section>
