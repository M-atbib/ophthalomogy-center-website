<script lang="ts">
	import { imageData, imageDataByUrl } from '$lib/assets/image-data';

	type Props = {
		src: string;
		alt: string;
		imageKey?: string;
		class?: string;
		sizes?: string;
		loading?: 'eager' | 'lazy';
		fetchpriority?: 'high' | 'low' | 'auto';
		decoding?: 'async' | 'sync' | 'auto';
	};

	let {
		src,
		alt,
		imageKey,
		class: className = '',
		sizes,
		loading = 'lazy',
		fetchpriority,
		decoding = 'async'
	}: Props = $props();

	const info = $derived((imageKey ? imageData[imageKey] : undefined) ?? imageDataByUrl[src]);
	const srcset = $derived(
		info?.variants.length
			? [...info.variants.map((variant) => `${variant.url} ${variant.width}w`), `${src} ${info.width}w`].join(', ')
			: undefined
	);
</script>

<img
	{src}
	{alt}
	class={className}
	width={info?.width}
	height={info?.height}
	{srcset}
	sizes={srcset ? (sizes ?? '100vw') : undefined}
	{loading}
	{fetchpriority}
	{decoding}
/>
