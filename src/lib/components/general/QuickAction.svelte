<script>
	import { CalendarCheck } from '@lucide/svelte';
</script>

<button
	class="bg-cta text-primary-background hover:bg-cta/90 focus-visible:ring-cta/40 ring-cta/30 fixed bottom-4 right-4 z-50 rounded-full shadow-md ring-1 transition focus-visible:outline-none focus-visible:ring-4 sm:bottom-10 sm:right-10"
>
	<a
		href=" https://docs.google.com/forms/d/e/1FAIpQLSdAIASA4P_Y4BXSHUcBpThsUTXYiBT6ApY8iJzV-FdCl_USIw/viewform"
		target="_blank"
		class="flex h-12 items-center justify-center gap-2 whitespace-nowrap px-4 text-sm font-semibold sm:h-14 sm:px-5 sm:text-base"
	>
		Prendre rendez-vous
		<CalendarCheck class="size-4 shrink-0 sm:size-5" />
	</a>
</button>
