<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicalePageSixIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Trou maculaire</Title>
	</div>

	<Title level="h2">La macula</Title>
	<Text>
		La rétine est une fine pellicule qui tapisse la partie postérieure de l'oeil. Elle est composée
		de 10 couches permettant de recevoir, traiter et transmettre l'information visuelle au cerveau
		via le nerf optique.
	</Text>
	<Text>La rétine est en rapport :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
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
		d'entonnoir n’est plus respectée
	</Text>

	<Title class="mt-10" level="h2">Qu'est ce qu'un trou maculaire ?</Title>
	<Text>
		On parle de trou maculaire (TM) lorsqu'une perte de substance se produit au centre de la macula,
		au niveau de la fovéa. Normalement, il existe une continuité parfaite des tissus rétiniens, avec
		une répartition sans interruption des cellules photoréceptrices. Cette continuité est rompue en
		cas de trou maculaire.
	</Text>

	<figure class="mx-auto w-full max-w-lg">
		<img
			src={RetineChirurgicalePageSixIlluOne}
			alt="Illustration d'un trou maculaire"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title class="mt-10" level="h2">
		Cause et facteurs de risque de survenue d'un trou maculaire
	</Title>
	<Text>
		Dans l'immense majorité des cas, la formation du trou maculaire résulte d'un conflit entre la
		paroi du vitré (le gel qui remplit la partie postérieure de l'oeil) et la macula. C'est donc
		une pathologie de l'interface vitréo-rétinienne. Le vitré se décolle progressivement et emporte
		la partie centrale de la macula, en laissant un trou. D'autres facteurs de risques sont parfois
		retrouvés :
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Myopie forte ;</li>
		<li>Antécedent de chirurgie de rétine, de décollement de rétine ;</li>
		<li>Traumatisme oculaire ;</li>
		<li>Antécédent de trou maculaire sur l'oeil contre-latéral...</li>
	</ul>

	<Title class="mt-10" level="h2">Symptômes</Title>
	<Text>
		De manière brutale, rapide ou parfois plus progressivement, un patient présentant un trou
		maculaire peut ressentir :
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Une baisse de vision ;</li>
		<li>Une amputation du champ visuel central (scotome) ;</li>
		<li>Une déformation des images (métamorphosies).</li>
	</ul>

	<Title class="mt-10" level="h2">Traitement</Title>
	<TextWithCorners>
		La survenue d'un trou maculaire est souvent une urgence chirurgicale relative. La prise en
		charge doit être rapide.
	</TextWithCorners>

	<Title class="mt-10" level="sub2">
		En effet, le pronostic visuel est souvent moins bon lorsque la prise en charge est retardée et
		que le trou a grandi.
	</Title>
	<Text>
		Chirurgie du trou maculaire : cas le plus fréquent. <br />
		Dans la grande majorité des cas, la chirurgie du trou maculaire s'attache à traiter la cause de la
		lésion et ses conséquences sur les tissus rétiniens. <br />
		Vitrectomie <br />
		Puisqu'il existe un "conflit" entre la hyaloïde postérieure (la paroi postérieur du gel vitréen)
		et la rétine, on procède à une ablation de celui-ci. <br />
		Pelage de la membrane limitante interne <br />
		La membrane limitante interne est une fine pellicule, située à la surface de la rétine. Son ablation
		permet d'obtenir une meilleur élasticité des tissus rétiniens et facilite la cicatrisation du trou.
		<br />
		Tamponnement et fermeture du trou <br />
		Pour cette étape, un gaz expansif est injecté à l'intérieur de l'oeil, à la place du gel vitréen.
		Ce gaz, en se dilatant, va appuyer sur la rétine et stimuler la fermeture du trou maculaire.
		<br />
		Le gaz se résorbe spontanément, sans intervention complémentaire, en quelques semaines. <br />
		Votre chirurgien vous conseillera de tenir une position post-opératoire (regard vers le bas, assis
		ou debout), dont le type et la durée dépendront de votre situation clinique. Cette position permet
		une meilleure répartition du gaz et facilite un appui prolongé sur la région du trou à refermer.
		<br />
		Comme c'est le cas pour toutes les chirurgies du segment postérieur de l'oeil, si le cristallin est
		déjà opacifié au moment de la décision d'intervention, une chirurgie de cataracte pourra être proposée
		dans le même temps opératoire. <br />
	</Text>

	<Title class="mt-10" level="sub2">Alternative : la surveillance simple</Title>
	<Text>
		Dans de rares cas de trous maculaires récents, de petite taille ou à la suite d'un
		traumatisme, le trou maculaire peut se refermer spontanément et ne pas nécessiter de traitement
		invasif.  <br />
		Votre chirurgien vous conseillera sur la meilleure stratégie à adopter. <br />
	</Text>

	<Title class="mt-10" level="h2">Les risques de la chirurgie du trou maculaire</Title>
	<Text>
		Le trou maculaire est une maladie grave. Même en cas de traitement adapté, il peut persister des
		séquelles visuelles : vision flou, vision déformée... Les séquelles sont d'autant plus
		importantes et fréquentes que le trou maculaire est ancien et de grande taille. <br />
		D'autres risques post-opératoires existent :
	</Text>

	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Cataracte : la vitrectomie favorise la survenue d'une cataracte. Ainsi, 95% des patients ayant
			bénéficié d'une vitrectomie devront être opérés de cataracte dans les 5 ans suivant le geste ;
		</li>
		<li>Non-fermeture du trou maculaire après l'intervention ;</li>
		<li>
			Récidive du trou maculaire : après fermeture, le trou maculaire peut s'ouvrir à nouveau. Vous
			devrez être attentif tout au long de votre vie et vous plier à une surveillance régulière ;
		</li>
		<li>Oedème rétinien post-opératoire ;</li>
		<li>Endophtalmie ...</li>
	</ul>
</Section>
