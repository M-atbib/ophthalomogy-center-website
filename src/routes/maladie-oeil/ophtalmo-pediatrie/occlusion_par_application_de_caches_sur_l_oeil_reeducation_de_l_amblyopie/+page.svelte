<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ExplorationsPageTwoIlluOne, PediatriePageFourImgOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/ophtalmo-pediatrie" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">
		Occlusion par application de caches sur l'oeil - Rééducation de l'amblyopie
	</Title>

	<Title level="h3">L’occlusion : de quoi s’agit-il ?</Title>
	<Text>
		Ce terme désigne le fait de cacher l'un des deux yeux avec un pansement oculaire, aussi appelé
		« cache oculaire ».
	</Text>
	<Text>
		Le cache est un pansement de forme arrondie, qui se colle sur la peau, autour de l’œil. Il se
		colle et se décolle de la même façon qu’un pansement sur une blessure.
	</Text>
	<Text>Les lunettes viennent toujours se positionner par-dessus le cache.</Text>

	<Title level="h3">Pourquoi cacher un œil ?</Title>
	<Text>
		Parfois, un seul des deux yeux "regarde réellement" : un œil devient dominant et l’autre œil se
		met au repos, « il arrête de regarder ». Le développement visuel de cet œil est stoppé
		et l’acuité visuelle est mauvaise. Le fait de cacher l’œil dominant va obliger l’œil au repos à
		reprendre une fixation visuelle.
	</Text>
	<TextWithCorners>
		L'amblyopie est la cause la plus fréquente de mauvaise vision chez l'enfant.
	</TextWithCorners>
	<Text>
		L’occlusion par cache est la seule méthode efficace pour faire remonter la vision de l’œil
		dominé. Il faut toujours y associer le port de lunettes adaptées.
	</Text>
	<Text>
		Les caches se trouvent en pharmacie. Il en existe plusieurs tailles et plusieurs marques : il
		faut choisir le cache le plus adapté à la taille de l'enfant. Il n'y a pas de différence
		d'efficacité entre les différentes marques disponibles.
	</Text>

	<div class="my-8 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-7/12">
			<Title level="h3">Comment ça se passe ?</Title>
			<Text>
				Une période d’occlusion permanente (7j/7, 24h/24) est initiée, en général pour 2 à 6
				semaines. Cette période est très importante, car elle va permettre d’évaluer le pronostic de
				récupération visuelle. Il est nécessaire de respecter cette période le plus sérieusement
				possible. On parle d'occlusion totale, ou permanente.
			</Text>
			<Text>
				Si possible, il vaut mieux changer le cache dans le noir. Ceci permet de ne jamais faire
				travailler l'oeil dominant. Le signal est d'autant plus fort pour l'autre oeil. Mais si
				l'enfant s'en défend, le cache peut être retiré la nuit, à condition d’être replacé dès le
				matin au réveil.
			</Text>
			<Text>
				Pour diminuer l’irritation de la peau par le collant, vous pouvez utiliser plusieurs tailles
				de cache différentes. La colle touche plusieurs régions cutanées, en alternance, ce qui
				diminue les phénomènes allergiques locaux. Essayez de laisser le cache en place le plus
				longtemps possible (jour et nuit) avant de le retirer.
			</Text>
			<Title level="sub2">À savoir</Title>
			<Text>
				La vue du bon œil peut baisser transitoirement pendant cette période. C'est l'amblyopie "à
				bascule". C'est une situation tout à fait bénigne, qui ne doit pas remettre en question
				l'occlusion. La vision remontera dès la fin de la période d’occlusion permanente.
			</Text>
			<Text>
				Un strabisme ou une modification d’un strabisme déjà présent peut survenir pendant la
				période d'occlusion. Cela est sans conséquence, la priorité étant donnée au développement
				visuel.
			</Text>
		</div>
		<figure class="mx-auto w-full max-w-xl overflow-hidden">
			<img
				src={PediatriePageFourImgOne}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>

	<Title level="h3">Combien de temps ?</Title>
	<Text>
		On diminuera progressivement le nombre de jours pendant lesquels l’œil est caché pendant la
		semaine.
	</Text>
	<Text>
		La durée moyenne de traitement par caches est d’environ un an, avec une diminution progressive
		du nombre de jours de port.
	</Text>
	<Text>
		Dans certains cas, l'occlusion doit être poursuivie plusieurs années, afin d’empêcher une
		nouvelle baisse de vue à l’arrêt des caches.
	</Text>
	<TextWithCorners>
		Mieux l’occlusion sera réalisée, plus vite la vision de l’œil "paresseux" remontera.
	</TextWithCorners>
	<Text>
		Le suivi de l’enfant sera très régulier. Initialement, des consultations sont nécessaires toutes
		les 2 à 4 semaines. Par la suite, des contrôles tous les 2 à 3 mois, puis tous les 6 mois,
		seront réalisés, jusqu’à la normalisation de la vision.
	</Text>
	<Text>
		Chez l'enfant plus grand, pour stabiliser la vision, un filtre discrètement opaque (appelé
		"filtre Ryser") peut être collé sur le verre de lunette, du côté du meilleur œil. Cette
		technique de pénalisation impose que l'enfant ne regarde pas au-dessus de ses lunettes.
	</Text>
	<Text>
		La période de plasticité cérébrale, pendant laquelle la vision de l'œil paresseux peut revenir à
		la normale, va de la naissance à l'âge de 7-8 ans. C'est pourquoi il est nécessaire de
		s'acharner à cacher le bon œil durant cette période. Passé cet âge il sera trop tard pour faire
		remonter la vue et la malvoyance persistera toute la vie. Cette situation est d'autant plus
		regrettable que l'oeil malvoyant est anatomiquement normal et fonctionne normalement. C'est le
		développement de sa communication avec le cerveau qui est anormal.
	</Text>
</Section>
