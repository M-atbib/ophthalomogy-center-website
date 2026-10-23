<script lang="ts">
	import { Eye } from '@lucide/svelte';
	import { articleImageUrl, articleImageSrcset } from '$lib/articles';
	import type { BlogArticleSummary } from '$lib/types/blog';
	let { article, hero = false }: { article: BlogArticleSummary; hero?: boolean } = $props();
	const source = $derived(articleImageUrl(article.imageUrl, hero ? 1280 : 640));
</script>

<div class="bg-sections-background aspect-[16/10] w-full overflow-hidden">
	{#if source}
		<img
			src={source}
			srcset={articleImageSrcset(article.imageUrl)}
			sizes={hero
				? '(max-width: 960px) 100vw, 960px'
				: '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px'}
			alt={article.imageAlt ?? article.title}
			width={article.imageWidth ?? 1600}
			height={article.imageHeight ?? 1000}
			class="h-full w-full object-cover"
			loading={hero ? 'eager' : 'lazy'}
			decoding="async"
			fetchpriority={hero ? 'high' : 'auto'}
		/>
	{:else}
		<div
			class="flex h-full min-h-40 items-center justify-center bg-gradient-to-br from-sections-background to-cta/10"
			aria-hidden="true"
		>
			<div class="rounded-full border border-cta/20 bg-white/60 p-6">
				<Eye class="size-12 text-cta-ink" strokeWidth={1} />
			</div>
		</div>
	{/if}
</div>
