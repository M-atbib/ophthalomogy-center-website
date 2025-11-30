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
		<Title level="h1">Tumeurs des paupières</Title>
		<Text>
			Les paupières regroupent peau, glandes, cartilage et conjonctive : chacune de ces structures peut donner
			naissance à une tumeur. Un examen ophtalmologique permet de caractériser la lésion.
		</Text>
		<TextWithCorners>
			Même si la plupart sont bénignes, il faut systématiquement éliminer une tumeur maligne.
		</TextWithCorners>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Tumeurs fréquentes</Title>
			<Title level="sub2">Molluscum contagiosum</Title>
			<Text>
				Affection virale (Poxvirus) surtout observée chez l’enfant. Les nodules siégeant près de la base des
				cils peuvent s’accompagner d’une conjonctivite.
			</Text>
			<Title level="sub2">Xanthélasma</Title>
			<Text>
				Plaques de cholestérol sous-cutané responsables d’une gêne esthétique. L’ablation chirurgicale ou le
				laser sont possibles ; un bilan lipidique est recommandé.
			</Text>
			<Title level="sub2">Carcinome baso-cellulaire (CBC)</Title>
			<Text>
				Tumeur maligne la plus fréquente (90 %). Liée à l’exposition solaire, elle se présente comme une lésion
				surélevée perlée pouvant s’ulcérer. L’exérèse est impérative.
			</Text>
			<Title level="sub2">Carcinome épidermoïde</Title>
			<Text>
				Moins fréquent mais plus agressif, à risque métastatique. Toute plaque ulcérée impose une consultation
				rapide.
			</Text>
			<Title level="sub2">Hémangiome capillaire</Title>
			<Text>
				Tumeur vasculaire infantile en « framboise ». Même si la régression est habituelle, il faut surveiller
				l’ouverture palpébrale et dépister une amblyopie.
			</Text>
			<Title level="sub2">Chalazion</Title>
			<Text>
				Inflammation bénigne d’une glande de Meibomius, souvent confondue avec l’orgelet.
			</Text>
		</div>
	</div>
</Section>
