<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		GlaucomePageOneImgOne,
		GlaucomePageOneIlluOne,
		KératocônePageTwoIlluOne,
		KératocônePageTwoIlluTwo
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/keratocone" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Comment se traite un kératocône ?</Title>
	<Text>
		Il n’existe, à l’heure actuelle, aucun traitement permettant de guérir d’un kératocône. Rien ne
		pourra redonner à la cornée sa forme initiale.
	</Text>
	<TextWithCorners>
		Toutes les démarches thérapeutiques ont pour objectif de stabiliser la maladie et de limiter son
		impact sur la fonction visuelle et la vie quotidienne des patients.
	</TextWithCorners>
	<Text>Le kératocône est une maladie chronique et évolutive.</Text>
	<Text>
		Seul un diagnostic précoce, permis par une surveillance ophtalmologique régulière pourra assurer
		une prise en charge optimale.
	</Text>
	<Title level="h3">Quel est l'intérêt du Cross-linking cornéen ?</Title>
	<Text>
		Si le diagnostic de kératocône est posé chez un sujet de moins de 18 ans ou s’il est rapidement
		évolutif, votre ophtalmologiste pourra proposer la réalisation d’un cross-linking cornéen. Il
		s’agit du seul traitement capable de freiner l’évolution du kératocône. Ses principes sont
		physiques et basés sur l’exposition intense et focalisée de la cornée à des rayons ultraviolets
		(UVA), après l’avoir imprégnée d’une solution photosensibilisante.
	</Text>
	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={KératocônePageTwoIlluOne}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Text>
		Le cross-linking est une intervention qui va permettre de rigidifier les protéines de collagène
		de la cornée et ainsi freiner la déformation de cette dernière.
	</Text>
	<Text>
		L’intervention est, en règle générale, indolore ; elle est réalisée sous anesthésie uniquement
		locale, en ambulatoire. Les deux yeux ne sont pas opérés dans le même temps. Quelques mois vont
		alors séparer les deux gestes, le cas échéant.
	</Text>

	<Title level="h3">Comment améliorer la vision d'un patient atteint de kératocône ?</Title>

	<Text>
		Différentes mesures sont disponibles pour tenter de corriger la vision du patient atteint, selon
		le degré de sévérité du kératocône :
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			La correction optique par le port de lunettes permettra, au stade précoce (kératocônes frustes
			et minimes), de corriger l’astigmatisme myopique induit par le bombement de la cornée.
		</li>
		<li>
			Lorsque l’astigmatisme est trop important, les lunettes ne sont en général plus suffisantes et
			une adaptation en lentilles est nécessaire. En cas de kératocône, seules des lentilles rigides
			perméables aux gaz, de géométrie spécifique pourront être adaptées. D’une part, elles sont les
			seules lentilles à pouvoir rester stables sur une cornée irrégulière. D’autre part, leur
			rigidité leur permet de créer, via un ménisque de larmes, une surface oculaire plus régulière,
			qui va alors atténuer la déviation excessive des rayons lumineux.
		</li>
	</ul>

	<Text>
		L’adaptation en lentilles rigides du sujet atteint de kératocône est un acte médical spécialisé,
		qui nécessitera plusieurs essais et consultations auprès d’un ophtalmologiste dont
		la contactologie est un domaine d’expertise.
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Dans certains cas, la pose d’anneaux intra-cornéens, insérés chirurgicalement dans la
			cornée, permet de contrôler toute ou partie de sa déformation.
		</li>
		<li>
			Lorsque des opacités compliquent l’évolution du kératocône, la lumière ne peut plus traverser
			la cornée. L’acuité visuelle chute alors de manière importante et les dispositifs de
			correction décrits ci-dessus ne suffisent plus pour l’améliorer. Seule une greffe de cornée,
			qui remplace la cornée malade par une cornée saine de donneur, permettra de restaurer la
			transparence des milieux oculaires. Il s’agit d’une intervention lourde, qui nécessite des
			traitements anti-rejets au long cours, mais qui permet de rendre la vue dans les cas les plus
			sévères.
		</li>
	</ul>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={KératocônePageTwoIlluTwo}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<TextWithCorners>
		En France, le kératocône est l’une des principales causes de greffe de cornée. Jusqu’à 30% des
		gestes chirurgicaux sont pratiqués dans cette indication.
	</TextWithCorners>
</Section>
