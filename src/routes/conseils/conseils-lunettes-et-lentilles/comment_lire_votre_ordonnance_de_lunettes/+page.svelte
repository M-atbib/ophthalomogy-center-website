<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, Title } from '$lib';
	import { LunettePageFourImgOne, LunettePageFourImgTwo } from '$lib/assets';

	const backHref = '/conseils/conseils-lunettes-et-lentilles';
</script>

<DiseaseArticleLayout title="Comment lire votre ordonnance de lunettes ?" {backHref}>
	<!-- Prescription examples remain explicit because patients compare their own ordonnance against them. -->
	<section>
		<Text>
			Une ordonnance de lunettes n’est pas toujours facile à lire. En effet, il n’y est pas précisé,
			textuellement, si vous êtes myope, hypermétrope, astigmate ou presbyte. Le type de verres
			prescrits ne définit pas leur puissance.
		</Text>
		<Text>Tout est contenu dans des formules, peu lisibles pour un public non averti.</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Comment lire une ordonnance de lunettes ?</Title>
		<Text>Voici donc quelques clés de lecture pour une meilleure compréhension.</Text>
		<Text>
			Dans la plupart des cas, la correction n’est pas identique sur les deux yeux. Ceci n’est
			absolument pas pathologique. Chaque oeil fait l’objet d’une ligne qui lui est propre.
		</Text>
		<Text>
			La formule de correction comporte de 1 à 3 éléments et désigne le pouvoir correcteur du verre
			ou de la lentille.
		</Text>
		<ol class="mt-2 mb-6 list-decimal space-y-4 pl-5">
			<li>
				La première valeur est la puissance sphérique du verre. Si elle est précédée par un “+”, le
				verre est convergent et corrige l’hypermétropie. Si elle est précédée par un “-”, le verre
				est divergent et corrige la myopie. Le terme “plan” indique qu’aucune correction sphérique
				n’est nécessaire.
			</li>
			<li>
				La deuxième valeur, indiquée entre parenthèses, est la puissance cylindrique du verre, qui
				permet de corriger l’astigmatisme.
			</li>
			<li>
				La troisième valeur est un axe de rotation par rapport à l’horizontale, nécessaire en cas
				d’astigmatisme.
			</li>
		</ol>
		<ArticleImage
			src={LunettePageFourImgOne}
			alt="Patiente réfléchissant à sa correction de lunettes"
			class="max-w-xl"
		/>
	</section>

	<section>
		<Title level="h3" as="h2">
			Comment savoir si les verres prescrits sont progressifs sur mon ordonnance ?
		</Title>
		<Text>
			Les verres progressifs permettent de corriger la presbytie, trouble de la vision de près qui
			empêche le patient de voir net un objet qui s’approche de son oeil.
		</Text>
		<Text>
			Si les verres prescrits sont progressifs, une 4ème valeur chiffrée apparaît sur l’ordonnance,
			qui correspond à l’addition sphérique.
		</Text>
		<Text>
			Cette valeur est toujours précédée du terme “Addition” (ou “Add”) et du signe “+”. Dans
			l’immense majorité des cas, la valeur est la même pour les deux yeux.
		</Text>
		<Text>
			Si vous préférez utiliser une paire de lunettes pour la vision de loin et une autre paire pour
			la vision de près, une correction par des verres monofocaux est prescrite. Dans ce cas, deux
			prescriptions distinctes sont réalisées.
		</Text>
	</section>

	<section>
		<Title level="h3" as="h2">Quelques exemples pour aller plus loin</Title>
		<div class="ml-auto max-w-xl rounded-sm bg-accent-one p-5 text-primary-background">
			<p class="font-semibold">Je suis uniquement myope, comment est rédigée mon ordonnance ?</p>
		</div>
		<Text>
			Si vous êtes uniquement myope, chaque formule ne comportera qu’une seule valeur, précédée par
			un “-”.
		</Text>
		<div class="ml-auto max-w-xl rounded-sm bg-accent-one p-5 text-primary-background">
			<p class="font-semibold">
				Je suis presbyte et j’ai toujours été corrigé(e) pour une myopie et un astigmatisme, comment
				est rédigée mon ordonnance ?
			</p>
		</div>
		<Text>Deux solutions sont possibles :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				Si vous souhaitez porter des verres progressifs, votre ordonnance comportera les 4 éléments
				: puissance sphérique, puissance cylindre, axe et addition sphérique.
			</li>
			<li>
				Si vous ne souhaitez pas porter de verres progressifs, votre ordonnance comportera deux
				prescriptions distinctes.
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
			</div>
			<div>
				<Title level="sub2" as="h3">Cas n°3</Title>
				<Text>Mme N. a 47 ans. Elle sort de sa consultation avec deux prescriptions :</Text>
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
				<Text>
					Mme N. est myope, astigmate et presbyte. Elle va porter deux paires de lunettes
					différentes.
				</Text>
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
			</div>
		</div>
	</section>
</DiseaseArticleLayout>
