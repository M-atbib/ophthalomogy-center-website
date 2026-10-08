<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, TextWithCorners, Title } from '$lib';
	import { PediatriePageFiveImgOne } from '$lib/assets';

	const backHref = '/conseils/conseils-lunettes-et-lentilles';
</script>

<DiseaseArticleLayout title="Comment bien choisir les lunettes de votre enfant ?" {backHref}>
	<!-- The child-specific advice is its own source page, so the rules stay grouped as a checklist. -->
	<Text>
		Le choix d’une monture et de verres adaptés est indispensable pour garantir à la fois une bonne
		correction et la sécurité de votre enfant.
	</Text>

	<ArticleImage
		src={PediatriePageFiveImgOne}
		alt="Enfant portant des lunettes adaptées"
		class="max-w-3xl"
		loading="eager"
	/>

	<section>
		<Title level="h3" as="h2"
			>Quels sont les principes simples à respecter pour bien choisir ?</Title
		>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				Prilivégiez les montures en plastique. Chez les très jeunes enfants, la monture sera
				volontiers déformable afin d’assurer sa durabilité. Il est préférable d’éviter les montures
				métalliques.
			</li>
			<li>
				Évitez les patins, qui peuvent induire un sur-risque de traumatisme oculaire en cas
				d’accident ou de choc.
			</li>
			<li>
				La base du nez est souvent peu prononcée chez les jeunes enfants : les verres sont alors
				préférentiellement reliés par un pont bas, qui empêche, au moins partiellement, la monture
				de glisser sur le nez.
			</li>
			<li>
				Votre opticien pourra également vous proposer de renforcer le pont par une bande de silicone
				ou tout autre matériau anti-dérapant si les lunettes glissent de façon excessive.
			</li>
			<li>
				Un cordon peut venir compléter l’équipement, pour empêcher l’enfant d’enlever sa monture de
				façon intempestive.
			</li>
			<li>Les verres doivent être incassables et légers.</li>
			<li>
				Le port d’une protection solaire est aussi utile chez l’enfant que chez l’adulte. La plupart
				des verres correcteurs proposent une protection contre les rayons UV, mais des verres
				solaires complémentaires peuvent être très utiles.
			</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Quand faut-il renouveler ou adapter l’équipement ?</Title>
		<Text>
			Les lunettes de votre enfant doivent être renouvelées environ une fois par an. En effet, en
			cas de croissance rapide, la monture n’est rapidement plus adaptée à la forme de son crâne ou
			de son visage.
		</Text>
		<Text>
			Si votre enfant proteste lors du port de sa correction ou s’il a une forte tendance à
			l’arracher, un examen ophtalmologique précoce peut être utile pour vérifier l’absence d’un
			changement de vision.
		</Text>
		<Text>
			De nombreuses déclinaisons de montures existent pour la pratique du sport. Votre enfant
			pourra, grâce à ce type d’équipement, continuer à porter ses lunettes pour la pratique de ses
			activités péri ou extra-scolaires.
		</Text>
		<Text>
			En cas de malformation osseuse du visage, des montures sur mesures, adaptées à la forme du
			massif facial, peuvent être fabriquées.
		</Text>
		<TextWithCorners>
			Une bonne adaptation garantira normalement à votre enfant de pouvoir garder sa correction sans
			interruption. Dans la majorité des cas, le port de celle-ci doit être permanent, y compris
			pendant la récréation, lors du temps scolaire.
		</TextWithCorners>
		<Text>
			Votre opticien vous proposera certainement une garantie casse/rayures, bien utile pour
			renouveler l’équipement en cas de bris précoce.
		</Text>
	</section>
</DiseaseArticleLayout>
