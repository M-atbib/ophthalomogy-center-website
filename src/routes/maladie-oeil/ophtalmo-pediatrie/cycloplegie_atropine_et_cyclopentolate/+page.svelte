<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ExplorationsPageTwoIlluOne, PediatriePageFiveImgOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/ophtalmo-pediatrie" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Cycloplégie : atropine et cyclopentolate</Title>

	<div class="my-8 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-6/12">
			<Title level="h3">La cycloplégie : qu'est-ce que c'est  ?</Title>
			<Text>
				C'est une technique qui permet, grâce à l'instillation de collyres, de mesurer et d'évaluer
				de façon fiable si l'enfant, ou le jeune adulte, a besoin de lunettes et de déterminer avec
				plus de précision la mesure des lunettes.
			</Text>
			<Text>
				La cycloplégie permet de paralyser l'accomodation, en plus de dilater les pupilles. En
				effet, chez l'enfant, les capacités accomodatives sont extrêmement importantes. Ceci
				perturbe énormément les mesures réalisées avec l'auto-réfractomètre. Il est impossible, sans
				empêcher l'accomodation, de savoir si un enfant est myope ou hypermétrope et, le cas
				échéant, avec quelle niveau d'importance.
			</Text>
		</div>
		<figure class="mx-auto w-full max-w-2xl overflow-hidden">
			<img
				src={PediatriePageFiveImgOne}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>

	<Title level="h3">Dans quel cas vous propose-t-on ce test ?</Title>
	<Text>
		Systématiquement chez l'enfant de moins de 3 ans. Après cet âge, il est fait de façon régulière,
		en cas de doute sur la fiabilité des réponses de l'enfant, ou si une accommodation importante
		est suspectée par le médecin.
	</Text>

	<Title level="h3">L'accomodation</Title>
	<Text>
		L'accommodation est le mécanisme qui permet de garder une vision nette en passant de la vision
		de loin à la vision de près. Elle permet aussi à une personne hypermétrope de voir net.
	</Text>
	<Text>
		Quand elle est importante, elle peut perturber l'examen réfractif et fausser les mesures. Le
		fait de bloquer l'accommodation permet d'améliorer leur fiabilité.
	</Text>
	<Text>
		Les collyres cycloplégiants dilatent la pupille et permettent, dans le même temps, de faire le
		fond d'œil et d'examiner parfaitement la transparence du cristallin.
	</Text>
	<Text>
		La durée de la dilatation pupillaire est plus longue que lors de la dilatation "classique" d'un
		adulte, lorsqu'un fond d'oeil est nécessaire. En effet, les produits utilisés pour la
		cycloplégie sont différents.
	</Text>
	<Text>Les collyres les plus fréquemment utilisés sont :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>L'atropine</li>
		<li>Le cyclopentolate</li>
	</ul>
	<Title level="sub2">À savoir</Title>
	<Text>
		La paralysie de l'accommodation engendre une vision floue principalement en vision de près.
		L'enfant peut être scolarisé pendant cette période, il suffit de prévenir l'enseignant.
	</Text>
	<Text>
		Votre enfant aura une sensibilité importante à la lumière du fait de la dilatation des pupilles
		; mieux vaut prévoir une casquette et des lunettes de soleil quand il sera en extérieur.
	</Text>
	<Text>
		Pour mettre les gouttes, en cas de difficulté, installez votre enfant en position allongée. Si
		vous n'êtes pas certain que la goutte ait atteint l'œil, mettez-en une seconde.
	</Text>
	<Text>Lavez-vous bien les mains avant et après avoir instillé le traitement à votre enfant.</Text>

	<Title level="h3">Atropine</Title>
	<Text>
		La concentration utilisée est 0,3 % pour les enfants de moins de 3 ans et 0,5 % au delà. Elle
		est instillée pendant les 5 jours qui précèdent la consultation.
	</Text>
	<Text>
		La dilatation des pupilles est prolongée ; elle dure 7 à 10 jours, après instillation de
		la dernière goutte.
	</Text>

	<Title level="h3">Le cyclopentolate : SKIACOL®</Title>
	<Text>
		En concentration à 0,5 %, il peut être utilisé à partir de l'âge de 1 an. Il est instillé une
		heure avant l'examen à 3 reprises.
	</Text>
	<Text>
		L'enfant voit flou jusqu'au lendemain et la dilatation des pupilles peut durer quelques jours
		; elles vont revenir à la normale spontanément.
	</Text>
	<Text>
		Ne vous administrez pas les gouttes de votre enfant, car vos pupilles vont se dilater et vous
		allez voir flou pendant plusieurs jours. Ne laissez pas les collyres à portée des enfants et
		jetez les flacons directement après usage.
	</Text>
</Section>
