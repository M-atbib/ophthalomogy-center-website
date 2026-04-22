<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		GlaucomePageOneImgOne,
		GlaucomePageOneIlluOne,
		CorneePageTwoImgOne,
		CorneePageTwoImgTwo
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/cornee-et-greffes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Différents types de greffes de cornée</Title>
	<Text>
		La cornée est normalement parfaitement transparente. Ainsi, elle laisse passer les rayons
		lumineux, qui pénètrent dans l’œil.
	</Text>
	<Text>
		Malheureusement, les pathologies qui peuvent altérer cette transparence, de manière définitive,
		sont nombreuses :
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Le kératocône et ses complications ;</li>
		<li>La kératopathie bulleuse du pseudophaque ;</li>
		<li>La conea guttata décompensée ;</li>
		<li>Les dystrophies cornéennes ;</li>
		<li>Les cicatrices d’abcès cornéens ;</li>
		<li>Les cicatrices cornéennes des traumatismes du globe oculaire …</li>
	</ul>
	<Text>
		Les solutions thérapeutiques envisagées dans un premier temps sont essentiellement médicales,
		par traitement, si possible, de la cause de cette perte de transparence.
	</Text>
	<Text>
		Mais lorsque les opacités sont fixées ou l’œdème installé, la seule solution peut être le
		remplacement de la cornée malade par un greffon, issu d’un donneur. On parle d’allogreffe
		cornéenne.
	</Text>
	<Text>
		La cornée fait partie des tissus que l’on peut prélever chez une grande partie des personnes
		décédées, même lorsqu’elles ne sont pas éligibles au prélèvement d’organes.
	</Text>
	<Text>Il existe, de manière schématique, deux grands types de greffes de cornée :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Les greffes de pleine épaisseur : on parle de kératoplasite transfixiante.</li>
		<li>
			Les greffes d’une ou plusieurs couche(s) de cornée : on parle de kératoplasties lamellaires.
		</li>
	</ul>

	<Title level="h3">Kératoplastie transfixiante</Title>
	<Text>
		Il s’agit d’une greffe de toute l’épaisseur de la cornée. C’est la technique de greffe la plus
		ancienne. Au cours de cette greffe, une trépanation de pleine épaisseur est réalisée et l’œil
		est, pendant quelques minutes, « à ciel ouvert ».
	</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={CorneePageTwoImgOne}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Text>
		Le disque de cornée du donneur est suturé à une collerette de cornée du receveur, qui sert de
		support au greffon.
	</Text>
	<Text>
		Des sutures sont pratiquées, à l’aide de fils micro-chirurgicaux extrêmement fins. La technique
		de suture peut varier d’un chirurgien à l’autre. Malgré tout, ceux-ci permettent la
		consolidation de la greffe, qui permettra d’assurer l’étanchéité du globe oculaire.
	</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={CorneePageTwoImgTwo}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="h3">Kératoplasties lamellaires</Title>
	<Text>
		Lors d’une kératoplastie lamellaire, on remplace seulement une partie de l’épaisseur de la
		cornée du patient receveur. Ce type de procédure a pour principal avantage d’être moins invasif
		que la kératoplastie transfixiante, puisque l’œil n’est pas complètement ouvert. Le risque de
		rejet est moins marqué et les sutures sont moins nombreuses, voire absentes.
	</Text>
	<Title level="sub1">
		Kératoplastie Lamellaire Antérieure Profonde (KLAP)  (DALK des anglo-saxons, pour « Deep
		Anterior Lamellar Keratoplasty »)
	</Title>
	<Text>
		Ce sont les couches antérieures de la cornée malade qui sont remplacées : l’épithélium, la
		membrane de Bowman et le stroma cornéen, pour une bonne partie de son épaisseur. Elle ne pourra
		être proposée que si l’endothélium cornéen, la couche cellulaire la plus profonde, est encore
		sain et fonctionnel. Le greffon est, là encore, suturé à l’aide de fils micro-chirurgicaux, de
		diamètre extrêmement fin.
	</Text>

	<Title level="sub1">
		Greffe endothéliale (DMEK des anglo-saxons, pour « Descemet Membrane Endothelial Keratoplasty »)
	</Title>
	<Text>
		Il s’agit de la technique de choix pour la prise en charge des pathologies de l’endothélium
		cornéen du receveur, notamment la cornea guttata et la décompensation bulleuse du pseudophaque.
		À l’inverse de la technique précédente, ce sont les couches les plus profondes de la cornée qui
		sont remplacées : l’endothélium et la membrane de Descemet. Le greffon n’est pas suturé. Il est
		maintenu au contact de la cornée du patient receveur, à l’intérieur de l’œil, par une bulle
		d’air, injectée dans le même temps opératoire.
	</Text>
	<Text>
		La réalisation technique de la DMEK est particulièrement délicate et les consignes
		post-opératoires sont extrêmement strictes, pour garantir le succès de l’intervention.
	</Text>

	<Title level="h3">Démarche du patient greffé</Title>
	<Text>
		Il est nécessaire, dans un premier temps, de bien comprendre les principes de la greffe de
		cornée et ses principales limites. Ce type de procédure n’est pas anodin et concerne des
		patients dont la fonction visuelle est lourdement impactée par des lésions de la cornée
		irréversibles.
	</Text>
	<Text>
		Les résultats visuels (optiques) après une greffe de cornée, quelle que soit la technique
		utilisée, sont variables.
	</Text>

	<TextWithCorners>
		Une greffe de cornée n’a pas pour but de vous rendre une vue parfaite, sans correction. Il ne
		s’agit absolument pas d’une chirurgie réfractive.
	</TextWithCorners>
	<Text>
		Statistiquement, près de 30% des greffons cornéens survivent 20 ans après la greffe. Mais seuls
		3% des greffons sont encore fonctionnels 30 ans après l’intervention.
	</Text>

	<Title level="h3">Principales complications des greffes de cornée</Title>
	<Title level="sub1">Complications peropératoires</Title>
	<Title level="sub2"></Title>
	<Text>Ces complications surviennent pendant l’intervention chirurgicale.</Text>
	<Title level="sub2">Hémorragie expulsive à ciel ouvert</Title>
	<Text>
		Il s’agit de la principale complication peropératoire. Elle peut survenir en cas de chirurgie à
		ciel ouvert, donc en cas de kératoplastie transfixiante. Lorsque la cornée du patient a été
		trépanée et enlevée, l’œil est extrêmement fragile. Il peut se produire un hématome spontané,
		sous la rétine (au niveau de la choroïde), qui a des conséquences extrêmement sévères sur les
		structures intra-oculaires.
	</Text>
	<Text>
		Cette complication est heureusement rare, mais peut malheureusement entraîner la perte de la
		fonction visuelle de l’œil opéré.
	</Text>
	<Title level="sub2">Autres complications</Title>
	<Text>Il s’agit d’incidents aux conséquences souvent moindres</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Lésions de l’iris</li>
		<li>
			Issue de gel vitréen dans la chambre antérieure de l’œil, dans certains yeux prédisposés
		</li>
		<li>La conea guttata décompensée ;</li>
	</ul>
	<Title level="sub1">Complications post-opératoires</Title>
	<Title level="sub2">Rejet du greffon</Title>
	<Text>
		Il s’agit d’une réaction de l’œil du patient receveur, qui perçoit le greffon comme un « corps
		étranger » et tente de s’en défendre, en activant le système immunitaire contre celui-ci. Une
		réaction inflammatoire locale se produit, qui peut avoir pour conséquences un échec de la
		greffe. Toutes les couches du greffon peuvent être atteintes, selon le type de greffe
		évidemment. Le rejet d’allogreffe est plus fréquent en cas de kératoplastie transifixiante qu’en
		cas de kératoplastie lamellaire. En effet, dans ce dernier cas, une partie de la cornée du
		receveur est conservée ; il y a donc moins de tissus étrangers à l’organisme.
	</Text>
	<Text>
		Le traitement du rejet est, avant tout, préventif. Un traitement immunosuppresseur local,
		essentiellement par cortico-stéroïdes en collyres, est à instiller pendant une très longue
		période après l’intervention.
	</Text>
	<Text>
		En cas de rejet, des traitements plus agressifs sont nécessaires. Si une cause est retrouvée
		(suture détériorée, infection débutante), il faudra logiquement la prendre en charge dans le
		même temps.
	</Text>
	<Title level="sub2">Infection du greffon</Title>
	<Text>
		À l’instar de toute cornée normale, les micro-organismes pathogènes (virus, bactéries,
		champignons, parasites) peuvent coloniser un greffon cornéen et déclencher une infection de
		celui-ci. Ces infections sont facilitées par les corticoïdes, instillés au long cours. En effet,
		ceux-ci ont un effet immuno-suppresseur, qui peut favoriser la prolifération de ces agents
		pathogènes.
	</Text>
	<TextWithCorners>
		Une infection de greffon peut être à l’origine d’un rejet et donc, d’un échec de la greffe. Il
		s’agit donc d’un événement à prendre très au sérieux.
	</TextWithCorners>
	<Title level="sub2">Hypertonie oculaire</Title>
	<Text>
		C’est une cause fréquente d’échec de la greffe. Elle devra être soigneusement dépistée dans les
		suites de l’intervention. L’hypertonie peut avoir des conséquences sur le nerf optique et, à
		terme, sur la fonction visuelle.
	</Text>
	<Title level="sub1">Astigmatisme</Title>
	<Text>
		La suture du greffon entraîne logiquement une irrégularité cornéenne,  qui génère un
		astigmatisme dit « irrégulier ». La cornée perd sa forme initiale et les rayons lumineux sont
		alors déviés dans des directions multiples.  L’astigmatisme post-opératoire dépend du type de
		greffe et du type de suture utilisé, le cas échéant. L’ablation de certains points de suture, à
		distance de la chirurgie, peut permettre de la faire régresser, au moins partiellement. Les
		lentilles de contact rigides de grand diamètre peuvent être une solution efficace pour corriger
		ce type d’anomalie et améliorer l’acuité visuelle du patient greffé.
	</Text>
	<Title level="sub2">Syndrome d’Urrets-Zavalia</Title>
	<Text>
		Il s’agit d’une entité rare, dont le mécanisme est encore débattu. Beaucoup d’auteurs, dans la
		littérature scientifique, l’expliquent par une souffrance ischémique de l’iris. La pupille est
		dilatée (en mydriase) et la pression intra-oculaire monte, avec des complications potentielles
		évidentes pour le greffon et les structures intra-oculaires.
	</Text>
</Section>
