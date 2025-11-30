<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageNineIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="[&>*+*]:mt-4 lg:w-7/12">
			<Title level="h1">Hématome maculaire</Title>
			<Text>
				La macula est le centre de la rétine, zone en forme d’entonnoir où se concentrent les
				photorecepteurs responsables de la vision fine. Un hématome maculaire correspond à une collection
				de sang sous cette région centrale.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={RetineChirurgicalePageNineIlluOne}
				alt="Illustration d'un hématome sous-maculaire"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="[&>*+*]:mt-8">
		<div class="[&>*+*]:mt-4">
			<Title level="h2">Causes principales</Title>
			<TextWithCorners>La DMLA exsudative est la première cause d’hématome maculaire.</TextWithCorners>
			<Text>
				Un néo-vaisseau se développe sous la rétine et peut saigner brutalement. D’autres étiologies sont
				possibles : traumatisme sévère, malformation vasculaire (anévrisme…).
			</Text>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Symptômes</Title>
			<ul class="list-disc [&>li+li]:mt-2 pl-5">
				<li>Baisse de vision profonde et soudaine ;</li>
				<li>Scotome central (tache sombre) apparu brutalement, généralement sur un seul œil.</li>
			</ul>
			<TextWithCorners>Consultez en urgence si vous présentez ces signes.</TextWithCorners>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Prise en charge</Title>
			<Text>
				La stratégie dépend de l’ampleur de l’hématome, de l’âge et de la cause. Plusieurs options peuvent
				être combinées :
			</Text>
			<Title level="sub2">Traiter la cause</Title>
			<Text>
				En cas de DMLA, des injections intra-vitréennes d’anti-VEGF sont initiées rapidement pour faire
				régresser le néo-vaisseau. Pour certaines lésions vasculaires, une photocoagulation laser peut être
				discutée.
			</Text>
			<Title level="sub2">Surveillance simple</Title>
			<Text>
				Lorsque l’hématome est traumatique et susceptible de se résorber spontanément, ou lorsqu’il est
				trop ancien/important pour espérer récupérer, une observation peut être privilégiée.
			</Text>
			<Title level="sub2">Injections intra-vitréennes</Title>
			<Text>
				Outre les anti-VEGF, le rt-PA peut être injecté au contact de l’hématome pour dissoudre le caillot.
				L’association à un gaz expansif permet parfois de déplacer le sang.
			</Text>
			<Title level="sub2">Chirurgie</Title>
			<Text>
				Elle consiste à pratiquer une vitrectomie, injecter du rt-PA sous-rétinien puis un gaz intra-oculaire
				pour mobiliser l’hématome. Un positionnement post-opératoire spécifique est ensuite requis.
			</Text>
			<Text>
				Les indications chirurgicales répondent à des critères anatomiques précis et sont discutées au cas par
				cas.
			</Text>
		</div>
	</div>
</Section>
