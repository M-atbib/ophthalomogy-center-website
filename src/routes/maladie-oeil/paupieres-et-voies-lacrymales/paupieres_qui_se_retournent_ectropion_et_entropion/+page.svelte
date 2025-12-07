<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		PaupieresPageTwoIlluFour,
		PaupieresPageTwoIlluOne,
		PaupieresPageTwoIlluThree,
		PaupieresPageTwoIlluTwo
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/paupieres-et-voies-lacrymales" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Paupières qui se retournent : ectropion et entropion</Title>
	</div>

	<Text>
		La paupière inférieure doit, pour maintenir un bon équilibre lacrymal et une couverture
		satisfaisante du globe oculaire, être bien appliquée contre ce dernier. Il arrive pourtant que
		cet équilibre positionnel soit altéré, soit par excès d’enroulement de la paupière, soit
		par relâchement.
	</Text>

	<Text>
		Dans le premier cas, on parle d’entropion de paupière inférieure. Dans le second, on parle
		d’ectropion.
	</Text>

	<Title level="h2">Entropion</Title>
	<Title level="sub2">Définition</Title>
	<Text>
		L’entropion correspond à un enroulement excessif de la paupière. Il survient dans l’immense
		majorité des cas sur la paupière inférieure, mais peut, plus rarement, toucher la paupière
		supérieure. L’entropion peut être intermittent ou permanent, selon le mécanisme en cause.
	</Text>
	<figure class="mx-auto w-full max-w-xs">
		<img
			src={PaupieresPageTwoIlluOne}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Text>
		En cas d’entropion, la ligne des cils prend une orientation anormale et ceux-ci vont alors
		frotter sur la surface du globe oculaire, occasionnant des lésions de kératite aux conséquences
		parfois sévères, notamment en cas de surinfection et de constitution d’un abcès cornéen.
	</Text>
	<Text>
		Il n’est malheureusement pas toujours suffisant de procéder à l’épilation des cils frotteurs (ou
		« trichiasiques »).
	</Text>

	<figure class="mx-auto w-full max-w-xs">
		<img
			src={PaupieresPageTwoIlluTwo}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Title level="sub2">Les causes de survenue d'un entropion</Title>
	<ul class="list-disc space-y-2 pl-5">
		<li>
			Le phénomène d’entropion peut être un simple effet de l’âge. On parle alors d’entropion
			involutionnel, consécutif à un relâchement des tissus profonds de la paupière inférieure. Les
			muscles chargés de tracter le bord de la paupière, qui constituent un frein efficace à
			l’enroulement, perdent leur support et, dès lors, leur fonction.
		</li>
	</ul>
	<TextWithCorners>
		L'ophtalmologiste est un partenaire de choix dans la prise en charge des troubles du
		positionnement des paupières.
	</TextWithCorners>
	<ul class="list-disc space-y-2 pl-5">
		<li>
			L'entropion peut survenir après une brûlure locale (thermique ou chimique), après un
			traumatisme avec plaie de la paupière ou dans certains cas de maladies inflammatoires de la
			surface oculaire. On parle alors d’entropion cicatriciel.
		</li>
		<li>
			Parfois, l'entropion fait suite à une irritation chronique de la surface oculaire, qui
			déclenche des clignements répétés et soutenus. Le muscle orbiculaire, qui permet ce mouvement,
			est fortement sollicité. On parle d'entropion spastique.
		</li>
	</ul>

	<Title level="h2">Ectropion</Title>
	<Title level="sub2">Définition</Title>
	<Text>
		À l’inverse de l’entropion, l’ectropion est une bascule du bord libre de la paupière vers
		l’avant, occasionnant un défaut de couverture de la partie inférieure du globe oculaire. Des
		troubles importants de la surface oculaire peuvent alors survenir, conséquence de l’exposition
		excessive et de l’assèchement induit.
	</Text>
	<figure class="mx-auto w-full max-w-xs">
		<img
			src={PaupieresPageTwoIlluThree}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>
	<TextWithCorners>
		L’ectropion est une cause extrêmement fréquente de larmoiement chronique.
	</TextWithCorners>
	<Text>
		En effet, le méat lacrymal n’est plus au contact du globe. Les larmes ne peuvent alors plus
		rejoindre les voies lacrymales par cet orifice. Elles s’accumulent par contre dans le cul-de-sac
		conjonctival inférieur, occasionnant des symptômes visuels et un ruissellement possible sur la
		joue.
	</Text>
	<figure class="mx-auto w-full max-w-xs">
		<img
			src={PaupieresPageTwoIlluFour}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Title level="sub2">Les causes de survenue d'un ectropion</Title>
	<ul class="list-disc space-y-2 pl-5">
		<li>
			Comme pour l’entropion, cette situation survient, dans l’immense majorité des cas, suite au
			vieillissement des tissus péri-oculaires. On parle d’ectropion involutionnel. Une intervention
			chirurgicale est alors indiquée pour retendre la paupière inférieure et permettre sa
			réapplication à la surface du globe.
		</li>
		<li>
			L'ectropion peut survenue dès la naissance, résultat de malformation musculaires. On parle
			alors d'ectropion congénital.
		</li>
		<li>
			Une tumeur palpébrale volumineuse, si elle se développe sur la paupière inférieure peut, par
			son poids excessif, entraîner un basculement de celle-ci vers l'avant. On parle d'ectropion
			mécanique.
		</li>
		<li>
			Les patients atteints de paralysie faciale présentent une malocclusion des paupières
			(phénomène de lagophtalmie). Lorsque le phénomène se prolonge dans le temps, les tissus se
			rétractent et un ectropion paralytique peut se former.
		</li>
	</ul>
	<Text>
		Une telle situation clinique impose le plus souvent un avis spécialisé, pour pouvoir envisager
		la meilleure stratégie thérapeutique, bien souvent chirurgicale.
	</Text>
</Section>
