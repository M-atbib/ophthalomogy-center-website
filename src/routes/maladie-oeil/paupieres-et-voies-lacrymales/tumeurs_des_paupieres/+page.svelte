<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { CataractePageTwoIlluOne, CataractePageTwoIlluTwo } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/paupieres-et-voies-lacrymales" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4">
		<Title level="h1">Tumeurs des paupières</Title>
	</div>
	<Text>
		Toutes les structures de la paupière peuvent être le siège de proliférations tumorales
		anormales. On y trouve en effet du tissu cutané, des glandes, des structures cartilagineuses, de
		la conjonctive (à leur face la plus profonde).
	</Text>
	<TextWithCorners>
		Devant l’apparition d’une tuméfaction de la paupière, un examen ophtalmologique s’impose, pour
		tenter d’en poser le diagnostic précis.
	</TextWithCorners>

	<figure
		class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-lg overflow-hidden"
	>
		<img
			src={CataractePageTwoIlluOne}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>

	<TextWithCorners>
		Même si l’immense majorité des tumeurs palpébrales sont bénignes, il faut éliminer le caractère
		malin de la lésion pour pouvoir bénéficier d’une prise en charge optimale.
	</TextWithCorners>

	<Title level="h2">Tumeurs palpébrales fréquentes</Title>
	<Text>
		Voici quelques exemple des tumeurs palpébrales fréquemment diagnostiquées et prises en charge
		par nos experts.
	</Text>
	<Title level="sub2">Molluscum contagiosum</Title>
	<Text>
		Il est lié à une infection virale, causée par Poxvirus. C’est une affection fréquente, qui
		touche surtout les enfants. L’examen des paupières retrouve un ou plusieurs nodule(s), peu
		volumineux, proche de la base des cils. Les patients atteints présentent parfois des signes de
		conjonctivite associés.
	</Text>
	<Title level="sub2">Xanthélasma</Title>
	<Text>
		C'est une lésion très fréquente, qui correspond à une accumulation locale, sous la forme d’une
		plaque, de cholestérol sous la peau. La gène esthétique est d’autant plus importante que les
		plaques sont étendues et/ou nombreuses. Une ablation peut être réalisée chirurgicalement. Des
		techniques de traitement au laser sont également possibles. Dans tous les cas, il est nécessaire
		de rechercher un désordre lipidique sanguin, parfois méconnu.
	</Text>
	<Title level="sub2">Carcinome baso-cellulaire (CBC)</Title>
	<Text>
		C'est la tumeur maligne palpébrale la plus fréquente. Il représente 90% des cancers de la
		paupière. Le principal facteur de risque de sa survenue est l’exposition excessive aux rayons
		ultra-violets, notamment ceux du rayonnement solaire. Le CBC prend l’aspect d’une lésion
		surélevée, perlée, dont le sommet peut parfois s’ulcérer. Son exérèse chirurgicale est
		impérative, sous peine de voir la lésion croître, parfois au détriment des structures
		anatomiques voisines.
	</Text>
	<Title level="sub2">Carcinome épidermoïde</Title>
	<Text>
		Il s'agit d'un autre type de cancer de la paupière, beaucoup moins fréquent que le carcinome
		baso-cellulaire. Il est néanmoins plus agressif, avec un risque de métastase à distance de la
		paupière. Le diagnostic n’est pas toujours aisé, puisque son aspect varie d’un individu à
		l’autre. La présence d’une plaque ulcérée sur la paupière est un signe d’alerte, qui doit
		conduire à une consultation spécialisée rapide.
	</Text>
	<Title level="sub2">Hémangiome capillaire</Title>
	<Text>
		Cette tumeur bénigne atteint l’enfant en bas âge, très souvent dans la région de la tête et du
		cou. On en retrouve également au niveau des paupières et de l’orbite. Elle dérive d’une anomalie
		des vaisseaux sanguins sous-cutanées. Ce type de tumeur prend l’aspect d’une « framboise ». Elle
		est présente dès la naissance et va grossir assez rapidement. La régression est la règle, mais
		elle se fait parfois très lentement. La présence d’un hémangiome capillaire peut entraîner un
		défaut d’ouverture de la paupière ou un astigmatisme, par déformation de la surface de l’œil. Il
		faut donc veiller à dépister une éventuelle amblyopie consécutive. La prise en charge se fait en
		collaboration avec les pédiatres. Un examen général, à la recherche d’autres anomalies, est
		d’ailleurs vivement recommandé.
	</Text>
	<Title level="h2">Chalazion</Title>
	<Text>
		Il s’agit d’une tumeur inflammatoire, bénigne, développée aux dépens d’une glande de Meibomius.
		Elle est souvent confondue avec l'orgelet, qui est, quant à lui, une infection localisée d'un
		follicule pileux de la paupière.
	</Text>
	<figure
		class="border-light-grey/60 bg-primary-background mx-auto w-full max-w-lg overflow-hidden"
	>
		<img
			src={CataractePageTwoIlluTwo}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>
</Section>
