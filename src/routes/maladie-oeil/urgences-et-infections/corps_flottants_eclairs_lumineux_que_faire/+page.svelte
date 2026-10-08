<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';
	import { RetineChirurgicalePageFourIlluOne, RetineChirurgicalePageOneIlluOne } from '$lib/assets';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Corps flottants, éclairs lumineux : que faire ?" {backHref}>
	<section>
		<Title level="h3" as="h2">Corps flottants</Title>
		<Text
			>Le terme exact utilisé par l’ophtalmologiste pour décrire ce phénomène visuel est «
			myodésopsie ».</Text
		>
		<Text weight="medium"
			>C’est un symptôme extrêmement fréquent, qui peut toucher tout individu, quel que soit son âge
			ou ses antécédents médico-chirurgicaux.</Text
		>
		<Text
			>Les patients décrivent souvent les myodésopsies comme des « mouches volantes », des images «
			d’insectes ondulés » ou, plus simplement, comme des « points noirs » qui, en flottant à
			l’intérieur de l’œil, suivent le regard avec un léger décalage. Souvent, les corps flottants
			ne sont pas invalidants. Ils sont particulièrement visibles en cas de forte luminosité ou
			lorsque l’œil fixe un fond clair et uniforme.</Text
		>
		<Text tone="accent" weight="medium"
			>En cas d’apparition récente de corps flottants ou de majoration importante de leur nombre,
			consultez votre ophtalmologiste dans les 48 heures, afin de bénéficier d’un fond d’œil
			attentif.</Text
		>
		<Title level="sub2" as="h3">Causes possibles d'apparition</Title>
		<Text
			>Dans l’immense majorité des cas, ils sont expliqués par la présence d'un décollement
			postérieur du vitré. Les synérèses vitréennes, petites zones de condensation du gel vitréen,
			vont projeter leur ombre sur la rétine. Cette ombre est mobile et accompagne les mouvements du
			globe oculaire. Isolé, cet événement est sans gravité pour l'œil.</Text
		>
		<ArticleImage
			src={RetineChirurgicalePageOneIlluOne}
			alt="Corps flottants dans la cavité vitréenne"
			class="max-w-md"
		/>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				Dans d’autres cas, l’apparition de corps flottants peut être liée à la présence de cellules
				sanguines à l’intérieur de la cavité vitréenne. Le saignement peut provenir d’une déchirure
				rétinienne ou de la présence de néo-vaisseaux rétiniens, conséquences possible du diabète ou
				d’une occlusion de la veine centrale de la rétine.
			</li>
			<li>
				L’apparition de corps flottants, surtout s’ils sont très fins et très nombreux, peut
				également traduire la présence d’une inflammation ou d’une infection intra-oculaire. Des
				explorations complémentaires seront, dès lors, absolument indispensables.
			</li>
		</ul>
		<TextWithCorners
			>Les corps flottants secondaires à des synérèses vitréennes et au décollement postérieur du
			vitré n’ont pas tendance à disparaître. Il est tout à fait normal de les percevoir à plusieurs
			mois du diagnostic initial.</TextWithCorners
		>
		<Text
			>Avec le temps, cependant, leur impact s’atténue et leur caractère gênant est de moins en
			moins marqué.</Text
		>
		<TextWithCorners
			>Les corps flottants ne nécessitent pas de traitement, dans l’immense majorité des cas.</TextWithCorners
		>
		<Text
			>Lorsqu’ils deviennent trop volumineux et ont un impact majeur sur la vision, leur ablation
			chirurgicale ou via un geste thérapeutique au laser peut être discutée. Il convient cependant
			d’en comprendre les risques, exposés par votre ophtalmologiste, avant d’envisager ce type de
			démarche.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Éclairs lumineux</Title>
		<Text
			>Il s’agit d’une manifestation visuelle fréquente, motif de nombreuses consultations aux
			urgences ophtalmologiques. La survenue d’éclairs lumineux nécessite une description précise du
			trouble, afin d’orienter finement le diagnostic.</Text
		>
		<Text>Différentes situations sont possibles :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				Lorsque le patient perçoit de véritables flashes lumineux, persistants, localisés dans une
				partie assez précise du champ de vision et présents depuis plusieurs heures, y compris
				lorsque les yeux sont fermés, on parle de « phosphènes ». Ceux-ci ont une origine
				rétinienne. Il n’y a pas, dans le tissu rétinien, de cellules sensitives conduisant un
				signal douloureux. Par contre, une lésion de la rétine se manifeste par des signes visuels
				inhabituels. Les phosphènes sont observés essentiellement dans le cadre d’un décollement
				postérieur du vitré pathologique. Lorsque la hyaloïde tire fortement sur la rétine et s’en
				détache, elle peut entraîner une traction sur les fibres nerveuses rétiniennes et, dans ce
				cas, occasionner une déchirure, en forme de clapet ou de trou.
			</li>
		</ul>
		<Text tone="accent" weight="medium"
			>Cette situation représente une urgence thérapeutique et une prise en charge s’impose dans les
			24 heures. En effet, du liquide intra-oculaire peut s’engouffrer dans la déchirure et
			entraîner un , avec une menace importante pour la fonction visuelle.</Text
		>
		<ArticleImage
			src={RetineChirurgicalePageFourIlluOne}
			alt="Déchirure de la rétine provoquée par une traction du vitré"
			class="max-w-md"
		/>
		<Text
			>La découverte d’une déchirure rétinienne récente va donc amener votre ophtalmologiste à
			entourer celle-ci avec des impacts laser. Ce traitement porte le nom de "barrage au laser
			Argon". Ceci va permettre la constitution d’une barrière, qui empêchera la rétine de se
			décoller autour de la déchirure. Ce geste est réalisé directement au cabinet d’Ophtalmologie,
			sans nécessité d’hospitalisation ou de passage au bloc opératoire.</Text
		>
		<Text
			>L’examen attentif du fond d’œil peut s’avérer normal, même en présence de phosphènes
			persistants. C’est une situation fréquente qui traduit la traction simple de la hyaloïde. Une
			surveillance rapprochée, avec un nouveau fond d’œil au moindre nouveau symptôme est alors mise
			en place.</Text
		>
		<Text
			>Lorsque les éclairs lumineux apparaissent sur les deux yeux, sur les côtés latéraux, sont
			décrits comme « diffus » et régressent après quelques dizaines de minutes, alors on parlera
			plutôt de « scotomes scintillants ». Cette situation est le plus souvent suivie (mais pas
			toujours) de maux de tête importants ; ils constituent alors une aura migraineuse, dans le
			cadre de migraines ophtalmiques.</Text
		>
		<TextWithCorners>Les migraines ophtalmiques n’ont aucune cause oculaire.</TextWithCorners>
		<Text
			>Il s’agit de productions sensorielles d’origine uniquement cérébrale, émanant plus
			précisément du cortex. Une fois cette hypothèse confirmée, un avis neurologique spécialisé est
			souhaitable, afin de permettre une prise en charge diagnostique et thérapeutique optimale de
			la migraine.</Text
		>
		<Text
			>Dans d’autres circonstances, les éclairs lumineux prennent plutôt la forme de points
			brillants éparpillés dans le champ de vision. Le patient éprouve des difficultés pour les
			dénombrer et les décrire précisément. On parle dans ce cas de « photopsies ». Il s’agit d’un
			terme générique qui peut orienter vers de nombreuses situations cliniques, allant de
			l’hypoglycémie symptomatique à la rétinite auto-immune.</Text
		>
		<Text tone="accent" weight="medium"
			>D’une manière générale, la survenue d’éclairs lumineux, surtout s’ils sont inhabituels, doit
			motiver une demande de consultation ophtalmologique rapide, au mieux dans les 48 heures.</Text
		>
	</section>
</DiseaseArticleLayout>
