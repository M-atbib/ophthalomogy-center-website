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
		<Title level="h1">Ptérygion & pinguecula</Title>
		<Text>
			Certaines lésions bénignes peuvent se développer à partir de la conjonctive, membrane transparente qui recouvre la
			surface de l’œil et la face interne des paupières.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Ptérygion : causes et description</Title>
			<Text>
				Le ptérygion apparaît plus volontiers chez les personnes exposées au soleil ou travaillant en extérieur. L’effet
				« Coroneo » (rayons latéraux concentrés par la cornée) expliquerait sa localisation nasale fréquente.
			</Text>
			<Text>
				Il prend l’aspect d’un triangle progressant lentement sur la cornée. Bien que bénin, il peut devenir inflammatoire,
				empiéter sur la zone optique et provoquer une baisse de vision ou un astigmatisme.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Prise en charge du ptérygion</Title>
			<Text>
				La prévention passe par la protection solaire, notamment contre les rayons latéraux : lunettes de soleil à larges
				branches recommandées. Les lunettes corrigent l’astigmatisme, tandis que les lentilles peuvent être instables.
			</Text>
			<Text>
				Si la lésion envahit la cornée et gêne la vision, une ablation chirurgicale superficielle est pratiquée en
				ambulatoire. Le risque principal reste la récidive malgré la résection complète.
			</Text>
			<TextWithCorners>Ne pas traiter la cause augmente le risque de récidive.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Pinguecula</Title>
			<Text>
				La pinguecula est un diagnostic différentiel : petite lésion conjonctivale bénigne, souvent bien limitée et sans
				retentissement visuel. Elle peut toutefois s’inflammer, devenir rouge ou douloureuse et nécessite alors un
				traitement médical.
			</Text>
			<Text>
				En évoluant, elle peut se transformer en ptérygion. Une simple surveillance est généralement suffisante.
			</Text>
			<TextWithCorners>
				Toute lésion inhabituelle de la surface oculaire doit être montrée à un ophtalmologiste, certaines pouvant être
				malignes.
			</TextWithCorners>
		</div>
	</div>
</Section>
