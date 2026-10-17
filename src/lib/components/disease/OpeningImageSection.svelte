<script lang="ts">
	import type { Snippet } from 'svelte';
	import ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';

	type OpeningImageSectionProps = {
		src: string;
		alt: string;
		imageKey?: string;
		children?: Snippet;
		imageClass?: string;
	};

	let { src, alt, imageKey, children, imageClass = 'max-w-md' }: OpeningImageSectionProps = $props();
</script>

<!-- Opening illustrations sit beside their first explanatory text on wide screens and stack on mobile. -->
<section class="flex flex-col gap-8 lg:flex-row lg:items-center">
	<div class="space-y-4 lg:w-7/12">
		{@render children?.()}
	</div>
	<figure class={`mx-auto w-full overflow-hidden rounded-md lg:w-5/12 ${imageClass}`}>
		<ResponsiveImage {src} {alt} {imageKey} class="h-full w-full object-contain" loading="lazy" sizes="(min-width: 1024px) 448px, 100vw" />
	</figure>
</section>
