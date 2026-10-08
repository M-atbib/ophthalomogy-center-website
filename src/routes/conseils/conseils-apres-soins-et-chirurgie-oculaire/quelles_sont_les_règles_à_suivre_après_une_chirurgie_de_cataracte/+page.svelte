<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';
	import { CataractePageSixIlluOne, CataractePageSixIlluTwo } from '$lib/assets';

	const backHref = '/conseils/conseils-apres-soins-et-chirurgie-oculaire';
</script>

<DiseaseArticleLayout
	title="Quelles sont les règles à suivre après une chirurgie de cataracte ?"
	{backHref}
>
	<!-- This conseils version mirrors the completed cataracte article while keeping navigation inside the advice section. -->
	<Text>
		Vous venez de vous faire opérer de cataracte ? Les chirurgiens du [Nom de Clinique] vous
		invitent à suivre attentivement ces consignes :
	</Text>

	<section>
		<Title level="h3" as="h2">Y a-t-il un pansement à porter ?</Title>
		<Text>Votre pansement oculaire doit être gardé uniquement le jour de l'intervention.</Text>
		<Text>
			Vous sortez du bloc opératoire et de l'établissement avec un pansement sur l'oeil opéré.
			Celui-ci a été réalisé dans des conditions stériles, à la fin de l'intervention. Vous pourrez
			le retirer dès le lendemain matin et n'aurez plus à en remettre par la suite. Votre oeil peut
			rester à l'air libre.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Y a-t-il des traitements à instiller ?</Title>
		<Text>Des collyres post-opératoires sont à instiller tous les jours.</Text>
		<Text>
			Une ordonnance vous a été transmise à la fin de la consultation pré-opératoire, pour vous
			permettre d'aller chercher vos collyres à la pharmacie. Nous vous invitons à bien respecter
			l'ordre, les doses et les durées de traitement inscrites sur l'ordonnance.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Quand peut-on reprendre une activité physique normale ?</Title>
		<Text>Vous devez vous reposer les jours suivant l'intervention.</Text>
		<Title level="sub2" as="h3">Vous pouvez :</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Vous balader, aller faire vos courses ;</li>
			<li>Vous pencher, vous baisser.</li>
		</ul>
		<Title level="sub2" as="h3">Il faut éviter :</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>De vous rendre dans des endroits sales ;</li>
			<li>De bricoler, porter des charges lourdes, jardiner... ;</li>
			<li>De mettre votre tête dans l'eau, aller à la piscine... ;</li>
			<li>De pratiquer une activité physique à risque de traumatisme oculaire.</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Quels sont les signes qui ne doivent pas vous inquiéter ?</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Vision imparfaite, trouble ;</li>
			<li>Sensation de grain de sable sous la paupière ;</li>
			<li>Larmoiement inhabituel de l'oeil opéré ;</li>
			<li>Rougeur oculaire modérée ;</li>
			<li>Douleurs superficielles si elles sont modérées.</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">
			Quels sont les signes qui doivent vous amener à nous consulter en urgence ?
		</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Baisse de vision rapide ;</li>
			<li>Éclairs lumineux ;</li>
			<li>Sensation de voile persistante, apparition de mouches volantes ;</li>
			<li>Rougeur oculaire prononcée ;</li>
			<li>Douleurs oculaires importantes.</li>
		</ul>
		<ArticleImage
			src={CataractePageSixIlluOne}
			alt="Patiente suivant les consignes post-opératoires"
			class="max-w-lg"
		/>
		<Text tone="accent" weight="medium">
			Si vous présentez un de ces symptômes, nous vous invitons à appeler notre standard (05 37 810
			828) en journée et en semaine. Sinon, vous pouvez également vous rendre dans l'un de nos
			cabinets, sans rendez-vous. En dehors de nos horaires d'ouverture, appelez l'établissement
			dans lequel vous avez été opéré(e).
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">
			Que faire de vos lunettes dans les suites immédiates de l'intervention ?
		</Title>
		<Text>
			Après l'intervention, vos lunettes ne sont plus adaptées. En effet, l'implant intra-oculaire
			est correcteur. Vos besoins changent de façon tout à fait attendue. Plusieurs solutions
			s'offrent à vous :
		</Text>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>
				Vous pouvez continuer à porter vos anciennes lunettes. Même inadaptées, elles n'abîment pas
				votre oeil.
			</li>
			<li>
				Vous pouvez aussi ne porter aucune correction jusqu'à ce que les contrôles post-opératoires
				soient effectués.
			</li>
			<li>Vous pouvez aussi faire poser, en contactant votre opticien, un verre neutre.</li>
		</ul>
		<Text>
			La meilleure solution est celle qui apportera le plus de confort. Vous ne risquez pas de
			compromettre le résultat de l'intervention, quel que soit votre choix.
		</Text>
		<ArticleImage
			src={CataractePageSixIlluTwo}
			alt="Patient appliquant des collyres"
			class="max-w-lg"
		/>
		<TextWithCorners>
			Au moindre doute, l'équipe du [Nom de Clinique] se tient à votre disposition pour répondre à
			vos questions, vous prendre en charge et vous suivre de manière attentive à la suite de votre
			intervention.
		</TextWithCorners>
	</section>
</DiseaseArticleLayout>
