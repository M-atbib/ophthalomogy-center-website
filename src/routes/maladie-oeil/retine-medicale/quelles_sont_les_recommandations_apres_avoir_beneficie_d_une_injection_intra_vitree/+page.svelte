<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineMedicalPageSixIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-medicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Quelles sont les recommandations après une injection intra-vitréenne ?</Title>
		<Text>
			Vous venez bénéficier d’une injection intra vitréenne ? Les ophtalmologistes du [Nom de
			Clinique] vous invitent à lire attentivement les informations suivantes.
		</Text>
	</div>

	<Title level="h2"
		>Que se passe-t-il habituellement dans les heures qui suivent l'injection ?</Title
	>
	<Text>
		L’injection est indolore dans la très grande majorité des cas, grâce à une anesthésie par
		collyres. Cela permet un retour au domicile rapidement après l’acte, le jour même. Il est
		néanmoins recommandé d’être accompagné le jour de l’injection.
	</Text>
	<Text>
		Une sensation de brûlure, de “grains de sable“ ou de picotements peut apparaître dans les heures
		suivant l’injection intra-vitréenne. Cela est liée à une irritation de la cornée (kératite)
		provoquée par la povidone iodée (Bétadine ophtalmique®). Il est nécessaire d’instiller dans
		l’œil, préalablement à l’injection, ce produit afin de limiter le risque de survenue d'une
		infection. En parallèle, l'instillation de lubrifiants, le jour de l’injection, peut diminuer
		les symptômes et accélérer la cicatrisation cornéenne.
	</Text>
	<Text
		>L’efficacité du traitement sera évaluée par votre ophtalmologiste quelques semaines après la
		date de l’injection.</Text
	>

	<Title class="mt-10" level="h2"
		>Quelles sont les complications possibles après une injection ?</Title
	>
	<Text>
		L’incident le plus fréquent est l’apparition d’une hémorragie sous-conjonctivale à l’endroit de
		l’injection. Ce saignement est lié au traumatisme d’un petit vaisseau conjonctival par
		l’aiguille.
	</Text>
	<Text>
		L’apparition de corps flottants ou de tâches dans le champ visuel est également décrite de
		manière régulière. C’est lié à la visualisation du produit injecté ou de petites bulles d’air en
		suspension dans le vitré (gel transparent qui remplit l’œil à l’arrière du cristallin).
	</Text>
	<Text>
		Dans les deux cas, cela est courant et bénin. Les symptômes se résorberont en quelques jours.
	</Text>
	<Text>
		Les autres complications sont très rares, et peuvent survenir malgré les précautions rigoureuses
		prises en amont du geste. Exceptionnellement et comme pour toute chirurgie oculaire, elles
		peuvent prendre un caractère de gravité pouvant conduire à une perte de la vision et, dans les
		cas les plus rares, à la perte de l’œil. On décrit :
	</Text>

	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			L’infection intra-oculaire (endophtalmie), qui se manifeste par une rougeur et une douleur
			importante, associée ou non à une baisse d’acuité visuelle dans les heures ou les jours
			suivants l’injection ;
		</li>
		<li>Un traumatisme du cristallin, à l’origine d’une cataracte ;</li>
		<li>Un décollement de rétine (perte de la vision indolore et brutale) ;</li>
		<li>Une hémorragie intra-vitréenne.</li>
	</ul>

	<Title class="mt-10" level="h2">Quels sont les signes qui ne doivent pas vous inquiéter ?</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Vision de tâches ou de bulles d’air ;</li>
		<li>Sensation de grains de sable sous la paupière ;</li>
		<li>Larmoiement inhabituel ;</li>
		<li>Saignement conjonctival au lieu d’injection.</li>
	</ul>

	<Title class="mt-10" level="h2"
		>Quels sont les signes qui doivent vous amener à nous consulter en urgence ?</Title
	>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Baisse de vision rapide ;</li>
		<li>Éclairs lumineux, flashs ;</li>
		<li>Sensation de voile persistante, apparition de mouches volantes ;</li>
		<li>Rougeur oculaire diffuse prononcée ;</li>
		<li>Douleurs oculaires importantes.</li>
	</ul>
	<figure
		class="border-light-grey/60 bg-primary-background r mx-auto w-full max-w-lg overflow-hidden"
	>
		<img
			src={RetineMedicalPageSixIlluOne}
			alt="Patiente après une injection intra-vitréenne"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Text>
		Si vous présentez un de ces symptômes, nous vous invitons à appeler notre standard (05 37 810
		828) en journée et en semaine. Sinon, vous pouvez également vous rendre dans l'un de nos
		cabinets, sans rendez-vous. En dehors de nos horaires d'ouverture, appelez l'établissement
		(Clinique ou Centre Hospitalier) dans lequel vous avez été opéré(e). Les chirurgiens du [Nom de
		Clinique] organisent des astreintes pour s'occuper de leurs patients dans ce type de situation.
	</Text>
	<TextWithCorners class="mt-6">
		Au moindre doute, l'équipe du [Nom de Clinique] se tient à votre disposition pour répondre à vos
		questions, vous prendre en charge et vous suivre de manière attentive à la suite de votre
		intervention.
	</TextWithCorners>
</Section>
