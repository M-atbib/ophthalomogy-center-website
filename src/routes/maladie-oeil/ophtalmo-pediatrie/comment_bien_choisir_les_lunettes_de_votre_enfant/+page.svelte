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
		<Title level="h1">Comment bien choisir les lunettes de votre enfant ?</Title>
		<Text>
			Lunettes adaptées = correction efficace + sécurité pour l’enfant. Voici les principes simples à suivre.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Monture</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Privilégier le plastique déformable chez les tout-petits ; éviter les montures métalliques.</li>
				<li>Pas de patins (risque traumatique) ; préférer un pont bas adapté à la base nasale.</li>
				<li>Ajouter si besoin un insert antidérapant (silicone) ou un cordon pour maintenir la monture.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Verres et protection</Title>
			<Text>
				Choisir des verres incassables et légers. Une protection UV intégrée est indispensable ; des verres
				solaires complémentaires peuvent être utiles.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Entretien et renouvellement</Title>
			<Text>
				Renouveler les lunettes environ une fois par an : la croissance modifie vite la morphologie du visage
				et un serrage excessif peut entraîner un refus de port.
			</Text>
			<TextWithCorners>
				Si l’enfant proteste ou retire souvent ses lunettes, consultez rapidement pour vérifier la correction.
			</TextWithCorners>
			<Text>
				Des montures spécifiques existent pour le sport et, en cas de malformation, un modèle sur mesure peut être
				fabriqué. Pensez à la garantie casse/rayures proposée par l’opticien.
			</Text>
		</div>
	</div>
</Section>
