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
		<Title level="h1">Que faire en cas de sécheresse oculaire ?</Title>
		<Text>
			La sécheresse oculaire résulte d’un déficit quantitatif ou qualitatif du film lacrymal. Elle provoque brûlures,
			inconfort et flou visuel intermittent. Une prise en charge précoce améliore le confort quotidien.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Identifier la cause</Title>
			<Text>
				L’ophtalmologiste réalise un examen complet (questionnaire, test de rupture du film lacrymal, coloration, mesure
				de la sécrétion) pour déterminer s’il s’agit d’un déficit aqueux, d’une atteinte évaporative (dysfonction des
				glandes de Meibomius) ou d’une cause mixte.
			</Text>
			<Text>
				Certaines pathologies (blépharite, maladies auto-immunes, chirurgie oculaire récente, environnement sec, écrans)
				peuvent déclencher ou aggraver les symptômes.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Mesures d'hygiène et d'environnement</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Éviter les flux d’air directs (ventilateurs, climatisation) ;</li>
				<li>Faire des pauses régulières lors du travail sur écran pour cligner et humidifier les yeux ;</li>
				<li>Utiliser un humidificateur d’air si nécessaire ;</li>
				<li>Porter des lunettes de soleil enveloppantes à l’extérieur pour limiter l’évaporation.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Soins locaux</Title>
			<Text>
				Les larmes artificielles sans conservateur humidifient et améliorent le confort. Elles s’utilisent plusieurs fois
				par jour selon la prescription.
			</Text>
			<Text>
				En cas de dysfonction meibomienne, l’hygiène palpébrale (chaleur + massages réguliers) reste essentielle pour
				désobstruer les glandes.
			</Text>
			<Text>
				Des gels ou pommades lubrifiantes peuvent être recommandés la nuit lorsque les paupières sont mal occluses.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Traitements médicaux</Title>
			<Text>
				Selon la sévérité, le spécialiste peut prescrire des anti-inflammatoires locaux (corticoïdes de courte durée,
				ciclosporine, etc.), des antibiotiques en cas de blépharite infectée, ou proposer des dispositifs (bouchons
				méatiques, lumière pulsée, etc.).
			</Text>
			<TextWithCorners>
				Seul un ophtalmologiste peut adapter le traitement : évitez l’automédication. La régularité est la clé d’une bonne
				prise en charge.
			</TextWithCorners>
		</div>
	</div>
</Section>
