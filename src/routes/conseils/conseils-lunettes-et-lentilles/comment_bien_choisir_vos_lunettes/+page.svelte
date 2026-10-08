<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, Title } from '$lib';
	import { LunettePageFiveImgOne } from '$lib/assets';

	const backHref = '/conseils/conseils-lunettes-et-lentilles';
</script>

<DiseaseArticleLayout title="Comment bien choisir vos lunettes ?" {backHref}>
	<!-- The long educational article is grouped by optical decision so patients can compare options. -->
	<ArticleImage
		src={LunettePageFiveImgOne}
		alt="Opticien présentant une monture de lunettes"
		class="max-w-3xl"
		loading="eager"
	/>
	<Text>
		Votre ophtalmologiste vient de vous prescrire une paire de lunettes afin de corriger votre
		amétropie ? La prochaine étape est donc de vous rendre chez votre opticien. Voici différents
		éléments qui vous permettront de comprendre la prescription et vous donneront des pistes pour
		guider le choix de votre équipement optique.
	</Text>

	<section>
		<Title level="h3" as="h2">Quel matériau choisir pour les verres de lunettes ?</Title>
		<div class="space-y-6">
			<div>
				<Title level="sub2" as="h3">Verres minéraux (à base de verre naturel)</Title>
				<Text>
					Ils ont longtemps été les plus répandus, mais leur usage est désormais plus confidentiel.
					Aujourd'hui, ils sont essentiellement recommandés pour certains cas particuliers, comme
					les fortes amétropies.
				</Text>
				<Title level="sub3" as="h4">Propriétés</Title>
				<ul class="mt-2 list-disc space-y-2 pl-5">
					<li>Indices de réfraction élevés ;</li>
					<li>Surface dure, bonne résistance aux rayures, mais matériau fragile ;</li>
					<li>Poids supérieur aux verres organiques.</li>
				</ul>
			</div>
			<div>
				<Title level="sub2" as="h3">Verres organiques (à base de matériaux synthétiques)</Title>
				<Text>C’est actuellement la matière la plus utilisée.</Text>
				<ul class="mt-2 list-disc space-y-2 pl-5">
					<li>Indices de réfraction moins élevés que les verres minéraux ;</li>
					<li>Grande résistance aux chocs ;</li>
					<li>Surface plus sensible aux rayures, améliorable avec des traitements spécifiques ;</li>
					<li>Plus légers que les verres minéraux ;</li>
					<li>Compatibles avec l’ensemble des montures.</li>
				</ul>
			</div>
			<div>
				<Title level="sub2" as="h3">Verres en polycarbonate</Title>
				<Text>
					C’est une sous-catégorie de verres organiques. Ils sont utilisés pour des cas
					particuliers, essentiellement pour des activités sportives.
				</Text>
				<ul class="mt-2 list-disc space-y-2 pl-5">
					<li>Ultra-résistants, ils sont incassables ;</li>
					<li>Grande susceptibilité aux rayures ;</li>
					<li>Indice de réfraction unique, déconseillé en cas de forte amétropie.</li>
				</ul>
			</div>
		</div>
	</section>

	<section>
		<Title level="h3" as="h2">Quels sont les différents types de verres correcteurs ?</Title>
		<div class="space-y-6">
			<div>
				<Title level="sub2" as="h3">Verres unifocaux (ou "simple foyer")</Title>
				<Text>
					Les verres unifocaux possèdent la même puissance de correction sur l’ensemble de leur
					surface. Ils permettent la vision nette à une distance précise : vision de loin, vision
					intermédiaire ou vision de près.
				</Text>
				<Text>
					Ils peuvent être sphériques, toriques ou asphériques selon la correction recherchée :
					myopie, hypermétropie, astigmatisme, presbytie ou corrections importantes.
				</Text>
				<Text tone="accent" weight="medium">
					Le port de lunettes "loupes" peut soulager la vision de près, mais elles ne sont pas
					parfaitement adaptées à votre amétropie ni à votre écart inter-pupillaire.
				</Text>
			</div>
			<div>
				<Title level="sub2" as="h3">Verres bifocaux, multifocaux et progressifs</Title>
				<Text>
					Les verres bifocaux permettent une vision de loin et une vision de près grâce à deux zones
					séparées. Les verres multifocaux corrigent plusieurs anomalies réfractives. Les verres
					progressifs comportent une zone de vision de loin, une zone de vision de près, une zone de
					transition et des zones d’aberrations optiques.
				</Text>
				<Text tone="accent" weight="medium">
					Les verres progressifs sont plutôt déconseillés chez les patients atteints d’une
					pathologie sévère de la vision centrale ou ayant d'importantes difficultés de convergence
					binoculaire.
				</Text>
			</div>
			<div>
				<Title level="sub2" as="h3">Verres dégressifs ou mi-distance</Title>
				<Text>
					Ce sont des verres multifocaux qui corrigent la vision de près et offrent une profondeur
					de champ suffisante pour le confort en vision intermédiaire. Ils ne corrigent pas la
					vision longue distance.
				</Text>
				<Text>
					Ils constituent un choix intéressant pour le jeune presbyte ou pour certaines activités,
					comme le travail sur ordinateur.
				</Text>
			</div>
		</div>
	</section>

	<section>
		<Title level="h3" as="h2">
			Quels sont les traitements et filtres possibles pour les verres de lunettes ?
		</Title>
		<div class="space-y-6">
			<div>
				<Title level="sub2" as="h3">Traitement anti-rayures et anti-reflets</Title>
				<Text>
					Les verres organiques sont sensibles aux rayures et peuvent être protégés par des
					traitements de surface. Les filtres anti-reflets améliorent la transparence du verre et
					diminuent les reflets lumineux, mais ils sont sensibles à l'élévation de la température.
				</Text>
			</div>
			<div>
				<Title level="sub2" as="h3">Filtres anti-lumière bleue</Title>
				<Text>
					Il n'existe, à l'heure actuelle, aucune preuve scientifique robuste concernant l'intérêt
					de ce type de filtre dans la protection contre la survenue de pathologies rétiniennes.
				</Text>
				<Text tone="accent" weight="medium">
					Pour plus d'informations, nous vous invitons à lire Expertise et Recommandations de
					l’ANSES.
				</Text>
			</div>
			<div>
				<Title level="sub2" as="h3">Verres solaires, photochromiques et polarisés</Title>
				<Text>
					Les verres solaires limitent l’éblouissement et filtrent les rayons ultraviolets. Il
					existe cinq catégories de protection solaire, de la catégorie 0 à la catégorie 4, cette
					dernière étant contre-indiquée pour la conduite automobile.
				</Text>
				<Text>
					Un verre photochromique s’assombrit lorsqu’il est exposé aux UV. Les verres polarisés
					limitent les phénomènes d’éblouissement liés à la réverbération sur des surfaces planes,
					comme l’eau ou la neige.
				</Text>
			</div>
		</div>
	</section>
</DiseaseArticleLayout>
