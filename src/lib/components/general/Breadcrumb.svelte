<script lang="ts">
	import { resolve } from '$app/paths';
	let {
		current,
		parentHref,
		parentLabel,
		language = 'fr'
	}: {
		current: string;
		parentHref?: string;
		parentLabel?: string;
		language?: 'fr' | 'ar';
	} = $props();
</script>

<nav
	aria-label={language === 'ar' ? 'مسار التنقل' : 'Fil d’Ariane'}
	class="mb-8 flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-sm break-words text-secondary sm:mb-10"
>
	<a
		href={resolve('/')}
		class="underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta-ink"
		>{language === 'ar' ? 'الرئيسية' : 'Accueil'}</a
	>
	<span aria-hidden="true">/</span>
	{#if parentHref && parentLabel}
		<a
			href={resolve(...([parentHref] as Parameters<typeof resolve>))}
			class="underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta-ink"
			>{parentLabel}</a
		>
		<span aria-hidden="true">/</span>
	{/if}
	<span aria-current="page">{current}</span>
</nav>
