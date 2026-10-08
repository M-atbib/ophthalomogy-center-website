<script lang="ts">
	import { Button, Section, Title } from '$lib';
	import { ArrowLeft } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	type DiseaseArticleLayoutProps = {
		title: string;
		backHref: string;
		children?: Snippet;
	};

	let { title, backHref, children }: DiseaseArticleLayoutProps = $props();
</script>

<!-- A shared shell keeps disease articles aligned while their medical content remains page-specific. -->
<Section width="wide" spacing="comfortable">
	<Button variant="ghost" href={backHref} class="w-fit">
		<ArrowLeft />
		Retour
	</Button>

	<article class="mt-10 space-y-12">
		<Title level="h1">{title}</Title>
		{@render children?.()}
	</article>
</Section>
