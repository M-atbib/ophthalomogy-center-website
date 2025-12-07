<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { PaupieresPageOneIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/paupieres-et-voies-lacrymales" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Paupières qui tombent : dermatochalasis et ptosis</Title>
	</div>

	<Title level="h2">Ptosis - Blépharoptosis</Title>
	<Title level="sub2">Définition</Title>

	<Text>
		La ptose (ou « ptosis », « chute ») de la paupière supérieure peut être remarquée à tout âge. Si
		elle est présente dès la naissance, on parle de « ptsosis congénital ». Sinon, il s’agit d’un
		« ptosis acquis ». <br />
		Une description anatomique simplifiée de la paupière est nécessaire pour bien comprendre les mécanismes
		en jeu.
	</Text>
	<figure class="mx-auto w-full max-w-xs">
		<img
			src={PaupieresPageOneIlluOne}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>
	<TextWithCorners
		>Lorsque la vision ou le champ visuel sont altérés, la chirurgie est indiquée.</TextWithCorners
	>
	<Text>Causes principales :</Text>
	<ul class="list-disc space-y-2 pl-5">
		<li>Ptosis aponévrotique (distension/détachement de l’aponévrose du releveur) ;</li>
		<li>Ptosis mécanique (tumeur palpébrale lourde) ;</li>
		<li>Ptosis neurogène (atteinte neurologique, AVC) ;</li>
		<li>Ptosis traumatique.</li>
	</ul>
	<Text>
		La chirurgie vise à corriger la cause (réinsertion aponévrotique, gestes spécifiques selon
		l’étiologie) avec des cicatrices dissimulées dans le pli palpébral.
	</Text>

	<Title level="h2">Dermatochalasis</Title>
	<Text>
		Il s’agit d’un excès de peau et parfois de graisse au niveau palpébral et sourcilier. Il peut
		induire une gêne esthétique ou fonctionnelle (champ visuel vertical réduit).
	</Text>
	<Text>
		La blépharoplastie supérieure retire l’excès cutané et graisseux si nécessaire. Les résultats
		sont rapides avec des cicatrices cachées dans le pli de la paupière.
	</Text>
</Section>
