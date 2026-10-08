<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ExplorationsPageTwoIlluOne, PediatriePageOneImgOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/ophtalmo-pediatrie" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Amblyopie : le syndrome de l'œil "paresseux"</Title>

	<Title level="h3">L'amblyopie : qu'est-ce que c'est ?</Title>
	<Text>On parle d’amblyopie quand il existe une différence de vision entre les deux yeux.</Text>
	<TextWithCorners>
		Un œil voit bien, l’autre voit mal : il est appelé « œil fainéant ou paresseux ». Cette
		situation touche 2 à 3% des enfants, en France.
	</TextWithCorners>
	<Text>
		Il s’agit d’une anomalie de développement du système de communication entre les yeux et le
		cerveau. Les images transmises par un œil sont de qualité insuffisante pour être traitées par le
		cerveau. Il va donc les ignorer. Cela va entraîner une perte progressive de la vision de cet
		œil, qui peut devenir irréversible si elle n’est pas prise en charge à temps.
	</Text>
	<Text>
		Chez l'enfant la vision se développe jusqu'à l'âge de 7-8 ans. Passé cet âge, l'amblyopie
		devient irréversible, si elle n'est pas traitée et va conduire à une malvoyance définitive à
		l'âge adulte. Si le traitement de l'amblyopie est précoce et bien conduit, la vision de l'œil
		paresseux va revenir à la normale en quelques mois.
	</Text>

	<div class="my-8 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-6/12">
			<Title level="h3">Les principales causes d'amblyopie</Title>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>Le strabisme : déviation permanente d'un œil ;</li>
				<li>
					Les troubles de la réfraction (défauts visuels) qui ne sont pas encore corrigés par le
					port de lunettes : hypermétropie forte, myopie forte, astigmatisme fort sur un ou les deux
					yeux ;
				</li>
				<li>
					Les anomalies morphologiques oculaires : cataracte congénitale, glaucome congénital,
					pathologies génétiques ou héréditaires ;
				</li>
				<li>Ptosis congénital (chute d'une paupière devant l'axe pupillaire).</li>
			</ul>

			<Title level="h3">Facteurs de risque d'amblyopie</Title>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>Une naissance prématurée,</li>
				<li>
					Des antécédents familiaux : une amblyopie chez l'un des parents doit être mentionnée à
					l'ophtalmologiste,
				</li>
				<li>Certaines pathologies neurologiques ou de développement.</li>
			</ul>
		</div>
		<figure class="mx-auto w-full max-w-2xl overflow-hidden">
			<img
				src={PediatriePageOneImgOne}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>

	<Title level="h3">Les signes qui doivent amener à consulter pour votre jeune enfant</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>L’enfant se frotte les yeux</li>
		<li>L’enfant plisse ou cligne fréquemment des yeux</li>
		<li>L’enfant présente un strabisme</li>
		<li>L’enfant a mal aux yeux ou mal à la tête</li>
		<li>L’enfant présente un retard ou des difficultés d’apprentissage</li>
		<li>L’enfant souffre de chalazions à répétition</li>
		<li>L’enfant voit mal de loin ou de près</li>
	</ul>
	<TextWithCorners>
		Si un des deux yeux voit bien, il est possible que l’enfant ne présente aucun symptôme.
	</TextWithCorners>

	<Title level="h3">Traitement</Title>
	<Text>
		Le traitement combine le port de lunettes en permanence et l'occlusion du bon œil avec un cache,
		afin de faire "travailler l'œil qui voit mal".
	</Text>

	<Title level="h3">Évolution</Title>
	<Text>
		Si l'amblyopie est prise en charge suffisamment tôt, la vision de l'œil paresseux va remonter
		progressivement, pour venir égaler celle de l'autre œil.
	</Text>
	<Text>
		Une adaptation précoce en lunettes de vue et une occlusion bien réalisée sont les
		principaux facteurs de succès du traitement.
	</Text>
	<Text>
		Si le traitement n'est pas mis en route ou s'il n'est pas bien effectué, l'enfant aura un œil
		malvoyant à l'âge adulte et ce, de façon définitive. Passé l'âge de 8 ans, il n'y a plus de
		possibilité de rééducation. La chirurgie laser, à l'âge adulte, ne permet pas non plus de
		corriger ce phénomène.
	</Text>
	<TextWithCorners>
		Chaque enfant devrait avoir un examen ophtalmologique avant l'entrée au CP.
	</TextWithCorners>
	<Text>
		Les enfants en bas âge se plaignent très rarement de leurs yeux ou de leur vision, car ils n’ont
		pas conscience de présenter un trouble visuel. Un examen de dépistage doit être systématique.
	</Text>
</Section>
