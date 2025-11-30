<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/keratocone" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Qu'est-ce qu'un kératocône ?</Title>
		<Text>
			Le kératocône est une maladie de la cornée, cette lentille transparente qui laisse entrer la lumière dans l’œil.
			Alors que la cornée garde une forme stable chez la plupart des adultes, elle s’amincit et se bombe progressivement
			chez les patients atteints.
		</Text>
		<Text>
			L’affection touche principalement l’adulte jeune et progresse lentement, exposant à des complications si elle n’est
			pas surveillée.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Que se passe-t-il en cas de kératocône ?</Title>
			<Text>
				Un amincissement localisé entraîne un bombement conique de la cornée. Cette déformation est responsable d’un
				astigmatisme myopique cornéen, souvent asymétrique entre les deux yeux.
			</Text>
			<Text>
				Les causes précises restent inconnues mais des facteurs génétiques sont suspectés : antécédents familiaux,
				maladies du tissu conjonctif (Marfan, Ehlers-Danlos), trisomie 21. Les frottements oculaires vigoureux, fréquents
				chez les patients allergiques, pourraient accélérer la déformation.
			</Text>
			<TextWithCorners>En France, l’âge moyen au diagnostic est de 27 ans.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Quelles sont les conséquences visuelles ?</Title>
			<Text>
				Aux stades précoces, la baisse de vision est bien corrigée par des lunettes ou des lentilles adaptées. Lorsque
				la maladie progresse, des opacités cornéennes (stries de Vogt, taches sous-épithéliales) peuvent se former, bloquant
				la lumière et entraînant une perte visuelle irréversible malgré la correction optique.
			</Text>
			<Text>
				Le diagnostic repose sur un examen ophtalmologique complet avec topographie cornéenne, véritable carte 3D de la
				cornée permettant de détecter la maladie précocement.
			</Text>
			<Text>
				En raison de ce risque de déformation, le kératocône constitue une contre-indication à la chirurgie réfractive au
				laser. Le dépistage est systématique avant tout projet opératoire.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Évolution et complications</Title>
			<Text>
				Le kératocône est chronique, sans traitement curatif : les prises en charge visent uniquement à limiter les
				conséquences visuelles.
			</Text>
			<Text>
				Il peut provoquer l’hydrops cornéen, complication aiguë liée à la rupture des couches internes amincies de la
				cornée. Un œdème brutal survient, rendant l’œil rouge, douloureux, avec une baisse de vision rapide.
			</Text>
			<TextWithCorners>
				En cas de douleur, de rougeur ou de baisse de vision soudaine chez un patient atteint de kératocône, une
				consultation ophtalmologique en urgence est indispensable.
			</TextWithCorners>
		</div>
	</div>
</Section>
