<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { PaupieresPageOneIlluOne, PaupieresPageOneIlluTwo } from '$lib/assets';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href="/maladie-oeil/paupieres-et-voies-lacrymales" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="my-10">
		<Title level="h1">Paupières qui tombent : dermatochalasis et ptosis</Title>
	</div>

	<Title level="h2">Ptosis - Blépharoptosis</Title>
	<Title level="sub2">Définition</Title>

	<Text>
		La ptose (ou « ptosis », « chute ») de la paupière supérieure peut être remarquée à tout âge. Si
		elle est présente dès la naissance, on parle de « ptsosis congénital ». Sinon, il s’agit d’un
		« ptosis acquis ». <br />
		Une description anatomique simplifiée de la paupière est nécessaire pour bien comprendre les mécanismes
		en jeu.
	</Text>
	<figure class="mx-auto w-full max-w-xs">
		<img
			src={PaupieresPageOneIlluOne}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>

	<Text>Il y a schématiquement deux zones à individualiser :</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			La plus superficielle est la lamelle palpébrale antérieure, formée par la peau et le plan
			musculaire sous-cutané
		</li>
		<li>
			La plus profonde est la lamelle palpébrale postérieure, formée par une bandelette
			cartilagineuse appelée « le tarse ».
		</li>
	</ul>
	<Text>
		Le clignement palpébral comporte un temps d’ouverture et un temps de fermeture, tous deux
		contrôlés par des nerfs et des muscles différents. <br />
		Le ptosis est défini par un défaut d’ouverture palpébrale, quel qu’en soit le degré. Cette atteinte
		représente, en premier lieu, un trouble d’ordre esthétique, surtout lorsqu’il existe une différence
		importante entre la paupière supérieure droite et la paupière supérieure gauche, induisant une asymétrie
		prononcée du regard. <br />
		Dans les cas les plus évolués, la paupière peut recouvrir la pupille et, dès lors, entraîner une
		baisse de la vision et une amputation du champ visuel. <br />Il convient alors d’agir et votre
		ophtalmologiste vous proposera sans doute une intervention chirurgicale, afin de restaurer une
		fonction visuelle satisfaisante. <br />
		En cas de plainte essentiellement esthétique, une solution peut évidemment également être proposée.
	</Text>

	<TextWithCorners>
		L'ophtalmologiste est un partenaire de choix dans la prise en charge des troubles du
		positionnement des paupières.
	</TextWithCorners>

	<Title class='mt-10' level="sub2">Causes et prise en charge</Title>
	<Text>La chirurgie du ptosis va s’attacher à résoudre la cause de celui-ci.</Text>
	<Title level="sub3">Ptosis aponévrotique</Title>
	<Text>
		Le plus souvent, il existe une distension du muscle releveur de la paupière, ou plus précisément
		de son aponévrose. Celle-ci est une structure permettant d’attacher le muscle à la lamelle
		palpébrale antérieure, au niveau du pli de la paupière supérieure. En cas de détachement de
		cette aponévrose ou d’altération anatomique, la force du muscle n’est plus transmise à la
		paupière et elle ne va donc plus s’ouvrir suffisamment.
	</Text>
	<Title level="sub3">Autres causes de ptosis</Title>
	<Text>
		Il existe évidemment de nombreuses autres causes de ptose de paupière supérieure. Par exemple:
	</Text>
	<ul class="mt-4 list-disc pl-5 [&>li+li]:mt-2">
		<li>
			En cas de tumeur palpébrale volumineuse, son poids excessif peut dépasser les capacités
			musculaires du releveur de la paupière.  On parle de ptosis mécanique.
		</li>
		<li>
			Après certains accidents vasculaires cérébraux, la récupération est incomplète et
			l’innervation du muscle releveur de la paupière devient insuffisante. On parle de ptosis
			neurogène.
		</li>
		<li>
			Certains traumatismes et plaies occasionnent parfois des lésions nerveuses et musculaires, qui
			affectent la statique palpébrale. On parle de ptosis traumatique.
		</li>
	</ul>
	<Title level="sub3">Chirurgie</Title>
	<Text>
		La chirurgie du ptosis offre de bons résultats fonctionnels et esthétiques. Les cicatrices en
		sont presque invisibles, puisqu’elles sont, le plus souvent, enfouies dans le pli cutané
		palpébral supérieur.
	</Text>
	<Text>
		Si vous présentez un tel tableau clinique, une consultation orientée en pathologies de
		l’appareil palpébral  permettra de préciser votre degré d’atteinte.
	</Text>
	<Text>
		En cas de ptosis de survenue brutale, ou s’il est associé à d’autres symptômes visuels, en
		particulier une vision double, il convient de consulter votre ophtalmologiste en urgence.
	</Text>

	<Title class='mt-10' level="h2">Dermatochalasis</Title>
	<Text
		>Cette affection représente un motif de consultation voisin du ptosis précédemment décrit.  Il
		peut en effet être, lui aussi, responsable d’une chute, cette fois mécanique, de la paupière
		supérieure.
		<br />
		Le dermatochalasis est défini par la présence d’un excès de peau dans la région palpébrale et sourcilière.
		Les tissus sous-cutanés sont également relâchés et il peut se produire un bombement, sous l’excès
		de peau, de graisse sous-cutanée.</Text
	>
	<figure class="mx-auto w-full max-w-lg">
		<img
			src={PaupieresPageOneIlluTwo}
			alt="Illustration de la sélection d'implants"
			class="h-full w-full object-cover"
		/>
	</figure>
	<Text>
		Les patients souffrant de dermatochalasis peuvent se plaindre des mêmes maux qu’en cas de
		ptosis ; il s’agira soit d’une plainte uniquement esthétique, soit d’une plainte fonctionnelle
		avec une altération des fonctions visuelles, surtout par amputation du champ visuel vertical. <br
		/>
		Là encore, une intervention chirurgicale est possible. La technique utilisée est la blépharoplastie
		supérieure, qui vise à enlever l’excès de peau et, dans certains cas, l’excès de graisse sous-cutanée
		si nécessaire. <br />
		Les résultats post-opératoires sont rapides et les cicatrices souvent invisibles, puisque qu’elles
		sont masquées par le pli de la paupière supérieure.
	</Text>
</Section>
