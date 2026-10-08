<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, Title } from '$lib';
	import { LunettePageFiveImgOne } from '$lib/assets';

	const backHref = '/maladie-oeil/lunettes';
</script>

<DiseaseArticleLayout title="Comment bien choisir vos lunettes ?" {backHref}>
	<ArticleImage
		src={LunettePageFiveImgOne}
		alt="Opticien présentant une monture de lunettes"
		class="max-w-3xl"
		loading="eager"
	/>
	<Text
		>Votre ophtalmologiste vient de vous prescrire une paire de lunettes afin de corriger votre
		amétropie ? La prochaine étape est donc de vous rendre chez votre opticien. Voici différents
		éléments qui vous permettront de comprendre la prescription et vous donneront des pistes pour
		guider le choix de votre équipement optique.</Text
	>

	<section>
		<Title level="h3" as="h2">Quel matériau choisir pour les verres de lunettes ?</Title>
		<div class="space-y-3">
			<Title level="sub2" as="h3">Verres minéraux (à base de verre naturel)</Title>
			<Text
				>Ils ont longtemps été les plus répandus, mais leur usage est désormais plus confidentiel.
				Aujourd'hui, Ils sont essentiellement recommandés pour certains cas particuliers, comme les
				fortes amétropies.</Text
			>
			<Title level="sub3" as="h4">Propriétés</Title>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>
					Indices de réfraction élevés (pour une même correction, plus l’indice de réfraction est
					élevé, plus le verre sera fin) ;
				</li>
				<li>
					Surface dure, qui induit une bonne résistance aux rayures mais rend le matériau fragile,
					avec un risque de casse ;
				</li>
				<li>Poids supérieur aux verres organiques.</li>
			</ul>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Verres organiques (à base de matériaux synthétiques)</Title>
			<Text>C’est actuellement la matière la plus utilisée.</Text>
			<Title level="sub3" as="h4">Propriétés</Title>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>Indices de réfraction moins élevés que les verres minéraux ;</li>
				<li>Grande résistance aux chocs (ils sont quasiment incassables) ;</li>
				<li>
					Surface plus tendre, qui entraîne une plus grande susceptibilité aux rayures. Cela peut
					être amélioré avec des traitements spécifiques ;
				</li>
				<li>Plus légers que les verres minéraux ;</li>
				<li>Compatibles avec l’ensemble des montures.</li>
			</ul>
		</div>
		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Verres en polycarbonate</Title>
			<Text
				>C’est une sous-catégorie de verres organiques. Ils sont utilisés pour des cas particuliers,
				essentiellement pour des activités sportives.</Text
			>
			<Title level="sub3" as="h4">Propriétés</Title>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>Ultra-résistants, ils sont incassables ;</li>
				<li>Grande susceptibilité aux rayures ;</li>
				<li>
					Indice de réfraction unique (ils sont déconseillés en cas de forte amétropie, défaut
					d’amincissement).
				</li>
			</ul>
		</div>
	</section>

	<section>
		<Title level="h3" as="h2">Quels sont les différents types de verres correcteurs ?</Title>
		<div class="space-y-3">
			<Title level="sub2" as="h3">Verres unifocaux (ou "simple foyer")</Title>
			<Text
				>Les verres unifocaux possèdent la même puissance de correction sur l’ensemble de leur
				surface. Ils permettent la vision nette à une distance précise :</Text
			>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>vision de loin le plus souvent,</li>
				<li>vision intermédiaire,</li>
				<li>vision de près.</li>
			</ul>
			<Text
				>Ils peuvent corriger tout type d'amétropie : hypermétropie, myopie et astigmatisme.</Text
			>
			<Text>Ces verres sont :</Text>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>
					Sphériques, pour corriger la myopie (concâves), l'hypermétropie (convexes) ou la
					presbytie.
				</li>
				<li>
					Toriques, pour corriger un astigmatisme. Il y a, dans ce cas, une différence de puissance
					entre deux rayons de courbures perpendiculaires entre eux.
				</li>
				<li>
					Asphériques, pour les corrections très importantes. Ce procédé permet d'obtenir des verres
					à la fois plus fins et plus légers. La qualité de correction en est améliorée.
				</li>
			</ul>
			<Text
				>Le port de lunettes "loupes", que l'on trouve en pharmacie ou dans les supermarchés, est
				possible pour soulager les difficultés en vision de près, à l'âge de la presbytie. Malgré
				tout, ces lunettes ne sont pas parfaitement adaptées à votre amétropie, à votre écart
				inter-pupillaire et génèrent, à long terme, un inconfort ou la survenue de maux de tête.</Text
			>
			<Text tone="accent" weight="medium"
				>Mieux vaut donc, si le port se prolonge, consulter votre ophtalmologiste pour obtenir une
				prescription adaptée.</Text
			>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Verres bifocaux (verres à double-foyer)</Title>
			<Text
				>Ces verres sont de moins en moins utilisés. Ils permettent une vision de loin et une vision
				de près, grâce à deux zones de correction séparées dans le verre. Il n’y a, par contre, pas
				de vision intermédiaire et ils sont réputés moins esthétiques que les verres progressifs.</Text
			>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Verres multifocaux</Title>
			<Text
				>Ils sont capables de corriger plusieurs anomalies réfractives et permettent, ainsi, une
				vision nette à différentes distances. Cela est utile pour les patients presbytes ou les
				patients opérés de cataracte.</Text
			>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Verres Progressifs</Title>
			<Text>Un verre progressif se compose de 4 zones distinctes :</Text>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>La partie supérieure correspond à la vision de loin.</li>
				<li>La partie inférieure correspond à la vision de près (à 33 cm le plus souvent).</li>
				<li>
					La partie centrale correspond à la vision "mi-distance" ; c’est une zone de transition,
					avec plusieurs corrections successives permettant le passage progressif (d’où le nom) de
					la vision longue distance à la vision de près.
				</li>
				<li>
					Des zones d’aberrations optiques sur les bords, de part et d’autre du couloir de
					dégressivité du verre.
				</li>
			</ul>
			<Text tone="accent" weight="medium"
				>Les verres progressifs sont plutôt déconseillés chez les patients atteints d’une pathologie
				sévère de la vision centrale (comme une DMLA avancée) ou pour les patients ayant
				d'importantes difficultés de convergence binoculaire. Pour ce type de cas, mieux vaut, en
				règle générale, privilégier le port de deux paires de lunettes (l'une pour la vision de
				loin, l'autre pour la vision de près).</Text
			>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Verres Dégressifs ou Mi-Distance</Title>
			<Text
				>Ce sont des verres multifocaux, qui corrigent la vision de près et offrant une profondeur
				de champ suffisante pour garantir le confort en vision intermédiaire. Ils ne corrigent pas
				la vision longue distance.</Text
			>
			<Text
				>Ils constituent un choix intéressant pour le jeune presbyte, ou pour certaines activités,
				comme le travail sur ordinateur.</Text
			>
			<Text
				>Si votre choix s'oriente vers ce type de correction, votre ophtalmologiste et votre
				opticien auront besoin d'informations précisés sur vos activités : la distance entre vos
				yeux et votre ordinateur par exemple.</Text
			>
		</div>
	</section>

	<section>
		<Title level="h3" as="h2"
			>Quels sont les traitements et filtres possibles pour les verres de lunettes ?</Title
		>
		<div class="space-y-3">
			<Title level="sub2" as="h3">Traitement anti-rayures (traitement durci)</Title>
			<Text
				>La plupart des verres vendus en France sont des verres organiques, qui sont sensibles aux
				rayures. Elles sont inesthétiques et altèrent la qualité visuelle. Il est donc nécessaire de
				protéger le verre, par des traitements de surface adéquats. La technique la plus courante
				consiste en l'application d'une résine à la surface du verre ; on parle de "Hard-coating".
				La couche de résine est extrêmement fine. Elle est durcie par cuisson ou par traitement
				ultra-violet, ce qui rend le verre beaucoup moins vulnérable aux altérations de sa surface.</Text
			>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Traitement anti-reflets</Title>
			<Text
				>Les filtres anti-reflets sont des traitements de surface compatibles avec tous les verres
				(qu'ils soient blancs, teintés, polarisés, photochromiques…). Ils permettent une vision plus
				précise et plus nette, grâce à une amélioration de la transparence du verre et à une
				diminution des reflets lumineux.</Text
			>
			<Text
				>D’un point de vue esthétique, ils limitent l'effet "miroir", très visible sur les
				photographies par exemple.</Text
			>
			<Text
				>Par contre, ces traitements sont sensibles à l'élévation de la température et il faut
				éviter de laisser vos lunettes près d’une source de chaleur importante.</Text
			>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Filtres anti-lumière bleue</Title>
			<Text
				>Il n'existe, à l'heure actuelle, aucune preuve scientifique robuste concernant l'intérêt de
				ce type de filtre dans la protection contre la survenue de pathologies rétiniennes.</Text
			>
			<Text
				>L'exposition excessive à la lumière bleue des écrans LED semble impliquée dans la
				perturbation du rythme circadien et donc, dans la génèse de troubles du sommeil, en
				particulier chez l'enfant et l'adolescent.</Text
			>
			<Text
				>Par ailleurs, les dispositifs de filtrage de la lumière bleue ne peuvent, à l'heure
				actuelle, et d'après les données récentes de l'ANSES, pas être considérés comme des
				équipements de protection individuelle, par rapport à des verres ophtalmiques traités.</Text
			>
			<Text tone="accent" weight="medium"
				>Pour plus d'informations, nous vous invitons à lire Expertise et Recommandations de l’ANSES
				(Agence Nationale de SÉcurité Sanitaire de l’alimentation, de l’environnement et du
				travail).</Text
			>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Verres solaires</Title>
			<Text
				>Les verres solaires bénéficient d'un traitement qui permet de limiter l’éblouissement et de
				filtrer les rayons ultraviolets (UV) du soleil, qui ont une toxicité rétinienne démontrée.
				Ce traitement s'ajoute, si nécessaire, à la correction optique du verre.</Text
			>
			<Text>Il existe cinq catégories de protection solaire :</Text>
			<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
				<li>
					<strong>Catégorie 0 :</strong> ne protège pas des UV solaires. Réservée au confort et à l'esthétique.
				</li>
				<li>
					<strong>Catégorie 1 :</strong> filtre 90% des rayons UV et 20-60% de la lumière visible. Ces
					verres sont adaptés à une utilisation quotidienne, lors d’une luminosité solaire atténuée (hiver,
					nuageux), mais déconseillés pour de fortes expositions.
				</li>
				<li>
					<strong>Catégorie 2 :</strong> filtre &gt;95% des UV et 60-80% de la lumière visible. Ces verres
					sont adaptés à une luminosité solaire moyenne.
				</li>
				<li>
					<strong>Catégorie 3 :</strong> filtre &gt; 98% des UV et 80-90 % de la lumière visible. Ces
					verres sont adaptés à une forte luminosité solaire (été, mer, montagne).
				</li>
				<li>
					<strong>Catégorie 4 :</strong> filtre &gt; 99% des UV et 90-95% de la lumière visible. Ces
					verres sont adaptés à une luminosité solaire exceptionnelle (glaciers en été, alpinisme). Par
					contre, la conduite automobile est contre-indiquée avec ce type de verre.
				</li>
			</ul>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Verres photochromiques</Title>
			<Text
				>Un verre photochromique est un verre correcteur capable de s’assombrir lorsqu’il est exposé
				à des rayonnements ultraviolets (UV). Il s’adapte à la forte luminosité en se teintant et
				revient à sa teinte d’origine lorsque l’exposition cesse.</Text
			>
			<Text
				>Ce type de verre est appréciés des patients souffrant de photosensibilité et sujets à
				l’éblouissement lors de l’exposition solaire.</Text
			>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Verres polarisés</Title>
			<Text
				>Les verres polarisés sont des verres solaires de haute performance, permettant une
				optimisation de la vision. Ils limitent les phénomènes d’éblouissement induits par la
				réverbération de la lumière sur des surfaces planes, comme des étendues d’eau ou de neige.
				Ils sont utiles également lors de la conduite automobile avec un soleil de face, ou encore
				lorsque la chaussée est humide. Ils sont surtout recommandés aux sportifs (golf, pêche,
				randonnée, ski…) ou pour les conducteurs réguliers. De manière générale, ils procurent un
				confort visuel indéniable pour tout type d'activité.</Text
			>
		</div>
	</section>
</DiseaseArticleLayout>
