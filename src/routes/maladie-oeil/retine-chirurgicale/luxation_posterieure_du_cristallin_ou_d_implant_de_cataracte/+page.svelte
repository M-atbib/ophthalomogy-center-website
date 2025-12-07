<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageNineIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Luxation postérieure du cristallin ou d’un implant</Title>
	</div>

	<Title level="h2">Luxation postérieure du cristallin : que se passe-t-il ?</Title>
	<Text>
		Le cristallin est une lentille située à l’intérieur de l'oeil, juste derrière l'iris. En cas
		d'opacification (que l'on appelle cataracte), le cristallin est remplacé par un implant
		intra-oculaire, grâce à une intervention chirurgicale.
	</Text>

	<figure class=" mx-auto w-full max-w-lg">
		<img
			src={RetineChirurgicalePageNineIlluOne}
			alt="Luxation du cristallin dans le vitré"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title class="mt-10" level="h2">Causes et facteurs de risque de survenue</Title>
	<Text>
		La première cause de luxation postérieure du cristallin est la chirurgie de cataracte. Lors de
		cette procédure, le sac peut se rompre, entraînant une chute du cristallin. C'est ce que l'on
		appelle la rupture capsulaire postérieure. <br />
		Les autres causes sont :
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Certaines pathologies oculaires, qui fragilisent le complexe cristallin-sac capsulaire-
			zonule, comme la pseudo-exfoliation capsulaire. Ce type de maladie, qui se manifeste par le
			dépôt de matières protéiques à l'intérieur de l'oeil, va fragiliser la zonule, véritable
			attache du cristallin à la paroi oculaire. Une chirurgie ou un traumatisme peuvent conduire à
			une rupture des fibres zonulaires et à la luxation ;
		</li>
		<li>Les maladies du tissu élastique, comme le syndrome de Marfan, pour les mêmes raisons ;</li>
		<li>Un traumatisme contusif violent, même en l'absence de pathologie fragilisante ;</li>
		<li>Une myopie forte ;</li>
	</ul>

	<Title class="mt-10" level="h2">Conséquences d'une luxation</Title>
	<Text>
		En cas de luxation postérieure du cristallin, celui-ci se retrouve dans la cavité vitréenne. De
		manière générale, le patient atteint va ressentir une baisse de vision sévère. Les rayons
		lumineux ne suivent, en effet, plus du tout un trajet intra-oculaire normal. <br />
		Les principaux risques anatomiques sont :
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Le décollement de rétine. La présence du cristallin ou de l'implant génère des tractions sur
			le gel vitréen. Ces tractions se transmettent à la rétine et peuvent occasionner des
			déchirures et soulèvements.
		</li>
		<li>
			Une hyperpression oculaire majeure par mécanisme de bloc pupillaire (plus fréquente si la
			luxation est antérieure).
		</li>
	</ul>
	<Text>La prise en charge d'une telle situation est donc idéalement très précoce.</Text>

	<Title class="mt-10" level="h2">Prise en charge chirurgicale</Title>

	<Title level="sub2">Vitrectomie</Title>
	<Text class="mt-2">
		Dans tous les cas, la prise en charge doit être réalisée par un chirurgien vitréo-rétinien, qui
		pourra réaliser une vitrectomie (ablation chirurgicale du vitré).
	</Text>
	<Title level="sub2">Nettoyage</Title>
	<Text class="mt-2">
		Le cristallin restant doit être retiré (phacophagie). S'il s'agit d'un implant intra-oculaire,
		il doit être soit retiré, soit repositionné et fixé. <br />
		En cas de chirurgie de cataracte interrompue, un nettoyage de la partie antérieure de votre oeil
		doit être réalisé (ablation des masses cristalliniennes notamment).
	</Text>
	<Title level="sub2">Mise en place d'un nouvel implant intra-oculairet</Title>
	<Text class="mt-2">Selon l'état de votre oeil, plusieurs options sont possibles :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Injection d'un implant dans le sulcus ciliaire (en avant du sac cristallinien résiduel)</li>
		<li>Fixation d'un implant à l'iris</li>
		<li>Fixation d'un implant à la sclère</li>
	</ul>
	<Text>
		Ce choix dépendra essentiellement de l'anatomie et de l'état des tissus intra-oculaires.
		L'objectif est d'obtenir la meilleure stabilité post-opératoire possible pour l'implant.
	</Text>
</Section>
