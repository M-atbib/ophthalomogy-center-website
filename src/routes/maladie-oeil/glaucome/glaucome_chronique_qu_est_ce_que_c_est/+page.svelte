<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { GlaucomePageOneImgOne, GlaucomePageOneIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/glaucome" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Glaucome chronique : qu'est-ce que c'est ?</Title>

	<div class="flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-4/12">
			<Title level="h1">Qu'appelle-t-on "glaucome" ?</Title>
			<Text>Le glaucome est une pathologie fréquente et potentiellement cécitante.</Text>
			<Text>
				En France, en 2019, on estime que 4% de la population est atteinte de glaucome, soit près de
				3 millions de personnes. Dans le monde, en 2020, on estime qu’il y a 80 millions de
				personnes atteintes. Ces chiffres sont des estimations, probablement en-deçà de la réalité.
				Beaucoup de patients atteints ne sont, en effet, pas diagnostiqués.
			</Text>
		</div>
		<figure
			class="mx-auto w-full max-w-3xl overflow-hidden rounded-md border border-light-grey/60 bg-primary-background shadow-sm"
		>
			<img
				src={GlaucomePageOneImgOne}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>

	<TextWithCorners>
		Le glaucome est la deuxième cause de cécité dans le monde derrière la cataracte, mais la
		première cause de cécité irréversible.
	</TextWithCorners>
	<Text>
		Il s'agit d'une pathologie du nerf optique, structure anatomique qui relie l’œil au cerveau et
		qui relaie l’information visuelle traitée par les cellules rétiniennes.
	</Text>

	<figure class="mx-auto w-full max-w-sm overflow-hidden rounded-md">
		<img
			src={GlaucomePageOneIlluOne}
			alt="Courbe illustrant l'augmentation des chirurgies de la cataracte"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<TextWithCorners>
		Jusqu’à un stade avancé de la maladie, le patient ne perçoit aucun symptôme. C’est une
		pathologie insidieuse, souvent méconnue.
	</TextWithCorners>

	<Text>
		Au fur-et-à-mesure de leur dégradation, les fibres nerveuses rétiniennes, qui composent le nerf
		optique, ne transmettent plus l’information perçue par certaines zones rétiniennes. Les premiers
		territoires concernés sont, en règle générale, périphériques, ce qui conduit à une diminution du
		champ visuel souvent imperceptible. Malheureusement, en l’absence de traitement, la vision
		devient tubulaire (comme à travers un trou de serrure) et le handicap visuel devient majeur.
		À terme, c’est toute la vision qui disparaît, en même temps que les derniers neurones
		réitiniens.
	</Text>

	<TextWithCorners>
		Un examen ophtalmologique de dépistage complet et régulier est le seul moyen d’éliminer
		formellement une neuropathie optique glaucomateuse en cours.
	</TextWithCorners>

	<Text>
		Le glaucome est une maladie chronique, qui va nécessiter une surveillance et une prise en charge
		pour toute la vie de l’individu atteint. Une évaluation du champ visuel doit être réalisée très
		régulièrement, en cas de glaucome.
	</Text>

	<Title level="h3">Quels sont les facteurs de risque de glaucome ?</Title>
	<Text>
		Le glaucome peut survenir à tout âge. Les mécanismes qui conduisent à la destruction progressive
		des fibres nerveuses rétiniennes sont encore largement discutés.
	</Text>
	<Text>Pression intra-oculaire et glaucome</Text>
	<Text>
		L’élévation de la pression intra-oculaire est le principal facteur de risque de survenue d’un
		glaucome.  Pour autant, ces deux notions ne doivent pas être confondues.
	</Text>

	<Text>
		La présence d’une hypertonie oculaire (ou hypertension intra-oculaire) n’est pas synonyme de
		glaucome. À l’inverse, de nombreux cas de glaucome se déclarent sans que les valeurs
		pressionnelles soit anormalement élevées.
	</Text>

	<TextWithCorners>
		Il n'y a pas de lien entre la tension oculaire et la tension artérielle.
	</TextWithCorners>

	<Text>Autres facteurs de risque :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			L’hérédité est un facteur de risque bien connu. La présence de cas diagnostiqués dans la
			famille d’un individu doit inviter à un dépistage large et régulier.
		</li>
		<li>
			L’avancée en âge augmente le risque de survenue d’un glaucome. Les patients atteint de
			glaucome ont classiquement plus de 60 ans.
		</li>
		<TextWithCorners>
			Mais attention, le glaucome peut survenir à tout âge ! Il existe des formes de glaucomes
			juvéniles, qui se déclarent bien plus précocément, y compris chez l’enfant.
		</TextWithCorners>
		<li>
			L’origine ethnique a également son importance. Les patients originaires d’Afrique
			sub-saharienne ou des Caraïbes sont à risque plus élevé de développer un glaucome à angle
			ouvert. Les patients d’origine asiatiques sont à risque de glaucome par fermeture de l’angle.
		</li>
	</ul>

	<Title level="h3">Quels sont les différents types de glaucomes ?</Title>
	<Text>
		Le terme « glaucome » désigne, en fait, des situations pathologiques très variées, dont les
		mécanismes sont très différents. Il convient, en fait, de parler des glaucomes.
	</Text>

	<Title level="sub1">L’angle irido-cornéen</Title>

	<Text>
		Pour comprendre la classification des formes de glaucomes, il est nécessaire de comprendre
		certaines notions d’anatomie oculaire.
	</Text>
	<Text>
		Le chambre antérieure du globe oculaire est rempli d’un liquide transparent : l’humeur aqueuse.
	</Text>
	<Text>Deux facteurs, relatifs à ce liquide, vont déterminer la pression intra-oculaire :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Sa production par le corps ciliaire, structure anatomique située juste en arrière de l’iris ;
		</li>
		<li>
			Son évacuation via le trabéculum, véritable filtre situé dans l’angle formé par l’iris et la
			cornée : l’angle irido-cornéen.
		</li>
	</ul>

	<Title level="sub1">Glaucomes chroniques à angle ouvert</Title>
	<Text>
		L’angle irido-cornéen est ouvert, ce qui signifie que rien ne vient empêcher le cheminement de
		l’humeur aqueuse vers le trabéculum. C’est au niveau du trabéculum, ou après celui-ci, que le
		problème se situe.
	</Text>
	<TextWithCorners>
		Les glaucomes à angle ouvert représentent 75% des cas de glaucome dans le monde.
	</TextWithCorners>
	<Text>On différencie :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Le glaucome primitif à angle ouvert, au cours duquel aucune cause n’explique réellement le
			dysfonctionnement trabéculaire ;
		</li>
		<li>
			Le glaucome secondaire à angle ouvert ; dans ces cas, des cellules, des protéines ou des
			pigments viennent obstruer les mailles du réseau trabéculaire, expliquant, à terme, sa moins
			bonne efficacité. Un traumatisme oculaire peut également occasionner d’important dégâts dans
			l’angle irido-cornéen et se compliquer de glaucome, parfois des années plus tard.
		</li>
	</ul>

	<Title level="sub1">Glaucomes à angle fermé</Title>
	<Text>
		Dans ces cas, l’accès au trabéculum est empêché, le plus souvent par la racine de l’iris, qui
		vient se placer à son contact, avec pour conséquences des accolements pathologiques parfois
		irréversibles.
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Dans la plupart des cas, l’iris est poussé vers l’avant par le cristallin ou par l’humeur
			aqueuse, qui le gonfle comme une voile de bateau.
		</li>
		<li>
			Sinon, l’iris peut aussi être tracté vers l’avant, par exemple par des vaisseaux anormaux dans
			l’angle irido-cornéen, comme c’est le cas dans le glaucome néo-vasculaire, complication
			redoutable de la rétinopathie diabétique ou de l’occlusion de la veine centrale de la rétine.
		</li>
	</ul>

	<Title level="sub1">Glaucomes de l’enfant</Title>

	<Text>
		Le glaucome congénital est une urgence thérapeutique. Ce diagnostic doit être suspecté chez tous
		les nourrissons, en particulier devant les symptômes suivants :
	</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Si l’enfant est extrêmement gêné par la lumière (photophobie majeure) ;</li>
		<li>Si l’enfant larmoie de manière importante ;</li>
		<li>Si un œil semble plus volumineux que l’autre ;</li>
		<li>Si les deux yeux semblent plus grand qu’à l’accoutumée pour un enfant du même âge.</li>
	</ul>
	<Text>
		Au moindre doute, mieux vaut consulter un ophtalmologiste en urgence, qui vous orientera vers un
		Centre de Référence, spécialisé dans la prise en charge de cette pathologie très particulière.
	</Text>
	<Text>
		L’enfant plus âgé peut également se voir diagnostiquer un glaucome juvénile. Il s’agit d’une
		entité clinique plutôt rare. Certains syndromes congénitaux peuvent également se compliquer de
		glaucome, comme le syndrome d’Axenfeld-Rieger ou le syndrome de Sturge-Weber-Krabbe.
	</Text>
</Section>
