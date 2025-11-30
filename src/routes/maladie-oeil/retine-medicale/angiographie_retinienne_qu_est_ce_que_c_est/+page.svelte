<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineMedical, RetineMedicalPageThreeIlluOne } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-medicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Angiographie rétinienne : qu'est-ce que c'est ?</Title>
		<Text>
			L'angiographie rétinienne est un examen qui permet d'étudier la vascularisation de la rétine.
			Autrement dit, l'ophtalmologiste peut étudier la manière dont le sang y circule. D’usage
			quotidien avant l’avènement de la Tomographie à Cohérence Optique (OCT-SD, OCT-A), son emploi
			est plus rare aujourd'hui. Toutefois, elle reste un examen incontournable dans bon nombre de
			situations. Beaucoup de maladies rétiniennes sont accessibles à l'exploration angiographique.
		</Text>
	</div>

	<figure
		class="border-light-grey/60 bg-primary-background r mx-auto w-full max-w-lg overflow-hidden"
	>
		<img
			src={RetineMedicalPageThreeIlluOne}
			alt="Patiente après une injection intra-vitréenne"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="h2">À quoi sert une angiographie rétinienne ?</Title>
	<Text
		>L'angiographie rétinienne est un examen de diagnostic. Elle permet de connaître avec précision
		l'état et le fonctionnement des vaisseaux sanguins rétiniens (artères, veines, capillaires) et
		de la choroïde (couche vasculaire situé entre la rétine et la sclère).</Text
	>
	<Text>Grâce à l'angiographie, l'ophtalmologiste pourra :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Établir le diagnostic précis d'un grand nombre de pathologies vasculaires oculaires
			(DMLA, occlusion veineuse rétinienne, occlusion artérielle rétinienne, degré d'ischémie en cas
			de rétinopathie diabétique...) ;
		</li>
		<li>
			De guider un traitement au laser, notamment une photocoagulation à l'Argon, essentielle dans
			la prise en charge de certaines formes de rétinopathie diabétique ;
		</li>
		<li>
			Établir une classification diagnostique précise, dans le cas d'une uvéite postérieure ou
			de naevus choroïdien atypique...
		</li>
	</ul>

	<Title class="mt-10" level="h2">Comment se déroule cet examen ?</Title>
	<Text>
		Une angiographie rétinienne ne requiert pas d’hospitalisation. Elle se déroule au cabinet
		d'Ophtalmologie et fait l'objet d'une consultation dédiée. Il est nécessaire de procéder à
		une dilatation pupillaire, afin de bien visualiser le fond d’œil. Il est donc recommandé de
		venir accompagné ou en transports en commun, car il vous sera impossible de conduire un véhicule
		vous-même durant quelques heures.
	</Text>
	<Text>
		Une perfusion intra-veineuse est posée, pour permettre l'injection des produits
		fluorescents dans les vaisseaux sanguins. Après cette injection, l’ophtalmologiste
		réalisera plusieurs clichés de la rétine. L'angiographie fluorescéinique dure entre 5 et 10
		minutes, le plus souvent. Si une angiographie au vert d'indocyanine est nécessaire, la durée de
		l'examen est plus longue et peut atteindre 45 minutes.
	</Text>
	<Text>Évidemment, des pauses sont réalisées au cours de l'examen.</Text>
	<Text>
		À la suite de l’examen, il est demandé de patienter 30 minutes en salle d’attente afin de
		s’assurer de l’absence d’effets secondaires.
	</Text>

	<Title class="mt-10" level="h2"
		>Quels sont les effets secondaires possibles de l'angiographie ?</Title
	>
	<TextWithCorners>
		Dans l'immense majorité des cas, l'angiographie rétinienne se déroule sans incident.
	</TextWithCorners>
	<Text>
		Certains effets indésirables sont néanmoins possibles. C’est la raison pour laquelle il vous est
		demandé de remplir un questionnaire médical avant la réalisation de cet examen. N’hésitez pas à
		demander des informations complémentaires ou à apporter votre dossier médical. Une parfaite
		connaissance de vos antécédents médicaux est un gage de sécurité.
	</Text>
	<Text>Le risque augmente dans certaines situations :</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Si vous avez déjà fait des allergies cutanées, respiratoires (urticaires, eczéma, asthme) ou
			alimentaires, ou après la prise de certains médicaments ;
		</li>
		<li>Si vous avez une maladie cardiaque ou respiratoire importante ;</li>
		<li>Si vous prenez certains médicaments, en particulier des bétabloquants.</li>
	</ul>
	<Text>
		Dans ces situations, une prémédication orale, quelques jours avant l’examen, est prescrite, afin
		de prévenir la survenue ou de limiter les réactions d’intolérance ou d’allergie.
	</Text>

	<Title class="mt-10" level="sub2">Angiographie à la fluorescéine</Title>
	<Text>
		La fluorescéine est un produit très bien toléré par l'organiseme. Elle est métabolisée et
		éliminée en 24 heures par le foie et le rein.
	</Text>
	<Text>Des effets indésirables sans gravité peuvent survenir.</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Votre peau et vos urines seront colorées en jaune pendant plusieurs heures après l'injection
			de fluorescéine ;
		</li>
		<li>
			L'injection intraveineuse du produit est indolore, sauf si le colorant est injecté en dehors
			de la veine. Cet incident est par ailleurs sans conséquence grave ;
		</li>
		<li>
			Des nausées sont assez fréquentes, plus rarement des vomissements, après l'injection du
			produit. Ces incidents sont sans danger
		</li>
	</ul>
	<Text>
		Si vous en avez déjà̀ fait l'expérience à l'occasion d'une précédente angiographie, signalez-le à
		votre ophtalmologiste. Une prémédication quelques jours auparavant améliorera votre confort et
		évitera d'interrompre l’examen.
	</Text>
	<Text>
		Des réactions d'intolérance graves peuvent apparaitre de façon imprévisible. Fort heureusement,
		elles sont très rares (moins de 1% des cas).
	</Text>
	<Title level="sub2">Grossesse et allaitement</Title>
	<Text class="mt-2">
		En cas de grossesse, aucune complication dûe à la fluorescéine n'a été rapportée, ni pour la
		mère, ni pour l'enfant à naître.
	</Text>
	<Text>
		Il est recommandé d'interrompre un allaitement en cours, pendant les deux jours qui suivent
		l'examen. En effet, la fluorescéine est excrétée dans le lait maternel.
	</Text>

	<Title class="mt-10" level="sub2">Angiographie au vert d’indocyanine</Title>
	<Title level="sub3">Des effets indésirables sans gravité peuvent survenir.</Title>
	<Text>
		Vos selles seront colorées en vert après l’injection de vert d'indocyanine. Ceci est évidemment
		transitoire.
	</Text>
	<Text>
		L'injection intraveineuse du produit est indolore, sauf si le colorant est injecté en dehors de
		la veine. Cet incident est par ailleurs sans conséquence grave.
	</Text>
	<Title level="sub2">Grossesse et allaitement</Title>
	<Text class="mt-2">
		Il n'y a pas d'effet néfaste connu pour le foetus ou la mère. Malgré tout, par principe de
		précaution, cet examen n'est pas réalisé au cours des premiers mois de grossesse.
	</Text>
	<Text>Les effets du vert d'Indocyanine en cas d'allaitement ne sont pas connus.</Text>
</Section>
