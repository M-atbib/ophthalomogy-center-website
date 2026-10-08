<script lang="ts">
	import { DiseaseArticleLayout, OpeningImageSection, Text, TextWithCorners } from '$lib';
	import { InfectionPageOneIlluOne } from '$lib/assets';

	const backHref = '/maladie-oeil/urgences-et-infections';
</script>

<DiseaseArticleLayout title="Œil rouge et douloureux : que faire ?" {backHref}>
	<OpeningImageSection
		src={InfectionPageOneIlluOne}
		alt="Œil rouge nécessitant un examen ophtalmologique"
	>
		<Text tone="accent" weight="medium"
			>La survenue d’une rougeur oculaire et de douleurs impose un examen ophtalmologique rapide.</Text
		>
		<Text>Pour votre sécurité, mieux vaut respecter les consignes suivantes :</Text>
	</OpeningImageSection>

	<ul class="list-disc space-y-4 pl-5">
		<li>
			Si vous avez bénéficié d’une chirurgie oculaire il y a moins de 15 jours, alors vous devez
			sans délai consulter votre ophtalmologiste. Si celui-ci n’est pas disponible, vous devez vous
			rendre dans le service d’urgences ophtalmologiques le plus proche.
		</li>
		<li>
			Si vous êtes porteur(se) de lentilles de contact, il est formellement recommandé d’arrêter le
			port, même si celui-ci semble soulager les douleurs. Il pourrait aggraver une infection en
			cours. En consultation, il est nécessaire d’amener les lentilles actuellement portées, leur
			emballage, le boîtier de conservation et le flacon de produit d’entretien utilisé.
		</li>
		<li>
			Dans la mesure du possible, amenez avec vous, pour la consultation, la liste de vos
			traitements en cours, même s’ils n’ont pas de rapport évident avec l’Ophtalmologie.
		</li>
	</ul>

	<TextWithCorners>Évitez l’auto-médication !</TextWithCorners>
	<Text
		>Certains traitements, instillés dans le cadre de l’urgence sans examen ophtalmologique, peuvent
		aggraver la pathologie en cours.</Text
	>
	<Text tone="accent" weight="medium"
		>Si vous ne parvenez pas à joindre notre secrétariat téléphonique, vous pouvez vous rendre
		directement dans le centre [Nom de Clinique] le plus proche de chez vous. Une permanence
		d’accueil des urgences est mise en place pendant les heures d’ouverture du cabinet pour vous
		recevoir.</Text
	>
</DiseaseArticleLayout>
