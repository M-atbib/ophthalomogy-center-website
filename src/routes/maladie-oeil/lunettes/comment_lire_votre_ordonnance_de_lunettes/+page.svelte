<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, Title } from '$lib';
	import { LunettePageFourImgOne, LunettePageFourImgTwo } from '$lib/assets';

	const backHref = '/maladie-oeil/lunettes';
</script>

<DiseaseArticleLayout title="Comment lire votre ordonnance de lunettes ?" {backHref}>
	<section>
		<Text
			>Une ordonnance de lunettes n’est pas toujours facile à lire. En effet, il n’y est pas
			précisé, textuellement, si vous êtes myope, hypermétrope, astigmate ou presbyte. Le type de
			verres prescrits ne définit pas leur puissance.</Text
		>
		<Text>Tout est contenu dans des formules, peu lisibles pour un public non averti.</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Comment lire une ordonnance de lunettes ?</Title>
		<Text>Voici donc quelques clés de lecture pour une meilleure compréhension.</Text>
		<Text
			>Dans la plupart des cas, la correction n’est pas identique sur les deux yeux. Ceci n’est
			absolument pas pathologique. Chaque oeil fait l’objet d’une ligne qui lui est propre.</Text
		>
		<Text
			>La formule de correction comporte de 1 à 3 éléments et désigne le pouvoir correcteur du verre
			ou de la lentille.</Text
		>
		<Text
			>Ces éléments sont des valeurs chiffrées, qui correspondent à la puissance nécessaire du
			verre, exprimée en dioptries, qui est l’unité de mesure employée.</Text
		>
		<ol class="mt-2 mb-6 list-decimal space-y-4 pl-5">
			<li>
				la première valeur est la puissance sphérique du verre (ou, plus simplement, la “sphère”).
				Si cette valeur est précédée par un “+”, le verre est dit “convergent” et permet la
				correction de l’hypermétropie. La lumière est avancée vers votre rétine.<br />Si cette
				valeur est précédée par un “-”, le verre est dit “divergent” et permet la correction de la
				myopie. La lumière est, cette fois, reculée vers la rétine.<br />Si le verre est neutre, le
				terme “plan” indique à l’opticien qu’aucune correction sphérique n’est nécessaire.
			</li>
			<li>
				la deuxième valeur est indiquée entre parenthèses. Il s’agit de la puissance cylindrique du
				verre, qui permet de corriger l’astigmatisme. Cette correction n’est pas obligatoire si vous
				n’êtes pas astigmate.<br />La plupart des ophtalmologistes utilisent une formule dite “en
				cylindre négatif” et la valeur est précédée du signe “-”. Il s’agit simplement d’une
				convention de rédaction.
			</li>
			<li>
				la troisième valeur n’est présente que pour compléter la deuxième. Il s’agit d’un axe de
				rotation par rapport à l’horizontale. En effet, l’opticien, pour fabriquer correctement
				votre verre, doit savoir dans quel sens est orienté celui-ci, en cas d’astigmatisme.
			</li>
		</ol>
		<ArticleImage
			src={LunettePageFourImgOne}
			alt="Patiente réfléchissant à sa correction de lunettes"
			class="max-w-xl"
		/>
	</section>

	<section>
		<Title level="h3" as="h2"
			>Comment savoir si les verres prescrits sont progressifs sur mon ordonnance ?</Title
		>
		<Text
			>Les verres progressifs permettent de corriger la presbytie, trouble de la vision de près qui
			empêche le patient de voir net un objet qui s’approche de son oeil.</Text
		>
		<Text
			>Si les verres prescrits sont progressifs, une 4ème valeur chiffrée apparaît sur l’ordonnance,
			qui correspond à l’addition sphérique.</Text
		>
		<Text
			>Cette valeur est toujours précédée du terme “Addition” (ou “Add”) et du signe “+”. Dans
			l’immense majorité des cas, la valeur est la même pour les deux yeux.</Text
		>
		<Text
			>Si vous préférez utiliser une paire de lunettes pour la vision de loin et une autre paire
			pour la vision de près, une correction par des verres monofocaux est prescrite. Dans ce cas,
			deux prescriptions distinctes sont réalisées. Elles comportent de 1 à 3 valeurs chacune, comme
			expliqué dans le paragraphe précédent.</Text
		>
	</section>

	<section>
		<Title level="h3" as="h2">Quelques exemples pour aller plus loin</Title>
		<div class="ml-auto max-w-xl rounded-sm bg-accent-one p-5 text-primary-background">
			<p class="font-semibold">Je suis uniquement myope, comment est rédigée mon ordonnance ?</p>
		</div>
		<Text
			>Si vous êtes uniquement myope, chaque formule ne comportera qu’une seule valeur, précédée par
			un “-”.</Text
		>
		<div class="ml-auto max-w-xl rounded-sm bg-accent-one p-5 text-primary-background">
			<p class="font-semibold">
				Je suis presbyte et j’ai toujours été corrigé(e) pour une myopie et un astigmatisme, comment
				est rédigée mon ordonnance ?
			</p>
		</div>
		<Text>Deux solutions sont possibles :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				si vous souhaitez porter des verres progressifs, votre ordonnance comportera les 4 éléments
				: puissance sphérique, puissance cylindre entre parenthèses, axe de rotation du verre et,
				enfin, l’addition sphérique.
			</li>
			<li>
				si vous ne souhaitez pas porter de verres progressifs, votre ordonnance comportera deux
				prescriptions distinctes. La seule différence entre les deux concernera la première valeur
				(puissance sphérique), selon le niveau d’addition nécessaire.
			</li>
		</ul>
		<ArticleImage
			src={LunettePageFourImgTwo}
			alt="Examen ophtalmologique avant prescription de lunettes"
			class="max-w-2xl"
		/>
	</section>

	<section>
		<Title level="h3" as="h2">Vous avez bien compris ? À vous de lire ces ordonnances !</Title>
		<div class="space-y-6">
			<div>
				<Title level="sub2" as="h3">Cas n°1</Title>
				<Text>Mr W. a 25 ans. Il sort de sa consultation avec l’ordonnance suivante :</Text>
				<div
					class="ml-auto max-w-md rounded-sm bg-accent-one p-5 font-semibold text-primary-background"
				>
					<p>Oeil droit : +2.00 (-1,25) 55°</p>
					<p>Oeil gauche : +1,75 (-1,25) 65°</p>
				</div>
				<Title level="sub3" as="h4">Solution</Title>
				<Text>Mr W. est hypermétrope et astigmate aux deux yeux.</Text>
				<Text
					>À droite, il est hypermétrope de 2 dioptries. Il est astigmate de 1,25 dioptries et le
					verre doit être orienté à 55° de l’horizontale pour que la puissance du cylindre soit
					adaptée.</Text
				>
				<Text
					>À gauche, il est hypermétrope de 1,75 dioptries et astigmate de 1,25 dioptries. Le verre
					doit être orienté à 65° de l’horizontale.</Text
				>
			</div>

			<div>
				<Title level="sub2" as="h3">Cas n°2</Title>
				<Text>Mr G. a 55 ans. Il sort de sa consultation avec l’ordonnance suivante :</Text>
				<div
					class="ml-auto max-w-md rounded-sm bg-accent-one p-5 font-semibold text-primary-background"
				>
					<p>Oeil droit : -1,25</p>
					<p>Oeil gauche : -2,00</p>
					<p>Add: + 2,25</p>
				</div>
				<Title level="sub3" as="h4">Solution</Title>
				<Text>Mr G. est myope et presbyte. Il va porter des verres progressifs.</Text>
				<Text>À droite, il est myope de 1,25 dioptries.</Text>
				<Text>À gauche, il est myope de 2 dioptries.</Text>
				<Text
					>Sa presbytie nécessite une addition sphérique de 2,25 dioptries pour permettre une
					lecture confortable en vision de près.</Text
				>
			</div>

			<div>
				<Title level="sub2" as="h3">Cas n°3</Title>
				<Text>Mme N. a 47 ans. Elle sort de sa consultation avec l’ordonnance suivante :</Text>
				<div
					class="ml-auto max-w-md rounded-sm bg-accent-one p-5 font-semibold text-primary-background"
				>
					<p>Vision de loin :</p>
					<p>Oeil droit: -4,25 (-0,75) 170°</p>
					<p>Oeil gauche : -4,00 (-1,00) 175°</p>
					<p class="mt-3">Vision de près :</p>
					<p>Oeil droit : -3,25 (-0,75)170°</p>
					<p>Oeil gauche : -3,00 (-1,00) 175°</p>
				</div>
				<Title level="sub3" as="h4">Solution</Title>
				<Text
					>Mme N. est myope, astigmate et presbyte. Elle va porter deux paires de lunettes
					différentes : une pour la vision de loin et une autre pour la vision de près.</Text
				>
				<Text>À droite, elle est myope de 4,25 dioptries et astigmate de 0,75 dioptries.</Text>
				<Text>À gauche, elle est myope de 4 dioptries et astigmate de 1 dioptrie.</Text>
				<Text
					>Sa presbytie nécessite une addition sphérique de 1 dioptrie pour permettre une lecture
					confortable en vision de près.</Text
				>
			</div>

			<div>
				<Title level="sub2" as="h3">Cas n°4</Title>
				<Text>Mme V. a 52 ans. Elle sort de sa consultation avec l’ordonnance suivante :</Text>
				<div
					class="ml-auto max-w-md rounded-sm bg-accent-one p-5 font-semibold text-primary-background"
				>
					<p>Oeil droit : +2,25</p>
					<p>Oeil gauche : +2,25</p>
				</div>
				<Title level="sub3" as="h4">Solution</Title>
				<Text>Mme V. est emmétrope et presbyte.</Text>
				<Text>En vision de loin, elle n’a pas besoin de correction.</Text>
				<Text
					>Par contre, sa presbytie nécessite une correction sphérique de 2,25 dioptries pour
					permettre une lecture confortable en vision de près.</Text
				>
			</div>
		</div>
	</section>
</DiseaseArticleLayout>
