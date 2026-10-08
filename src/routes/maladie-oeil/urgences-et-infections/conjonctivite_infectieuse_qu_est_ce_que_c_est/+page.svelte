<script lang="ts">
	import { DiseaseArticleLayout, OpeningImageSection, Text, TextWithCorners, Title } from '$lib';
	import { InfectionPageOneIlluOne } from '$lib/assets';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Conjonctivite infectieuse : qu'est-ce que c'est ?" {backHref}>
	<OpeningImageSection
		src={InfectionPageOneIlluOne}
		alt="Œil atteint d'une conjonctivite infectieuse"
	>
		<Title level="h3" as="h2">Qu'est-ce qu'une conjonctivite ?</Title>
		<Text
			>La conjonctive est souvent comparée à une peau, transparente, qui recouvre la sclère, partie
			blanche de la surface oculaire. Elle tapisse également la face interne des paupières. La zone
			de transition entre ces deux zones est formée par le cul-de-sac conjonctival.</Text
		>
		<Text
			>Lorsque la conjonctive est colonisée par certains micro-organismes pathogènes, elle est le
			siège d’une inflammation ; c’est le stade de conjonctivite.</Text
		>
	</OpeningImageSection>

	<section>
		<Title level="h3" as="h2">Quels sont les signes de conjonctivite ?</Title>
		<Text>Les signes les plus fréquents sont les suivants :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
			<li>Rougeur oculaire diffuse ;</li>
			<li>Larmoiement ;</li>
			<li>Sécrétions oculaires ;</li>
			<li>Pas de baisse de vision ou baisse de la vision modérée ;</li>
			<li>Paupières parfois gonflées (en raison de l'œdème de la conjonctive) ;</li>
			<li>
				Peu ou pas de douleurs. Malgré tout, de nombreux patients atteints se plaignent d’une
				sensation de corps étranger sous-palpébral, liée au frottement des follicules ou des
				papilles (structures hypertrophiées au cours de l’épisode) sur la surface oculaire.
			</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Quels sont les germes responsables ?</Title>
		<div class="space-y-3">
			<Title level="sub2" as="h3">Conjonctivites virales</Title>
			<Text
				>La conjonctivite virale survient dans le cadre de véritables épidémies. La cause la plus
				typique est une atteinte par les virus de type « Adénovirus ». Elle est extrêmement
				contagieuse. Certaines règles sont à respecter pour éviter sa propagation. L’épisode touche
				très souvent les deux yeux. Il peut être associé à une fièvre ou à des symptômes de
				rhino-pharyngite ; c’est en effet le même virus qui est en cause pour ces deux pathologies.
				Les sécrétions, en cas de conjonctivite virale, sont claires.</Text
			>
			<Text
				>L’inflammation locale est parfois telle que des membranes se développent à la surface de la
				conjonctive palpébrale, avec, pour possible conséquence, des cicatrices localisées. Une
				kératite s’y associe quand la réplication virale est très intense, avec des séquelles
				possibles pour la vision.</Text
			>
			<TextWithCorners
				>Si vous êtes traité pour une conjonctivite virale et que votre vision continue de baisser,
				mieux vaut reconsulter votre ophtalmologiste en urgence !</TextWithCorners
			>
			<Text
				>Comme pour toute infection virale, les antibiotiques ne sont pas efficaces sur ce type
				d’épisode. Mieux vaut donc éviter d’en instiller par vous-même.</Text
			>
			<Text
				>La conjonctive est le siège d’une réplication virale longue. Même en cas de régression des
				symptômes, un patient reste contagieux plusieurs semaines et il est conseillé de poursuivre
				le traitement pour toute la durée de prescription, sous peine de voir récidiver le tableau
				clinique ou d’infecter son entourage, familial ou professionnel.</Text
			>
			<Text
				>D'autres familles de virus peuvent être en cause. Les virus de la famille des herpès sont
				extrêmement pathogènes pour l'œil et ses annexes. La conjonctivite est, dans ce cas,
				présente sur un œil. Certains symptômes associés font fortement suspecter le diagnostic,
				comme la présence de lésions cutanées sur les paupières ou une éruption labiale récente.</Text
			>
			<Text
				>Seul un examen ophtalmologique attentif pourra vous permettre de bénéficier du traitement
				le plus adapté à la forme de conjonctivite virale diagnostiquée.</Text
			>
		</div>

		<div class="mt-8 space-y-3">
			<Title level="sub2" as="h3">Conjonctivites bactériennes</Title>
			<Text
				>Les conjonctivites bactériennes sont plus souvent unilatérales. Les sécrétions sont plus
				sales que dans le cadre des infections virales. Elles peuvent prendre une coloration
				verdâtre et une consistance épaisse. L'âge de survenue de l'infection est important à
				connaître.</Text
			>
			<Text
				>Les conjonctivites bactériennes de l'enfant sont les plus sérieuses. Certaines bactéries
				peuvent en effet entraîner des lésions cornéennes extrêmement sévères. Dans certaines
				régions du monde, le trachome est un diagnostic encore courant de conjonctivite bactérienne,
				avec des conséquences parfois dramatiques.</Text
			>
			<Text
				>Chez un enfant en bas âge, et plus encore chez un nouveau-né, la conjonctivite bactérienne
				est une urgence et il est nécessaire de consulter votre ophtalmologiste sans délai.</Text
			>
			<TextWithCorners
				>En cas de conjonctivite bactérienne, l’utilisation d’antibiotiques ne sera pas systématique
				!</TextWithCorners
			>
		</div>
	</section>
</DiseaseArticleLayout>
