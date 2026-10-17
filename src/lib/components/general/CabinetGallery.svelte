<script lang="ts">
	import { Section, Text, Title } from '$lib';
	import ResponsiveImage from '$lib/components/general/ResponsiveImage.svelte';
	import galleryOne from '$lib/assets/images/home-gallery-img1.webp';
	import galleryTwo from '$lib/assets/images/home-gallery-img2.webp';
	import galleryFour from '$lib/assets/images/home-gallery-img4.webp';
	import galleryFive from '$lib/assets/images/home-gallery-img5.webp';
	import gallerySix from '$lib/assets/images/home-gallery-img6.webp';
	import gallerySeven from '$lib/assets/images/home-gallery-img7.webp';
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';

	let galleryScroller = $state<HTMLDivElement>();

	function moveGallery(direction: -1 | 1) {
		galleryScroller?.scrollBy({ left: direction * galleryScroller.clientWidth * 0.82, behavior: 'smooth' });
	}

	const gallery = [
		{ imageKey: 'home-gallery-img1', src: galleryOne, title: 'L’accueil', detail: 'Comptoir et espace d’accueil', alt: 'Comptoir d’accueil et sièges du cabinet' },
		{ imageKey: 'home-gallery-img2', src: galleryTwo, title: 'La salle d’attente', detail: 'Un espace pour patienter', alt: 'Salle d’attente avec sièges et tables' },
		{ imageKey: 'home-gallery-img4', src: galleryFour, title: 'L’espace d’examen', detail: 'Appareil et écran d’examen', alt: 'Appareil d’examen et écran dans une salle du cabinet' },
		{ imageKey: 'home-gallery-img5', src: galleryFive, title: 'La salle de consultation', detail: 'Bureau et matériel d’examen', alt: 'Bureau et matériel d’examen ophtalmologique' },
		{ imageKey: 'home-gallery-img6', src: gallerySix, title: 'Les équipements', detail: 'Appareils dans une salle d’examen', alt: 'Appareils d’examen ophtalmologique dans une salle du cabinet' },
		{ imageKey: 'home-gallery-img7', src: gallerySeven, title: 'Le poste d’examen', detail: 'Fauteuil et instruments de consultation', alt: 'Fauteuil et instruments d’examen ophtalmologique dans le cabinet' }
	];
</script>

<Section spacing="comfortable" width="wide" aria-labelledby="gallery-title">
	<div class="mb-8 flex flex-wrap items-end justify-between gap-4">
		<div class="max-w-2xl space-y-3">
			<Text variant="eyebrow" tone="cta">Visite du cabinet</Text>
			<Title level="h2" id="gallery-title">Notre cabinet en images</Title>
			<Text tone="muted">Découvrez l’accueil, la salle d’attente et les espaces d’examen.</Text>
		</div>
		<div class="flex items-center gap-2 sm:hidden">
			<span class="mr-2 text-sm text-secondary">{gallery.length} photos</span>
			<button type="button" aria-label="Photo précédente" aria-controls="cabinet-gallery-track" class="inline-flex size-11 items-center justify-center rounded-full border border-light-grey text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta" onclick={() => moveGallery(-1)}><ArrowLeft class="size-5" aria-hidden="true" /></button>
			<button type="button" aria-label="Photo suivante" aria-controls="cabinet-gallery-track" class="inline-flex size-11 items-center justify-center rounded-full border border-light-grey text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta" onclick={() => moveGallery(1)}><ArrowRight class="size-5" aria-hidden="true" /></button>
		</div>
	</div>
	<div bind:this={galleryScroller} id="cabinet-gallery-track" class="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3" role="region" aria-label="Photos du cabinet">
		{#each gallery as photo, index (photo.imageKey)}
			<figure class="w-[78vw] max-w-sm shrink-0 snap-start overflow-hidden rounded-2xl border border-light-grey/60 bg-white shadow-sm sm:w-auto sm:max-w-none">
				<ResponsiveImage
					src={photo.src}
					imageKey={photo.imageKey}
					alt={photo.alt}
					sizes="(max-width: 639px) 78vw, (max-width: 1023px) 50vw, 33vw"
					loading="lazy"
					class="aspect-[3/4] w-full object-cover"
				/>
				<figcaption class="flex items-start gap-3 p-4">
					<span class="pt-1 text-xs font-semibold text-cta">0{index + 1}</span>
					<span><strong class="block font-semibold text-primary">{photo.title}</strong><span class="mt-1 block text-sm text-secondary">{photo.detail}</span></span>
				</figcaption>
			</figure>
		{/each}
	</div>
</Section>
