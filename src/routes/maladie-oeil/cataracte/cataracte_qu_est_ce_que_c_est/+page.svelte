<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		CataractePageOneHero,
		CataractePageOneIlluOne,
		CataractePageOneIlluTwo
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/cataracte" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-4/12">
			<Title level="h1">Cataracte : qu'est-ce que c'est ?</Title>
			<Text>
				La cataracte est une perte de transparence du cristallin. Elle entraîne une baisse de la
				vision, qui peut aller jusqu’à la cécité.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-3xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={CataractePageOneHero}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable">
	<div class="">
		<Title level="h3">La cataracte représente la première cause de cécité dans le monde.</Title>
		<Text>
			En France, près de 700 000 chirurgies de cataractes sont réalisées chaque année, ce qui en
			fait l'intervention la plus pratiquée. Ce nombre est amené à encore augmenter dans les
			décennies à venir, avec le vieillissement de la population
		</Text>
	</div>

	<figure class="mx-auto w-full max-w-sm overflow-hidden rounded-md">
		<img
			src={CataractePageOneIlluTwo}
			alt="Courbe illustrant l'augmentation des chirurgies de la cataracte"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<Title level="h3">Le cristallin : qu'est-ce que c'est ?</Title>
	<Text>
		Le cristallin est une lentille située à l’intérieur de l'œil, juste derrière l'iris. Il permet
		aux rayons lumineux de se focaliser sur la rétine. Son rôle est double :
	</Text>
	<ul class="mb-6 mt-2 list-disc space-y-2 pl-5">
		<li>Sa puissance optique de repos permet une vision nette de loin ;</li>
		<li>
			Il peut aussi modifier sa forme pour que la vision de près soit nette: c’est ce qu’on appelle
			l'accommodation.
		</li>
	</ul>

	<Title level="h3">Quels sont les symptômes de la cataracte ?</Title>
	<Text>
		Le cristallin n’est plus transparent, la lumière ne peut plus le traverser. Les images ne se
		forment plus correctement au niveau de la rétine, qui tapisse le fond de l'oeil.
	</Text>

	<TextWithCorners>À ce stade, changer de lunettes n'améliorera pas la vue.</TextWithCorners>

	<Text>Selon le type de cataracte, vous pouvez présenter les symptômes suivants :</Text>
	<ul class="mb-6 mt-2 list-disc space-y-2 pl-5">
		<li>Une baisse de vue de loin ;</li>
		<li>Une baisse de vue de près ;</li>
		<li>Un éblouissement ;</li>
		<li>Les contrastes sont mal perçus ;</li>
		<li>Une vision double sur l'oeil atteint ;</li>
		<li>Les couleurs sont ternes et atténuées ;</li>
	</ul>

	<div class="">
		<Text>
			L'évolution d'une cataracte peut modifier rapidement la puissance de vos verres de lunettes :
			c'est ce qu’on appelle la myopisation d’indice. La puissance optique du cristallin change et
			les rayons lumineux sont déviés.
		</Text>
		<Text>
			La cataracte s’installe souvent en plusieurs mois (la vitesse est très différente d’un patient
			à l’autre). Ce n’est souvent pas une cause de baisse de vue brutale. Si votre vision a chuté
			brutalement, mieux vaut consulte
		</Text>
	</div>

	<TextWithCorners>
		Si votre vision a chuté brutalement, mieux vaut consulter rapidement votre ophtalmologiste, afin
		d’éliminer une autre pathologie potentiellement plus urgente.
	</TextWithCorners>

	<Title level="h3">Quelles sont les causes de la cataracte ?</Title>
	<Text>
		La première cause de cataracte est l'avancée en âge. Si vous avez la chance de vivre vieux, sans
		doute développerez-vous cette affection
	</Text>
	<Text>
		D’autres facteurs peuvent expliquer la survenue d'une cataracte chez des patients parfois encore
		jeunes :
	</Text>

	<ul class="mb-6 mt-2 list-disc space-y-2 pl-5">
		<li>Le diabète ;</li>
		<li>La myopie forte ;</li>
		<li>Les traumatismes oculaires ;</li>
		<li>Certaines syndromes génétiques, comme la myopathie de Steinert ;</li>
		<li>
			Certains médicaments comme les corticoïdes, particulièrement s'ils sont pris au long cours ;
		</li>
		<li>Les antécédents de chirurgie de rétine, surtout si une vitrectomie a été pratiquée.</li>
	</ul>

	<TextWithCorners>
		Tout le monde peut développer une cataracte, y compris les enfants.
	</TextWithCorners>

	<Title level="sub2">Cataracte congénitale</Title>
	<Text>
		La cataracte n’est pas seulement un diagnostic de l’adulte. La recherche d’une cataracte
		congénitale fait partie l'évaluation ophtalmologique de tous les enfants. Elle peut, en effet,
		être une cause de baisse de vision précoce. Si le diagnostic est trop tardif, une amblyopie peut
		se développer et risque de laisser des séquelles visuelles importantes et irréversibles.
	</Text>
	<TextWithCorners>
		Si votre enfant présente une pupille blanche ou un strabisme de survenue récente, un examen
		ophtalmologique rapide est nécessaire.
	</TextWithCorners>

	<div>
		<Title level="h3">Comment se traite la cataracte ?</Title>
		<Title level="sub2">
			Aucun traitement par collyre ne peut, à ce jour, faire disparaître une cataracte.
		</Title>
		<Text>
			En parallèle, un changement de lunettes n'améliore pas la vue, puisque le problème est
			l'obstacle formé par le cristallin à l'intérieur de l'oeil.
		</Text>
		<Text>
			Le seul traitement possible est chirurgical. La chirurgie de cataracte consiste à enlever le
			contenu du sac cristallinien, qui n'est plus transparent, et de le remplacer par un implant
			intra-oculaire.
		</Text>

		<figure class=" mx-auto w-full max-w-sm overflow-hidden rounded-md">
			<img
				src={CataractePageOneIlluOne}
				alt="Illustration de la chirurgie de la cataracte"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>
</Section>
