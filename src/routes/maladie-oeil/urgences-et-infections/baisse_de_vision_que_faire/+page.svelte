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
		<Title level="h1">Baisse de vision : que faire ?</Title>
		<Text>
			Une baisse brutale de l’acuité visuelle est anxiogène. Mieux la caractériser permet d’orienter rapidement le
			diagnostic et la prise en charge.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Quand consulter en urgence ?</Title>
			<Text>Consultez votre ophtalmologiste en moins de 48 h si la baisse est :</Text>
			<div class="space-y-3">
				<Title level="sub2">Profonde</Title>
				<ul class="list-disc space-y-2 pl-5">
					<li>Impossibilité de lire des caractères habituellement faciles malgré la correction ;</li>
					<li>Tache sombre fixe empiétant le point de fixation ;</li>
					<li>Amputation nette du champ visuel.</li>
				</ul>
			</div>
			<div class="space-y-3">
				<Title level="sub2">Brutale</Title>
				<Text>La rapidité d’installation oriente vers certains diagnostics. Une dégradation sur plusieurs mois est moins urgente.</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">Post-chirurgicale</Title>
				<Text>
					Toute baisse après une chirurgie oculaire, notamment la cataracte, nécessite un examen précoce pour écarter une
					infection post-opératoire.
				</Text>
			</div>
			<TextWithCorners>L’absence de douleur ou de rougeur n’exclut pas l’urgence.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Situations particulières</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Myopie forte : risque de déchirure ou décollement de rétine ;</li>
				<li>Antécédent de DMLA : possible hématome ou récidive d’œdème maculaire ;</li>
				<li>Enfant : toute baisse visuelle doit être prise très au sérieux.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Quand peut-on différer l'examen ?</Title>
			<Text>L’examen peut être reporté de 48 h à quelques jours si la baisse est :</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Progressive sur plusieurs semaines ou mois ;</li>
				<li>Fluctuante, par exemple améliorée par le clignement ;</li>
				<li>Minime.</li>
			</ul>
		</div>
	</div>
</Section>
