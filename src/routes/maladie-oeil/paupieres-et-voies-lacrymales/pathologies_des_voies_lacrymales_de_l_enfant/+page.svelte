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
		<Title level="h1">Pathologies des voies lacrymales de l'enfant</Title>
		<Text>
			Lorsque la production et l’évacuation des larmes ne sont plus équilibrées, un larmoiement (épiphora)
			apparaît. Les obstacles sont fréquents chez le nourrisson.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Rappels anatomiques</Title>
			<Text>
				Les méats, canalicules, sac lacrymal puis canal lacrymo-nasal acheminent les larmes vers la fosse
				nasale via la valve de Hasner.
			</Text>
			<TextWithCorners>
				Toute pathologie de cet arbre entraîne un larmoiement et un écoulement sur la joue.
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Imperforation lacrymo-nasale</Title>
			<Text>
				Très fréquente à la naissance : une membrane embryonnaire persiste au niveau de la valve de Hasner
				(90 % des épiphora obstructifs). Souvent bilatérale, elle guérit spontanément dans la majorité des
				cas (75 % avant 3 mois, 85 % à 1 an).
			</Text>
			<Text>
				Avant 1 an, on privilégie des traitements doux : massages réguliers du sac lacrymal et traitement des
				conjonctivites par lavages / collyres antibiotiques.
			</Text>
			<TextWithCorners>
				En cas d’imperforation avérée, les gestes invasifs sont généralement réalisés après 12 mois.
			</TextWithCorners>
			<Text>
				Sous anesthésie générale, deux options existent :
			</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Sondage-lavage pour perforer la valve et vérifier la perméabilité ;</li>
				<li>Intubation au silicone en cas d’échec du sondage simple.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Mucocèle du sac lacrymal (dacryocystocèle)</Title>
			<Text>
				Dilatation bénigne du sac lacrymal visible au coin interne de l’œil, souvent liée à la même
				imperforation. La masse est souple, indolore et peut être bilatérale ; elle régresse le plus souvent
				spontanément.
			</Text>
			<TextWithCorners>
				Surveillez les signes d’infection : rougeur, douleur, fièvre. Ils imposent une consultation rapide
				pour prévenir la dacryocystite du nouveau-né.
			</TextWithCorners>
		</div>
	</div>
</Section>
