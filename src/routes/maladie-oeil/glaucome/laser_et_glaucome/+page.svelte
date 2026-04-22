<script>
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import {
		GlaucomePageTwoIlluTwo,
		GlaucomePageTwoIlluThree,
		GlaucomePageThreeIlluOne
	} from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/glaucome" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<Title level="h1">Laser et glaucome</Title>
	<Text>
		Les technologies laser sont très présentes dans le domaine de l’Ophtalmologie. Les usages
		thérapeutiques en sont nombreux, notamment dans le domaine de la chirurgie réfractive ou la
		prise en charge de certaines pathologies rétiniennes. Concernant le glaucome, les usages en sont
		aussi bien thérapeutiques que préventifs.
	</Text>

	<Text>
		Ces gestes sont réalisés au cabinet d’Ophtalmologie, dans le cadre de consultations dédiés. Elle
		ne nécessitent pas d’hospitalisation ou d’anesthésie générale. La durée du geste n’excède pas,
		en règle générale, quelques minutes et le retour au domicile est possible immédiatement après.
	</Text>

	<Title level="h3">Trabéculoplastie sélective au laser (SLT)</Title>
	<Text>
		Cette technique a pour but de faire baisser la pression intra-oculaire. Elle permet un
		remodelage du trabéculum, dans l’angle irido-cornéen et, ainsi, augmente la résorption de
		l’humeur aqueuse.
	</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={GlaucomePageThreeIlluOne}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Text>
		Elle peut être utilisée en première intention (avant tout essai de collyres hypotonisants) ou en
		complément d'autres traitements anti-glaucomateux. Ce choix dépendra évidemment de chaque
		patient, en fonction l'objectif pressionnel à atteindre, de la forme de glaucome diagnostiquée
		et des éventuels antécédents.
	</Text>
	<Text>
		Le geste est indolore et ne nécessite pas de préparation particulière de l’œil, en dehors de
		l’instillation de collyres anesthésiants locaux, dans les minutes qui le précèdent.
	</Text>
	<TextWithCorners>
		La trabéculoplastie sélective au laser est proposée dans le traitement des glaucomes à angle
		ouvert. Elle n’est pas indiquée pour le traitement des glaucomes à angle fermé.
	</TextWithCorners>
	<Text>
		Certaines contre-indications existent et il faudra évidemment les discuter avec votre
		ophtalmologiste.
	</Text>
	<Title level="h3">Iridotomie périphérique</Title>
	<Text>
		Cette technique permet la réalisation d’un trou dans l’épaisseur de l’iris, à l’aide, là encore,
		d’un laser.
	</Text>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={GlaucomePageTwoIlluTwo}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>
	<TextWithCorners>
		Les dimensions du trou sont minimes ; il n’est généralement pas visible à l’œil nu.
	</TextWithCorners>

	<figure class="mx-auto w-full max-w-md overflow-hidden">
		<img
			src={GlaucomePageTwoIlluThree}
			alt="Illustration de la cataracte"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Text>
		L’iridotomie périphérique permet une meilleure répartition de l’humeur aqueuse de part et
		d’autre de l’iris, véritable diaphragme de la partie antérieure de l’œil.
	</Text>

	<ul class="mt-2 mb-6 list-disc space-y-2 pl-5">
		<li>
			Dans les glaucomes par fermeture de l’angle, ou dans certains yeux à risque d’en développer
			un, l’iridotomie périphérique est pratiquée pour lever le bloc pupillaire. Il faut imaginer
			que l’humeur aqueuse fait bomber l’iris vers l’avant, comme la voile d’un bateau. Si ce
			bombement est très marqué, un problème d’accès au trabéculum survient, avec des conséquences
			possibles sur la pression intra-oculaire.
		</li>
		<li>
			À l’inverse, dans d’autres cas, l’iris bombe trop fortement vers l’arrière. On parle alors
			de « bloc pupillaire inverse ». Cette situation est à risque de dispersion pigmentaire,
			prédisposant à un glaucome secondaire à angle ouvert. Là encore, l’iridotomie va mieux
			répartir l’humeur aqueuse et redonner une orientation plane et verticale normale à l’iris.
		</li>
	</ul>

	<Text>
		L’iridotomie périphérique est, elle aussi, une technique rapide, accessible et indolore.
	</Text>

	<Title level="h3">Iridoplastie périphérique au laser Argon</Title>

	<Text>
		Cette technique permet d’amincir et de rétracter la racine (ou périphérie) de l’iris, lorsque
		celle-ci n’a pas suffisamment reculé après une iridotomie périphérique.
	</Text>

	<Text>
		L’indication principale en est le syndrome iris-plateau, qui se complique de glaucomes par
		fermeture de l’angle extrêmement agressifs.
	</Text>

	<Text>
		Le traitement consiste en l’application, sur des zones très focalisées de la périphérie de
		l’iris, d’un traitement au laser Argon qui, par effet thermique, va modifier l’épaisseur et
		l’architecture des tissus iriens. Les impacts peuvent être visibles après la réalisation du
		geste.
	</Text>
</Section>
