<script lang="ts">
	import { page } from '$app/state';
	import { listEyeDiseases } from '$lib/content';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
	const topic = $derived(
		listEyeDiseases.find((item) => page.url.pathname.startsWith(`${item.href}/`))
	);
	const related = $derived(
		topic?.questions.filter((item) => item.href !== page.url.pathname).slice(0, 3) ?? []
	);
</script>

{@render children?.()}

{#if topic}
	<nav aria-label="Pages liées" class="site-container py-10">
		<div class="rounded-2xl border border-light-grey/60 bg-sections-background/50 p-6 sm:p-8">
			<h2 class="mb-4 text-2xl font-semibold text-primary">Continuer votre lecture</h2>
			<ul class="grid gap-3 text-cta sm:grid-cols-2">
				<li><a class="underline underline-offset-4" href={topic.href}>Voir le thème {topic.diseases}</a></li>
				{#each related as item (item.href)}
					<li><a class="underline underline-offset-4" href={item.href}>{item.question}</a></li>
				{/each}
				<li><a class="underline underline-offset-4" href="/conseils">Lire les conseils</a></li>
				<li><a class="underline underline-offset-4" href="/contactez-nous">Contacter le cabinet</a></li>
			</ul>
		</div>
	</nav>
{/if}
