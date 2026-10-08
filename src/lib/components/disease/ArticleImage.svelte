<script lang="ts">
	type ArticleImageProps = {
		src: string;
		alt: string;
		class?: string;
		loading?: 'eager' | 'lazy';
	};

	let {
		src,
		alt,
		class: classFromParent = 'max-w-lg',
		loading = 'lazy'
	}: ArticleImageProps = $props();
</script>

<!-- Medical illustrations use object-contain so diagnostic details are never cropped. -->
<figure class={`mx-auto my-10 w-full overflow-hidden rounded-md ${classFromParent}`}>
	<img {src} {alt} class="h-full w-full object-contain" {loading} />
</figure>
