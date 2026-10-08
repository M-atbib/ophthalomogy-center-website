<script lang="ts">
	import { ArticleImage, DiseaseArticleLayout, Text, Title } from '$lib';
	import { LunettePageSixImgOne } from '$lib/assets';

	const backHref = '/conseils/conseils-lunettes-et-lentilles';
</script>

<DiseaseArticleLayout title="Comment bien entretenir vos lunettes ?" {backHref}>
	<!-- This conseils page reuses the completed lunettes article because the source content and image reference match. -->
	<section>
		<Text>
			Vous trouverez, sur cette page, quelques conseils qui vous aideront à prolonger la durée de
			vie de vos lunettes.
		</Text>
		<ArticleImage
			src={LunettePageSixImgOne}
			alt="Différentes montures posées sur un tableau d'acuité visuelle"
			class="max-w-3xl"
			loading="eager"
		/>
	</section>

	<section>
		<Title level="h3" as="h2">Comment protéger votre paire de lunettes ?</Title>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				Pour éviter la casse, mieux vaut conserver vos lunettes dans un étui solide, lorsqu'elle ne
				sont pas portées.
			</li>
			<li>
				Évidemment, il vaut mieux éviter les activités à risque de traumatisme, qui pourraient
				endommager la monture ou les verres.
			</li>
		</ul>
	</section>

	<section>
		<Title level="h3" as="h2">Avec quoi pouvez-vous entretenir les verres de vos lunettes ?</Title>
		<Text>Pour l’entretien des verres, il est conseillé :</Text>
		<ul class="mt-2 mb-6 list-disc space-y-3 pl-5">
			<li>
				D'utiliser des produits adaptés, des sprays, des lingettes ou, plus simplement, de l'eau
				tiède avec du savon doux.
			</li>
			<li>D'utiliser un chiffon microfibres ou un mouchoir en papier pour frotter les verres.</li>
			<li>
				Le papier essuie-tout est à éviter ; il peut en effet endommager les verres et les rayer. Il
				en est de même pour les accessoires en coton.
			</li>
		</ul>
		<Text tone="accent" weight="medium">
			Pour augmenter la durée de vie de vos montures et vos verres, mieux vaut éviter de les exposer
			à de fortes sources de chaleur (sauna, hammam, plusieurs heures derrière le pare-brise d'une
			voiture stationnée au soleil…)
		</Text>
	</section>
</DiseaseArticleLayout>
