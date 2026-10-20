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

<!-- The same calm page opening is used for every medical and advice article. -->
<Section width="wide" spacing="tight" variant="muted">
	<Button variant="ghost" href={backHref} class="mb-8 w-fit">
		<ArrowLeft class="size-5" aria-hidden="true" />
		Retour
	</Button>
	<p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cta-ink sm:text-sm">Santé des yeux · Conseils</p>
	<Title level="h1" class="max-w-4xl text-pretty">{title}</Title>
</Section>

<Section width="wide" spacing="comfortable">
	<article class="max-w-4xl space-y-12">
		{@render children?.()}
	</article>
</Section>
