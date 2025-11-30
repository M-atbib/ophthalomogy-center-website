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
		<Title level="h1">Neuropathies optiques</Title>
		<Text>
			Le nerf optique (environ 1,2 million d’axones) transmet l’information rétinienne au cortex occipital. Les
			névropathies altèrent ce relais et le pronostic visuel dépend de la cause.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Neuropathies inflammatoires</Title>
			<Text>
				On distingue les atteintes antérieures (papillites) et postérieures (névrites optiques rétro-bulbaires ou
				NORB).
			</Text>
			<Title level="sub2">Papillites</Title>
			<Text>Rares, d’origine inflammatoire ou infectieuse, touchant la tête du nerf optique visible au fond d’œil.</Text>
			<Title level="sub2">NORB</Title>
			<Text>
				Fréquente chez la femme jeune (20-40 ans) : douleurs rétro-orbitaires augmentées aux mouvements, déficit
				pupillaire afférent, baisse d’acuité, dyschromatopsie rouge-vert, altération du champ visuel. Un bilan
				neurologique s’impose car la sclérose en plaques est souvent associée.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Neuropathies ischémiques</Title>
			<Text>Conséquence d’une ischémie aiguë de la tête du nerf optique (artères ciliaires postérieures).</Text>
			<Title level="sub2">NOIAA non artéritique</Title>
			<Text>
				La forme la plus fréquente (&gt; 90 %). Survient brutalement, sans douleur, souvent au réveil, chez des
				patients avec facteurs cardio-vasculaires (diabète, HTA, tabac, SAHOS) ou anatomie particulière (papille
				petite). Pas de traitement curatif ; un bilan vasculaire est essentiel pour limiter le risque sur l’autre
				œil.
			</Text>
			<Title level="sub2">NOIAA artéritique</Title>
			<TextWithCorners>
				Toujours évoquer la maladie de Horton (artérite giganto-cellulaire) : urgence diagnostique et thérapeutique.
			</TextWithCorners>
			<Text>
				Biologie inflammatoire et biopsie temporale confirment ; la corticothérapie à forte dose doit être
				instaurée immédiatement.
			</Text>
		</div>
	</div>
</Section>
