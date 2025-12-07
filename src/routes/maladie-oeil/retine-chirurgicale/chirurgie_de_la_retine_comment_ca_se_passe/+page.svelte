<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import { RetineChirurgicale } from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Chirurgie de la rétine : comment ça se passe ?</Title>
	</div>

	<Text>
		Nous abordons, dans cette page, les principes de la vitrectomie, pour illustrer le déroulement
		d'une intervention vitréo-rétinienne telle qu'elle est souvent pratiquée par notre équipe. <br
		/>
		Pour des raisons évidentes, les particularités de chaque pathologie nécessitant une chirurgie du
		segment postérieur (membrane épi-rétinienne, décollement de rétine, trou maculaire, luxation d'implant
		intra-oculaire, traumatisme...) ne seront pas décrites en détail. Évidemment, votre chirurgien vous
		en expliquera toutes les subtilités si vous devez en bénéficier.
	</Text>

	<Title level="h2">Installation du patient et types d'anesthésie</Title>
	<Text>
		Comme c'est le cas pour toutes les chirurgies endo-oculaires, dont la chirurgie de la
		cataracte, tout se déroule au bloc opératoire, dans des locaux spécialement conçus pour assurer
		des conditions d'hygiène adaptées. <br />
		Le patient opéré est installé en position allongée, sur le dos, regard vers le plafond. La tête est
		fixée sur son support par du ruban adhésif, afin d'éviter de petits mouvements involontaires pendant
		l'intervention. Une arrivée d'oxygène est installée sous le champ opératoire. Ainsi, la respiration
		reste confortable pour toute la durée du geste. <br />L'anesthésie doit permettre
		une akinésie (l'oeil ne doit pas bouger) et une analgésie (suppression des douleurs). Pour
		cela, les deux techniques les plus utilisées sont :
	</Text>

	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			L'anesthésie péri-oculaire : un anesthésiant est injecté dans le pourtour de votre oeil ;
		</li>
		<li>L'anesthésie générale</li>
	</ul>

	<Title class="mt-10" level="h2">Principes chirurgicaux et matériel utilisé</Title>
	<Title level="sub2">Accès à la cavité vitréenne</Title>
	<Text>
		Afin de pouvoir pénétrer dans l'oeil et y insérer les instruments nécessaires, le chirurgien
		vitréo-rétinien doit installer des trocarts, comparables à de minuscules puits, qui transpercent
		la paroi du globe oculaire. C'est par ces conduits que les pinces et autres instruments
		nécessaires à la chirurgie seront introduits.  <br />
		Il n'y a que des micro-incisions. Beaucoup comparent cette technique à une "coelioscopie" oculaire.
	</Text>

	<Title level="sub2">Illumination de l'intérieur de l'oeil</Title>
	<Text>
		Pour pouvoir y travailler avec précision, le chirurgien aura besoin d'éclairer les tissus
		intra-oculaires. En profondeur dans le globe, la lumière du microscope opératoire n'est pas,
		seule, suffisante pour assurer une bonne visibilité. C'est pourquoi le chirurgien va introduire
		une source de lumière interne (sonde d'endo-illumination, ou "chandelier").
	</Text>

	<Title level="sub2">Visualisation des structures intra-oculaires</Title>
	<Text>
		Pour pratiquer ce type de chirurgie, comme toutes les chirurgies endoculaires, un microscope
		opératoire est indispensable. Mais il est nécessaire, en plus, d'assurer un agrandissement des
		images par des lentilles qui sont soit posées sur votre oeil, soit distantes (ou "non contact").
	</Text>

	<Title level="sub2">Maintenir un volume oculaire constant</Title>
	<Text>
		Pour ce faire, le chirurgien va mettre en place une ligne d'infusion.Il s'agit d'une arrivée de
		liquide, placée dans l'oeil et qui l'irrigue en continu, afin de garantir une bonne stabilité du
		globe. Pendant la chirurgie, la pression de l'oeil est minutieusement contrôlée à tout instant.
	</Text>
	<Title level="sub2">Vitrectomie</Title>
	<Text>
		Le vitré est un gel transparent, qui remplit la partie postérieure de l'oeil. Ce vitré est, à la
		fois, responsable d'une partie des maladies rétiniennes chirurgicales et un obstacle pour
		atteindre votre rétine. Le chirurgien vitréo-rétinien doit, dans tous les cas, le retirer à
		l'aide d'un vitréotome, qui est un instrument qui coupe et aspire le vitré.
	</Text>

	<Title class="mt-10" level="h2">Gestes complémentaires possibles</Title>

	<Title level="sub2">Laser et cryothérapie</Title>
	<Text>
		Afin de traiter des lésions rétiniennes ou de "fusionner" les différents feuillets entre eux, le
		chirurgien pourra utiliser :
	</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Du laser, par voie endoculaire ou par voie exoculaire ;</li>
		<li>
			De la cryothérapie : une sonde (cryode) est appliquée sur la paroi du globe et refroidie à une
			température extrême, afin de givrer la rétine.
		</li>
	</ul>
	<Title level="sub2">Coloration</Title>
	<Text>
		Afin de colorer certaines structures de l'oeil, il existe de nombreux colorants spécifiques :
		colorant du vitré, colorant de membranes...
	</Text>
	<Title level="sub2">Pelage de membranes</Title>
	<Text>
		Membranes épi-rétiniennes, membranes limitantes internes, proliférations vitré-rétiniennes...
		Toutes ces structures peuvent être pelées à la pince micro-chirurgicale.
	</Text>
	<Title level="sub2">Injection de produits pharmacologiques dans la cavité oculaire</Title>
	<Text>
		Le chirurgien dispose de nombreux agents pharmacologiques (anti-VEGF, rt-PA, corticoïdes,
		antibiotiques...) qu'il peut injecter dans l'oeil pendant l'intervention, en fonction de la
		situation clinique et de la pathologie à traiter.
	</Text>
	<Text>
		En fonction du contexte, des gestes additionnels (ablation de corps étranger, récupération
		d’implant, aspiration de cristallin luxé…) peuvent être nécessaires.
	</Text>
	<Title class="mt-10" level="sub2">Tamponnement</Title>
	<Text>
		Afin de maintenir la rétine en place ou de limiter le saignement post-opératoire, votre
		ophtalmologiste peut injecter un produit de tamponnement :
	</Text>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Gaz : plusieurs gaz existent. Il sont choisis en fonction de leur temps respectif de
			résorption. Ils s'éliment naturellement en plusieurs semaines.
		</li>
		<li>
			Huile de silicone : l'huile de silicone ne se résorbe pas et doit souvent être retirée lors
			d'une nouvelle intervention.
		</li>
	</ul>
	<Title class="mt-10" level="sub2"
		>Ablation de corps étrangers, récupération d'implant, aspiration de cristallin luxé...</Title
	>
	<Text>
		Ces gestes sont parfois nécessaires et sont, évidemment, dépendant de la situation clinique qui
		a amené à l'indication chirurgicale.
	</Text>

	<Title class="mt-10" level="h2">Gestes complémentaires sur le segment antérieur de l'oeil</Title>
	<Title class="mt-10" level="sub2">
		Ces gestes sont parfois nécessaires et sont, évidemment, dépendant de la situation clinique qui
	</Title>
	<Text>
		Si le cristallin est opacité (cataracte) ou si la situation le nécessite, il pourra vous être
		proposé de réaliser une extraction du cristallin et une pose d'implant dans le même temps
		opératoire.  <br />
		Dans tous les cas, la vitrectomie favorise la survenue d'une cataracte. Ainsi, 95% des patients sont
		opérés du cristallin dans les 5 ans suivant la chirurgie de la rétine.
	</Text>

	<Title class="mt-10" level="h2">Implantation</Title>
	<Text>
		En fonction de l'indication chirurgicale, le chirurgien vitréo-rétinien pourra choisir des
		implants fixés à l'iris, fixés à la sclère ou encore introduits dans le sulcus ciliaire.
	</Text>

	<Title class="mt-10" level="h2">Complications de la chirurgie vitréo-rétinienne</Title>
	<ul class="mt-3 list-disc pl-5 [&>li+li]:mt-2">
		<li>Les principaux risques de ce type d'intervention sont :</li>
		<li>La cataracte, d'apparition rapide ou de survenue plus tardive ;</li>
		<li>Une infection oculaire grave (endophtalmie) ;</li>
		<li>Des déchirures rétiniennes ou la survenue d'un décollement de rétine ;</li>
		<li>Des fuites au niveau des orifices de trocarts ;</li>
		<li>Une inflammation post-opératoire ;</li>
		<li>Une hyperpression oculaire post-opératoire.</li>
	</ul>
	<Text
		>Pour toutes ces raisons, une surveillance régulière et attentive est évidemment nécessaire
		après ce type de chirurgie.</Text
	>
</Section>
