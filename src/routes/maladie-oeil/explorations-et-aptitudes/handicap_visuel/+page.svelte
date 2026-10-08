<script>
	import { Section, Title, Text, Button } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/explorations-et-aptitudes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Handicap visuel</Title>
	<Text>
		La perception du handicap en France évolue, mais reste en retard par rapport à d’autres pays
		d’Europe. Il persiste une stigmatisation des personnes handicapées par la plupart des gens, qui
		en ont une vision réductrice (personnes en fauteuil roulant, avec une canne blanche, retard
		mental ou malformations physiques par exemple), de plus la majorité des handicaps ne sont pas
		visibles.
	</Text>

	<Title level="h3">Qu'est ce que le handicap ?</Title>
	<Text>
		La loi de 2005 pour l’égalité des droits et des chances, la participation et la citoyenneté des
		personnes handicapées introduit, pour la première fois dans la réglementation française, une
		définition du handicap.
	</Text>
	<Text>
		« Art. L. 114. - Constitue un handicap, au sens de la présente loi, toute limitation d'activité
		ou restriction de participation à la vie en société subie dans son environnement par une
		personne en raison d'une altération substantielle, durable ou définitive d'une ou plusieurs
		fonctions physiques, sensorielles, mentales, cognitives ou psychiques, d'un polyhandicap ou d'un
		trouble de santé invalidant. »
	</Text>
	<Text>Il y a donc 5 grandes familles de handicap reconnues :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Handicap moteur,</li>
		<li>Handicap sensoriel,</li>
		<li>Handicap psychique,</li>
		<li>Handicap mental,</li>
		<li>Maladies invalidantes.</li>
	</ul>

	<Text>
		Le Handicap visuel ne correspond pas à la déficience visuelle. Il résulte des bouleversements
		des activités de la vie quotidienne causés par cette déficience, dont il est finalement la
		conséquence.
	</Text>

	<Title level="h3">Déficience visuelle et cécité légale</Title>
	<Text>
		La déficience visuelle correspond à une insuffisance ou à une absence de perception de l’image,
		persistante après traitement (correction optique, chirurgie, traitements médicamenteux…).
		L’atteinte peut se situer au niveau de l’œil, des voies optiques ou du cortex cérébral
		occipital. La pathologie peut être congénitale ou acquise.
	</Text>
	<Text>Les causes en sont multiples :</Text>
	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Pathologies héréditaires (dystrophies rétiniennes, neuropathies optiques héréditaires...),
		</li>
		<li>Maladies oculaires dégénératives (glaucome, DMLA...),</li>
		<li>Traumatismes,</li>
		<li>Infections et inflammations (trachome)…</li>
	</ul>

	<Text>La déficience visuelle est définie par deux critères :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>La mesure de l’acuité visuelle,</li>
		<li>L’état du champ visuel.</li>
	</ul>

	<Title level="sub1">Définitions en France</Title>
	<Title level="sub3">Cécité légale</Title>
	<Text>
		Elle est définie par une acuité visuelle inférieure ou égale à 1/20, pour le meilleur œil, avec
		correction optique.
	</Text>
	<Title level="sub3">Malvoyance</Title>
	<Text>Elle correspond à l'un des deux critères suivants :</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>Une acuité visuelle entre 4/10 et 1/20 avec correction optique ;</li>
		<li>Un champ visuel compris entre 10 et 20 degrés.</li>
	</ul>

	<Title level="sub1">Définitions de l’OMS (Organisation Mondiale de la Santé)</Title>
	<Text>
		L’OMS a décrit 5 stades de déficience visuelle, permettant de classer le handicap à l’aide de la
		CIF (Classification Internationale du Fonctionnement du handicap et de la santé).
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			La Déficience Moyenne : Acuité visuelle corrigée inférieure à 3/10 et supérieure ou égale à
			1/10 AVEC un champ visuel d’au moins 20°.
		</li>
		<li>
			La Déficience Sévère : Acuité visuelle corrigée inférieure à 1/10 et supérieure ou égale à
			1/20eme.
		</li>
		<li>
			La Déficience Profonde : Acuité visuelle corrigée inférieure à 1/20 et supérieure à 1/50 OU un
			champ visuel compris entre 5° et 10°.
		</li>
		<li>
			La Déficience Presque Totale ou Sévère : Acuité visuelle corrigée inférieure à 1/50 avec
			perception lumineuse conservée OU un champ visuel inférieure à 5°.
		</li>
		<li>La Déficience Totale ou Cécité Absolue : Absence de perception lumineuse.</li>
	</ul>
	<Text>
		De nombreuses aides techniques et humaines sont disponibles. Elles sont nécessaires pour
		accepter le handicap, aménager et améliorer les conditions de vie au quotidien. C’est un travail
		long qui se fait étape par étape. Nous vous conseillons de consulter notre page “BASSE VISION“,
		qui vous apportera conseils et adresses utiles.
	</Text>
</Section>
