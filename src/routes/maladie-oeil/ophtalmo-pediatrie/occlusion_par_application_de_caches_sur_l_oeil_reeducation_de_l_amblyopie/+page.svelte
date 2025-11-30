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
		<Title level="h1">Occlusion par caches : rééducation de l'amblyopie</Title>
		<Text>
			L’occlusion consiste à cacher l’œil dominant à l’aide d’un pansement collé autour de l’œil. Les lunettes se
			portent par-dessus.
		</Text>
		<TextWithCorners>
			C’est le seul moyen de faire travailler l’œil paresseux, toujours associé au port de lunettes.
		</TextWithCorners>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Pourquoi cacher ?</Title>
			<Text>
				Quand un œil est dominé, le cerveau ignore son image : l’amblyopie s’installe. Le cache force l’œil faible à
				fixer et à se développer.
			</Text>
			<Text>Les caches se trouvent en pharmacie, en plusieurs tailles ; choisissez celui qui couvre bien sans gêner.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Modalités</Title>
			<Text>
				Une occlusion permanente (24 h/24) est prescrite 2 à 6 semaines pour évaluer la récupération visuelle. Si
				possible, changez le cache dans le noir ; sinon, il peut être retiré la nuit mais remis dès le réveil.</Text>
			<Text>
				Alternez les zones de peau collées pour limiter l’irritation. Un cordon ou plusieurs tailles de caches peuvent aider.
			</Text>
			<TextWithCorners>
				La vision du bon œil peut baisser transitoirement (« amblyopie à bascule ») : c’est bénin et réversible.
			</TextWithCorners>
			<Text>Des modifications temporaires du strabisme peuvent apparaître sans conséquence.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Durée et suivi</Title>
			<Text>
				Après la phase initiale, on réduit progressivement les jours d’occlusion. Le traitement dure en moyenne un an,
				parfois plusieurs années pour éviter les rechutes.
			</Text>
			<Text>
				Les consultations sont rapprochées (toutes les 2-4 semaines au départ, puis tous les 2-3 mois). Chez l’enfant
				plus grand, un filtre discret (Ryser) peut pénaliser l’œil dominant pour stabiliser le résultat.
			</Text>
			<TextWithCorners>
				La plasticité visuelle s’arrête vers 7-8 ans : l’occlusion doit être rigoureuse avant cet âge.
			</TextWithCorners>
		</div>
	</div>
</Section>
