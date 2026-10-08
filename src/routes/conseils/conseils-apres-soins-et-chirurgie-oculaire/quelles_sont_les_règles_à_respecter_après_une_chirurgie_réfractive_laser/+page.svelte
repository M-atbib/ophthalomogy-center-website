<script lang="ts">
	import { DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';

	const backHref = '/conseils/conseils-apres-soins-et-chirurgie-oculaire';
</script>

<DiseaseArticleLayout
	title="Quelles sont les règles à respecter après une chirurgie réfractive laser ?"
	{backHref}
>
	<!-- The source is practical post-operative guidance, so activities are grouped for quick scanning. -->
	<Text>
		Vous venez de bénéficier d'une chirurgie réfractive ? Après l’intervention, il est primordial de
		respecter quelques règles, afin d’optimiser la cicatrisation et la récupération visuelle.
	</Text>

	<section>
		<Title level="h3" as="h2">Y a-t-il un traitement post-opératoire ?</Title>
		<Text>
			Après chaque opération de chirurgie réfractive, une ordonnance vous est remise par votre
			ophtalmologiste. Il est indispensable d’aller chercher en pharmacie votre traitement dans les
			jours qui précèdent votre intervention. Il convient de débuter, le jour même, après
			l’intervention, l’instillation des collyres, en espaçant chaque goutte de quelques minutes.
			Respectez bien la dose, la durée et l'ordre d'instillation de vos collyres. Pensez à bien vous
			lavez les mains avant de les manipuler.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Peut-on se frotter les yeux ?</Title>
		<Text>
			Quelle que soit la technique opératoire réalisée, il est essentiel de ne pas se frotter les
			yeux, même si votre œil vous gêne. Un frottement intempestif pourrait compromettre votre
			résultat visuel, voire même imposer une reprise au bloc opératoire.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">
			Quelles sont les activités autorisées dans les jours qui suivent la chirurgie ?
		</Title>
		<div class="space-y-4">
			<div>
				<Title level="sub2" as="h3">La conduite</Title>
				<Text>Après un LASIK, la conduite est autorisée dès le surlendemain.</Text>
				<Text>
					Après une PKR, la conduite est autorisée dès que la cicatrisation cornéenne est obtenue
					(soit environ 1 semaine après l'intervention).
				</Text>
			</div>
			<div>
				<Title level="sub2" as="h3">Se laver les cheveux</Title>
				<Text>Il est possible de se laver les cheveux dès le surlendemain de l’intervention.</Text>
			</div>
			<div>
				<Title level="sub2" as="h3">Se maquiller</Title>
				<Text>
					Quelque soit la méthode, il est possible de se maquiller à partir de 8 jours après la
					chirurgie.
				</Text>
			</div>
			<div>
				<Title level="sub2" as="h3">Se baigner</Title>
				<Text>
					Les sports aquatiques sont interdits pendant les 15 jours suivant l’intervention. Au delà,
					le port de lunettes de natation est vivement recommandé.
				</Text>
			</div>
			<div>
				<Title level="sub2" as="h3">Prendre l’avion</Title>
				<Text>
					Il n’existe pas de contre-indication au voyage en avion après une chirurgie réfractive par
					laser.
				</Text>
			</div>
			<div>
				<Title level="sub2" as="h3">Travail sur écran, télévision et sport</Title>
				<Text>Le travail sur écran est possible dès le lendemain, voire le surlendemain.</Text>
				<Text>Vous pouvez regarder la télévision dès le lendemain ou le surlendemain.</Text>
				<Text>
					Après un LASIK, la pratique sportive est autorisée dès le surlendemain, à condition qu’il
					n’existe pas de risque traumatique pour l’œil. Après une PKR, elle est autorisée après 1
					semaine.
				</Text>
			</div>
		</div>
	</section>

	<section>
		<Title level="h3" as="h2">Quels sont les signes qui ne doivent pas vous inquiéter ?</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Vision imparfaite, trouble, dans les jours qui suivent l'intervention ;</li>
			<li>Sensation de grain de sable sous la paupière ;</li>
			<li>Larmoiement ;</li>
			<li>Rougeur oculaire modérée ;</li>
			<li>Douleurs superficielles peu importantes.</li>
		</ul>
		<Title level="h3" as="h2">
			Quels sont les signes qui doivent vous amener à nous consulter en urgence ?
		</Title>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Baisse de vision rapide ou importante ;</li>
			<li>Rougeur oculaire importante ;</li>
			<li>Douleurs oculaires importantes.</li>
		</ul>
		<TextWithCorners>
			Si vous présentez un de ces symptômes, nous vous invitons à appeler notre standard (05 37 810
			828) en journée et en semaine, ou à vous rendre dans l'un de nos cabinets sans rendez-vous.
		</TextWithCorners>
	</section>

	<section>
		<Title level="h3" as="h2">
			Est-il conseillé de porter des lunettes de soleil après la chirurgie ?
		</Title>
		<Text>
			Le port de lunettes de soleil ne présente aucun danger après une chirurgie. Si un
			éblouissement important survient dans les jours qui suivent le geste laser, vous pouvez
			évidemment protéger vos yeux de la lumière du soleil.
		</Text>
		<Text>Vos anciennes lunettes, corrigées, ne seront plus adaptées à votre nouvelle vue.</Text>
	</section>

	<section>
		<Title level="h3" as="h2"
			>Une surveillance médicale est-elle nécessaire après l'intervention ?</Title
		>
		<Text>
			Une consultation post-opératoire est prévue avec votre ophtalmologiste dans les jours qui
			suivent votre intervention. Cette consultation a pour but de s’assurer de la bonne
			cicatrisation de votre cornée.
		</Text>
		<TextWithCorners>
			Dans tous les cas, l'équipe du [Nom de Clinique] se tient à votre disposition pour répondre à
			vos questions, vous prendre en charge et vous suivre de manière attentive à la suite de votre
			intervention.
		</TextWithCorners>
	</section>
</DiseaseArticleLayout>
