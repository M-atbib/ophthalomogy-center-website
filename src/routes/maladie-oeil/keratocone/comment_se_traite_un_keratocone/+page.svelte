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
		<Title level="h1">Comment se traite un kératocône ?</Title>
		<Text>
			Il n’existe à ce jour aucun traitement capable de guérir le kératocône ni de rendre à la cornée sa forme
			initiale : la maladie reste chronique et évolutive.
		</Text>
		<Text>
			Seule une surveillance ophtalmologique régulière permet un diagnostic précoce et une prise en charge optimisée
			pour limiter l’impact sur la vision et la qualité de vie.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<TextWithCorners>
				Toutes les démarches thérapeutiques visent à stabiliser la maladie et à diminuer ses répercussions visuelles.
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Quel est l'intérêt du cross-linking cornéen ?</Title>
			<Text>
				Le cross-linking peut être proposé chez les sujets jeunes (moins de 18 ans) ou lorsque la maladie évolue
				rapidement. C’est le seul traitement capable de freiner l’évolution en rigidifiant le collagène cornéen.
			</Text>
			<Text>
				La cornée est imbibée d’une solution photosensibilisante puis exposée à des rayons UVA concentrés. Réalisé
				sous anesthésie locale et en ambulatoire, le geste est généralement indolore. Les deux yeux sont traités à
				distance l’un de l’autre si nécessaire.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Comment améliorer la vision ?</Title>
			<Text>
				La correction optique dépend du stade de sévérité et peut associer plusieurs options.
			</Text>
			<ul class="list-disc space-y-2 pl-5">
				<li>
					Lunettes : efficaces aux stades précoces (kératocônes frustes ou minimes) pour corriger l’astigmatisme
					myopique induit par le bombement cornéen ;
				</li>
				<li>
					Lentilles rigides perméables aux gaz : seules capables de rester stables sur une cornée irrégulière et de
					créer, via un ménisque de larmes, une surface plus régulière ;
				</li>
				<li>
					Anneaux intra-cornéens : insérés chirurgicalement pour contrôler tout ou partie de la déformation ;
				</li>
				<li>
					Greffe de cornée : indiquée lorsque des opacités empêchent la lumière de traverser, provoquant une chute
					importante de vision malgré les corrections classiques. Elle requiert un suivi long et des traitements
					anti-rejet.
				</li>
			</ul>
			<TextWithCorners>
				L’adaptation en lentilles rigides est un acte médical spécialisé nécessitant plusieurs essais auprès d’un
				ophtalmologiste expert en contactologie.
			</TextWithCorners>
			<Text>
				Lorsque la cornée devient opaque, seule la greffe permet de restaurer la transparence des milieux oculaires.
			</Text>
			<TextWithCorners>
				En France, le kératocône représente jusqu’à 30 % des greffes de cornée réalisées.
			</TextWithCorners>
		</div>
	</div>
</Section>
