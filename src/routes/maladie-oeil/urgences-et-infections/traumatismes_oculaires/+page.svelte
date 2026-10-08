<script lang="ts">
	import { DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Traumatismes oculaires" {backHref}>
	<section>
		<Text
			>L’orbite osseuse est un véritable cadre formé par les différents os du massif facial. Il
			contient, en plus de l’œil, les muscles oculo-moteurs, des vaisseaux sanguins, des nerfs et du
			tissu graisseux et la glande lacrymale principale.</Text
		>
		<Text
			>Malheureusement, ce système de protection n’est pas infaillible et il arrive fréquemment que
			le globe oculaire soit touché en cas de traumatisme atteignant le visage.</Text
		>
		<Text tone="accent" weight="medium"
			>Les conséquences peuvent en être dramatiques, selon la nature du choc et de l’objet en cause.
			Il faut prendre rendez vous en urgence.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Traumatismes à globe fermé</Title>
		<Text
			>On parle de traumatisme à globe fermé lorsque le traumatisme n’occasionne pas d’ouverture du
			globe, par perforation ou éclatement.</Text
		>
		<Title level="sub2" as="h3">Contusions oculaires</Title>
		<Text
			>Ce type d’accident peut survenir en milieu professionnel, ou dans le cadre des loisirs. Les
			sports de raquette sont des pourvoyeurs particulièrement fréquents de ce type de situation :
			badminton, squash… En effet, plus l’objet qui entre en contact avec le globe est petit, plus
			les chances qu’il soit amorti ou qu’il rebondisse sur le cadre orbitaire (arcade sourcilière,
			pommette) sont minces.</Text
		>
		<Text
			>Le choc avec l’œil va induire une augmentation brutale et transitoire de la pression
			intra-oculaire, par compression. Par ailleurs, il peut se produire une déformation importante,
			elle aussi transitoire, du globe oculaire. Ce phénomène peut avoir des conséquences délétères
			sur les tissus intra-oculaires.</Text
		>

		<Title level="sub2" as="h3"
			>Conséquences potentielles sur la cornée et la chambre antérieure de l’œil</Title
		>
		<Text
			><strong>Rupture traumatique de la membrane de Descemet.</strong> Lorsque la cornée est soumise
			à des déformations importantes, ses couches les plus fines sont les plus vulnérables. La membrane
			de Descemet est l’une des strates les plus profondes de la cornée, mais aussi la plus fine : au
			maximum, elle mesure 15 microns, soit quelques centièmes de millimètres. Lorsqu’elle se rompt,
			des dommages se produisent aussi sur l’endothélium, à son voisinage direct. L’humeur aqueuse, liquide
			intra-oculaire, va alors pouvoir pénétrer dans l’épaisseur de la cornée (son stroma) et y produire
			un œdème. La perte de transparence induite est responsable d’une baisse de la vision et de photophobie
			(gène majeure à la lumière). La cicatrisation est possible, mais parfois incomplète. On peut voir,
			à distance du traumatisme, persister des cicatrices cornéennes, véritables vergetures post-contusives.
			A titre d’exemple, un traumatisme obstétrical par forceps peut entraîner ce type de lésion anatomique
			; on les appelle les stries de Haab. Chez le patient atteint de kératocône, ce mécanisme est à
			l’origine de l’hydrops cornéen, possible « décompensation aigüe » du kératocône.</Text
		>
		<Text
			><strong>Hyphéma.</strong> L’hyphéma correspond à la survenue d’un saignement dans la chambre antérieure
			de l’œil, c’est-à-dire entre la cornée et l’iris. Ce saignement est souvent visible à l’œil nu.
			Il peut être d’importance viariable et la remplit parfois complètement ; on parle alors d’hyphéma
			total. L’hyphéma peut se compliquer d’une élévation de la pression intra-oculaire. Des traitements
			sont nécessaires pour la contrôler, le cas échéant. Le plus souvent, le sang va régresser spontanément,
			en quelques jours ou semaines. Si l’hyphéma est très important ou si sa régression est trop lente,
			une intervention chirurgicale peut être nécessaire pour en limiter les conséquences, potentiellement
			sévères.</Text
		>

		<Title level="sub2" as="h3">Conséquences potentielles sur l’iris et l’angle irido-cornéen</Title
		>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				<strong>Iridodialyse :</strong> il s’agit d’une désinsertion de la base de l’iris, plus ou moins
				étendue.
			</li>
			<li>
				<strong>Rupture du sphincter de l’iris :</strong> la pupille apparaît alors déformée et n’est
				plus symétrique à l’autre œil. Si le fonctionnement du sphincter est lésé, le réflexe photomoteur
				est perturbé. Il peut en résulter des troubles de la vision, en fonction des conditions de luminosité.
			</li>
			<li>
				<strong>Cyclodialyse :</strong> c’est une situation délicate. Une partie du corps ciliaire, qui
				produit l’humeur aqueuse, est décollée. Les liquides intra-oculaires peuvent alors s’engouffrer
				dans des espaces habituellement virtuels. Un décollement de la rétine et de la choroïde peuvent
				survenir, de même qu’une baisse importante de la pression intra-oculaire
			</li>
			<li>
				<strong>Récession angulaire :</strong> il s’agit d’une déformation de l’angle irido-cornéen,
				lieu de résorption de l’humeur aqueuse. Le trabéculum, qui en est le principal filtre, peut être
				endommagé par cette déformation et son fonctionnement perturbé, parfois très à distance de l’accident.
			</li>
		</ul>

		<Title level="sub2" as="h3">Conséquences potentielles sur le cristallin</Title>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				<strong>Cataracte contusive :</strong> lors d’une contusion oculaire, l’iris peut « tatouer »
				la face antérieure du cristallin, en y laissant la marque de ses pigments : c’est «l’anneau de
				Vossius ». Mais c’est surtout la capsule du cristallin qui subit des dommages et qui, par une
				perte d’étanchéité, va aboutir à la formation d’une cataracte, de forme typiquement sous-capsulaire
				postérieure. Cette forme de cataracte est très gênante et occasionne une baisse de la vision
				souvent rapide et marquée. De même, la photophobie (gène à la lumière) est importante.
			</li>
			<li>
				<strong>Subluxation du cristallin :</strong> la zonule est un ligament qui maintient le cristallin
				attaché à la paroi du globe oculaire, sur 360°. Lorsqu’elle est partiellement lésée par le traumatisme,
				le cristallin devient beaucoup plus mobile (phacodonésis) et son orientation est souvent modifiée.
			</li>
			<li>
				<strong>Luxation du cristallin :</strong> cette fois, la rupture de la zonule est complète et
				le cristallin tombe vers l’avant ou vers l’arrière. Les complications potentielles sont extrêmement
				sévères.
			</li>
		</ul>

		<Title level="sub2" as="h3">Conséquences potentielles sur la rétine</Title>
		<Text
			>La rétine tapisse le fond de l’œil et permet de traiter l’information lumineuse qui pénètre
			dans l’œil. Les complications rétiniennes des traumatismes sont plus fréquentes et souvent
			plus sévères chez les grands myopes. Ils peuvent évidemment survenir chez tout patient, en
			fonction de la nature et de la violence du choc.</Text
		>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				<strong>Maculopathie traumatique aigüe (ou « œdème de Berlin ») :</strong> il s’agit d’un blanchiment
				transitoire de la partie centrale de la rétine. Il traduit l’atteinte des photorécepteurs, surtout
				de leurs segments externes. La vision est souvent effondrée, avec un scotome (une tache) perçue
				à la place du point de fixation. Cette lésion est de bon pronostic, avec un taux de récupération
				élevé.
			</li>
			<li>
				<strong>Rupture de la membrane de Bruch :</strong> la membrane de Bruch est une fine couche de
				tissu située entre la rétine et la choroïde sous-jacente. La déformation du globe oculaire, lors
				du traumatisme, peut générer des contraintes mécaniques telles que cette couche se rompt. La
				vision est, là encore, effondrée. Il est possible que des complications surviennent, même longtemps
				après l’accident, à ce niveau, notamment la survenue de néo-vaisseaux choroïdiens.
			</li>
			<li>
				<strong>Trou maculaire post-traumatique :</strong> leur aspect ne diffère pas des trous maculaires
				idiopathiques et les traumatismes représentent environ 10% des causes de survenue de ce type
				de lésion
			</li>
			<li>
				<strong>Décollement de rétine, hémorragie intra-vitréenne :</strong> le traumatisme est une cause
				extrêmement fréquente de survenue de ces pathologies, en particulier chez les sujets de moins
				de 40 ans.
			</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Lacérations lamellaires</Title>
		<Text
			>Il s’agit de plaies, causées par un objet tranchant qui entre en contact avec le globe
			oculaire. Tous les tissus de la paroi du globe peuvent être atteints.</Text
		>
		<TextWithCorners
			>Le point commun des lacérations lamellaires, c'est que l'étanchéité du globe est préservée.</TextWithCorners
		>
		<Text
			>Les plaies ne concernent pas toute l’épaisseur de la paroi ; le globe n’est donc pas ouvert à
			proprement parler.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Traumatismes à globe ouvert</Title>
		<Text
			>Dans ce cas, on parle de traumatisme « de pleine épaisseur ». Que ce soit la cornée, la
			sclère ou les deux à la fois, l’ouverture est profonde et fait communiquer les milieux
			intra-oculaires avec l’air environnant.</Text
		>
		<Text>Deux types de mécanismes sont possibles :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				<strong>Rupture du globe, par éclatement.</strong> En cas de traumatisme violent, comme dans
				le cadre des contusions, la pression intra-oculaire va monter brutalement. Parfois, le niveau
				est tel que la paroi du globe finit par céder, en particulier au niveau de zones de fragilité,
				comme d’anciennes cicatrices. La rupture du globe survient à distance du point d’impact entre
				l’œil et l’objet contondant.
			</li>
			<li>
				<strong>Lacération transfixiante.</strong> Cette fois, la rupture se situe au niveau du point
				d’impact. L’objet, pointu ou tranchant, s’enfonce dans la paroi du globe, jusqu’à l’ouvrir. Il
				se produit souvent des lésions associées des structures intra-oculaires, comme le cristallin
				ou l’iris.
			</li>
		</ul>
		<TextWithCorners>Il y a évidemment urgence !</TextWithCorners>
		<Text
			>Ces plaies doivent être explorées chirurgicalement et suturées avec un soin tout particulier.
			Il est impératif de restaurer l’étanchéité du globe oculaire. Le pronostic pour la vision est
			variable, selon l’étendue des lésions, le délabrement éventuel des structures intra-oculaires
			et le délai de prise en charge. Les complications sont évidemment nombreuses, au premier rang
			desquels l’infection.</Text
		>
	</section>
</DiseaseArticleLayout>
