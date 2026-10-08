<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';
	import { RetineMedicalPageSixIlluOne } from '$lib/assets';

	const backHref = '/conseils/conseils-apres-soins-et-chirurgie-oculaire';
</script>

<DiseaseArticleLayout
	title="Quelles sont les recommandations après une injection intra-vitréenne ?"
	{backHref}
>
	<!-- This advice route keeps the emergency warning flow from the rétine médicale source page. -->
	<Text>
		Vous venez bénéficier d’une injection intra vitréenne ? Les ophtalmologistes du [Nom de
		Clinique] vous invitent à lire attentivement les informations suivantes.
	</Text>

	<section>
		<Title level="h3" as="h2">
			Que se passe-t-il habituellement dans les heures qui suivent l'injection ?
		</Title>
		<Text>
			L’injection est indolore dans la très grande majorité des cas, grâce à une anesthésie par
			collyres. Cela permet un retour au domicile rapidement après l’acte, le jour même. Il est
			néanmoins recommandé d’être accompagné le jour de l’injection.
		</Text>
		<Text>
			Une sensation de brûlure, de “grains de sable“ ou de picotements peut apparaître dans les
			heures suivant l’injection intra-vitréenne. Cela est liée à une irritation de la cornée
			provoquée par la povidone iodée. En parallèle, l'instillation de lubrifiants, le jour de
			l’injection, peut diminuer les symptômes et accélérer la cicatrisation cornéenne.
		</Text>
		<Text>
			L’efficacité du traitement sera évaluée par votre ophtalmologiste quelques semaines après la
			date de l’injection.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Quelles sont les complications possibles après une injection ?</Title>
		<Text>
			L’incident le plus fréquent est l’apparition d’une hémorragie sous-conjonctivale à l’endroit
			de l’injection. Ce saignement est lié au traumatisme d’un petit vaisseau conjonctival par
			l’aiguille.
		</Text>
		<Text>
			L’apparition de corps flottants ou de tâches dans le champ visuel est également décrite de
			manière régulière. C’est lié à la visualisation du produit injecté ou de petites bulles d’air
			en suspension dans le vitré.
		</Text>
		<Text>
			Dans les deux cas, cela est courant et bénin. Les symptômes se résorberont en quelques jours.
		</Text>
		<Text>
			Les autres complications sont très rares, et peuvent survenir malgré les précautions
			rigoureuses prises en amont du geste. On décrit :
		</Text>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				L’infection intra-oculaire, qui se manifeste par une rougeur et une douleur importante ;
			</li>
			<li>Un traumatisme du cristallin, à l’origine d’une cataracte ;</li>
			<li>Un décollement de rétine ;</li>
			<li>Une hémorragie intra-vitréenne.</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Quels sont les signes qui ne doivent pas vous inquiéter ?</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Vision de tâches ou de bulles d’air ;</li>
			<li>Sensation de grains de sable sous la paupière ;</li>
			<li>Larmoiement inhabituel ;</li>
			<li>Saignement conjonctival au lieu d’injection.</li>
		</ul>

		<Title level="h3" as="h2">
			Quels sont les signes qui doivent vous amener à nous consulter en urgence ?
		</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Baisse de vision rapide ;</li>
			<li>Éclairs lumineux, flashs ;</li>
			<li>Sensation de voile persistante, apparition de mouches volantes ;</li>
			<li>Rougeur oculaire diffuse prononcée ;</li>
			<li>Douleurs oculaires importantes.</li>
		</ul>
		<ArticleImage
			src={RetineMedicalPageSixIlluOne}
			alt="Patiente après une injection intra-vitréenne"
			class="max-w-lg"
		/>
		<Text>
			Si vous présentez un de ces symptômes, nous vous invitons à appeler notre standard (05 37 810
			828) en journée et en semaine. Sinon, vous pouvez également vous rendre dans l'un de nos
			cabinets, sans rendez-vous.
		</Text>
		<TextWithCorners>
			Au moindre doute, l'équipe du [Nom de Clinique] se tient à votre disposition pour répondre à
			vos questions, vous prendre en charge et vous suivre de manière attentive à la suite de votre
			intervention.
		</TextWithCorners>
	</section>
</DiseaseArticleLayout>
