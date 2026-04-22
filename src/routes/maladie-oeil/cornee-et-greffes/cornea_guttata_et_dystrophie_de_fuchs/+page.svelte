<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { GlaucomePageOneImgOne, GlaucomePageOneIlluOne, CorneePageOneImgOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/cornee-et-greffes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Cornéa guttata et dystrophie de Fuchs</Title>

	<Title level="h3">La cornée</Title>
	<Text>
		Pour comprendre le phénomène de cornea guttata (« cornée en gouttes »), il est nécessaire de
		connaître l’anatomie de la cornée.
	</Text>
	<Text>
		La cornée est comparable au « pare-brise » de l’œil. C’est une structure normalement
		parfaitement transparente, qui permet à la lumière de pénétrer dans l’œil sans obstacle.
	</Text>
	<Text>Elle est composée de 5 couches. De la surface vers la profondeur, on trouve :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>L’épithélium cornéen</li>
		<li>La membrane de Bowman</li>
		<li>Le stroma cornéen, la couche la plus épaisse</li>
		<li>La membrane de Descemet</li>
		<li>L’endothélium cornéen</li>
	</ul>

	<TextWithCorners>
		L’endothélium est une couche très fine : elle a l’épaisseur d'une seule cellule.
	</TextWithCorners>

	<Text>
		Les cellules endothéliales sont toutes alignées pour tapisser la face interne de la cornée. La
		fonction de ces cellules est, entre autres, d'assurer la transparence du stroma cornéen et, par
		extension, de toute la cornée, en empêchant l’infiltration du liquide intra-oculaire dans
		celle-ci.
	</Text>
	<Text>
		Toutes les anomalies du fonctionnement de cette couche endothéliale auront pour conséquence la
		formation d’un œdème de la cornée. La lumière ne peut plus la traverser correctement, avec des
		conséquences logiques sur la vision, qui baisse immanquablement. Si cet œdème persiste et n’est
		pas corrigé, on peut même voir des bulles se former dans la cornée et déformer celle-ci jusque
		dans sa partie la plus superficielle : l’épithélium. Le patient atteint présente, dans ce cas,
		un tableau d’ulcères cornéens, douloureux, récidivants. La vision est souvent très impactée. On
		parle alors de « kératopathie bulleuse ».
	</Text>
	<Text>
		Les pathologies qui altèrent le fonctionnement de l’endothélium sont multiples. Parmi celles-ci,
		on retrouve une maladie congénitale relativement fréquente : la dystrophie de Fuchs.
	</Text>
	<Text>
		Cette affection héréditaire affecte, en France, environ 1 personne sur 2000, à des degrés
		variables. Le métabolisme des cellules de l’endothélium est altéré. Certaines cellules
		vont disparaître et laisser des espaces, comblés soit par les cellules voisines, soit par une
		accumulation de protéines. C’est de cet aspect de « gouttes », qui parsèment l’endothélium, que
		provient le terme de « cornea guttata ».
	</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={CorneePageOneImgOne}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="h3">Stades cliniques</Title>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Les stades précoces de la pathologie sont absolument asymptomatiques. Seul un examen
			ophtalmologique attentif pourra identifier ou suspecter la maladie. Aucun traitement n’est
			recommandé tant que la transparence de la cornée est préservée.
		</li>
		<li>
			Lorsque les « gouttes » sont nombreuses, l’endothélium (dont les cellules, à l’inverse, se
			raréfient) montre des signes de faiblesse. La cornée peut se gorger d’eau ; c’est le stade de
			l’œdème. Cet œdème est souvent plus marqué au réveil et a tendance à diminuer au cours de la
			journée. Votre ophtalmologiste pourra vous prescrire des collyres hyperosmolaires pour
			accélérer sa régression.
		</li>
		<li>
			Au stade de kératopathie bulleuse, la cornée est souvent le siège de lésions nombreuses et
			étendues. Les ulcères cornéens peuvent parfois se surinfecter. À ces stades, le remplacement
			de l’endothélium devra être discuté et une greffe de cornée peut être envisagée. Elle est, en
			effet, le seul moyen de restaurer une fonction endothéliale normale.
		</li>
	</ul>

	<TextWithCorners>
		Aux stades évolués, seule une greffe peut restaurer la fonction de l'endothélium.
	</TextWithCorners>

	<Title level="h3">Cornea et guttata et chirurgie de cataracte</Title>
	<Text>
		Le dépistage de la dystrophie de Fuchs et, a fortiori, de la cornea guttata, fait partie du
		bilan ophtalmologique systématique lorsqu’une chirurgie de cataracte est envisagée.
	</Text>
	<Text>
		L’utilisation des ultrasons, nécessaire pour procéder à l’extraction du contenu du sac
		cristallinien, entraîne dans tous les cas une perte de cellules endothéliales. Votre chirurgien
		s’efforcera donc d’utiliser la plus faible quantité possible d’ultrasons. Malgré tout, si vous
		souffrez de cornea guttata, le nombre de cellules de départ est déjà limité et la chirurgie
		pourrait aggraver la situation et précipiter la survenue de complications cornéennes.
	</Text>
	<Text>
		Votre ophtalmologiste vous informera toujours du risque de kératopathie bulleuse du
		pseudophaque, c’est-à-dire du patient opéré de cataracte.
	</Text>
	<Text>
		Des explorations complémentaires pourront être réalisées pour préciser la densité cellulaire
		endothéliale pré-opératoire, afin de guider la décision thérapeutique.
	</Text>
</Section>
