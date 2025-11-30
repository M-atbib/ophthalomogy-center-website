<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/strabologie-chirurgie-du-strabisme" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Chirurgie du strabisme : comment ça se passe ?</Title>
		<Text>
			La chirurgie du strabisme est, dans l'immense majorité des cas, une chirurgie ambulatoire. Le patient entre
			à la clinique ou à l'hôpital le matin de l'intervention et en ressort le jour même.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Doit-on être endormi(e) pour une chirurgie de strabisme ?</Title>
			<Text>
				La chirurgie du strabisme est effectuée sous anesthésie générale. Une consultation dédiée avec le médecin
				anesthésiste est programmée dans les semaines précédant l’intervention.
			</Text>
			<Text>
				Ce rendez-vous a lieu à la clinique, idéalement le même jour que la consultation préopératoire avec le
				chirurgien ophtalmologiste. Pour le bon déroulé de l'intervention, il est demandé d’être à jeun à partir
				de minuit (ne pas manger, boire ou fumer).
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Comment se déroule l'intervention ?</Title>
			<Text>
				À l’arrivée au bloc opératoire, l’équipe aide le patient à se préparer pour l'entrée en secteur
				chirurgical. Une tenue stérile (charlotte, blouse, chaussons) est fournie et les enfants peuvent apporter
				leur doudou pour les rassurer.
			</Text>
			<Text>
				Une fois installé sur le brancard, l’équipe vérifie l’identité, les allergies et tout incident récent,
				puis place les dispositifs de surveillance nécessaires (saturomètre, patches thoraciques pour l’ECG…).
				L’opération dure en moyenne 30 minutes (entre 15 et 45 minutes selon le geste).
			</Text>
			<Text>
				Le chirurgien repère les muscles oculo-moteurs, déplace leurs insertions à la surface du globe pour
				redresser l’œil dévié, puis suture les muscles et la conjonctive avec des fils résorbables qui
				disparaissent en quelques semaines.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Quelles sont les suites opératoires ?</Title>
			<Text>
				Les suites immédiates associent une gêne pendant quelques jours, comparable à la sensation d’un doigt
				dans l’œil. Une rougeur oculaire ou une vision dédoublée peuvent apparaître mais se résorbent
				spontanément.
			</Text>
			<Text>
				Le traitement post-opératoire prescrit par le chirurgien repose sur des collyres à instiller dans l’œil
				opéré pendant plusieurs semaines. Il est essentiel de respecter ce protocole pour favoriser la
				cicatrisation.
			</Text>
			<Text>
				Dans les semaines suivant l’intervention, il est recommandé d’éviter toute immersion (piscine, baignade)
				et de se limiter à la douche pendant environ un mois.
			</Text>
			<TextWithCorners>
				Il est préférable de prévoir environ une semaine d'arrêt de travail ou d'éviction scolaire afin de
				permettre un temps de cicatrisation suffisant. La consultation de contrôle a lieu un mois après
				l’intervention.
			</TextWithCorners>
		</div>
	</div>
</Section>
