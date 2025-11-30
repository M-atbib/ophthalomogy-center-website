<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { RetineMedicalPageTwoIlluThree } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-medicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Injections intra-vitréennes (IVT) : comment ça se passe ?</Title>
		<Text>
			Si votre ophtalmologiste a diagnostiqué une maladie rétinienne et, notamment, une DMLA
			exsudative ou un oedème maculaire du diabétique, alors un traitement par injections
			intra-oculaires vous a peut-être été prescrit.
		</Text>
		<TextWithCorners class="mt-6">
			Ces injections ont l’avantage d’apporter le médicament directement au contact de la lésion,
			garantissant une efficacité optimale.
		</TextWithCorners>
		<Text>
			Ce mode d’admnistration permet de « stocker » le produit à l’intérieur de l’œil, via le gel
			vitréen, qui sert en quelque sorte de réservoir ; sa délivrance est alors progressive,
			allongeant la durée d’efficacité.
		</Text>
		<Text>
			Les pathologies traitées de cette manière sont nombreuses et de nouvelles molécules sont
			régulièrement proposées, permettant d’apporter une solution thérapeutique dans des
			situations toujours plus variées.
		</Text>
	</div>

	<figure class="mx-auto mt-6 w-full max-w-lg overflow-hidden rounded-md">
		<img
			src={RetineMedicalPageTwoIlluThree}
			alt="Fond d’œil présentant une occlusion veineuse"
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</figure>

	<Title level="h2">Comment se déroule une injection intra-vitréenne ?</Title>
	<Text>
		L’injection ne dure que quelques secondes. Elle est indolore grâce à des instilations répétées,
		dans les minutes qui précèdent, de collyres qui anesthésient totalement la surface oculaire.
	</Text>
	<Text>
		L'injection ne nécessite pas d’hospitalisation. Le temps à prévoir pour le déroulement de toute
		la procédure n'excède pas celui d'une consultation ophtalmologique standard.
	</Text>
	<Text>L'injection se fait en position semi-allongée.</Text>
	<Text>Des règles strictes d’aseptie sont respectées pour son bon déroulement:</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Elle se déroule dans des locaux spécialement dédiés, dont l'air est traité et filtré ;</li>
		<li>
			Un antiseptique puissant est utilisé pour préparer la surface oculaire après anesthésie ;
		</li>
		<li>Le médecin se prépare selon un protocole très proche de celui d'une chirurgie oculaire.</li>
	</ul>
	<Text>
		Il est, en effet, absolument nécessaire de prendre toutes les précautions pour éviter une
		possible infection. Ce type d'accident est heureusement très rare, mais ses conséquences peuvent
		être sévères pour la fonction visuelle.
	</Text>

	<TextWithCorners class="mt-6">
		En cas de rougeur persistante ou de douleurs importantes dans les heures ou les jours qui
		suivent une injection intra-vitréenne, même si la vision est conservée, il est indispensable
		de consulter en urgence votre ophtalmologiste.
	</TextWithCorners>

	<Title class="mt-10" level="h2">
		Combien d'injections sont nécessaires et quel sera le rythme de surveillance ?
	</Title>
	<Text>
		Le rythme d’injection dépendra de la pathologie nécessitant le traitement et du médicament
		choisi. Le plus souvent, des injections répétées sont nécessaires.
	</Text>
	<Text>
		Un protocole de traitement par injections intra-vitréennes nécessite une collaboration étroite
		entre le patient et son ophtalmologiste. Le rythme de surveillance, les consignes de
		reconsultation précoce, les signes d’alerte doivent être parfaitement connus pour assurer le
		succès thérapeutique.
	</Text>
	<Text>
		À titre d’exemple, le protocole d’injection le plus utilisé en France, dans le traitement de
		la DMLA exsudative, est le protocole « Treat and Extend ». Il s’agit d’un protocole
		personnalisé, adapté à chaque patient et à l’évolution de sa pathologie. Son objectif est à la
		fois d’éviter la récidive de l’œdème et de limiter au maximum le nombre d’injections
		nécessaires.
	</Text>
	<Text>
		Chaque consultation est un temps d’évaluation de l’anatomie et de la fonction visuelle, afin
		d’essayer d’espacer, en toute sécurité, le délai séparant deux injections.
	</Text>
	<Text>Les principales familles de molécules utilisées en intra-vitréen sont :</Text>

	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Les anti-VEGF (Vascular Endothelial Growth Factor), à même de lutter contre la prolifération
			de vaisseaux anormaux à l’intérieur de l’œil
		</li>
		<li>Les corticoïdes, à visée anti-inflammatoire ou anti-oedémateuse</li>
		<li>Les antibiotiques et les antiviraux</li>
	</ul>
</Section>
