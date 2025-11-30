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
		<Title level="h1">Pathologies des voies lacrymales de l'adulte</Title>
		<Text>
			Les voies lacrymales forment une véritable pompe qui draine les larmes vers les fosses nasales.
			Toute obstruction entraîne un larmoiement permanent avec écoulement sur la joue.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Title level="h2">Anatomie et production des larmes</Title>
			<Text>
				Les méats lacrymaux recueillent les larmes et les dirigent via les canalicules vers le sac
				lacrymal, équipé de la valve de Rosenmüller avant de déboucher dans le canal lacrymo-nasal et la
				valve de Hasner. La production provient de la glande lacrymale principale et de glandes
				accessoires (Meibomius).
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Dacryocystite</Title>
			<Text>
				Infection du sac lacrymal, le plus souvent consécutive à une sténose du canal lacrymo-nasal. Les
				larmes stagnent, provoquant tuméfaction douloureuse, rougeur et risque de fistulisation ou de
				cellulite orbitaire.
			</Text>
			<Text>
				La prise en charge associe antibiothérapie, éventuelle incision pour drainer le pus, puis
				traitement de l’obstruction (dacryo-cysto-rhinostomie avec mise en place d’une sonde en silicone).
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Larmoiement chronique</Title>
			<Text>
				Tout rétrécissement sur l’arbre lacrymal peut engendrer un larmoiement permanent.
			</Text>
			<Title level="sub2">Causes fréquentes</Title>
			<ul class="list-disc space-y-2 pl-5">
				<li>Lithiases (dacryolithes) provoquant des crises de “colique lacrymale” ;</li>
				<li>Canaliculites infectieuses, médicamenteuses ou inflammatoires ;</li>
				<li>Sténoses post-traumatiques ou post-chirurgicales ;</li>
				<li>Malpositions palpébrales déplaçant les méats.</li>
			</ul>
		</div>

		<div class="space-y-4">
			<Title level="h2">Explorations spécialisées</Title>
			<TextWithCorners>
				Une consultation dédiée auprès d’un ophtalmologiste spécialisé est souvent nécessaire.
			</TextWithCorners>
			<Text>
				Au-delà de l’examen clinique, plusieurs examens complètent le diagnostic : sondage doux, lavage,
				dacryocystographie, dacryo-scanner/IRM, scintigraphie, voire endoscopie nasale.
			</Text>
		</div>
	</div>
</Section>
