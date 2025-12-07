<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageEightIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Hématome maculaire</Title>
	</div>

	<Title class="mt-10" level="h2">La macula</Title>
	<Text>
		La rétine est une fine pellicule qui tapisse la partie postérieure de l'oeil. Elle est composée
		de 10 couches permettant de recevoir, traiter et transmettre l'information visuelle au cerveau
		via le nerf optique.  <br />
		La rétine est en rapport :
	</Text>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>En avant, avec le vitré (la poche de gel transparent qui remplit le globe oculaire)</li>
		<li>
			En arrière, elle repose sur la choroïde qui est un tissu vasculaire. Plus en arrière se situe
			la sclére qui est le tissu fibreux permettant la rigidité du globe oculaire.
		</li>
	</ul>
	<Text>
		La rétine est, schématiquement, une structure plane et homogène sur l’ensemble de sa surface ;
		la principale exception est la macula et, en son centre, la fovéa, qui décrit une dépression en
		forme d’entonnoir. C'est au sein de cette zone que se situent la plupart des cellules permettant
		d'avoir une vision nette. La vision peut être altérée, plus ou moins gravement, si cette forme
		d'entonnoir n’est plus respectée.
	</Text>

	<Title level="h2">Qu'est ce qu'un hématome maculaire ?</Title>
	<Text>
		Un hématome maculaire est une collection de sang, qui se forme sous la rétine. Plus précisément,
		c'est le centre de la rétine (la macula) qui est atteint.
	</Text>
	<figure class=" mx-auto w-full max-w-lg">
		<img
			src={RetineChirurgicalePageEightIlluOne}
			alt="Illustration d'un hématome sous-maculaire"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title class="mt-10" level="h2">Causes et facteurs de risque de survenue</Title>

	<TextWithCorners
		>La première cause d'hématome maculaire est la Dégénérescence Maculaire Liée à l'Âge (DMLA).</TextWithCorners
	>

	<Text>
		Dans le cas d'une DMLA exsudative, un néo-vaisseau se développe sous la rétine. Le plus souvent,
		il va générer une exsudation et la formation d'un oedème dans la région maculaire. <br />
		Mais parfois, il se manifeste brutalement par l'apparition d'un hématome. Dans de rares cas, cet hématome
		peut être révélateur de la maladie. <br />
		Il existe également d'autres causes d'hématome maculaire :
	</Text>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Les traumatismes oculaires sévères ;</li>
		<li>Certaines malformations vasculaires, comme les anévrismes ;</li>
	</ul>

	<Title class="mt-10" level="h2">Symptômes d'un hématome maculaire</Title>
	<Text>Deux signes cliniques dominent le tableau :</Text>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Baisse de vision profonde et soudaine ;</li>
		<li>Scotome central (tache sombre) apparu brutalement, généralement sur un seul œil.</li>
	</ul>

	<Text>
		Ils apparaissent brutalement, sur l'un des deux yeux.  <br />
		Si vous (ou l'un de vos proches) présentez ces symptômes, nous vous recommandons de consulter en
		urgence votre ophtalmologiste.
	</Text>

	<Title level="sub2">Traitement</Title>
	<Text>
		Il existe plusieurs stratégies thérapeutiques différentes, selon l'importance de l'hématome,
		l'âge de la personne atteinte ou la maladie responsable de l'hématome.
	</Text>
	<Title level="sub2">Traitement de la cause</Title>
	<Text>
		La priorité est de traiter la pathologie responsable de l'hématome. <br />
		Dans le cas d'une DMLA, il sera nécessaire de débuter rapidement un traitement par injections intra-vitréennes d'anti-VEGF,
		afin d'entraîner la régression du néo-vaisseau choroïdien responsable. <br />
		Dans le cadre d'une lésion vasculaire (anévrysme), une photocoagulation au laser Argon peut être
		discutée.
	</Text>
	<Title level="sub2">Surveillance simple</Title>
	<Text>
		Parfois, la situation clinique n'impose pas de prise en charge particulière, soit parce que
		l'hématome va se résorber spontanément (cas des traumatismes), soit parce que l'hématome est
		trop ancien ou trop important pour qu'une récupération visuelle soit envisageable.
	</Text>
	<Title level="sub2">Injections intravitréennes</Title>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Plusieurs produits sont utiles dans une telle situation :</li>
		<li>
			Les anti-VEGFs, déjà mentionnés, pour leur efficacité contre les néo-vaisseaux anormaux ;
		</li>
		<li>
			Le rt-PA, molécule capable de "dissoudre" un caillot de sang. Si elle est précisément injectée
			sur le site de l'hématome, elle peut permettre de l'étaler au maximum, évitant une dégradation
			locale potentiellement délétère pour les photorécepteurs maculaires, indispensables à une
			bonne vision ;
		</li>
		<li>Un gaz expansif, qui permet de déplacer l'hématome.</li>
	</ul>

	<Title level="sub2">Chirurgie</Title>
	<Text>La chirurgie, lorsqu'elle est réalisée, consiste à :</Text>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Réaliser une vitrectomie (ablation du gel vitréen) ;</li>
		<li>Injecter sous la rétine du rt-PA, pour "dissoudre" le caillot de sang ;</li>
		<li>Injecter du gaz dans la cavité oculaire pour déplacer l'hématome.</li>
	</ul>
	<Text>
		Après la chirurgie vous devrez maintenir une position quelques jours que vous conseillera votre
		chirurgien. <br />
		Les indications chirurgicales dépendent de critères anatomiques précis. Votre chirurgien vous les
		exposera évidemment avant tout geste invasif.
	</Text>
</Section>
