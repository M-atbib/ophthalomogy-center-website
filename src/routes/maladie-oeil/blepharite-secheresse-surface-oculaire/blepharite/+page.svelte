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
		<Title level="h1">Blépharite</Title>
		<Text>
			La blépharite correspond à une inflammation chronique des paupières qui perturbe la composition du film lacrymal
			(eau + meibum) et favorise la sécheresse oculaire.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Le rôle du meibum</Title>
			<Text>
				Les glandes de Meibomius, comparables à des tubes verticaux dont l’orifice s’ouvre au ras des cils, sécrètent un
				huilage stabilisant la couche lacrymale. Le clignement vide ces « tubes de dentifrice » et mélange l’huile à l’eau.
			</Text>
			<Text>
				Lorsque l’huile stagne (âge, inflammation), les glandes s’obstruent et l’ophtalmologiste parle de blépharite.
			</Text>
			<TextWithCorners>La blépharite peut toucher jusqu’à 2 personnes sur 3.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Flore cutanée et inflammation</Title>
			<Text>
				Bactéries et acariens (dont Demodex folliculorum) vivent normalement à la base des cils. En cas de blépharite,
				leur prolifération bloque les orifices par des protéines inflammatoires et durcit le meibum, qui ne s’écoule plus.
			</Text>
			<Text>
				Un cercle vicieux s’installe : l’inflammation aggrave la sécheresse oculaire qui, en retour, majore l’inflammation.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Symptômes</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Rougeur du bord libre des paupières ;</li>
				<li>Chalazions à répétition ;</li>
				<li>Croûtes à la base des cils ;</li>
				<li>Association fréquente à une sécheresse oculaire : grains de sable, brûlures, picotements, larmoiement au vent, rougeur.</li>
			</ul>
			<Text>La maladie évolue sur de nombreuses années.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Traitement</Title>
			<Text>
				Les soins de paupières représentent la base du traitement : ils désobstruent les glandes de Meibomius et doivent être
				réalisés très régulièrement, souvent à vie.
			</Text>
			<Text>
				Les collyres lubrifiants soulagent mais ne lèvent pas l’obstruction. Dès que les soins cessent, les symptômes
				reviennent.
			</Text>
			<TextWithCorners>Hygiène palpébrale quotidienne + traitements adjuvants prescrits = seule stratégie durable contre la blépharite.</TextWithCorners>
		</div>
	</div>
</Section>
