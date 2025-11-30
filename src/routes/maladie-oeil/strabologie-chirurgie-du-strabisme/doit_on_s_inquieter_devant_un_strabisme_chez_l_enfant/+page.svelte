<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/strabologie-chirurgie-du-strabisme" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Doit-on s'inquiéter devant un strabisme chez l'enfant ?</Title>
		<Text>
			Le strabisme correspond à une perte d’alignement entre les deux yeux : l’un regarde droit devant quand l’autre
			se dévie. Ce déséquilibre peut apparaître dès la naissance, pendant l’enfance ou plus tard chez l’adulte.
		</Text>
		<Text>
			On distingue des formes convergentes (vers le nez), divergentes (vers la tempe) et des strabismes verticaux
			avec un œil orienté vers le haut ou le bas.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Qu'appelle-t-on « strabisme » ?</Title>
			<Text>
				La déviation peut être permanente ou intermittente et concerner un seul œil ou les deux. Chez l’enfant, un
				désordre ophtalmologique ou neurologique est souvent en cause ; chez l’adulte, un problème neuro-vasculaire
				ou la perte de vision d’un œil peut entraîner la déviation.
			</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>Déviation vers le nez : strabisme convergent ;</li>
				<li>Déviation vers la tempe : strabisme divergent ;</li>
				<li>Déviation vers le haut ou le bas : strabisme vertical.</li>
			</ul>
			<TextWithCorners>Le strabisme touche environ 3 % de la population.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Quels sont les facteurs de risque ?</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>
					Défaut visuel d’un œil ou des deux (forte hypermétropie, asymétrie importante) pouvant induire une
					surenchère d’accommodation ;
				</li>
				<li>Antécédents familiaux de strabisme ;</li>
				<li>Prématurité et/ou faible poids de naissance ;</li>
				<li>Œil non voyant provoquant un strabisme divergent, surtout à l’âge adulte.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Quelles sont les conséquences possibles ?</Title>
			<div class="space-y-3">
				<Title level="sub2">Impact sur l'acuité visuelle</Title>
				<Text>
					Le cerveau neutralise souvent l’image de l’œil dévié pour éviter la vision double. Chez l’enfant, cette
					compensation peut conduire à une amblyopie (malvoyance) si rien n’est fait avant 8 ans. Chez l’adulte, la
					vision double (diplopie) est plus fréquente.
				</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">Impact sur la vision binoculaire</Title>
				<Text>
					La coordination imparfaite des yeux altère la vision du relief, voire empêche toute perception
					stéréoscopique.
				</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">Impact esthétique</Title>
				<Text>
					Le retentissement psychologique peut être majeur, à l’école comme à l’âge adulte, et justifie à lui seul
					une prise en charge chirurgicale lorsque cela est possible.
				</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">Strabisme précoce</Title>
				<Text>
					Présent dès la naissance ou dans les 6 premiers mois, il est le plus souvent convergent. Il impose un
					examen ophtalmologique précoce, le port constant de lunettes et une surveillance rapprochée.
				</Text>
			</div>
			<TextWithCorners>La présence d'un strabisme permanent ou intermittent chez un enfant de plus de 3 mois doit alerter.</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Comment se traite un strabisme ?</Title>
			<div class="space-y-3">
				<Title level="sub2">Les lunettes</Title>
				<Text>
					La correction optique peut réduire, voire faire disparaître la déviation. Chez l’enfant, elle est
					prescrite après cycloplégie pour mesurer la réfraction sans accommodation.
				</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">La toxine botulique</Title>
				<Text>
					Utilisée dans certains strabismes précoces, elle est injectée dans les muscles oculomoteurs pour les
					relâcher et différer une chirurgie plus invasive.
				</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">La chirurgie</Title>
				<Text>
					Elle peut être réalisée à tout âge. Chez l’enfant, l’opération est souvent proposée avant l’entrée au CP
					(après 4-5 ans) et peut être répétée en cas de récidive.
				</Text>
			</div>
			<TextWithCorners>Vous êtes gêné par votre strabisme ? Il existe probablement une solution chirurgicale : parlez-en avec votre ophtalmologiste.</TextWithCorners>
		</div>
	</div>
</Section>
