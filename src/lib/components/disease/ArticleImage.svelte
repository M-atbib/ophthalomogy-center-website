<script lang="ts">
	import ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';

	type ArticleImageProps = {
		src: string;
		alt: string;
		imageKey?: string;
		class?: string;
		loading?: 'eager' | 'lazy';
	};

	let {
		src,
		alt,
		imageKey,
		class: classFromParent = 'max-w-lg',
		loading = 'lazy'
	}: ArticleImageProps = $props();
</script>

<!-- Medical illustrations use object-contain so diagnostic details are never cropped. -->
<figure class={`mx-auto my-10 w-full overflow-hidden rounded-md ${classFromParent}`}>
	<ResponsiveImage {src} {alt} {imageKey} class="h-full w-full object-contain" {loading} sizes="(min-width: 1024px) 512px, 100vw" />
</figure>
