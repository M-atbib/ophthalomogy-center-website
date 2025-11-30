<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { RetineMedicalPageThreeIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-medicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10">
		<Title level="h1">Naevus, mélanome et autres tumeurs de la rétine</Title>
	</div>

	<Text class="mt-4">
		Comme toutes les cellules de l’organisme, les cellules de la rétine peuvent proliférer de
		manière excessive et anormale.
	</Text>

	<figure class="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-md">
		<img
			src={RetineMedicalPageThreeIlluOne}
			alt="Fond d’œil présentant une occlusion veineuse"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<Text class="mt-4">
		Comme toutes les cellules de l’organisme, les cellules de la rétine peuvent proliférer de
		manière excessive et anormale.
	</Text>

	<TextWithCorners class="mt-6">
		Seul un examen ophtalmologique régulier, avec analyse du fond d’œil, peut permettre un dépistage
		de ce type de lésion.
	</TextWithCorners>

	<Title level="h2">Naevus choroïdien</Title>
	<Title level="sub2">Définitions</Title>

	<Text>
		Le naevus est appelé, dans le langage courant, « grain de beauté ». Il s’agit de la tumeur
		oculaire la plus fréquente. À l’image des naevi cutanés, ceux qui se développent dans l’œil
		résultent de la prolifération excessive des mélanocytes de la choroïde. Ces cellules contiennent
		du pigment, ce qui explique la teinte colorée, foncée d’un naevus.
	</Text>

	<Text>
		Un naevus est toujours, lorsqu’il est bénin, complètement asymptomatique. Il est diagnostiqué,
		de manière complètement fortuite, au cours d’un examen ophtalmologique de routine. Il n’y a
		aucun autre moyen, pour un patient qui en est porteur, de s’en apercevoir d’une autre manière.
	</Text>

	<Text>
		Le naevus est une lésion bénigne, sans caractère cancéreux.  Tout l’enjeu est donc de poser un
		diagnostic précis, afin de différencier les naevi bénins et les naevi suspects. La principale
		crainte est de méconnaître un mélanome, qui est le principal diagnostic différentiel et qui, au
		contraire, est une lésion maligne, cancéreuse. Comme les biopsies rétiniennes ne sont pas
		possibles, l’ophtalmologiste va devoir utiliser des critères morphologiques pour porter son
		diagnostic.
	</Text>

	<Title class="mt-6" level="sub2">Naevus choroïdien suspect</Title>
	<Text>Les principaux critères en faveur d’un naevus suspect sont :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Présence de pigments orange en surface ;</li>
		<li>Taille ou épaisseur importantes ;</li>
		<li>Symptômes visuels associés ;</li>
		<li>Proximité du nerf optique ou œdème adjacent ;</li>
		<li>Croissance rapide aux examens successifs.</li>
	</ul>

	<Title class="mt-6" level="sub2">Stratégie diagnostique et thérapeutique</Title>
	<Text>
		Le meilleur facteur protecteur face au diagnostic d’un naevus choroïdien est la surveillance
		attentive et régulière. Idéalement, cette surveillance devra être effectuée au sein du même
		cabinet d’Ophtalmologie, afin de pouvoir assurer la reproductibilité des examens d’imagerie et,
		ainsi, une meilleure comparabilité.
	</Text>
	<Text>
		Le rythme de surveillance dépendra de la morphologie de la lésion et des facteurs de risque
		propres à chaque individu.
	</Text>
	<Text>L’ophtalmologiste peut s’aider de différents examens complémentaires :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			La rétinophotographie, qui permet de comparer la taille de la lésion sur plusieurs examens
			consécutifs
		</li>
		<li>
			L’OCT (Tomographie en Cohérence Optique), qui peut réaliser des images en coupes de la lésion
		</li>
		<li>L’angiographie rétinienne, qui étudie la vascularisation au sein de la lésion</li>
		<li>L’échographie oculaire, permettant une mesure précise de son épaisseur</li>
		<li>L’IRM orbitaire peut rechercher la présence d’une infiltration anormale du nerf optique</li>
	</ul>

	<Text>Tous ces examens ne sont, évidemment, pas toujours indispensables.</Text>
	<Text>
		Le naevus choroïdien bénin ne nécessite aucun traitement particulier. Il n’est pas nécessaire de
		l’enlever par voie chirurgicale.
	</Text>

	<Title class="mt-10" level="h2">Mélanome choroïdien</Title>
	<Text class="mt-4">
		Le mélanome choroïdien est une tumeur maligne, cancéreuse, développée aux dépens des mélanocytes
		de la choroïdie. Il peut survenir spontanément (de novo) ou résulter de la transformation
		maligne d’un naevus choroïdien.
	</Text>
	<Title class="mt-4" level="sub2">Facteurs de risque</Title>
	<Text class="mt-3">
		Les principaux facteurs de risque d’apparition d’un mélanome choroïdien  sont :
	</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>L’origine ethnique : les sujets caucasiens, à la peau claire, sont plus à risque</li>
		<li>L’âge compris entre 55 et 65 ans</li>
		<li>Le sexe masculin</li>
		<li>
			La présence d’une mélanocytose oculaire congénitale, affection particulière marquée par une
			pigmentation importante de la sclère
		</li>
	</ul>

	<Title class="mt-4" level="sub2">Facteurs de risque</Title>
	<Title class="mt-10" level="sub3">Bilan d’extension</Title>
	<Text class="mt-4">
		Comme pour la plupart des lésions cancéreuses de l’organisme, un risque métastatique existe pour
		le mélanome choroïdien. La métastase est une localisation secondaire de la tumeur, dans un tissu
		ou un organe complètement différent du site de développement initial. Il est donc nécessaire, en
		cas de diagnostic de mélanome, de bénéficier d’un bilan d’extension.
	</Text>

	<TextWithCorners>
		Les principales localisations métastiques du mélanome choroïdien sont le foie, les poumons et
		les os.
	</TextWithCorners>

	<Title class="mt-10" level="sub3">Traitements</Title>
	<Text>
		Différentes solutions thérapeutiques sont possibles, en fonction de la taille et de la
		localisation du mélanome :
	</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			La protonthérapie est une technique permettant de cibler la tumeur et de l’irradier, en
			essayant de préserver un maximum de tissus avoisinants
		</li>
		<li>
			La curiethérapie utilise des matériaux radio-actifs, qui sont suturés à la surface de l’œil,
			pour détruire la tumeur par effet local
		</li>
		<li>
			L’énucléation est une ablation chirurgicale complète du globe oculaire. Elle permet de
			préciser le diagnostic histologique, puisqu’elle permet la réalisation d’analyses
			complémentaires au laboratoire d’anatomo-pathologie. Elle peut être associée à
			une radiothérapie orbitaire complémentaire.
		</li>
	</ul>

	<Title class="mt-10" level="sub3">Prise en charge du risque métastatique</Title>
	<Text>
		Des traitements complémentaires, dits « adjuvants », peuvent être discutés au cas par cas. Leur
		indication éventuelle est prise dans le cadre de réunions de concertations pluri-disciplinaires,
		qui impliquent des médecins de spécialités différentes (cancérologues, radiothérapeutes…)
	</Text>

	<Title level="h2">Autres tumeurs rétiniennes</Title>
	<div class="mt-4">
		<Title level="sub2">Mélanocytome rétinien</Title>
		<Text class="mt-2">
			Il s’agit d’une tumeur bénigne, dont les caractéristiques morphologiques rendent le diagnostic
			différentiel difficile avec un mélanome choroïdien. Le mélanocytome est souvent localisé au
			contact de la tête du nerf optique. Il existe de transformation maligne qui, bien que très
			rare (1 à 2% des cas), impose une surveillance régulière.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Hypertrophie congénitale de l’épithélium pigmentaire</Title>
		<Text class="mt-2">
			Il s’agit, là encore, d’une tumeur bénigne et complètement asymptomatique pour le patient
			atteint. Cette lésion pose également la question du diagnostic différentiel avec le mélanome
			choroïdien. Elle ne grossit pas avec le temps et reste parfaitement stable.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Métastases choroïdiennes</Title>
		<Text class="mt-2">
			La choroïde, localisée juste sous la rétine, peut être le siège de localisations secondaires
			de cancers développés aux dépens d’autres organes du corps humain. Le développement de telles
			lésions génère souvent des symptômes visuels (principalement une baisse de l’acuité visuelle)
			qui doit amener le patient cancéreux à consulter rapidement un ophtalmologiste.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Calcifications scléro-choroïdiennes idiopathiques</Title>
		<Text class="mt-2">
			Ces lésions s’observent plus fréquemment chez des patients âgés. Il s’agit de zones
			localisées, souvent mutiples, d’accumulation de calcium totalement bénignes et
			asymptomatiques.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Hémangioblastomes capillaires rétiniens</Title>
		<Text class="mt-2">
			Ces lésions sont extrêmement rares. Elles surviennent chez des patients atteints du syndrome
			de Von-Hippel-Lindau, maladie génétique qui prédispose à certaines formes de cancers,
			développés aux dépens des vaisseaux sanguins. La première manifestation en est, dans 50% des
			cas, rétiniennes, avec le développement de tumeurs multiples, souvent bilatérales, visibles au
			fond d’œil. Ces tumeurs sont parfois symptomatiques, mais pas obligatoirement. Évidemment, la
			découverte de telles lésions impose une prise en charge multi-disciplinaire, qui dépasse le
			cadre de l’Ophtalmologie.
		</Text>
	</div>
	<div class="mt-6">
		<Title level="sub2">Rétinoblastome</Title>
		<Text class="mt-2">
			Le rétinoblastome est une tumeur rétinienne maligne de l’enfant. Il s’agit de la première
			cause de cancer oculaire primitif de l’enfant. Heureusement, ce diagnostic est rare et
			concerne, en France, une naissance sur 15 000.
		</Text>

		<TextWithCorners class="mt-4">
			Le rétinoblastome est une urgence diagnostique et thérapeutique.
		</TextWithCorners>
	</div>
</Section>
