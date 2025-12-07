<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageNineIlluTwo } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Membrane épi-rétinienne</Title>
	</div>

	<Title level="h2">La rétine : qu'est-ce que c'est ?</Title>
	<Text>
		La rétine est une fine pellicule qui tapisse la partie postérieure de l'oeil. Elle est composée
		de 10 couches permettant de recevoir, traiter et transmettre l'information visuelle au cerveau
		via le nerf optique.
	</Text>
	<Text>La rétine est en rapport :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>En avant, avec le vitré (la poche de gel transparent qui remplit le globe oculaire)</li>
		<li>
			En arrière, ellerepose sur la choroïde qui est un tissu vasculaire. Plus en arrière se situe
			la sclére qui est le tissu fibreux permettant la rigidité du globe oculaire.
		</li>
	</ul>
	<Text>
		Une membrane épi-rétinienne (MER) peut aussi être appelée "membrane épi-maculaire" (MEM).
	</Text>
	<Text>
		Il s'agit d'une membrane fibreuse, qui se développe à la surface de la rétine, souvent en
		son centre (la macula). Cette membrane est fortement adhérente à la rétine. Elle a aussi
		des propriétés contractiles. On comprend facilement qu'elle modifie la forme de la macula et
		entraîne des perturbations visuelles.
	</Text>

	<Title class="mt-10" level="h2">Facteurs de risque</Title>
	<Text>
		Dans l’immense majorité des cas, aucune cause n’est retrouvée. On parle alors de membrane
		épi-rétinienne idiopathique.
	</Text>
	<Text>
		Dans d'autres cas, la membrane est dite "secondaire"; son apparition est facilitée par la
		présence :
	</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>De déchirures rétiniennes ;</li>
		<li>D'antécédents de traitement(s) de la rétine au laser Argon ;</li>
		<li>D'une inflammation oculaire chronique ou d'antécédents d'infection ;</li>
		<li>D'antécédents de décollement de rétine ou autres affections rétiniennes.</li>
	</ul>

	<Title class="mt-10" level="h2">Symptômes de la MER</Title>
	<Text>La membrane se développe très lentement, en plusieurs années.</Text>
	<Text>
		Au stade initial, elle n’est responsable d’aucun symptôme et seul un examen ophtalmologique
		attentif pourra déceler sa présence. C’est au fur-et-à-mesure de son extension et de son
		épaississement qu’elle devient contractile et va être responsable de déformations rétiniennes.
	</Text>
	<Text>C’est à ce stade que surviennent les symptômes :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Baisse d’acuité visuelle ;</li>
		<li>Métamorphopsies (lignes ondulées) ;</li>
		<li>Macropsies (impression de grossissement) ;</li>
		<li>Parfois diplopie.</li>
	</ul>
	<Title level="h2">Traitement</Title>
	<TextWithCorners>Le traitement de cette affection est uniquement chirurgical.</TextWithCorners>
	<Text>
		La chirurgie est indiqué en cas de gêne visuelle. Le stade auquel le traitement est proposé est
		très dépendant de l'état clinique de chaque patient. <br />
		L'intervention consiste à peler la membrane, après ablation du gel vitréen (vitrectomie).<br />
		L'amélioration de la vue est partielle et est souvent lente. La récupération visuelle s'évalue plusieurs
		mois après l'intervention.<br />
	</Text>
</Section>
