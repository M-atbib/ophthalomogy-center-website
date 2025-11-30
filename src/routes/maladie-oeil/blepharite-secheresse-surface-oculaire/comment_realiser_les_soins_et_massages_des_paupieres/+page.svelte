<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/blepharite-secheresse-surface-oculaire" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Comment réaliser les soins et massages des paupières ?</Title>
		<Text>
			Prescrits en cas de blépharite meibomienne, les massages palpébraux constituent le traitement principal de la
			secheresse oculaire associée. Ils ne doivent cependant pas être effectués dans les 4 semaines suivant une chirurgie
			oculaire.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Pourquoi masser ?</Title>
			<Text>
				Les larmes combinent une partie aqueuse et une partie huileuse (meibum) sécrétée par les glandes de Meibomius. En
				cas de blépharite, ces glandes s’obstruent, la qualité des larmes chute et l’œil devient sec. Les massages
				désobstruent les glandes, stabilisent le film lacrymal, limitent l’inflammation et réduisent la récidive des
				chalazions.
			</Text>
			<TextWithCorners>L’objectif est de vidanger mécaniquement les glandes de Meibomius.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Quelle fréquence ?</Title>
			<Text>
				Commencer par une fréquence élevée (quotidienne pendant quelques semaines), puis espacer progressivement (tous les
				2 jours, puis une fois par semaine). Les soins doivent perdurer à vie pour maintenir les bénéfices.
			</Text>
			<Text>Le moment de la journée importe peu : régularité et bonne exécution priment.</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Chaleur et préparation</Title>
			<Text>
				La chaleur liquéfie le meibum et facilite l’évacuation : profiter de la douche chaude, appliquer un gant d’eau
				chaude (à réchauffer régulièrement) ou utiliser un masque chauffant prescrit par l’ophtalmologiste pendant
				quelques minutes.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Gestes de massage</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Paupières inférieures : pincer délicatement entre pouce et index et rouler en exerçant une pression régulière de proche en proche ;</li>
				<li>Paupières supérieures : appliquer l’index à plat et glisser de l’intérieur vers l’extérieur en pressant uniformément ;</li>
				<li>La vidange peut faire sortir une substance huileuse ou pâteuse au bord de la paupière, signe de désobstruction.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Traitements associés</Title>
			<div class="space-y-3">
				<Title level="sub2">Lingettes nettoyantes</Title>
				<Text>Imprégnées d’agents antimicrobiens, elles s’utilisent pour frotter la base des cils et retirer les croûtes.</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">Larmes artificielles</Title>
				<Text>
					Complément symptomatique pour soulager brûlures et inconfort. Elles ne remplacent pas les massages car elles
					ne désobstruent pas les glandes.
				</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">Antibiotiques / anti-inflammatoires</Title>
				<Text>
					Réservés aux blépharites sévères sur prescription médicale (antibiotiques, antiparasitaires ou
					anti-inflammatoires). L’automédication est déconseillée.
				</Text>
			</div>
			<TextWithCorners>
				En cas de lassitude, mieux vaut réaliser les soins deux fois par semaine que d’arrêter complètement. Les collyres
					complètent les massages mais ne les remplacent jamais.
			</TextWithCorners>
		</div>
	</div>
</Section>
