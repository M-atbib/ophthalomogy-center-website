<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Hémorragie du vitré</Title>
	</div>

	<Title level="h2">Le vitré</Title>
	<Text>
		Le terme « vitré », ou « corps vitréen », désigne le gel qui occupe la majeure partie du volume
		intra-oculaire (80% environ). Il occupe la partie postérieure de l'oeil. <br />
		Ce gel est transparent. Il est composé de fibres de collagène et d’acide hyaluronique. La disposition
		de ces molécules est très particulière et permet au vitré d'être transparent. <br />
		De manière schématique, il faut considérer le corps vitréen comme une poche : <br />
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			sa paroi, ou « hyaloïde », est adhérente aux structures oculaires qui l’entourent : le
			cristallin, en avant, la rétine et ses différents éléments en arrière.
		</li>
		<li>son centre est le vitré central.</li>
	</ul>

	<Title class="mt-10" level="h2">Hémorragie intra-vitréenne : qu'est-ce que c'est ?</Title>
	<Text>
		Une hémorragie intra-vitréenne (HIV) est un saignement qui survient à l'intérieur de la cavité
		vitréenne. Ce saignement peut venir de la partie antérieure de l'oeil (de l'iris notamment),
		mais il provient le plus souvent de la partie postérieure, en particulier de la rétine.
	</Text>

	<Title class="mt-10" level="h2">Principales causes de survenue</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Décollement postérieur du vitré : le vitré peut léser un vaisseau sanguin rétinien en se
			décollant, ce qui peut déclencher une hémorragie ;
		</li>
		<li>Une déchirure de la rétine, qui complique le décollement postérieur du vitré ;</li>
		<li>Malformation vasculaire (anévrisme rétinien, tumeur vaso-proliférative...) ;</li>
		<li>Rétinopathie diabétique proliférante, ischémie rétinienne d'autres causes ;</li>
		<li>Dégénérescence maculaire liée à l'âge ;</li>
		<li>Tumeurs oculaires ;</li>
	</ul>
	<Text>
		Il arrive également qu'aucune cause d'hémorragie ne soit retrouvée par le bilan ophtalmologique.
	</Text>

	<Title class="mt-10" level="h2">Symptômes</Title>
	<Text>
		L’hémorragie intra-vitréenne est une cause de baisse de vision rapide, d’importance variable
		et toujours indolore. Le saignement, à son début, est souvent décrit par le patient comme un
		phénomène de « pluie de suie ». Il diffère ainsi des corps flottants, classiquement peu nombreux
		et moins mobiles.
	</Text>

	<Title class="mt-10" level="h2">Prise en charge</Title>
	<Title class="mt-10" level="sub2">Hydratation et repos</Title>
	<Text>
		Il est conseillé au patient de s’hydrater abondamment, par voie orale et de boire 1,5  à 2
		litres d’eau par jour, en l’absence de contre-indication cardio-vasculaire. Cette attitude
		classique n'a, par contre, pas montré ses preuves sur le plan scientifique. <br />
		Le repos est également vivement conseillé, en évitant les déplacements ou les exercices inutiles.
	</Text>
	<Title class="mt-10" level="sub2">Surveillance</Title>
	<Text>
		L’évolution d’une hémorragie intra-vitréenne est variable. Parfois, le sang se lave spontanément
		en quelques jours ou semaines, avec une restauration complète de la vision.
	</Text>

	<Title class="mt-10" level="sub2">Traitement de la cause de l'hémorragie</Title>
	<Text>
		Il est fondamental de chercher l'origine du saignement et de prendre en charge une pathologie
		révélée par le saignement. <br />
		Lorsqu'une déchirure rétinienne est diagnostiquée, un barrage au laser Argon doit être réalisé sans
		délai. <br />
		Parfois, des injections intra-vitréennes d'anti-VEGF sont nécessaires, en cas de pathologie vasculaire
		rétinienne avec néo-vaisseaux rétiniens.
	</Text>
	<Title class="mt-10" level="sub2">Chirurgie : la vitrectomie</Title>
	<Text>
		Parfois l’hémorragie se fixe et le sang coagule à l’intérieur de l’œil. Le traitement est, dès
		lors, plus complexe et souvent chirurgical. Il consiste à :
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Réaliser une ablation du vitré (vitrectomie), qui permet d'améliorer la vue et de réaliser la
			diagnostic de la cause de l'hémorragie, si celui ci n'avait pas encore pu être fait ;
		</li>
		<li>Réaliser un traitement de la cause de l'hémorragie, comme du laser peropératoire.</li>
	</ul>
</Section>
