<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { StrabologiePageThreeImgOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/strabologie-chirurgie-du-strabisme" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Chirurgie du strabisme : comment ça se passe ?</Title>

	<Text>
		La chirurgie du strabisme est, dans l'immense majorité des cas, une chirurgie ambulatoire. Le
		patient entre à la clinique ou à l'hôpital le matin de l'intervention et en ressort le jour
		même.
	</Text>

	<Title level="h3">Doit-on être endormi(e) pour une chirurgie de strabisme ?</Title>
	<Text>
		La chirurgie du strabisme est effectuée sous anesthésie générale. Il est nécessaire de
		rencontrer le médecin anesthésiste, dans le cadre d'une consultation dédiée, dans les semaines
		qui précèdent l’intervention.
	</Text>
	<Text>
		Ce rendez-vous se déroule à la clinique, dans la mesure du possible en même temps que la
		consultation pré-opératoire avec votre chirurgien ophtalmologiste.
	</Text>
	<Text>
		Pour le bon déroulé de l'intervention, il vous sera demandé d’être à jeun à partir de minuit (ne
		pas manger, boire ou fumer).
	</Text>

	<div class="my-8 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="space-y-4 lg:w-7/12">
			<Title level="h3">Comment se déroule l'intervention ?</Title>
			<Text>
				À l’arrivée au bloc opératoire, notre équipe vous aidera à vous préparer pour l'entrée en
				secteur chirurgical. Une tenue stérile est nécessaire (charlotte, blouse, chaussons) et vous
				sera proposée. Les enfants peuvent apporter leur doudou pour leur tenir compagnie pendant
				l’opération.
			</Text>
			<Text>
				Vous entrez dans la salle d'opération allongé sur un brancard. L'équipe vérifie, dès lors,
				votre identité et vos allergies. Tout incident récent doit évidemment leur être
				rapporté. Des éléments de surveillance, nécessaires au bon déroulement de
				l'intervention, sont installés (saturomètre, patches thoraciques pour le relevé du tracé
				ECG...).
			</Text>
			<Text>
				L’opération dure en moyenne 30 minutes (entre 15 et 45 minutes selon le geste effectué).
			</Text>
			<Text>
				L’intervention consiste à repérer les muscles oculo-moteurs (qui permettent les mouvements
				des yeux) et à déplacer leurs insertions à la surface du globe, afin de redresser l’œil qui
				est dévié.
			</Text>
			<Text>
				Le chirurgien suture les muscles et la conjonctive à l'aide de fils résorbables ; il n’y
				aura donc pas de fil à retirer après l’intervention, puisqu'ils disparaissent spontanément
				en quelques semaines.
			</Text>
		</div>
		<figure class="mx-auto w-full max-w-xl overflow-hidden">
			<img
				src={StrabologiePageThreeImgOne}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>

	<Title level="h3">Quelles sont les suites opératoires ?</Title>
	<Text>
		En post-opératoire, le patient peut ressentir une gêne, qui va durer quelques jours.
		L'impression est comparable à celle d'un doigt dans l'oeil. Il peut y avoir, initialement une
		rougeur oculaire, ou une vision dédoublée, qui vont disparaître spontanément.
	</Text>
	<Text>
		Il est important de bien respecter le traitement post-opératoire prescrit par votre chirurgien.
		Il s'agit de collyres, à instiller dans l'oeil opéré pendant quelques semaines.
	</Text>
	<Text>
		Dans les semaines qui suivent l'intervention, il est recommandé de ne pas mettre la tête sous
		l’eau (piscine / baignade). Idéalement, cette consigne doit être respectée un mois. Seule la
		douche est autorisée pendant cette période.
	</Text>
	<Text>
		Il est préférable de prévoir environ une semaine d'arrêt de travail ou d'éviction scolaire, pour
		permettre un temps de cicatrisation suffisant. La consultation de contrôle avec votre
		ophtalmologiste a lieu un mois après l'intervention.
	</Text>
</Section>
