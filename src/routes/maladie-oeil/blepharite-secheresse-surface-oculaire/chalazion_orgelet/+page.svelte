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
		<Title level="h1">Chalazion & Orgelet</Title>
		<Text>
			Un chalazion est une tuméfaction rouge et douloureuse de la paupière due à l’obstruction d’une glande de Meibomius.
			Dans le langage courant il est parfois confondu avec l’orgelet.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Mode d'apparition</Title>
			<Text>
				Les glandes de Meibomius, situées dans le tarse, s’ouvrent au bord de la paupière pour apporter le meibum au film
				lacrymal. Si l’une d’elles se bouche, le meibum s’accumule, dilate le « tube » et déclenche une inflammation (phase
				du chalazion inflammatoire).
			</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Pathologies inflammatoires de surface ;</li>
				<li>Dermatoses comme la rosacée ;</li>
				<li>Blépharite meibomienne commune ;</li>
				<li>Chez l’enfant, astigmatisme mal corrigé (peut favoriser les récidives).</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Évolution</Title>
			<Text>Deux évolutions possibles :</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Fistulisation spontanée à la peau ou vers l’intérieur, permettant l’évacuation du contenu ;</li>
				<li>Enkystement durable avec formation d’un nodule parfois volumineux.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Traitement</Title>
			<Text>
				La prise en charge combine traitement médical de l’épisode aigu (pommades/collyres anti-inflammatoires sur avis
				ophtalmologique) et massages pour vidanger la glande.
			</Text>
			<Text>
				Si un kyste persiste et reste volumineux, une ablation chirurgicale sous anesthésie locale peut être nécessaire
				pour retirer la paroi et éviter la récidive.
			</Text>
			<Text>
				Comprendre et traiter la cause est indispensable : hygiène palpébrale régulière en cas de blépharite, correction
				optique (avec cycloplégie si besoin) pour les enfants.
			</Text>
			<TextWithCorners>
				Une lésion inflammatoire de paupière qui ne régresse pas doit conduire à consulter rapidement un ophtalmologiste.
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Orgelet</Title>
			<Text>
				L’orgelet est une infection bactérienne d’un follicule ciliaire. Plus rare, il se traite en retirant le cil concerné
				pour drainer l’infection, associé à un traitement antibiotique local prescrit par l’ophtalmologiste.
			</Text>
		</div>
	</div>
</Section>
