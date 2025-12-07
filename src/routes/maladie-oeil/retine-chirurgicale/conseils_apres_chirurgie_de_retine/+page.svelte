<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/retine-chirurgicale" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Conseils après chirurgie de rétine</Title>
	</div>

	<Title class="mt-10" level="h2">Y-a-t-il un pansement à porter ?</Title>
	<Text>
		Votre pansement oculaire doit être gardé uniquement le jour de l'intervention. <br />Vous sortez
		du bloc opératoire et de l'établissement avec un pansement sur l'oeil opéré. Celui-ci a été
		réalisé dans des conditions stériles, à la fin de l'intervention. Vous pourrez le retirer dès le
		lendemain matin et n'aurez plus à en remettre par la suite. Votre oeil peut rester à l'air
		libre.  D'ailleurs, si le pansement venait à se détacher quelques heures après votre retour à
		domicile, pas de panique : vous pouvez aussi passer la première nuit sans pansement.
	</Text>

	<Title class="mt-10" level="h2">Vous devez vous reposer les jours suivant l'intervention.</Title>

	<Text>Il faut éviter :</Text>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>De vous rendre dans des endroits sales ;</li>
		<li>De bricoler, porter des charges lourdes, jardiner... ;</li>
		<li>De mettre votre tête dans l'eau, aller à la piscine... ;</li>
		<li>De pratiquer une activité physique à risque de traumatisme oculaire.</li>
	</ul>

	<Title class="mt-10" level="h2">Y-a-t-il des traitements à instiller ?</Title>
	<Text>
		Des collyres post-opératoires sont à instiller tous les jours. <br />
		Une ordonnance vous a été transmise à la fin de la consultation pré-opératoire, pour vous permettre
		d'aller chercher vos collyres à la pharmacie. Nous vous invitons à bien respecter l'ordre, les doses
		et les durées de traitement inscrites sur l'ordonnance.
	</Text>

	<Title level="h2">Quels sont les signes qui ne doivent pas vous inquiéter ?</Title>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Vision imparfaite, trouble ;</li>
		<li>Sensation de grain de sable sous la paupière ;</li>
		<li>Larmoiement inhabituel de l'oeil opéré;</li>
		<li>Rougeur oculaire modérée ;</li>
		<li>Douleurs superficielles si elles sont modérées.</li>
	</ul>

	<Title class="mt-10" level="h2"
		>Quels sont les signes qui doivent vous amener à nous consulter en urgence ?</Title
	>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Baisse de vision rapide ;</li>
		<li>Éclairs lumineux ;</li>
		<li>Sensation de voile persistante, apparition de mouches volantes ;</li>
		<li>Rougeur oculaire prononcée ;</li>
		<li>Douleurs oculaires importantes.</li>
	</ul>
	<Text>
		Si vous présentez un de ces symptômes, nous vous invitons à appeler notre standard (05 37 810
		828) en journée et en semaine. Sinon, vous pouvez également vous rendre dans l'un de nos
		cabinets, sans rendez-vous. En dehors de nos horaires d'ouverture, appelez l'établissement
		(Clinique ou Centre Hospitalier) dans lequel vous avez été opéré(e). Les chirurgiens du [Nom de
		Clinique] organisent des astreintes pour s'occuper de leurs patients dans ce type de situation.
	</Text>
	<Title class="mt-10" level="h2">En cas d'injection de gaz pendant l'intervention</Title>
	<TextWithCorners>
		Le gaz altère le passage de l'information lumineuse. Votre vision sera très basse tant que le
		gaz ne s'est pas résorbé naturellement. C'est un phénomène tout à fait normal, qui ne doit pas
		vous inquiéter.
	</TextWithCorners>
	<Text>
		Tant que persiste du gaz à l'intérieur, il est formellement contre-indiqué de prendre l'avion ou
		de séjourner en altitude. En effet, les modifications de pression atmosphérique modifient le
		volume occupé par le gaz. Ce phénomène peut avoir des conséquences extrêmement graves pour votre
		oeil.
	</Text>

	<Title class="mt-10" level="h2"
		>Respectez le positionnement post-opératoire conseillé par votre chirurgien</Title
	>
	<Text>
		Dans certaines indications, lorsque du gaz ou de l'huile de silicone sont injectés, ou même si
		ce n'est pas le cas, votre chirurgien vitréo-rétinien vous demandera de respecter une position
		post-opératoire, qui pourra être :
	</Text>
	<ul class="list-disc pl-5 [&>li+li]:mt-2">
		<li>Sur le côté droit ;;</li>
		<li>Sur le côté gauche ;</li>
		<li>Assis / debout ;</li>
		<li>Regard vers le bas ;</li>
	</ul>
	<TextWithCorners>
		Le respect de la position et de sa durée est essentiel à votre récupération anatomique et
		visuelle. Ainsi, vous mettez toutes les chances de votre côté !
	</TextWithCorners>
</Section>
