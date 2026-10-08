<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ExplorationsPageTwoIlluOne, PediatriePageSixImgOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/ophtalmo-pediatrie" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Comment bien choisir les lunettes de votre enfant ?</Title>

	<Text>
		Le choix d’une monture et de verres adaptés est indispensable pour garantir à la fois une bonne
		correction et la sécurité de votre enfant.
	</Text>

	<Title level="h3">Quels sont les principes simples à respecter pour bien choisir ?</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<div class="my-8 flex flex-col gap-8 lg:flex-row lg:items-center">
			<div class="space-y-4 lg:w-7/12">
				<li>
					Prilivégiez les montures en plastique. Chez les très jeunes enfants, la monture sera
					volontiers déformable, afin d’assurer sa durabilité. Il est préférable d’éviter les
					montures métalliques.
				</li>
				<li>
					Évitez les patins, qui peuvent induire un sur-risque de traumatisme oculaire en cas
					d’accident ou de choc.
				</li>
				<li>
					La base du nez est souvent peu prononcée chez les jeunes enfants : les verres sont alors
					préférentiellement reliés par un pont bas, qui empêche, au moins partiellement, la monture
					de glisser sur le nez. L’enfant aura, sinon, tendance à regarder par-dessus les verres.
				</li>
				<li>
					Votre opticien pourra également vous proposer de renforcer le pont par une bande de
					silicone (ou tout autre matériau anti-dérapant) si les lunettes glissent de façon
					excessive.
				</li>
				<li>
					Un cordon peut venir compléter l’équipement, pour empêcher l’enfant d’enlever sa monture
					de façon intempestive.
				</li>
				<li>Les verres doivent être incassables et légers.</li>
				<li>
					Le port d’une protection solaire est aussi utile chez l’enfant que chez l’adulte. La
					plupart des verres correcteurs proposent une protection contre les rayons UV, mais des
					verres solaires complémentaires peuvent être très utiles.
				</li>
				<li>
					Les lunettes de votre enfant doivent être renouvelées environ une fois par an. En effet,
					en cas de croissance rapide, la monture n’est rapidement plus adaptée à la forme de son
					crâne ou de son visage. Un serrage excessif des branches peut occasionner un inconfort et
					l’amener à refuser de porter sa correction.
				</li>
			</div>
			<figure class="mx-auto w-full max-w-xl overflow-hidden">
				<img
					src={PediatriePageSixImgOne}
					alt="Illustration de la cataracte"
					class="h-full w-full object-cover"
				/>
			</figure>
		</div>
		<TextWithCorners>
			Si votre enfant proteste lors du port de sa correction ou s’il a une forte tendance à
			l’arracher, un examen ophtalmologique précoce peut être utile pour vérifier l’absence d’un
			changement de vision.
		</TextWithCorners>
		<li>
			De nombreuses déclinaisons de montures existent pour la pratique du sport. Votre enfant
			pourra, grâce à ce type d’équipement, continuer à porter ses lunettes pour la pratique de ses
			activités péri ou extra-scolaires.
		</li>
		<li>
			En cas de malformation osseuse du visage, des montures sur mesures, adaptées à la forme du
			massif facial, peuvent être fabriquées.
		</li>
		<li>
			Une bonne adaptation garantira normalement à votre enfant de pouvoir garder sa correction sans
			interruption.  Dans la majorité des cas, le port de celle-ci doit en effet être permanent, y
			compris pendant la récréation, lors du temps scolaire.
		</li>
		<li>
			Votre opticien vous proposera certainement une garantie casse/rayures, bien utile pour
			renouveler l’équipement en cas de bris précoce.
		</li>
	</ul>
</Section>
