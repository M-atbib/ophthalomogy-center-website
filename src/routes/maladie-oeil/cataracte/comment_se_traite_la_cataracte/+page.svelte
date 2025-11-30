<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { CataractePageTwoHero } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/cataracte" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
		<div class="lg:w-1/2">
			<Title level="h1">Comment se traite la cataracte ?</Title>
			<Text class="mt-4">
				Lorsque le cristallin, véritable lentille à l'intérieur de l'œil, devient opaque, il bloque
				la lumière qui devrait atteindre la rétine. La vision se brouille et changer de lunettes ne
				suffit plus pour corriger le problème.
			</Text>
			<Text class="mt-4">
				La seule solution efficace aujourd'hui est la chirurgie intra-oculaire qui permet de retirer
				le cristallin opacifié.
			</Text>
		</div>
		<figure
			class="mx-auto w-full max-w-2xl overflow-hidden rounded-md border border-light-grey/60 bg-primary-background shadow-sm"
		>
			<img
				src={CataractePageTwoHero}
				alt="Illustration de la cataracte"
				class="h-full w-full object-cover"
			/>
		</figure>
	</div>
</Section>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Title level="h2">Qu'appelle-t-on « cristallin » ?</Title>
	<Text class="mt-4">
		Le cristallin a la forme d’une lentille. Son enveloppe externe, très fine, est appelée sac
		cristallinien ou capsule.
	</Text>
	<Text class="mt-4">A l’intérieur de ce sac, on retrouve deux parties distinctes :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			<Text>Le noyau, qui constitue le cœur du cristallin ;</Text>
		</li>
		<li>
			<Text>Le cortex cristallinien, qui entoure le noyau.</Text>
		</li>
	</ul>
	<Text class="mt-4">
		Ces deux éléments sont le siège de l’opacification, principalement parce que leurs protéines
		s'hydratent progressivement avec le temps.
	</Text>

	<Title class="mt-10" level="h2">Quels sont les principes de la chirurgie de la cataracte ?</Title>
	<Text class="mt-4">
		La technique la plus répandue repose sur la phaco-émulsification, une micro-chirurgie qui
		utilise des ultrasons à l'intérieur de l'œil. C’est une procédure très aboutie et sécurisée.
	</Text>

	<div class="mt-6">
		<Title level="sub2">Aspiration du cristallin opaque</Title>
		<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
			<li>
				<Text>
					L’intervention débute par une incision cornéenne très précise pour entrer dans la chambre
					antérieure de l'œil.
				</Text>
			</li>
			<li>
				<Text>
					Vient ensuite l'ouverture du sac cristallinien (capsulorhexis antérieur) afin d'accéder au
					contenu opacifié.
				</Text>
			</li>
			<li>
				<Text>
					Le noyau et le cortex sont fragmentés puis aspirés à l'aide des ultrasons pour retirer le
					cristallin devenu opaque.
				</Text>
			</li>
		</ul>
	</div>

	<Title class="mt-8" level="sub2">Mise en place d'un implant correcteur</Title>
	<Text class="mt-4">
		Une fois le sac cristallinien vidé, sa capsule sert de support à l’implant intra-oculaire.
		Chaque implant, souple et pliable, possède une puissance optique calculée lors de la
		consultation pré-opératoire pour diriger correctement la lumière vers la rétine.
	</Text>
	<Text class="mt-4">
		L'implant est inséré plié grâce à une cartouche d'injection, puis il se déploie à l'intérieur du
		sac.
	</Text>
	<TextWithCorners class="mt-6">
		L'implant ne se dégrade pas : vous le garderez toute votre vie, quel que soit votre âge au
		moment de l’intervention.
	</TextWithCorners>

	<Title class="mt-8" level="sub2">Fermeture</Title>
	<Text class="mt-4">
		Après la pose de l’implant, des antibiotiques sont injectés pour prévenir les infections, puis
		l’incision est refermée par hydrosuture (injection d’eau) sans nécessiter de point. Cela réduit
		les douleurs post-opératoires ainsi que les risques infectieux.
	</Text>
	<TextWithCorners class="mt-6">
		Les chirurgiens du [Nom de Clinique] sont des experts de la cataracte : tout est mis en œuvre
		pour garantir une procédure rapide, indolore et sécurisée.
	</TextWithCorners>

	<Title class="mt-10" level="h2">La chirurgie de cataracte peut-elle se faire au laser ?</Title>
	<Text class="mt-4">
		Le [Nom de Clinique] dispose de la technologie « femto-cataracte », permettant de réaliser
		certaines étapes (incisions, découpe de la capsule antérieure) au laser.
	</Text>
	<Text class="mt-4">
		Cette technique reste moins courante en raison du surcoût du matériel, et ses résultats sont
		comparables à ceux de la chirurgie manuelle classique.
	</Text>
	<Text class="mt-4">
		Discutez-en avec votre chirurgien afin de déterminer l’approche la plus adaptée à votre
		situation.
	</Text>
</Section>
