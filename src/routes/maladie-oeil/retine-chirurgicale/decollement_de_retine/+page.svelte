<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import {
		RetineChirurgicalePageFourIlluOne,
		RetineChirurgicalePageFourIlluTwo
	} from '$lib/assets';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Décollement de rétine</Title>
	</div>

	<Title level="h2">La rétine : qu'est-ce que c'est ?</Title>
	<Text>
		La rétine est une fine pellicule qui tapisse la partie postérieure de l'oeil. Elle est composée
		de 10 couches permettant de recevoir, de traiter et de transmettre l'information visuelle au
		cerveau, via le nerf optique.
	</Text>
	<Title level="sub3">Anatomie</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			En avant, la rétine est accolée au vitré (poche de gel transparent qui remplit 80% du globe
			oculaire)
		</li>
		<li>
			En arrière, la rétine repose sur la choroïde qui est un tissu vasculaire. Plus en arrière, se
			situe la sclère, tissu fibreux permettant la rigidité du globe oculaire.
		</li>
	</ul>
	<TextWithCorners>
		La rétine peut se détacher de son support : c'est le décollement de rétine.
	</TextWithCorners>
	<figure class=" mx-auto w-full max-w-lg">
		<img
			src={RetineChirurgicalePageFourIlluOne}
			alt="Illustration d'un décollement de rétine"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="h2">Causes du décollement de rétine</Title>
	<Title level="sub2">Déchirures rétiniennes</Title>
	<Text>
		Dans l'immense majorité des cas, le décollement de rétine est causé par la présence d'une ou
		plusieurs déchirure(s) ou trou(s) de la rétine, à travers lesquels du liquide intra-oculaire
		peut s'engouffrer. Il se produit, dans ce cas, un soulèvement de la rétine, de proche en proche.
		C'est ce qu'on appelle le décollement de rétine rhegmatogène.
	</Text>
	<Title level="sub2">Autres causes</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Le décollement de rétine tractionnel se produit lorsque le gel vitréen se rétracte, tire
			directement sur la rétine et la décolle. On observe ce phénomène dans les cas avancés
			de diabète. En effet, dans ce cas, l'adhérence est très forte entre la paroi du vitré (la
			hyaloïde postérieure) et la rétine.
		</li>
		<li>
			Le décollement de rétine exsudatif est lié à un soulèvement rétinien sans déchirure et sans
			traction. On observe ce phénomène en cas de pathologies inflammatoires oculaires, ou encore
			devant certaines tumeurs oculaires ...
		</li>
	</ul>

	<Title level="h2">Facteurs de risque de décollement de rétine rhegmatogène</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Chirurgie de la cataracte récente ou ancienne ;</li>
		<li>Traumatisme oculaire ;</li>
		<li>Maladies de la rétine, vitréo-rétinopathies ;</li>
		<li>Antécédents familiaux de décollement de rétine ;</li>
		<li>Antécedents personnels de déchirures rétiniennes ou de trous ;</li>
		<li>
			Antécedents personnels de décollement de rétine : un décollement de rétine survient de l'autre
			côté dans un peu moins de 10% des cas, chez les patients ayant déjà souffert de cette
			affection.
		</li>
	</ul>

	<Title level="h2">Symptômes du décollement de rétine</Title>
	<Text>
		Lorsqu'un patient présente un décollement de rétine, il présente des symptômes liés à la
		déchirure, qui est elle-même la cause du décollement :
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Éclairs lumineux (phosphènes) ;</li>
		<li>Mouches volantes (myodésopsies).</li>
	</ul>
	<Text>Il présente également des symptômes liés au décollement de rétine en lui-même :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>Amputation du champ visuel (scotome), qui progresse ;</li>
		<li>Baisse de vision rapide ou progressive.</li>
	</ul>

	<Text>
		En cas survenue d'un ou plusieurs de ces symptômes, nous vous invitons à vous rendre en urgence
		dans l'un de nos cabinets, afin de s'assurer de l'absence de complications rétiniennes.
	</Text>

	<Title level="h2">Traitement du décollement de rétine</Title>
	<TextWithCorners>Le décollement de rétine constitue une urgence chirurgicale.</TextWithCorners>
	<Text>
		Le seul traitement possible est la chirurgie, qui consiste à réappliquer la rétine décollée. De
		nombreuses techniques existent. La technique opératoire qui vous sera proposée est fonction de
		la localisation du décollement, du nombre de déchirures diagnostiquées, de votre âge, de vos
		activités, de votre statut cristallinien, de l'ancienneté du décollement...
	</Text>
	<Title level="sub2">La chirurgie est interne ou externe.</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Voie endo-oculaire / vitrectomie : le chirurgien va aspirer le gel vitréen, afin de libérer
			les tractions sur la rétine. Il s'agit du cas le plus fréquent.
		</li>
		<li>
			Voie exo-oculaire : le chirurgien va rapprocher la rétine de la déchirure en comprimant l'oeil
			par voie externe (grâce à des bandes de silicone ou à des éponges, suturées contre la sclère).
		</li>
	</ul>

	<figure class=" mx-auto w-full max-w-lg">
		<img
			src={RetineChirurgicalePageFourIlluTwo}
			alt="Illustration d'un décollement de rétine"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="sub2">Les déchirures sont traitées avec du laser ou du froid.</Title>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Laser / photocoagulation rétinienne: des impacts au laser sont réalisés tout autour
			des déchirures afin de "fusionner" les différentes couches de la rétine. Ce barrage permet
			d'éviter la récidive du décollement. Le principe est identique au traitement des déchirures
			rétiniennes en consultation, mais cette fois, il est réalisé dans le temps chirurgical, au
			bloc opératoire.
		</li>
		<li>
			Froid / cryothérapie : une sonde est placée au contact de l'oeil, à l'endroit de la
			déchirure. Elle est refroidie à des températures extrêmes, permettant, cette fois depuis
			l'extérieur de l'oeil, de "fusionner" les couches de la rétine.
		</li>
	</ul>

	<Title level="sub2">Du gaz est souvent injecté.</Title>
	<Text>
		Afin de maintenir la rétine en place, un gaz est souvent injecté à l'intérieur de l'oeil. Ce
		gaz, expansif, va persister quelques jours (ou quelques semaines) afin de laisser le temps à la
		rétine de cicatriser sans zone soulevée.
	</Text>
	<TextWithCorners
		>Dans tous les cas, vous devrez garder une position post-opératoire particulière.</TextWithCorners
	>
	<Text>
		Cette position sera fonction du type de décollement de rétine et du traitement réalisé. Votre
		chirurgien vous conseillera, ainsi, de rester positionné sur votre côté gauche, votre côté
		droit, ou encore sur le ventre, le dos, assis, ... Il est également possible que votre
		chirurgien vous conseille d'alterner les positions. La durée nécessaire de ce positionnement
		est variable.
	</Text>
	<Text>Le gaz va se résorber naturellement et progressivement.</Text>
	<Text>
		Tant que persiste du gaz à l'intérieur, il est formellement contre-indiqué de prendre l'avion ou
		de séjourner en altitude. En effet, les modifications de pression atmosphérique modifient le
		volume occupé par le gaz. Ce phénomène peut avoir des conséquences extrêmement graves pour votre
		oeil.
	</Text>
	<Text>
		En fonction de votre situation clinique, de l'huile de silicone peut être injectée à l'intérieur
		de votre oeil, à la place du gaz. Ce choix vous sera évidemment expliqué par votre chirurgien.
	</Text>
	<Title level="sub2"
		>Il est fréquent de réaliser un chirurgie de cataracte dans le même temps opératoire.</Title
	>
	<Text>
		Si vous avez une cataracte, elle peut gêner le chirurgien pendant l'intervention. De plus, la
		vitrectomie (aspiration du gel vitréen) favorise la survenue d'une cataracte. Votre
		ophtalmologite peut ainsi vous proposer de réaliser la chirurgie de cataracte en même temps que
		la chirurgie du décollement de rétine.
	</Text>
	<Title level="h2">Risques de la chirurgie du décollement de rétine</Title>
	<Text>
		Le décollement de rétine est une maladie grave. Même en cas de traitement précoce et bien
		réalisé, il persiste souvent des séquelles visuelles.
	</Text>
	<Text>
		En parallèle, comme pour toute chirurgie, des complications sont possibles dans la période
		post-opératoire :
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			Cataracte : la survenue d'un décollement de rétine et son traitement chirurgical (notamment la
			vitrectomie) favorisent la survenue d'une cataracte. Ainsi, 95% des patients ayant bénéficié
			d'une vitrectomie sont opérés de cataracte dans les cinq ans ;
		</li>
		<li>
			Récidive du décollement de rétine : malgré un traitement bien mené, il est fréquent que la
			rétine se décolle de nouveau, soit de manière précoce, soit de manière plus tardive. Vous
			devrez être attentif tout au long de votre vie et consulter au moindre doute ;
		</li>
		<li>Développement d'une membrane épi-rétinienne secondaire ;</li>
		<li>Oedème rétinien post-opératoire (oedème maculaire d'Irvine-Gass) ;</li>
		<li>Endophtalmie (infection intra-oculaire post-opératoire)</li>
		<li>Hypertonie intra-oculaire ...</li>
	</ul>
</Section>
