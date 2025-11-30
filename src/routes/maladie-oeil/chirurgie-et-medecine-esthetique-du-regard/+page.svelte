<script lang="ts">
	import EyeDiseasePage from '$lib/components/disease/EyeDiseasePage.svelte';
	import { getEyeDiseaseBySlug } from '$lib/content';

	const disease = getEyeDiseaseBySlug('chirurgie-et-medecine-esthetique-du-regard');
</script>

<EyeDiseasePage disease={disease} />
