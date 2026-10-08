<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';
	import { InfectionPageFiveIlluOne, LentillesPageFourImgOne } from '$lib/assets';

	const backHref = '/maladie-oeil/lentilles-contactologie';
</script>

<DiseaseArticleLayout title="Comment mettre et entretenir vos lentilles ?" {backHref}>
	<ArticleImage
		src={LentillesPageFourImgOne}
		alt="Pose d'une lentille de contact sur l'œil"
		class="max-w-4xl"
		loading="eager"
	/>

	<section>
		<Title level="h3" as="h2"
			>Comment bien utiliser des lentilles souples à renouvellement mensuel ?</Title
		>
		<Text
			>Le port de lentilles comme dispositif médical de correction optique n’est pas anodin et les
			quelques règles suivantes sont à suivre de manière stricte pour éviter tout accident,
			potentiellement très grave :</Text
		>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				Toujours manipuler les lentilles avec les mains propres, lavées à l’eau et au savon et
				convenablement séchées ;
			</li>
			<li>Ne jamais poser ou garder une lentille sur un œil rouge et/ou douloureux ;</li>
			<li>
				Ne jamais utiliser de l’eau du robinet, ni des eaux minérales en bouteille pour nettoyer,
				rincer ou stocker les lentilles et les étuis ;
			</li>
		</ul>
		<TextWithCorners
			>La baignade avec des lentilles est formellement contre-indiquées, quel que soit le type de
			lentilles portées et quel que soit le lieu de baignade (piscine, lac, rivière, jacuzzi, sauna,
			douche…).</TextWithCorners
		>
		<Title level="sub2" as="h3">Consignes importantes :</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Ne jamais dormir avec vos lentilles</li>
			<li>
				Ne porter que la lentille prescrite (marque, type, paramètres indiqués sur l’ordonnance)
			</li>
			<li>Respecter la fréquence de renouvellement</li>
			<li>Respecter la durée de port</li>
			<li>Respecter les modalités d’entretien conseillées</li>
			<li>Ne pas modifier la solution d’entretien sans avis médical</li>
			<li>
				Après la pose des lentilles, vider complètement l’étui, le sécher et le laisser ouvert
			</li>
			<li>Une lentille abîmée ou en mauvais état ne doit pas être posée sur l’œil</li>
			<li>Toujours renouveler, chaque jour, la totalité de la solution contenue dans l’étui</li>
		</ul>
		<TextWithCorners>L’étui de stockage doit être remplacé tous les mois !</TextWithCorners>
		<Text tone="accent" weight="medium"
			>Dans tous les cas, des douleurs oculaires, une rougeur ou une baisse de la vision associée au
			port de lentilles nécessitent l’arrêt du port. Si les symptômes ne régressent pas rapidement,
			il est vivement conseillé de consulter votre ophtalmologiste en urgence.</Text
		>
	</section>

	<ArticleImage
		src={InfectionPageFiveIlluOne}
		alt="Lentille de contact posée sur un doigt"
		class="max-w-md"
	/>

	<section>
		<Title level="h3" as="h2"
			>Comment bien utiliser des lentilles souples à renouvellement journalier ?</Title
		>
		<Text
			>Le port de lentilles comme dispositif médical de correction optique n’est pas anodin et les
			quelques règles suivantes sont à suivre de manière stricte pour éviter tout accident,
			potentiellement très grave :</Text
		>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				Toujours manipuler les lentilles avec les mains propres, lavées à l’eau et au savon et
				convenablement séchées
			</li>
			<li>Ne jamais poser ou garder une lentille sur un œil rouge et/ou douloureux</li>
			<li>
				Ne jamais utiliser de l’eau du robinet, ni des eaux minérales en bouteille pour nettoyer,
				rincer ou stocker les lentilles et les étuis
			</li>
			<li>
				La baignade avec des lentilles est formellement contre-indiquées, quel que soit le type de
				lentilles portées et quel que soit le lieu de baignade (piscine, lac, rivière, jacuzzi,
				sauna, douche…)
			</li>
		</ul>
		<Title level="sub2" as="h3">Consignes importantes :</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Ne jamais dormir avec vos lentilles</li>
			<li>
				Ne porter que la lentille prescrite (marque, type, paramètres indiqués sur l’ordonnance)
			</li>
			<li>Respecter la fréquence de renouvellement</li>
			<li>Respecter la durée de port</li>
			<li>Une lentille abîmée ou en mauvais état ne doit pas être posée sur l’œil</li>
			<li>Toujours jeter la lentille après la journée de port</li>
		</ul>
		<Text tone="accent" weight="medium"
			>Dans tous les cas, des douleurs oculaires, une rougeur ou une baisse de la vision associée au
			port de lentilles nécessitent l’arrêt du port. Si les symptômes ne régressent pas rapidement,
			il est vivement conseillé de consulter votre ophtalmologiste en urgence.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Comment entretenir vos lentilles de contact ?</Title>
		<Text
			>L’entretien rigoureux de vos lentilles de contact est le meilleur moyen d’assurer à la fois
			un port confortable et une protection suffisante contre les infections sous lentilles.</Text
		>
		<Text
			>L’entretien des lentilles ne concerne que les lentilles souples à renouvellement mensuel et
			les lentilles rigides perméables aux gaz, y compris les lentilles d’ortho-kératologie.</Text
		>
		<Text
			>En aucun cas, une lentille journalière ne peut être réutilisée. Il n’est donc pas nécessaire
			de procéder à son nettoyage, puisqu’elle peut être portée immédiatement après ouverture du
			blister.</Text
		>
		<Text>Voici les principales étapes de l’entretien :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				Toujours commencer par se laver soigneusement les mains. Celles-ci doivent être propres et
				sèches pour la manipulation d’une lentille de contact (pose et dépose).
			</li>
			<li>
				Enlevez délicatement la lentille de la surface de l’œil et la placer dans le creux de la
				main
			</li>
			<li>Y déposer quelques gouttes de la solution d’entretien et en imprégner la lentille.</li>
			<li>
				S’il s’agit d’une lentille souple, chaque face peut être massée délicatement, pendant
				quelques secondes. Le massage n’est pas nécessaire pour les lentilles rigides.
			</li>
			<li>Remplir l’étui de conservation de la solution d’entretien.</li>
			<li>Y plonger la lentille pour une durée minimale de 6 heures.</li>
			<li>
				Pour les lentilles rigides, une déprotéinisation peut être nécessaire, à intervalle
				régulier. Il est nécessaire de se reporter, dans ce cas, aux consignes précises formulées
				par votre ophtalmologiste lors de la prescription. Celles-ci sont propres à chaque modèle de
				lentille et à chaque marque de produit d’entretien.
			</li>
			<li>
				Lorsque vous sortez les lentilles de contact de leur étui de conservation, il n’est pas
				nécessaire de les rincer.
			</li>
		</ul>
		<Title level="sub2" as="h3">Quelques principes simples sont à respecter</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				Il est conseillé de respecter la prescription médicale de produit d’entretien. Par
				précaution, le choix d’une autre marque ne se fera qu’après accord de votre ophtalmologiste.
			</li>
			<li>Les lentilles de contact ne doivent jamais entrer en contact avec l’eau du robinet</li>
			<li>
				Une fois les lentilles sorties, l’étui de conservation doit être vidé complètement, rincé
				avec la solution d’entretien et séché, ouvert, sur un mouchoir propre, toute la journée, si
				possible à distance des points d’eau de la salle de bains.
			</li>
			<li>Pensez à nettoyer et sécher correctement les bouchons de l’étui de conservation.</li>
			<li>L’étui de conservation doit être changé tous les mois !</li>
		</ul>
	</section>
</DiseaseArticleLayout>
