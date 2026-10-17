<script lang="ts">
	import { doctorProfile } from '$lib/doctor-profile';
	import { ArrowRight, MapPin, Star } from '@lucide/svelte';

	let { showLink = true }: { showLink?: boolean } = $props();
</script>

<div class="rounded-3xl border border-light-grey/60 bg-white p-6 shadow-sm sm:p-8">
	<div class="space-y-3 border-l-4 border-cta pl-5 sm:pl-6">
		<p class="text-xs font-semibold uppercase tracking-[0.2em] text-cta">Le cabinet</p>
		<h2 class="text-2xl font-semibold text-primary">{doctorProfile.name}</h2>
		<p class="text-secondary">{doctorProfile.profession} à {doctorProfile.location}</p>
		{#if doctorProfile.shortBio}<p class="text-secondary">{doctorProfile.shortBio}</p>{/if}
		<p class="flex items-center gap-2 text-sm text-secondary"><MapPin class="size-4 text-cta" aria-hidden="true" /> {doctorProfile.location}, près de Rabat</p>
		<p class="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-light-grey/60 pt-4 text-sm text-secondary" aria-label="Avis Google : 4,9 sur 5, plus de 1 590 avis">
			<Star class="size-5 fill-amber-400 text-amber-500" aria-hidden="true" />
			<strong class="text-base text-primary">4,9/5</strong>
			<span>· 1 590+ avis Google</span>
		</p>
		{#if showLink}
			<a href="/a-propos" class="inline-flex min-h-11 items-center gap-2 font-semibold text-cta underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta">Voir la présentation <ArrowRight class="size-4" aria-hidden="true" /></a>
		{/if}
	</div>
</div>
