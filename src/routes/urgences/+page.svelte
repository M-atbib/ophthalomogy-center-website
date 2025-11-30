<script>
	import { Section, Text, Title, TextWithCorners } from '$lib';
	import { UrgenceHero } from '$lib/assets';
</script>

<Section spacing="comfortable" contentSpacing="none" width="wide">
	<div class="flex flex-col gap-10 lg:flex-row lg:items-center">
		<div class="space-y-6 lg:w-5/12">
			<Title level="h1" class="text-pretty">Urgences</Title>
			<Text variant="body-lg" tone="muted" class="text-pretty">
				Vous présentez un problème ophtalmologique urgent ?<br />
				dr vous reçoivent tous les jours et mettent tout en œuvre pour vous garantir une prise en charge
				dans les meilleures conditions, organisationnelles et matérielles. <br />
				Le [Nom de Clinique] s'engage pour une meilleure santé oculaire.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background rounded-4xl mx-auto w-full overflow-hidden border shadow-sm lg:w-7/12"
		>
			<img
				src={UrgenceHero}
				alt="Consultation d'urgence"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>
</Section>

<Section spacing="comfortable" contentSpacing="lg" width="wide">
	<div class="space-y-4">
		<Title level="h3" class="text-pretty" tone="cta">
			Le [Nom de Clinique] : un centre d'urgences ophtalmologiques
		</Title>
		<Text tone="muted" class="text-pretty">
			Le [Nom de Clinique] accueille depuis plus de 10 ans les patients présentant des urgences
			ophtalmologiques. Que vous ayez un problème grave ou non, une pathologie médicale ou
			chirurgicale, nos médecins sauront vous prendre en charge, quel que soit votre âge, grâce à
			une organisation performante et à du matériel dédié.
		</Text>
	</div>

	<div class="space-y-4 mb-10">
		<Title level="h3" class="text-pretty" tone="cta">
			Comment être reçu(e) dans le cadre d’une urgence ophtalmologique ?
		</Title>
		<Text tone="muted" class="text-pretty">
			on assure une consultation d’urgences du lundi au samedi pendant les horaires d'ouverture des
			différents cabinets. <br />
			Les urgences sont organisées et structurées mais, du fait du nombre élevé de recours, il est préférable
			que vous appeliez le secrétariat afin d’anticiper votre arrivée.
		</Text>
	</div>

	<TextWithCorners>
		Standard téléphonique : 05 37 810 828 (puis composez le numéro adapté pour les urgences)
	</TextWithCorners>

	<div class="my-10 space-y-6">
		<Title level="h3" class="text-pretty" tone="cta">Quels signes doivent m’alerter ?</Title>
		<Text tone="muted" class="text-pretty">
			Les motifs qui doivent vous amener à consulter un ophtalmologiste en urgence sont :
		</Text>
		<ul class="text-secondary list-disc space-y-3 pl-5">
			<li>Une baisse d’acuité visuelle récente, brutale et persistante ;</li>
			<li>Un œil rouge et douloureux ;</li>
			<li>Une vision double, d'apparition récente et persistante ;</li>
			<li>La présence d'un corps étranger oculaire ;</li>
			<li>Un traumatisme oculaire important ;</li>
			<li>La projection d'un produit caustique dans l'œil.</li>
		</ul>
		<Text tone="muted" class="text-pretty">
			Pour ce type de motif, un(e) secrétaire vous remettra un rendez-vous dans les 24 heures. Si
			vous rencontrez des difficultés à joindre le secrétariat, présentez-vous directement à
			l’accueil du cabinet le plus proche de chez vous. <br />
			Si vous souhaitez plus d'informations sur les maladies urgentes et leur prise en charge, rendez
			vous dans l'espace  "Urgences et Infections".
		</Text>
	</div>

	<TextWithCorners>
		Nous sommes à votre disposition pour tous vos problèmes oculaires urgents, graves ou non,
		médicaux et chirurgicaux.
	</TextWithCorners>

	<div class="space-y-4 mt-10">
		<Title level="h3" class="text-pretty" tone="cta">
			Devrai-je être suivi(e) après ma consultation d'urgence ?
		</Title>
		<Text tone="muted" class="text-pretty">
			Suite à votre consultation d’urgence, un suivi sera éventuellement programmé avec, le cas
			échéant des examens complémentaires<br />
			Si nécessaire, vous pourrez également être pris en charge par des ophtalmologistes chirurgicaux
			spécialisés.
		</Text>
	</div>
</Section>
