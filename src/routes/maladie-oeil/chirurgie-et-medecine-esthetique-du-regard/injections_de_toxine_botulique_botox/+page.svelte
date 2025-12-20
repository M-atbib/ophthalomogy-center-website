<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { EsthetiqueEyePageOneImgOne, EsthetiqueEyePageOneImgTwo } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button
		variant="ghost"
		href="/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard"
		class="w-fit"
	>
		<ArrowLeft />
		Retour
	</Button>

	<Title class="my-10" level="h1">Injections de toxine botulique (Botox®)</Title>

	<Text>
		Oubliez les visages figés et inexpressifs ! Les injections de toxine botulique donnent un aspect
		détendu, reposé, moins sévère avec un aspect naturel, grâce à des dosages adaptés.
	</Text>

	<Title class="mt-10" level="h2"
		>La toxine botulique, un produit utilisé de longue date par les ophtalmologistes
	</Title>
	<Text>
		La toxique botulique, ou Botox®, est un médicament dont la fonction est de provoquer le
		relâchement des muscles, en empêchant la transmission du signal nerveux à l’origine de la
		contraction musculaire. Elle est utilisée depuis plusieurs dizaines d’années déjà et c’est
		d’ailleurs un ophtalmologue qui en a fait le premier l’usage dans les années 1970 ! On l’utilise
		à la fois chez l’adulte et l’enfant, par exemple dans la prise en charge des strabismes.
		C’est un traitement fiable, dont la sécurité a été largement démontrée.
	</Text>

	<div class="mt-10 flex items-center gap-10">
		<div>
			<Title level="h2">Des effets connus et reproductibles</Title>
			<Text>
				La toxine botulique permet donc de diminuer les mouvements du visage, à l’origine de
				l’apparition des rides. Elle ne peut pas combler les rides ou les creux du visage. Pour
				cela, on utilisera plutôt l’acide hyaluronique. Son action est temporaire et complètement
				réversible. Les effets sur la relaxation musculaire commencent environ trois jours après
				l’injection, puis augmentent progressivement pendant trois semaines. La durée d’action est
				de 4 à 6 mois, en fonction des patients et des sites d’injection. La motricité et les rides
				réapparaissent progressivement après cette durée.
			</Text>
		</div>
		<figure class="max-w-2xl overflow-hidden rounded-md">
			<img
				src={EsthetiqueEyePageOneImgOne}
				alt="Illustration du choix d'implant sur mesure"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>

	<TextWithCorners
		>La durée d'efficacité des injections de toxine botulique est de 4 à 6 mois</TextWithCorners
	>

	<Title class="mt-10" level="h2">Des indications claires</Title>
	<Text>
		La toxine botulique est utilisée pour le tiers supérieur du visage : les rides du front,
		les rides du lion (rides glabellaires ou rides inter-sourcilières) et les rides de la patte
		d’oie. En permettant la relaxation de la partie haute du visage, les rides sont moins visibles
		et ne s’accentuent pas. Il est également possible d’injecter la toxine botulique en prévention,
		chez le patient jeune, pour éviter l’apparition des rides et des crevasses définitives du
		visage.
	</Text>
	<TextWithCorners>
		Oubliez les visages figés et inexpressifs ! Les injections de toxine botulique donnent un aspect
		détendu, reposé, moins sévère avec un aspect naturel, grâce à des dosages adaptés.
	</TextWithCorners>

	<div class="mt-10 flex items-center gap-10">
		<figure class="max-w-xl overflow-hidden rounded-md">
			<img
				src={EsthetiqueEyePageOneImgTwo}
				alt="Illustration du choix d'implant sur mesure"
				class="h-full w-full object-center"
				loading="lazy"
			/>
		</figure>
		<div>
			<Title level="h2">Déroulement d'une séance d’injections</Title>
			<Text>
				Après l’analyse du visage et la réalisation d'un plan de trait ement personnalisé, la séance
				se déroule dans des salles spécialement dédiées, réparties dans notre cabinet . Les
				injections se pratiquent à l’aiguille fine ; elles sont donc peu douloureuses. Une crème
				anesthésiante est appliquée au préalable et peut permettre de diminuer l’appréhension liée
				aux piqûres.
			</Text>
		</div>
	</div>

	<Title class="mt-10" level="h2">Des complications rares et réversibles</Title>
	<Text>
		Parmi les complications potentielles, on peut noter l'apparition de petits hématomes au niveau
		des points d'injections, des maux de tête, une asymétrie minime du visage, ou une chute de la
		paupière supérieure... Ces complications sont rares et, comme l'effet du produit, complètement
		réversibles.
	</Text>

	<Title class="mt-10" level="h2">Des contre-indications très rares</Title>
	<Text>
		Parmi les contre-indications possibles, on mentionne les patients atteints de maladies
		neuro-musculaires, qui génèrent des altérations pathologiques de la neuro-transmission. <br />
		Par précaution, les injections ne sont pas pratiquées pendant la grossesse ou en période d’allaitement.
	</Text>

	<Title class="mt-10" level="h2">Des tarifs accessibles</Title>
	<Text>
		Nos tarifs comprennent l'achat du produit et la réalisation des injections. Une séance coûte
		entre 250 et 350€. <br />
		Dans ces indications, le coût n'est pas pris en charge par l'Assurance Maladie.
	</Text>

	<Title class="mt-10" level="h2">Après la séance</Title>
	<Text>
		Il est recommandé de ne pas appuyer sur les zones d’injections pendant au moins 6 heures après
		la séance.  <br />
		Il est également conseillé de ne pas faire de sport ou de ne pas s'exposer à des températures excessives
		(sauna, hammam) pendant environ 24 heures.
	</Text>
</Section>
