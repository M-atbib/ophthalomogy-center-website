<script lang="ts">
	import EyeDiseasePage from '$lib/components/disease/EyeDiseasePage.svelte';
	import { getEyeDiseaseBySlug } from '$lib/content';

	const disease = getEyeDiseaseBySlug('retine-medicale');
</script>

<EyeDiseasePage disease={disease} />
