<script lang="ts">
	import { CalendarCheck } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import type { ArticleLanguage } from '$lib/types/blog';
	let { language = 'fr' }: { language?: ArticleLanguage } = $props();

	let mobileVisible = $state(false);

	onMount(() => {
		const updateVisibility = () => {
			mobileVisible = window.scrollY > 240;
		};
		updateVisibility();
		window.addEventListener('scroll', updateVisibility, { passive: true });
		return () => window.removeEventListener('scroll', updateVisibility);
	});
</script>

<a
	href="https://docs.google.com/forms/d/e/1FAIpQLSdAIASA4P_Y4BXSHUcBpThsUTXYiBT6ApY8iJzV-FdCl_USIw/viewform"
	target="_blank"
	rel="noopener noreferrer"
	class="site-quick-action fixed bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 min-h-14 items-center justify-center gap-2 rounded-full bg-cta px-5 text-base font-semibold text-primary-background shadow-md ring-1 ring-cta/30 transition hover:bg-cta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:bottom-6 sm:flex"
	class:flex={mobileVisible}
	class:hidden={!mobileVisible}
>
	<span class="sm:hidden">{language === 'ar' ? 'حجز موعد' : 'Rendez-vous'}</span>
	<span class="hidden sm:inline">{language === 'ar' ? 'حجز موعد' : 'Prendre rendez-vous'}</span>
	<CalendarCheck class="size-5 shrink-0" aria-hidden="true" />
</a>
