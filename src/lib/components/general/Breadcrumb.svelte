<script lang="ts">
	let {
		current,
		parentHref,
		parentLabel
	}: { current: string; parentHref?: string; parentLabel?: string } = $props();
</script>

<nav aria-label="Fil d’Ariane" class="mb-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-secondary sm:mb-10">
	<a href="/" class="underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta-ink">Accueil</a>
	<span aria-hidden="true">/</span>
	{#if parentHref && parentLabel}
		<a href={parentHref} class="underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta-ink">{parentLabel}</a>
		<span aria-hidden="true">/</span>
	{/if}
	<span aria-current="page">{current}</span>
</nav>
