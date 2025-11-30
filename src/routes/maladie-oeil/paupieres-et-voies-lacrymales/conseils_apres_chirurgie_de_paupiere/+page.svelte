<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/paupieres-et-voies-lacrymales" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4">
		<Title level="h1">Conseils après chirurgie de paupière</Title>
		<Text>Vous venez de bénéficier d'une chirurgie palpébrale ? Voici les bons réflexes à adopter.</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Protection et hygiène</Title>
			<Text>
				Protégez les cicatrices du soleil pendant 6 à 12 mois pour éviter une pigmentation inesthétique :
				portez des lunettes solaires couvrantes et appliquez une crème adaptée.
			</Text>
			<Text>
				Arrêter de fumer avant l’intervention améliore nettement la cicatrisation cutanée. Les points
				de suture sont généralement retirés environ une semaine après l’opération.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Surveillance des symptômes</Title>
			<Text>
				Surveillez l’apparition d’une rougeur persistante, de douleurs importantes ou d’un écoulement
				purulent : ces signes peuvent indiquer une infection et nécessitent une consultation rapide.
			</Text>
			<Text>
				En dehors des situations particulières, une chirurgie palpébrale ne provoque pas de baisse
				d’acuité visuelle. Si votre vision diminue, contactez votre ophtalmologiste en urgence.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Protection mécanique</Title>
			<Text>
				Pour éviter les frottements nocturnes sur la cicatrice, vous pouvez porter une coque rigide de
				protection durant la première semaine.
			</Text>
			<TextWithCorners>
				En cas de question ou de symptôme inhabituel, l’équipe du [Nom de Clinique] reste à votre
				disposition.
			</TextWithCorners>
		</div>
	</div>
</Section>
