<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageOneIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Corps flottants</Title>
	</div>

	<Title level="h2">Qu'appelle-t-on "corps flottants" ?</Title>
	<Text>
		Le terme exact utilisé par l’ophtalmologiste pour décrire ce phénomène visuel
		est « myodésopsie ».
	</Text>
	<TextWithCorners>
		C’est un symptôme extrêmement fréquent, qui peut toucher tout individu, quel que soit son âge ou
		ses antécédents médico-chirurgicaux.
	</TextWithCorners>

	<Text>
		Les patients décrivent souvent les myodésopsies comme des « mouches volantes », des images
		« d’insectes ondulés »  ou, plus simplement, comme des « points noirs » qui, en flottant à
		l’intérieur de l’œil, suivent le regard avec un léger décalage. Souvent, les corps flottants ne
		sont pas invalidants.
	</Text>
	<TextWithCorners>
		Ils sont particulièrement visibles en cas de forte luminosité ou lorsque l’œil fixe un fond
		clair et uniforme.
	</TextWithCorners>

	<Text>
		En cas d’apparition récente de corps flottants ou de majoration importante de leur
		nombre, surtout s'ils sont accompagnés d'éclairs lumineux (phosphènes), amputation du champ de
		vision (scotome) ou baisse de vision, consultez votre ophtalmologiste en urgence afin de
		bénéficier d’un fond d’œil attentif à la recherche notamment d'une déchirure de la rétine ou
		d'un décollement de la rétine
	</Text>

	<Title class="mt-10" level="h2">À quoi sont dûs les corps flottants ?</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Dans l’immense majorité des cas, ils sont expliqués par la présence d'un décollement
			postérieur du vitré. Les  zones de condensation du gel vitréen (synérèses), vont projeter leur
			ombre sur la rétine. Cette ombre est mobile et accompagne les mouvements du globe
			oculaire. Isolé, cet événement est sans gravité pour l'oeil.
		</li>
		<li>
			Dans d’autres cas, l’apparition de corps flottants peut être liée à la présence de cellules
			sanguines à l’intérieur de la cavité vitréenne. Le saignement peut provenir d’une déchirure
			rétinienne ou de la présence de néo-vaisseaux rétiniens, conséquences possible du diabète ou
			d’une occlusion de la veine centrale de la rétine.
		</li>
		<li>
			L’apparition de corps flottants, surtout s’ils sont très fins et très nombreux, peut également
			traduire la présence d’une inflammation ou d’une infection intra-oculaire. Des explorations
			complémentaires seront, dès lors, absolument indispensables.
		</li>
	</ul>
	<figure class="mx-auto w-full max-w-lg overflow-hidden">
		<img
			src={RetineChirurgicalePageOneIlluOne}
			alt="Illustration des corps flottants"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Title class="mt-10" level="h2">Prise en charge</Title>

	<TextWithCorners
		>Les corps flottants ne nécessitent pas de traitement, dans l’immense majorité des cas.</TextWithCorners
	>
	<Text>
		Lorsqu’ils deviennent trop volumineux et ont un impact majeur sur la vision, leur ablation
		chirurgicale ou via un geste thérapeutique au laser peut être discutée. Il convient cependant
		d’en comprendre les risques, exposés par votre ophtalmologiste, avant d’envisager ce type de
		démarche.
	</Text>

	<Title class="mt-10" level="h2">Évolution</Title>
	<Text>
		Les corps flottants secondaires à des condensations du vitré et au décollement postérieur du
		vitré n’ont pas tendance à disparaître.
	</Text>
	<TextWithCorners
		>Il est tout à fait normal de les percevoir à plusieurs mois du diagnostic initial.</TextWithCorners
	>
	<Text
		>Avec le temps, cependant, leur impact s’atténue et leur caractère gênant est de moins en moins
		marqué.</Text
	>
</Section>
