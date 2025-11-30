<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import {
		RetineMedicalPageOneHero,
		RetineMedicalPageOneIlluOne,
		RetineMedicalPageOneIlluTwo
	} from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-medicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-7/12">
			<Title level="h1">Dégénérescence maculaire liée à l'âge (DMLA) : qu'est-ce que c'est ?</Title>
			<Text class="mt-4">La Dégénérescence Maculaire Liée à l’Âge est une maladie rétinienne.</Text>
			<Text class="mt-4">
				C’est un enjeu de santé publique, puisqu’elle représente l’une des principales causes de
				handicap visuel en France.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-xl overflow-hidden rounded-md border shadow-sm"
		>
			<img
				src={RetineMedicalPageOneHero}
				alt="Vue rapprochée de la macula"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable">
	<Title level="h2">Que signifie « DMLA » ?</Title>
	<Text class="mt-4">Cet acronyme désigne la Dégénérescence Maculaire Liée à l'Âge.</Text>
	<Text class="mt-4">
		Comme son nom l’indique, c’est une pathologie du vieillissement, qui survient majoritairement
		après 65 ans. La macula est le véritable centre de la vision. C’est dans cette zone que sont
		concentrées la plupart des cellules sensorielles visuelles, les cônes, qui sont des
		photorécepteurs rétiniens. Le processus pathologique se passe donc au fond de l’œil, là où les
		rayons lumineux arrivent pour être interprétés en images.
	</Text>
	<Text class="mt-4">
		Les mécanismes qui conduisent à la DMLA sont encore mal connus et controversés. Le principal
		facteur de risque connu de survenue de cette maladie est l’hérédité. Si un membre de votre
		famille est atteint, alors un dépistage régulier sera nécessaire pour pouvoir poser un
		diagnostic précoce de DMLA.
	</Text>
	<Text class="mt-4">
		Des facteurs nutritionnels semblent également en cause, avec une importance toute particulières
		des acides gras oméga (qui sont insaturés), ou encore de la lutéine (molécule anti-oxydante).
		Leur présence dans l’alimentation quotidienne constituerait un facteur protecteur vis-à-vis du
		vieillissement maculaire et donc, du développement de la maladie. C’est pourquoi, suite aux
		résultats de grandes études internationales, des compléments alimentaires ont été élaborés
		spécifiquement pour les patients atteints et sont prescrits en ce sens par les ophtalmologistes.
	</Text>
	<TextWithCorners class="mt-6">
		Le tabac est également un facteur de risque bien connu de DMLA.
	</TextWithCorners>
	<Text class="mt-4">
		Le rôle des rayons ultra-violets dans le vieillissement précoce de la rétine est débattu mais il
		apparaît que le port de lunettes protectrices peut jouer un rôle dans le ralentissement de ce
		processus.
	</Text>

	<Title class="mt-10" level="h2">Quels sont les stades de la maladie ?</Title>
	<div class="mt-4">
		<Title level="sub2">Le stade de Maculopathie Liée à l’Âge (MLA)</Title>
		<Text class="mt-2">
			La maladie n’est, dans ce cas, pas encore déclarée, mais quelques signes peuvent être perçus
			par l’ophtalmologiste lors de la réalisation d’un examen de dépistage. Le patient ne se plaint
			d’aucun symptôme visuel. La vision est encore normale à ce stade. La MLA n’est pas une
			dégénérescence constituée et n’évolue pas toujours vers une DMLA « authentique ».
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">La DMLA atrophique</Title>
		<Text class="mt-2">
			Elle est plus connue sous le nom de « DMLA sèche ». Les lésions rétiniennes sont, dans ce cas,
			constituées et il existe une atrophie (synonyme de destruction) des cellules rétiniennes, dans
			la région maculaire. Dans la plupart des cas, la vision est abaissée par ces lésions et le
			patient percevra un scotome (ou « tache sombre ») central. L’atrophie va, le plus souvent,
			s’étendre et le scotome, logiquement, faire de même.
		</Text>
		<figure class="mx-auto mt-4 w-full max-w-lg overflow-hidden rounded-md">
			<img
				src={RetineMedicalPageOneIlluOne}
				alt="Illustration d'une DMLA sèche"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>
	<div class="mt-6">
		<Title level="sub2">La DMLA exsudative</Title>
		<Text class="mt-2">
			Elle est plus connue, quant à elle, sous le nom de « DMLA humide ». Elle peut compliquer une
			DMLA atrophique, mais pas nécessairement. Elle est également un mode d’entrée directe dans la
			maladie. Le patient atteint décrira le plus souvent des métamorphopsies, c’est-à-dire des
			déformations des images et des quadrillages, d’habitude bien droits et réguliers. Un scotome
			est également possible. La vision est abaissée, dans l’immense majorité des cas. Cette forme
			de DMLA est liée au développement de vaisseaux sanguins anormaux dans les couches profondes de
			la rétine, qui vont aboutir à la présence d’un œdème, voire d’un hématome maculaire.
		</Text>
		<TextWithCorners class="mt-4">
			La déformation des images est un signe typique de DMLA humide. Si vous percevez ce type de
			symptômes, il convient de consulter d’urgence un ophtalmologiste !
		</TextWithCorners>
		<figure class="mx-auto mt-4 w-full max-w-lg overflow-hidden rounded-md">
			<img
				src={RetineMedicalPageOneIlluTwo}
				alt="Illustration d'une DMLA humide"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>

	<Title class="mt-10" level="h2">Quelle est la prise en charge possible ?</Title>
	<Text class="mt-4">
		Si vous êtes atteint de DMLA, une auto-surveillance est nécessaire au domicile. Celle-ci
		s’effectue le plus souvent à l’aide d’une grille d’Amsler, un œil à la fois, avec votre
		correction optique habituelle (le cas échéant, vos lunettes de lecture).
	</Text>
	<Text>
		Toute évolution de votre perception habituelle de la grille d’Amsler impose un examen
		ophtalmologique dans les 48 heures !
	</Text>
	<TextWithCorners class="mt-6">
		Les injections intra-vitréennes d'anti-VEGF constituent, à ce jour, la réponse thérapeutique la
		plus efficace pour freiner l'évolution d'une DMLA humide.
	</TextWithCorners>
	<Text class="mt-4">
		La DMLA est une maladie chronique. Si le diagnostic est confirmé, une surveillance ophtalmologique régulière sera nécessaire, tout au long de la vie du patient. Les progrès thérapeutiques sont constants et les stratégies de prise en charge évoluent très rapidement. 
	</Text>
</Section>
