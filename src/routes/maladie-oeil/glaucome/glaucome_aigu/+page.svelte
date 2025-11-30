<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/glaucome" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Glaucome aigu</Title>
		<Text>
			La crise aiguë par fermeture de l’angle est une urgence ophtalmologique majeure : la pression
			intra-oculaire s’élève brutalement et peut endommager définitivement l’œil si rien n’est fait.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Symptômes à reconnaître</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Douleur intense (souvent hémicrânienne) avec nausées ou vomissements ;</li>
				<li>Rougeur avec cercle péri-kératique ;</li>
				<li>Pupille figée en semi-mydriase ;</li>
				<li>Baisse de vision liée à l’œdème cornéen et à la souffrance du nerf optique.</li>
			</ul>
			<TextWithCorners>
				Douleur + rougeur + baisse de vision = consultation ophtalmologique en urgence.
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Mécanisme et facteurs de risque</Title>
			<Text>
				L’humeur aqueuse ne peut plus s’évacuer par le trabéculum car la racine de l’iris ferme l’angle
				irido-cornéen.
			</Text>
			<Text>Yeux prédisposés :</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Hypermétropie &gt; 4 D ;</li>
				<li>Œil non opéré de cataracte ;</li>
				<li>Angles qualifiés de « fermables » lors d’un bilan.</li>
			</ul>
			<Text>Déclencheurs possibles : certains médicaments mydriatiques, sprays, bronchodilatateurs, antidépresseurs ; obscurité prolongée provoquant une dilatation pupillaire.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Prise en charge</Title>
			<TextWithCorners>Le traitement doit être initié sans délai.</TextWithCorners>
			<Title level="sub2">Objectifs immédiats</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Baisser la pression intra-oculaire (collyres, perfusions, comprimés) ;</li>
				<li>Lever le blocage pupillaire par iridotomie périphérique laser dès que possible ;</li>
				<li>Protéger l’œil controlatéral à risque via une iridotomie préventive.</li>
			</ul>
			<Title level="sub2">Prise en charge secondaire</Title>
			<Text>
				Une chirurgie de cataracte est souvent programmée pour rouvrir définitivement l’angle. D’autres
				gestes chirurgicaux peuvent s’avérer nécessaires si la pression reste élevée.
			</Text>
		</div>
	</div>
</Section>
