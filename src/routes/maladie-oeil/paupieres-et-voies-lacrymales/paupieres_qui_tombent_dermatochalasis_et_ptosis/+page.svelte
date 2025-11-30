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
		<Title level="h1">Paupières qui tombent : dermatochalasis et ptosis</Title>
		<Text>
			La chute de la paupière supérieure peut être liée à un ptosis (défaut d’ouverture) ou à un excès de peau
			(dermatochalasis). Ces troubles sont à la fois esthétiques et fonctionnels lorsque le champ visuel est
			samputé.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Ptosis (blépharoptosis)</Title>
			<Text>
				Un ptosis peut être congénital ou acquis, intermittent ou permanent. La paupière ne s’ouvre plus
				normalement et peut recouvrir la pupille.
			</Text>
			<TextWithCorners>Lorsque la vision ou le champ visuel sont altérés, la chirurgie est indiquée.</TextWithCorners>
			<Text>Causes principales :</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Ptosis aponévrotique (distension/détachement de l’aponévrose du releveur) ;</li>
				<li>Ptosis mécanique (tumeur palpébrale lourde) ;</li>
				<li>Ptosis neurogène (atteinte neurologique, AVC) ;</li>
				<li>Ptosis traumatique.</li>
			</ul>
			<Text>
				La chirurgie vise à corriger la cause (réinsertion aponévrotique, gestes spécifiques selon l’étiologie)
				avec des cicatrices dissimulées dans le pli palpébral.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Dermatochalasis</Title>
			<Text>
				Il s’agit d’un excès de peau et parfois de graisse au niveau palpébral et sourcilier. Il peut induire
				une gêne esthétique ou fonctionnelle (champ visuel vertical réduit).
			</Text>
			<Text>
				La blépharoplastie supérieure retire l’excès cutané et graisseux si nécessaire. Les résultats sont
				rapides avec des cicatrices cachées dans le pli de la paupière.
			</Text>
		</div>
	</div>
</Section>
