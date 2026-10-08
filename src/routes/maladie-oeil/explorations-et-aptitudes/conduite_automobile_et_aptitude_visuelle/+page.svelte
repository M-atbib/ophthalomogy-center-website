<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ExplorationsPageTwoIlluOne } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/explorations-et-aptitudes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Conduite automobile et aptitude visuelle</Title>

	<Text>
		Une bonne vision est essentielle pour la conduite d'une automobile ou, d'ailleurs, de tout type
		d'engin motorisé. L'aptitude à la conduite peut être remise en question par bon nombre de
		pathologies ophtalmologiques.
	</Text>

	<Title level="h3">Que dit la loi Française ?</Title>
	<Text>
		En France, il est interdit à un médecin de signaler aux autorités préfectorales un patient qui
		serait inapte à la conduite automobile.
	</Text>
	<Text>
		Néanmoins, l'ophtalmologiste se doit d’apporter une information claire et appropriée sur la
		réglementation en vigueur et sur les risques encourus par un patient, s’il ne remplit pas les
		conditions nécessaires.
	</Text>
	<Text>
		Seule la commission médicale du permis de conduire, composée de médecins experts
		judiciaires, est habilitée à se prononcer sur le maintien ou non du permis de conduire, en cas
		de problématique de santé. Cette commission est nommée par le préfet. La conduite peut être
		autorisée avec certaines restrictions. Il est aussi possible que la commission se prononce en
		faveur d'une suspension, temporaire ou définitive, du permis de conduire.
	</Text>
	<Text>
		La réglementation française relative aux aptitudes visuelles à la conduite automobile a été
		révisée récemment, pour mieux s’harmoniser avec la législation européenne.
	</Text>

	<a
		href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000031703937"
		target="_blank"
		class="link"
	>
		Arrêté du 18 décembre 2015 modifiant l’arrêté du 21 décembre 2005 fixant la liste des affections
		médicales incompatibles avec l’obtention ou le maintien du permis de conduire ou pouvant donner
		lieu à la délivrance de permis de conduire de durée de validité limitée.
	</a>

	<Text>
		"Tout candidat à un permis de conduire devra subir les examens appropriés pour s’assurer qu’il a
		une acuité visuelle compatible avec la conduite des véhicules à moteur. S’il y a une raison de
		penser que le candidat n’a pas une vision adéquate, il devra être examiné par une autorité
		médicale compétente. Au cours de cet examen, l’attention devra porter plus particulièrement sur
		l’acuité visuelle, le champ visuel, la vision crépusculaire, la sensibilité à l’éblouissement et
		aux contrastes et la diplopie, ainsi que sur d’autres fonctions visuelles qui peuvent
		compromettre la sécurité de la conduite."
	</Text>

	<Text>
		<a
			href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000035967210"
			target="_blank"
			class="link"
		>
			Le décret n° 2017-1523 du 3 novembre 2017
		</a>
		 a modifié diverses dispositions en matière de sécurité routière. C’est ainsi que le préfet suspend,
		désormais, le droit de conduire à un conducteur qui a négligé ou refusé de se soumettre au contrôle
		médical de l’aptitude à la conduite dans le délai qui lui était prescrit.
	</Text>

	<TextWithCorners>
		Est-ce que je peux transmettre la mutation à un de mes enfants ?
	</TextWithCorners>

	<Title level="h3">
		Conduite des véhicules légers (Permis A,B,E(B) (moto, véhicule tourisme))
	</Title>
	<Title level="sub2">Acuité Visuelle requise</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>≥ 5/10ème en vision Binoculaire</li>
		<li>Si un œil a une vision ≤1/10ème, le second doit avoir une vision ≥ 5/10ème</li>
	</ul>
	<Text>
		Compatibilité temporaire dont la durée sera appréciée au cas par cas, si l’acuité visuelle est
		limite par rapport aux normes ci-dessus. Incompatibilité temporaire de 6 mois après la perte
		brutale de la vision d’un œil (≤1/10ème).
	</Text>
	<Title level="sub2">Champ Visuel Binoculaire requis</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>120° d'amplitutde horizontale (minimum de 50° à droite et 50° à gauche)</li>
		<li>40° d'amplitude verticale (20° en supérieur, 20° en inférieur)</li>
		<li>Aucune anomalie dans les 20° centraux</li>
	</ul>

	<Title level="h3">
		Conduite des véhicules lours (Permis C,D,E(C),E(D) (bus, camion, taxis, ambulances))
	</Title>
	<Title level="sub2">Acuité Visuelle requise</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>≥ 8/10ème sur le meilleur œil</li>
		<li>≥ 1/10ème sur le second œil</li>
	</ul>
	<Text>
		Si les valeurs de 8/10 et 1/10 sont atteintes avec une correction, il faut que l’acuité visuelle
		non corrigée de chaque œil atteigne 1/20ème, ou que la correction optique soit obtenue à l’aide
		de verres correcteurs d’une puissance ne dépassant pas +/– 8 dioptries, ou à l’aide de lentilles
		cornéennes.
	</Text>
	<Title level="sub2">Champ Visuel Binoculaire requis</Title>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>160° d'amplitude horizontale (minimum de 70° à droite et 70° à gauche)</li>
		<li>60° d'amplitude verticale (30° en supérieur, 30° en inférieur)</li>
		<li>Aucune anomalie dans les 30° centraux</li>
	</ul>

	<Title level="h3">Évaluation</Title>
	<Text>
		L’acuité visuelle peut être mesurée avec une correction optique. Le cas échéant, cela doit être
		mentionné sur le permis de conduire.
	</Text>
	<Text>Les troubles de la vision des couleurs sont compatibles avec la conduite automobile.</Text>
	<Text>Un champ visuel binoculaire est requis.</Text>
	<Text>
		Un avis spécialisé est recommandé lorsque des anomalies visuelles sont identifiées : difficultés
		importantes en vision nocturne (héméralopie), sensibilité à l’éblouissement, vision double
		(diplopie), trouble de la vision des contrastes, nystagmus ou encore en présence
		d'un blépharospasme important.
	</Text>

	<Title level="h3">Comment prendre rendez-vous ?</Title>
	<Text>
		Le secrétariat des commissions médicales des préfectures a été supprimé ; les usagers doivent
		donc prendre un rendez-vous impérativement en ligne, pour une visite médicale en commission
		préfectorale. Tant que la commission n’aura pas examiné l’usager et rendu un avis d’aptitude, la
		suspension sera automatiquement prolongée par le préfet.
	</Text>
	<Text>
		Préfecture du PAS-DE-CALAIS :
		<a
			href="https://www.pas-de-calais.gouv.fr/Demarches/Permis-de-conduire-Certificat-d-immatriculation-Certificat-de-non-gage/Permis-de-conduire/Commissions-medicales-du-permis-de-conduire-Prise-de-rendez-vous-en-ligne"
			target="_blank"
			class="link"
		>
			Lien pour prise de rendez-vous
		</a>
	</Text>
</Section>
