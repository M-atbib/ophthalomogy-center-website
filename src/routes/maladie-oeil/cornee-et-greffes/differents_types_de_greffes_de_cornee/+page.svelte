<script lang="ts">
	import { Section, Title, Text, Button, TextWithCorners } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<Section width="wide" spacing="comfortable" contentSpacing="none">
	<Button variant="ghost" href="/maladie-oeil/cornee-et-greffes" class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<div class="space-y-4 lg:w-7/12">
		<Title level="h1">Différents types de greffes de cornée</Title>
		<Text>
			La cornée doit rester transparente pour laisser entrer la lumière. Certaines maladies (kératocône, kératopathie
			bulleuse, cicatrices, dystrophies…) détruisent cette transparence et peuvent nécessiter une greffe.
		</Text>
	</div>
</Section>

<Section spacing="comfortable">
	<div class="space-y-8">
		<div class="space-y-4">
			<Text>
				Tant que la cause peut être traitée médicalement, la greffe est différée. Lorsque les opacités ou l’œdème sont
				installés, la cornée malade est remplacée par un tissu issu d’un donneur (allogreffe cornéenne).
			</Text>
			<TextWithCorners>
				On distingue deux grandes catégories : la kératoplastie transfixiante (pleine épaisseur) et les kératoplasties
				lamellaires (partielles).
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Kératoplastie transfixiante</Title>
			<Text>
				Technique historique consistant à retirer toute l’épaisseur de la cornée malade. Le greffon circulaire du
				donneur est suturé à la cornée du receveur grâce à des fils microchirurgicaux assurant l’étanchéité de l’œil.
			</Text>
		</div>

		<div class="space-y-4">
			<Title level="h2">Kératoplasties lamellaires</Title>
			<Text>
				Seule une partie de l’épaisseur cornéenne est remplacée, limitant l’invasivité, le nombre de sutures et le
				risque de rejet.
			</Text>
			<div class="space-y-3">
				<Title level="sub2">Kératoplastie lamellaire antérieure profonde (KLAP / DALK)</Title>
				<Text>
					Les couches superficielles (épithélium, Bowman, stroma antérieur) sont greffées lorsque l’endothélium du
					receveur reste sain. Le greffon est fixé par des fils très fins.
				</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">Greffe endothéliale (DMEK)</Title>
				<Text>
					Indiquée lors des pathologies endothéliales (cornea guttata, décompensation bulleuse). Seules la membrane de
					Descemet et l’endothélium sont remplacés. Aucun point de suture : une bulle d’air maintient le greffon en place.
				</Text>
				<Text>
					La technique est délicate et impose des consignes postopératoires strictes pour garantir l’adhérence du greffon.
				</Text>
			</div>
		</div>

		<div class="space-y-4">
			<Title level="h2">À savoir pour les patients greffés</Title>
			<Text>
				La greffe s’adresse aux patients dont la vision est sévèrement altérée par une cornée irréversiblement lésée. Le
				résultat visuel dépend de nombreux facteurs et ne vise pas une vision parfaite sans correction.
			</Text>
			<Text>
				Le chirurgien choisit la technique la plus adaptée, parfois modifiée en cours d’intervention selon les
				contraintes anatomiques. Un suivi à vie est indispensable pour dépister les complications et adapter le traitement
				anti-rejet, le plus souvent par collyres corticoïdes prolongés.
			</Text>
			<TextWithCorners>
				Comme tout tissu, le greffon vieillit : environ 30 % restent fonctionnels 20 ans après l’intervention, mais seuls
				3 % dépassent 30 ans.
			</TextWithCorners>
		</div>

		<div class="space-y-4">
			<Title level="h2">Principales complications</Title>
			<div class="space-y-3">
				<Title level="sub2">Peropératoires</Title>
				<Text>
					Une hémorragie expulsive à ciel ouvert peut survenir lors d’une greffe transfixiante lorsque l’œil est sans
					protection ; elle reste rare mais grave. D’autres incidents, comme des lésions de l’iris ou une issue de gel
					vitréen, sont possibles.
				</Text>
			</div>
			<div class="space-y-3">
				<Title level="sub2">Postopératoires</Title>
				<Text>
					Rejet du greffon (plus fréquent après transfixiante), infections favorisées par les corticoïdes, hypertonie
					oculaire, astigmatisme irrégulier nécessitant parfois des lentilles rigides, ou encore syndrome d’Urrets-Zavalia
					avec mydriase persistante.
				</Text>
				<TextWithCorners>
					Le rejet se prévient avant tout par l’instillation assidue de collyres corticoïdes pendant une très longue
					période. Toute suspicion d’infection doit être prise au sérieux pour éviter l’échec de la greffe.
				</TextWithCorners>
			</div>
		</div>
	</div>
</Section>
