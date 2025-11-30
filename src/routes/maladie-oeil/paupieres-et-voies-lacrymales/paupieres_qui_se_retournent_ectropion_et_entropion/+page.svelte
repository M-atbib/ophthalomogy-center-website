<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/paupieres-et-voies-lacrymales" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4">
		<Title level="h1">Paupières qui se retournent : ectropion et entropion</Title>
		<Text>
			La paupière inférieure doit rester appliquée contre le globe pour garantir une bonne couverture et
			un équilibre lacrymal. Un enroulement excessif (entropion) ou un relâchement vers l’avant (ectropion)
			rompent cet équilibre.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Entropion</Title>
			<Text>
				L’entropion correspond à l’enroulement de la paupière, le plus souvent inférieure. Les cils frottent
				sur la cornée, provoquant kératite, douleurs et risque d’abcès.
			</Text>
			<Title level="sub2">Causes</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Entropion involutionnel lié au relâchement des tissus avec l’âge ;</li>
				<li>Entropion cicatriciel après brûlure, traumatisme ou maladie inflammatoire ;</li>
				<li>Entropion spastique après irritations répétées et clignements excessifs.</li>
			</ul>
			<TextWithCorners>
				Un avis ophtalmologique est indispensable : l’épilation des cils ne suffit pas toujours.
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Ectropion</Title>
			<Text>
				L’ectropion est une bascule du bord palpébral vers l’avant exposant la surface oculaire. La paupière
				ne protège plus le globe et le méat lacrymal n’est plus en contact avec les larmes, d’où un
				larmoiement chronique.
			</Text>
			<Title level="sub2">Causes</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Ectropion involutionnel (vieillissement) nécessitant un geste de retente ;</li>
				<li>Forme congénitale ;</li>
				<li>Origine cicatricielle (post-traumatique ou inflammatoire) ;</li>
				<li>Forme mécanique due à une tumeur palpébrale lourde ;</li>
				<li>Forme paralytique sur paralysie faciale prolongée.</li>
			</ul>
			<TextWithCorners>Une prise en charge spécialisée, souvent chirurgicale, est recommandée.</TextWithCorners>
		</div>
	</div>
</Section>
