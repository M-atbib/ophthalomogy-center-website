<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="[&>*+*]:mt-4">
		<Title level="h1">Conseils après chirurgie de rétine</Title>
		<Text>
			Vous venez d’être opéré(e) par vitrectomie ? Voici les recommandations partagées par l’équipe du
			[Nom de Clinique].
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="[&>*+*]:mt-8">
		<div class="[&>*+*]:mt-4">
			<Title level="h2">Pansement et repos</Title>
			<Text>
				Le pansement posé en salle d’opération doit être conservé uniquement le jour de
				l’intervention. Retirez-le le lendemain matin ; si celui-ci se détache pendant la nuit, ce n’est
				pas grave. L’œil peut ensuite rester à l’air libre.
			</Text>
			<TextWithCorners>Reposez-vous les jours qui suivent la chirurgie.</TextWithCorners>
			<Text>Évitez durant cette période :</Text>
			<ul class="list-disc [&>li+li]:mt-2 pl-5">
				<li>Les environnements sales ;</li>
				<li>Le bricolage, le port de charges lourdes ou le jardinage ;</li>
				<li>La piscine ou toute immersion de la tête ;</li>
				<li>Les activités à risque de traumatisme oculaire.</li>
			</ul>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Traitements post-opératoires</Title>
			<Text>
				Instillez les collyres prescrits tous les jours en respectant l’ordre, les doses et les durées
				inscrites sur l’ordonnance remise avant l’intervention.
			</Text>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Signes attendus</Title>
			<Text>Les manifestations suivantes sont fréquentes et ne doivent pas vous inquiéter :</Text>
			<ul class="list-disc [&>li+li]:mt-2 pl-5">
				<li>Vision imparfaite ou floue ;</li>
				<li>Sensation de grain de sable sous la paupière ;</li>
				<li>Larmoiement inhabituel ;</li>
				<li>Rougeur modérée ;</li>
				<li>Légères douleurs superficielles.</li>
			</ul>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Quand consulter en urgence ?</Title>
			<ul class="list-disc [&>li+li]:mt-2 pl-5">
				<li>Baisse de vision rapide ;</li>
				<li>Éclairs lumineux ;</li>
				<li>Voile persistant ou nouvelles mouches volantes ;</li>
				<li>Rougeur diffuse et marquée ;</li>
				<li>Douleurs importantes.</li>
			</ul>
			<TextWithCorners>
				En cas de symptôme inquiétant, contactez notre standard (05 37 810 828) ou présentez-vous dans
				l’un de nos cabinets. En dehors des horaires d’ouverture, appelez l’établissement où vous avez été
				opéré(e) : une astreinte est assurée.
			</TextWithCorners>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Si un gaz a été injecté</Title>
			<Text>
				Le gaz altère temporairement la transmission de la lumière : la vision reste donc très basse
				jusqu’à sa résorption, ce qui est normal.
			</Text>
			<TextWithCorners>
				Tant qu’il subsiste du gaz, ne prenez pas l’avion et évitez les séjours en altitude. Les variations
				de pression modifieraient son volume avec des conséquences potentiellement graves.
			</TextWithCorners>
		</div>

		<div class="[&>*+*]:mt-4">
			<Title level="h2">Positionnement post-opératoire</Title>
			<Text>
				Selon la pathologie ou la présence d’un gaz/huile de silicone, votre chirurgien peut vous
				demander d’adopter une position spécifique : côté droit, côté gauche, assis/debout ou regard vers le
				bas, parfois en alternance.
			</Text>
			<TextWithCorners>
				Le respect strict de la position et de sa durée est essentiel pour optimiser la récupération
				anatomique et visuelle.
			</TextWithCorners>
		</div>
	</div>
</Section>
