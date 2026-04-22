<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { GlaucomePageFiveIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/glaucome" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Chirurgie du glaucome</Title>

	<Text>
		Lorsque le traitement médical n’est pas suffisant pour faire baisser la tension intra-oculaire,
		il peut être nécessaire de recourir à la chirurgie.
	</Text>

	<TextWithCorners>
		Une chirurgie du glaucome ne permet pas le guérison du glaucome. Même après avoir été opéré, un
		patient reste glaucomateux.
	</TextWithCorners>

	<Text>
		Ce type de geste vise à stabiliser la maladie, comme les autres alternatives présentées. La
		chirurgie a pour objectif d’augmenter l’élimination d’humeur aqueuse.
	</Text>

	<Title level="h3">Chirurgies filtrantes traditionnelles</Title>

	<Text>
		Les deux principales techniques chirurgicales utilisées
		sont la trabéculectomie et la sclérectomie non perforante.
	</Text>

	<Title level="sub1">Trabéculectomie</Title>

	<Text>
		C’est une technique chirurgicale éprouvée, apparue en 1968. Il s’agit d’une technique
		perforante, c’est-à-dire que la paroi du globe oculaire est ouverte dans toute son épaisseur.
	</Text>

	<Text>
		Le principe chirurgical est de créer une nouvelle voie d’évacuation de l’humeur aqueuse, qui
		peut sortir de l’œil par l’orifice construit chirurgicalement. Le liquide va alors se répandre
		sous la conjonctive (fine couche transparente qui recouvre la surface de l’œil) pour former une
		bulle de filtration.
	</Text>

	<Text>
		La surveillance post-opératoire doit être régulière et rigoureuse, puisque la cicatrisation,
		propre à chaque individu, peut influer sur les résultats pressionnels.
	</Text>

	<Text>
		Votre ophtalmologiste pourra, dans les semaines qui suivent la chirurgie, agir sur les
		traitements collyres ou certaines sutures à l’aide de gestes au laser, pour mieux s’adapter à la
		situation de chaque œil opéré.
	</Text>
	<Text>
		La chirurgie n’a pas pour objectif un sevrage complet en collyres hypotonisants. Malgré tout,
		dans la majorité des cas, une diminution du nombre de collyres est possible.
	</Text>
	<Text>
		Comme toute intervention chirurgicale, des complications post-opératoires peuvent survenir. SI
		vous -ou un proche- avez subi une intervention récente et que vous souffrez de douleurs, de
		rougeurs ou d’une baisse de vision sur l’œil opéré, alors une consultation ophtalmologique en
		urgence.
	</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={GlaucomePageFiveIlluOne}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="sub1">Sclérectomie non perforante</Title>

	<Text>
		C’est, là encore, une technique de chirurgie filtrante. Contrairement à la trabéculectomie, le
		globe oculaire n’est pas complètement ouvert.
	</Text>

	<Text>
		L’objectif est cette fois d’accéder chirurgicalement au trabéculum (lieu de filtration naturelle
		de l’humeur aqueuse), par voie extérieure, et d’affaiblir au maximum les résistances à
		l’écoulement des liquides, en l’amincissant. L’humeur aqueuse va alors le traverser plus
		facilement et une voie de filtration est construite. À l’instar de la trabéculectomie,
		l’objectif est d’obtenir une bulle de filtration sous-conjonctivale.
	</Text>

	<Text>
		Les principes de surveillance et les consignes post-opératoires sont les mêmes qu’en cas de
		trabéculectomie.
	</Text>

	<Text>
		La différence principale réside sur les outils thérapeutiques disponibles en post-opératoire. Il
		peut être nécessaire de réaliser une goniopuncture au laser, parfois même très longtemps après
		la chirurgie. Celle-ci est réalisée au cabinet d’Ophtalmologie, sans nécessité de repasser au
		bloc opératoire. Elle permet de stimuler le site de filtration, en y réalisant des impacts
		microscopiques au laser, si l’efficacité de la chirurgie est jugée insuffisante.
	</Text>

	<Title level="sub1">Principales complications des chirurgies filtrantes</Title>

	<Title level="sub3">Hypotonie oculaire</Title>
	<Text>
		L’hypotonie intra-oculaire est une complication redoutée après la chirurgie, mais fréquente. Un
		repos strict et une bonne hydratation sont recommandées après votre intervention, de même qu’un
		respect strict des prescriptions post-opératoires, notamment concernant la réalisation des
		pansements oculaires.
	</Text>
	<Title level="sub3">Infection post-opératoire</Title>
	<Text>L’infection post-opératoire est possible, comme après tout geste chirurgical.</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>La blébite est une infection de la bulle de filtration.</li>
		<li>
			L’endophtalmie est une complication redoutable, puisque la cavité oculaire, normalement
			stérile, est le siège d’une infection souvent très difficile à soigner.
		</li>
	</ul>
	<Title level="sub3">Cataracte</Title>
	<Text>
		Si elle n’a pas déjà été opérée, une cataracte apparaît fréquemment dans les suites d’une
		chirurgie filtrante. La baisse pressionnelle en serait le principal facteur déclenchant. Son
		délai d’apparition après l’intervention est extrêmement variable.
	</Text>
	<Title level="sub3">Seidel post-opératoire</Title>
	<Text>
		Une fuite d’humeur aqueuse peut compliquer précocément la chirurgie. On parle de « Seidel
		post-opératoire ». La reprise des sutures est parfois nécessaire, mais n’est pas toujours
		indispensable.
	</Text>
	<Title level="sub3">Encapsulation de la bulle de filtration</Title>
	<Text>
		Elle survient plus tardivement. Elle est une cause de remontée pressionnelle à distance de la
		chirurgie. La cicatrisation de la conjonctive et des tissus oculaires peut former un obstacle à
		la filtration de l’humeur aqueuse. Dans ce cas, un geste complémentaire par « needling » peut
		être nécessaire. Il consiste en une section des brides cicatricielles.
	</Text>

	<Title level="h3">Chirurgies mini-invasives du glaucome (MIGS)</Title>

	<Text>
		Ces techniques chirurgicales sont beaucoup plus récentes. Elles sont dites
		« mini-invasives » (en anglais, « MIGS », pour « Minimally Invasive Glaucoma Surgery »). Il
		s’agit, dans la majorité des cas, d’implanter dans l’œil d’un dispositif permettant d’abaisser
		la pression intra-oculaire. Ce type de geste peut se pratiquer dans le même temps qu’une
		chirurgie de cataracte, mais aussi constituer un temps chirurgical à part entière. Les
		dispositifs disponibles
	</Text>

	<Text>
		Les dispositifs disponibles sont nombreux et ne sont, pour l’heure, pas tous remboursés par la
		Sécurité Sociale.  Les indications dépendent de la forme de glaucome diagnostiquée et de
		l’objectif de pression intra-oculaire visé.
	</Text>

	<Text>
		Pour en savoir plus sur ces techniques, vous pouvez consulter le site www.migs.org , site
		anglophone, qui répertorie la plupart des dispositifs existants.
	</Text>
</Section>
