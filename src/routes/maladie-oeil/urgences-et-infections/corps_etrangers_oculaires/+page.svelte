<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';
	import { InfectionPageEightIlluOne, InfectionPageEightIlluTwo } from '$lib/assets';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Corps étrangers oculaires" {backHref}>
	<section>
		<Text
			>Des corps étrangers de toute taille et de toute nature peuvent entrer en contact avec l’œil.</Text
		>
		<Text
			>Il arrive que ces corps étrangers ricochent sur la surface du globe oculaire ou se décollent
			spontanément de la conjonctive, mais il arrive également que l’intervention d’un
			ophtalmologiste soit nécessaire pour vous en débarrasser.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Corps étranger de la surface oculaire</Title>
		<Text
			>C'est un motif extrêmement fréquent de consultation aux urgences ophtalmologiques, souvent
			suite à des accidents survenus en milieu professionnel. Le corps étranger peut être
			métallique, végétal ou tellurique et va se ficher dans l’épaisseur de la cornée, à la surface
			de l'œil.</Text
		>
		<Text
			>La présence d’un corps étranger cornéen réveille des douleurs parfois insupportables,
			exacerbées par le clignement palpébral. La conjonctive, qui tapisse l’intérieur de la
			paupière, s’irrite elle aussi en passant sur le corps étranger. La vision peut également être
			abaissée, soit par la position du corps étranger, soit par le larmoiement excessif induit par
			sa présence.</Text
		>
		<TextWithCorners
			>La cornée est le tissu le plus densément innervé de l’organisme, ce qui explique des douleurs
			si vives.</TextWithCorners
		>
		<ArticleImage
			src={InfectionPageEightIlluOne}
			alt="Corps étranger à la surface de l'œil"
			class="max-w-lg"
		/>
		<Text
			>En présence d'un corps étranger superficiel, il faut procéder à son ablation au plus vite.
			C'est un geste simple, qui ne nécessite pas de passage au bloc opératoire. Après anesthésie
			locale, via l’instillation de collyres, le corps étranger est enlevé par l’ophtalmologiste au
			cabinet, sans douleur pour le patient.</Text
		>
		<Text
			>Il faut bien sûr vérifier que la cornée n'ait pas été perforée dans toute son épaisseur, ce
			qui occasionnerait une fuite de liquide oculaire et une cause d’infection potentiellement
			grave.</Text
		>
		<Text
			>Après l’ablation, les douleurs peuvent persister pendant quelques jours et un traitement
			cicatrisant devra être instillé de manière pluri-quotidienne.</Text
		>
		<Text tone="accent" weight="medium"
			>En cas de persistance de douleurs importantes ou de baisse de la vision évolutive après
			ablation, il est préférable de reconsulter votre ophtalmologiste en urgence, afin d’éliminer
			la survenue de complications locales.</Text
		>
		<TextWithCorners
			>La vaccination anti-tétanique, si elle n’est pas à jour, doit être renouvelée.</TextWithCorners
		>
	</section>

	<section>
		<Title level="h3" as="h2">Corps étranger intra-oculaire</Title>
		<Text
			>C'est une situation beaucoup plus grave. Un corps étranger peut se loger à l’intérieur du
			globe oculaire, souvent à l'occasionnant d'un traumatisme à haute cinétique.</Text
		>
		<TextWithCorners
			>Il faut toujours garder en tête cette situation en cas de traumatisme oculaire, quel qu'en
			soit le mécanisme.</TextWithCorners
		>
		<ArticleImage
			src={InfectionPageEightIlluTwo}
			alt="Trajet d'un corps étranger à l'intérieur de l'œil"
			class="max-w-lg"
		/>
		<Text
			>Parfois, les symptômes et complications apparaissent à distance de l'accident initial, si
			l'œil reste étanche en cas de perforation de petite taille.</Text
		>
		<Text
			>La prise en charge doit être rapide et adaptée, pour éviter la survenue de conséquences
			sévères et potentiellement dramatiques pour la fonction visuelle, parmi lesquelles :</Text
		>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				L’endophtalmie post-traumatique, infection intra-oculaire sévère. Elle fait partie des
				principales craintes de l’ophtalmologiste dans ce type de situation. Le corps étranger n'est
				en effet pas stérile et va apporter, à l'intérieur de l'œil, des microbes potentiellement
				très dangereux.
			</li>
			<li>
				La sidérose bulbaire. Si le corps étranger est métallique, il peut imprégner lentement les
				tissus intra-oculaires. Cette imprégnation chronique est évidemment toxique. Ses
				conséquences sont généralement visibles plusieurs années après le traumatisme initial.
			</li>
			<li>
				Le décollement de rétine, une cataracte traumatique, un glaucome post-traumatique font
				également partie des complications possibles, en fonction du trajet pris par le corps
				étranger et des structures qui auront été lésées par son passage.
			</li>
		</ul>
		<ArticleImage
			src={InfectionPageEightIlluOne}
			alt="Œil après un traumatisme par corps étranger"
			class="max-w-lg"
		/>
		<Text tone="accent" weight="medium"
			>Il est préférable, pour tout patient ayant subi un traumatisme oculaire, de consulter un
			ophtalmologiste en urgence. Seul un examen complet permettra, en effet, d'orienter
			correctement la prise en charge médico-chirurgicale.</Text
		>
	</section>
</DiseaseArticleLayout>
