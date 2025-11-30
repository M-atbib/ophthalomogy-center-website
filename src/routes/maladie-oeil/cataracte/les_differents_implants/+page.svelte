<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		CataractePageThreeIlluOne,
		CataractePageThreeIlluTwo,
		CataractePageThreeIlluThree
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/cataracte" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div>
		<Title level="h1">Les différents implants</Title>
		<Text class="mt-4">
			Lors de la chirurgie de la cataracte, le cristallin opacifié est toujours remplacé par un
			implant intra-oculaire adapté à vos besoins visuels.
		</Text>
		<Text class="mt-4">
			Plusieurs familles d'implants existent : votre ophtalmologiste choisit celui qui convient à
			votre œil, à votre amétropie et à vos attentes après l'intervention.
		</Text>
	</div>
	<figure
		class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-lg overflow-hidden"
	>
		<img
			src={CataractePageThreeIlluOne}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>
	<TextWithCorners class="mt-6">
		Au [Nom de Clinique], le choix de l'implant est toujours personnalisé.
	</TextWithCorners>

	<Title level="h2">Les différents types d'implants</Title>
	<Text class="mt-4">
		Chaque famille d'implants répond à un besoin optique précis : correction de la myopie, de
		l'astigmatisme, de la presbytie ou conservation d'une vision intermédiaire. Les paragraphes
		ci-dessous détaillent les caractéristiques principales.
	</Text>

	<div class="mt-8 grid gap-6 lg:grid-cols-2">
		<div class="border-light-grey/60 rounded-3xl border p-6 shadow-sm">
			<Title level="sub2">Les implants monofocaux</Title>
			<Text class="mt-3">Ils corrigent la myopie ou l'hypermétropie.</Text>
			<Text class="mt-3">
				Quand seule une correction sphérique est nécessaire, l'implant choisi est asphérique pour
				apporter une vision nette de loin.
			</Text>
		</div>
		<div class="border-light-grey/60 rounded-3xl border p-6 shadow-sm">
			<Title level="sub2">Les implants toriques</Title>
			<Text class="mt-3">Ils corrigent l'astigmatisme.</Text>
			<Text class="mt-3">
				En présence d'un astigmatisme cornéen important, l'implant torique possède une puissance qui
				varie selon un axe spécifique pour compenser cette irrégularité.
			</Text>
		</div>
		<div class="border-light-grey/60 rounded-3xl border p-6 shadow-sm">
			<Title level="sub2">Les implants multifocaux</Title>
			<Text class="mt-3">Ils corrigent la presbytie.</Text>
			<Text class="mt-3">
				Ces implants permettent de voir de loin comme de près. Il s'agit d'une chirurgie premium qui
				peut générer un surcoût ; votre ophtalmologiste vous présentera leurs limites éventuelles.
			</Text>
		</div>
		<div class="border-light-grey/60 rounded-3xl border p-6 shadow-sm">
			<Title level="sub2">Les implants à profondeur de champ</Title>
			<Text class="mt-3">Ils préservent la vision intermédiaire.</Text>
			<Text class="mt-3">
				Ce type de technologie offre de l'autonomie vers un mètre de distance et, parfois, une bonne
				vision de près.
			</Text>
		</div>
	</div>

	<figure class="mx-auto mt-10 w-full max-w-2xl overflow-hidden rounded-md">
		<img
			src={CataractePageThreeIlluTwo}
			alt="Illustration du choix d'implant sur mesure"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<Title class="mt-10" level="h2">Autres caractéristiques à prendre en compte</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Couleurs différentes (blancs ou jaunes le plus souvent) ;</li>
		<li>Filtres variés ;</li>
		<li>Formes et systèmes de fixation multiples ;</li>
		<li>Matériaux spécifiques à chaque fabricant.</li>
	</ul>
	<Text class="mt-4">
		Le choix de l'implant repose sur vos habitudes de vie, votre amétropie, d'éventuelles maladies
		opulaires ainsi que vos attentes. Tous les modèles ne conviennent pas à tous les patients.
	</Text>
	<TextWithCorners class="mt-6">
		L'objectif est de réduire au maximum la dépendance aux lunettes en répondant précisément à vos
		besoins visuels.
	</TextWithCorners>

	<Title class="mt-10" level="h2">Port de lunettes après la chirurgie</Title>
	<Title class="mt-4" level="sub2">Vision de loin</Title>
	<Text class="mt-3">
		Dans la majorité des cas, la puissance résiduelle des lunettes est minimale après la chirurgie.
		Cependant, des imprécisions de biométrie peuvent imposer une correction légère dans certains
		cas.
	</Text>
	<Title class="mt-6" level="sub2">Vision de près</Title>
	<Text class="mt-3">
		Si l'implant choisi est uniquement asphérique, des lunettes de près resteront nécessaires. En
		cas d'implant multifocal ou à profondeur de champ, une partie de la vision de près peut être
		préservée.
	</Text>

	<Title class="mt-10" level="h2">Durée de vie et matériau</Title>
	<Text class="mt-4">
		L'implant reste stable dans le sac cristallinien : vous ne le sentirez pas et il n'a pas à être
		replacé.
	</Text>
	<TextWithCorners class="mt-6"
		>Vous garderez votre implant toute votre vie. Il ne doit jamais être changé.</TextWithCorners
	>

	<figure class="mx-auto mt-10 w-full max-w-xl overflow-hidden rounded-md">
		<img
			src={CataractePageThreeIlluThree}
			alt="Implant intra-oculaire"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<Text class="mt-4">
		Les implants sont fabriqués à partir de matériaux plastiques spécifiquement formulés par chaque
		constructeur pour garantir longévité, souplesse et excellente tolérance aux milieux
		intra-oculaires.
	</Text>
</Section>
