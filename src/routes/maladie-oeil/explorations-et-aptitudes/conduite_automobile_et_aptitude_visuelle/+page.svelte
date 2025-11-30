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
		<Title level="h1">Conduite automobile et aptitude visuelle</Title>
		<Text>
			La vision conditionne la conduite de tout véhicule motorisé. Certaines pathologies peuvent rendre l’aptitude
			incertaine.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Cadre légal français</Title>
			<Text>
				Un médecin n’a pas le droit de signaler directement un patient inapte. L’ophtalmologiste doit toutefois
				informer clairement sur les risques et la réglementation.
			</Text>
			<Text>
				Seule la commission médicale du permis (médecins experts nommés par le préfet) décide du maintien,
				des restrictions ou de la suspension du permis.
			</Text>
			<Text>
				La réglementation (arrêté du 18/12/2015) harmonisée avec l’Europe précise les examens visuels requis et
				le préfet peut suspendre le permis si le contrôle médical n’est pas réalisé dans les délais (décret
				n°2017-1523).
			</Text>
			<TextWithCorners>
				Acuité, champ visuel, vision crépusculaire, sensibilité à l’éblouissement, vision double et contrastes font
				partie de l’évaluation.
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Permis A/B (véhicules légers)</Title>
			<Title level="sub2">Acuité</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>≥ 5/10 en vision binoculaire ;</li>
				<li>Si un œil ≤ 1/10, l’autre doit ≥ 5/10 ;</li>
				<li>Compatibilité temporaire possible si limites ; 6 mois d’incompatibilité après perte brutale d’un œil.</li>
			</ul>
			<Title level="sub2">Champ visuel binoculaire</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>120° horizontaux (≥ 50° droite/gauche) ;</li>
				<li>40° verticaux (≥ 20° haut/bas) ;</li>
				<li>Pas d’anomalie dans les 20° centraux.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Permis C/D (véhicules lourds, taxis, ambulances)</Title>
			<Title level="sub2">Acuité</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>≥ 8/10 sur le meilleur œil ;</li>
				<li>≥ 1/10 sur le second ;</li>
				<li>Si correction, acuité non corrigée ≥ 1/20 ou correction ≤ ±8 dioptries.</li>
			</ul>
			<Title level="sub2">Champ visuel binoculaire</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>160° horizontaux (≥ 70° droite/gauche) ;</li>
				<li>60° verticaux (≥ 30° haut/bas) ;</li>
				<li>Aucune anomalie dans les 30° centraux.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Évaluation pratique</Title>
			<Text>La mesure se fait avec ou sans correction ; l’obligation de porter la correction est mentionnée sur le permis.</Text>
			<Text>Les troubles de la vision des couleurs n’empêchent pas la conduite.</Text>
			<Text>
				Un champ visuel binoculaire est requis. Un avis spécialisé est recommandé en cas d’héméralopie,
				d’éblouissement majeur, de diplopie, de troubles du contraste, de nystagmus ou de blépharospasme.
			</Text>
		</div>
	</div>
</Section>
