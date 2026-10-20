<script lang="ts">
	import { listEyeDiseases } from '$lib/content';
	import { ChevronDown, Menu, X } from '@lucide/svelte';
	import { onDestroy, tick } from 'svelte';

	type Link = { label: string; href: string };
	type Item = { label: string; href?: string; children?: Link[] };

	const items: Item[] = [
		{ label: 'Accueil', href: '/' },
		{ label: 'À propos', href: '/a-propos' },
		{ label: 'Santé des yeux', children: listEyeDiseases.map(({ diseases, href }) => ({ label: diseases, href })) },
		{ label: 'Conseils', href: '/conseils' },
		{ label: 'Actualités', href: '/actualites' },
		{ label: 'Contact', href: '/contactez-nous' }
	];

	let mobileOpen = $state(false);
	let menuButton: HTMLButtonElement;
	let mobileCloseButton = $state<HTMLButtonElement>();
	let mobilePanel = $state<HTMLElement>();

	async function openMobile() {
		mobileOpen = true;
		document.body.style.overflow = 'hidden';
		await tick();
		mobileCloseButton?.focus();
	}

	function closeMobile(restoreFocus = true) {
		mobileOpen = false;
		document.body.style.overflow = '';
		if (restoreFocus) menuButton?.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			if (mobileOpen) closeMobile();
			const activeDetail = (event.target as HTMLElement | null)?.closest<HTMLDetailsElement>('details');
			if (activeDetail?.open) {
				activeDetail.open = false;
				activeDetail.querySelector('summary')?.focus();
			}
			for (const detail of document.querySelectorAll<HTMLDetailsElement>('.desktop-nav details[open]')) {
				detail.open = false;
			}
		}
		if (event.key !== 'Tab' || !mobileOpen || !mobilePanel) return;
		const focusable = [...mobilePanel.querySelectorAll<HTMLElement>('a[href], button, summary')].filter(
			(element) => element.getClientRects().length > 0
		);
		if (!focusable.length) return;
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}

	function handleWindowClick(event: MouseEvent) {
		const target = event.target;
		if (!(target instanceof Node)) return;
		for (const detail of document.querySelectorAll<HTMLDetailsElement>('.desktop-nav details[open]')) {
			if (!detail.contains(target)) detail.open = false;
		}
		if (mobileOpen && mobilePanel && !mobilePanel.contains(target) && !menuButton?.contains(target)) {
			closeMobile(false);
		}
	}

	onDestroy(() => {
		if (typeof document !== 'undefined') document.body.style.overflow = '';
	});
</script>

<svelte:window onkeydown={handleKeydown} onclick={handleWindowClick} />

<nav aria-label="Navigation principale" class="sticky top-0 z-30 border-b border-light-grey/60 bg-primary-background/95 shadow-sm backdrop-blur-md">
	<div class="site-container flex items-center justify-between gap-5 py-3">
		<a href="/" class="inline-flex min-w-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta" aria-label="Accueil du Cabinet du Dr Amal Alouan">
			<img src="/brand/logo-full.png" alt="Cabinet du Dr Amal Alouan" width="1200" height="400" class="h-12 w-auto max-w-[190px] object-contain sm:h-14 sm:max-w-[230px]" />
		</a>

		<div class="desktop-nav hidden items-center gap-1 lg:flex">
			{#each items as item (item.label)}
				{#if item.children}
					<details class="group relative">
						<summary class="flex min-h-11 cursor-pointer list-none items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-sections-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta [&::-webkit-details-marker]:hidden">
							{item.label}<ChevronDown class="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
						</summary>
						<div class="absolute right-0 top-full z-40 w-80 pt-2">
							<ul class="max-h-[70vh] overflow-y-auto rounded-xl border border-light-grey/60 bg-white p-2 shadow-xl">
								{#each item.children as child (child.href)}
									<li><a href={child.href} class="block rounded-lg px-3 py-2 text-sm text-primary hover:bg-sections-background focus-visible:bg-sections-background">{child.label}</a></li>
								{/each}
							</ul>
						</div>
					</details>
				{:else}
					<a href={item.href} class="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-sections-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta">{item.label}</a>
				{/if}
			{/each}
		</div>

		<button bind:this={menuButton} type="button" class="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-light-grey/70 text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta lg:hidden" aria-label="Ouvrir le menu" aria-controls={mobileOpen ? 'mobile-navigation' : undefined} aria-expanded={mobileOpen} onclick={openMobile}>
			<Menu class="size-6" aria-hidden="true" />
		</button>
	</div>
</nav>

{#if mobileOpen}
	<div class="fixed inset-0 z-40 bg-primary/45 lg:hidden" aria-hidden="true"></div>
	<div bind:this={mobilePanel} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Menu de navigation" class="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-primary-background shadow-2xl lg:hidden">
		<div class="flex items-center justify-between border-b border-light-grey/60 px-5 py-4">
			<span class="font-semibold text-primary">Menu</span>
			<button bind:this={mobileCloseButton} type="button" aria-label="Fermer le menu" class="inline-flex size-11 items-center justify-center rounded-lg border border-light-grey/70 text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta" onclick={() => closeMobile()}><X class="size-6" aria-hidden="true" /></button>
		</div>
		<nav aria-label="Navigation mobile" class="min-h-0 flex-1 overflow-y-auto px-5 py-5">
			<ul class="space-y-2">
				{#each items as item (item.label)}
					<li>
						{#if item.children}
							<details class="rounded-xl border border-light-grey/60 bg-white">
								<summary class="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-medium text-primary [&::-webkit-details-marker]:hidden">{item.label}<ChevronDown class="size-4" aria-hidden="true" /></summary>
								<ul class="max-h-[48vh] space-y-1 overflow-y-auto border-t border-light-grey/60 p-2">
									{#each item.children as child (child.href)}
										<li><a href={child.href} class="block rounded-lg px-3 py-3 text-sm text-primary hover:bg-sections-background" onclick={() => closeMobile(false)}>{child.label}</a></li>
									{/each}
								</ul>
							</details>
						{:else}
							<a href={item.href} class="flex min-h-12 items-center rounded-xl border border-light-grey/60 bg-white px-4 py-3 font-medium text-primary hover:bg-sections-background" onclick={() => closeMobile(false)}>{item.label}</a>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	</div>
{/if}
