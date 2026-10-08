<script lang="ts">
	import { Button, Section, Text, TextWithCorners, Title } from '$lib';
	import { BlepharitePageFiveIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';

	// This page-five illustration is placed after the treatment objective to match the Figma reading flow.
	const meibomianGlandsIllustration = BlepharitePageFiveIlluOne;
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/blepharite-secheresse-surface-oculaire" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<!-- The article hierarchy preserves the medical sequence and emphasis supplied in the Figma reference. -->
	<article class="mt-10 space-y-12">
		<Title level="h1">Comment réaliser les soins et massages des paupières ?</Title>

		<section>
			<Text>
				Si votre ophtalmologiste a diagnostiqué un syndrome sec oculaire lié à une blépharite
				meibomienne commune, alors des soins d’hygiène palpébrale vous ont probablement été
				prescrits. Les soins de paupières sont aussi appelés : "hygiène palpébrale", "massages des
				paupières", "soins de blépharite"...
			</Text>
			<Text>
				Les massages des paupières sont le traitement principal de votre blépharite et de sa
				conséquence, la sécheresse oculaire.
			</Text>
			<TextWithCorners>
				Attention, ces soins ne doivent pas être réalisés dans les 4 semaines qui suivent une
				chirurgie oculaire !
			</TextWithCorners>
		</section>

		<section>
			<Title level="h3" as="h2">Pourquoi masser les paupières ?</Title>
			<Text>Le larmes sont composées, schématiquement, de 2 éléments :</Text>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>Une partie aqueuse (composée d'eau) ;</li>
				<li>Une partie grasse, huileuse (appelée "meibum").</li>
			</ul>
			<Text>
				La partie huileuse est sécrétée par des glandes situées dans vos paupières : les glandes de
				Meibomius. Elle s'ouvre juste en arrière des cils. Lorsqu'un patient est atteint de
				blépharite, ces glandes sont obstruées et inflammatoires ; la qualité des larmes se dégrade
				et l'oeil devient sec. Les massages permettent de stabiliser le film lacrymal, de limiter
				les phénomènes inflammatoires locaux ou encore d’éviter la récidive des chalazions.
			</Text>

			<TextWithCorners>
				L'objectif des massages est de désobstruer les glandes de Meibomius.
			</TextWithCorners>

			<figure class="mx-auto my-10 aspect-square w-full max-w-lg overflow-hidden rounded-md">
				<img
					src={meibomianGlandsIllustration}
					alt="Coupe anatomique montrant les glandes de Meibomius dans les paupières"
					class="h-full w-full object-contain"
					loading="lazy"
				/>
			</figure>
		</section>

		<section>
			<Title level="h3" as="h2">
				Comment procéder aux massages des paupières ? Doit-on les réaliser régulièrement ?
			</Title>
			<Text>La fréquence des massages doit être initialement élevée, par exemple :</Text>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>Tous les jours pendant quelques semaines,</li>
				<li>Puis tous les 2 jours,</li>
				<li>Puis 1 fois par semaine.</li>
			</ul>
			<Text>
				Le plus souvent, la blépharite ne guérit pas. Le traitement suspend son évolution et diminue
				les symptômes. Il est nécessaire de ne pas l'arrêter complètement et de réaliser les
				massages à vie.
			</Text>
			<Text>
				L’heure à laquelle vous réalisez les soins des paupières n’a pas d’importance. Seules
				comptent leur bonne réalisation et votre régularité.
			</Text>
		</section>

		<section>
			<Title level="h3" as="h2">
				L'application d'une source de chaleur peut-elle améliorer l'efficacité des massages ?
			</Title>
			<Text>
				La chaleur au contact de votre paupière va liquéfier le meibum et favoriser son évacuation
				par les massages. Pour cela vous disposez de plusieurs alternatives :
			</Text>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>
					Masser vos paupières juste après avoir pris votre douche : les vapeurs et l'eau chaude
					suffisent dans certains cas à liquiéfier le contenu des gandes et à ramollir les
					paupières.
				</li>
				<li>
					Appliquer un gant de toilette ou une compresse imbibée d'eau chaude sur votre paupière. Il
					convient, néanmoins, de réchauffer régulièrement le linge ou la compresse, qui peuvent se
					refroidir en quelques dizaines de second.
				</li>
				<li>
					Appliquer un masque chauffant, prescrit par votre ophtalmologiste. Le masque doit être
					maintenu au contact des paupières pour une durée de quelques minutes.
				</li>
			</ul>
		</section>

		<section>
			<Title level="h3" as="h2">
				Quels sont les bons gestes pour réaliser correctement les massages ?
			</Title>
			<Text>Les massages concernent les 4 paupières :</Text>
			<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
				<li>
					Les paupières inférieures sont facilement pincées et roulées entre le pouce et l’index, en
					imprimant des mouvements de pression réguliers. Ce geste doit être réalisé de proche en
					proche, à plusieurs endroits de la paupière, afin de pouvoir presser toutes les glandes de
					Meibomius.
				</li>
				<li>
					Les paupières supérieures seront plutôt traitées par application de l’index, à plat,
					glissant de l’intérieur vers l’extérieur, en imprimant une pression régulière sur toute la
					largeur de la paupière.
				</li>
				<li>
					Lorsque les massages sont bien réalisés, la vidange mécanique des glandes peut entraîner
					l’écoulement d’une substance huileuse au bord de la paupière ; il s’agit du meibum.
					Parfois, le meibum prend l’aspect d’une pâte solide, illustrant parfaitement le mécanisme
					d’obstruction de la glande.
				</li>
			</ul>
		</section>

		<section>
			<Title level="h3" as="h2">
				Existe-t-il des traitements qui peuvent être associés aux massages des paupières ?
			</Title>

			<div class="space-y-3">
				<Title level="sub2" as="h3">Lingettes nettoyantes</Title>
				<Text>
					Les lingettes sont imprégnées de molécules qui permettent de lutter contre la
					prolifération de certains micro-organismes à la base des cils.
				</Text>
				<Text>
					Avec les lingettes, frottez délicatement la base des cils, sur chacune des paupières. De
					petites croûtes peuvent alors se décoller. C’est d’ailleurs le phénomène recherché.
				</Text>
			</div>

			<div class="space-y-3">
				<Title level="sub2" as="h3">Larmes artificielles</Title>
				<Text>
					L'instillation de collyres lubrifiants est un complément des soins des paupières. Ils ne
					peuvent en aucun cas les remplacer, puisqu'ils ne corrigent pas le phénomène d'obstruction
					des glandes de Meibomius. Les larmes artificielles ont un intérêt surtout symptomatique.
					Elles permettent d'atténuer l'inconfort, les douleurs ou la sensation de corps étranger.
				</Text>
			</div>

			<div class="space-y-3">
				<Title level="sub2" as="h3">Antibiotiques et anti-inflammatoires</Title>
				<Text>
					Dans de rares cas de blépharites sévères, il est parfois nécessaire d'initier des
					traitements antibiotiques, anti-parasitaires ou anti-inflammatoires.
				</Text>
				<Text>
					L'auto-médication, avec ces molécules, est vivement déconseillée. Ces traitements ne sont
					nécessaires que dans des cas particuliers et il est nécessaire d'en faire bon usage.
				</Text>
			</div>

			<TextWithCorners>
				En cas de difficultés ou de lassitude, rappelez-vous que la régularité est la clef du succès
				de votre traitement. Mieux vaudra réaliser vos soins 2 fois par semaine que de les arrêter
				complètement. L’instillation de collyres complète les soins mais ne peut en aucun cas les
				remplacer.
			</TextWithCorners>
		</section>
	</article>
</Section>
