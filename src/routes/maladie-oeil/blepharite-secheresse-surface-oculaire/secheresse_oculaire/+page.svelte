<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/blepharite-secheresse-surface-oculaire" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Sécheresse oculaire</Title>
		<Text>
			La sécheresse oculaire est l’un des motifs de consultation les plus fréquents. Elle résulte d’une altération du
			film lacrymal et peut toucher toutes les tranches d’âge.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Qu'est-ce que le film lacrymal ?</Title>
			<Text>
				Il s’agit d’un fin film recouvrant la surface oculaire et composé de trois couches : lipidique (meibum), aqueuse
				(sécrétée par les glandes lacrymales) et mucinique (produite par les cellules caliciformes). Chacune joue un rôle
				complémentaire pour protéger et hydrater la cornée.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Causes fréquentes</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Blépharite ou dysfonction des glandes de Meibomius ;</li>
				<li>Réduction de la sécrétion lacrymale (âge, maladies auto-immunes, médicaments) ;</li>
				<li>Facteurs environnementaux (écrans, climatisation, pollution, port prolongé de lentilles) ;</li>
				<li>Conséquences post-chirurgicales (laser, cataracte) ou hormonales.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Symptômes</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Sensation de sable ou de corps étranger ;</li>
				<li>Brûlures, picotements, rougeur ;</li>
				<li>Fluctuation de la vision, éblouissements ;</li>
				<li>Paradoxalement, larmoiements réflexes.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Diagnostic</Title>
			<Text>
				L’ophtalmologiste évalue la sévérité par des tests spécifiques (temps de rupture, coloration à la fluorescéine,
				schéimer, meibographie) pour orienter le traitement.
			</Text>
			<TextWithCorners>Le diagnostic différencie sécheresse évaporative, aqueuse ou mixte.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Principes de traitement</Title>
			<Text>
				Les mesures d’hygiène (pauses écran, humidificateur, lunettes protectrices) et l’instillation de larmes
				artificielles sont la première étape.
			</Text>
			<Text>
				Dans les formes liées à la blépharite, l’hygiène palpébrale (chaleur + massages) est indispensable. Des traitements
				anti-inflammatoires ou immunomodulateurs peuvent être ajoutés selon la sévérité.
			</Text>
			<Text>
				Le suivi régulier permet d’adapter les soins et d’éviter la progression des lésions de surface.
			</Text>
		</div>
	</div>
</Section>
