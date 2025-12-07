<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { listEyeDiseases } from '$lib/content';
	import { ChevronDown, Menu, X } from '@lucide/svelte';
	import { onDestroy } from 'svelte';

	type DropdownItem = {
		label: string;
		href: string;
	};

	type NavItem = {
		id: string;
		label: string;
		href?: string;
		dropdown: boolean;
		dropdownItems?: DropdownItem[];
	};

	const diseaseDropdownItems: DropdownItem[] = listEyeDiseases.map((disease) => ({
		label: disease.diseases,
		href: disease.href
	}));

	const navItems: NavItem[] = [
		{
			id: 'home',
			label: 'Acceuil',
			href: '/',
			dropdown: false
		},
		{
			id: 'about',
			label: 'A propos',
			dropdown: true,
			dropdownItems: [
				{ label: 'A propos', href: '/a-propos' },
				{ label: 'Equipement', href: '/equipement' },
				{ label: 'Actualités', href: '/actualites' },
				{ label: 'Urgences', href: '/urgences' },
				{ label: 'Nous adresser un patient', href: '/adresser-patient' }
			]
		},
		{
			id: 'eye-diseases',
			label: "Les maladies de l'oeil",
			dropdown: true,
			dropdownItems: diseaseDropdownItems
		},
		{
			id: 'conseils',
			label: 'Les conseils de votre ophtalmo',
			dropdown: true,
			dropdownItems: [
				{ label: 'Les conseils de votre ophtalmo', href: '/conseils' },
				{ label: 'Conseils thérapeutiques', href: '/conseils/conseils-therapeutiques' },
				{
					label: 'Conseils lunettes et lentilles',
					href: '/conseils/conseils-lunettes-et-lentilles'
				},
				{
					label: 'Conseils après soins et chirurgie oculaire',
					href: '/conseils/conseils-apres-soins-et-chirurgie-oculaire'
				}
			]
		},
		{
			id: 'contact',
			label: 'Contactez-nous',
			href: '/contactez-nous',
			dropdown: false
		}
	];

	let isMobileNavOpen = $state(false);
	let activeDropdown = $state<string | null>(null);
	let activeMobileDropdown = $state<string | null>(null);
	let dropdownCloseTimer: ReturnType<typeof setTimeout> | null = null;

	const lockBodyScroll = (lock: boolean) => {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = lock ? 'hidden' : '';
	};

	const toggleMobileNav = () => {
		isMobileNavOpen = !isMobileNavOpen;
		if (!isMobileNavOpen) {
			activeMobileDropdown = null;
		}
		lockBodyScroll(isMobileNavOpen);
	};

	const closeMobileNav = () => {
		if (!isMobileNavOpen) return;
		isMobileNavOpen = false;
		activeMobileDropdown = null;
		lockBodyScroll(false);
	};

	const toggleMobileDropdown = (itemId: string) => {
		activeMobileDropdown = activeMobileDropdown === itemId ? null : itemId;
	};

	const handleDropdownEnter = (itemId: string) => {
		if (dropdownCloseTimer) {
			clearTimeout(dropdownCloseTimer);
			dropdownCloseTimer = null;
		}
		activeDropdown = itemId;
	};

	const handleDropdownLeave = () => {
		if (dropdownCloseTimer) {
			clearTimeout(dropdownCloseTimer);
		}
		dropdownCloseTimer = setTimeout(() => {
			activeDropdown = null;
		}, 200);
	};

	onDestroy(() => {
		lockBodyScroll(false);
		if (dropdownCloseTimer) {
			clearTimeout(dropdownCloseTimer);
		}
	});
</script>

<nav
	class="border-light-grey bg-primary-background mx-auto my-8 w-[85%] rounded-xl border shadow-sm"
>
	<div class="mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
		<a class="inline-flex items-center gap-3" href="/" aria-label="Aller à l'accueil">
			<img src={logo} alt="logo du centre d'ophtalmologie" class="h-12 w-auto" />
		</a>

		<button
			type="button"
			class="border-light-grey/70 text-primary hover:border-cta hover:text-cta focus-visible:ring-cta inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition focus-visible:outline-none focus-visible:ring-2 lg:hidden"
			onclick={toggleMobileNav}
			aria-label={isMobileNavOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
		>
			{#if isMobileNavOpen}
				<X class="h-5 w-5" />
			{:else}
				<Menu class="h-5 w-5" />
			{/if}
		</button>

		<div class="hidden flex-1 items-center justify-end lg:flex">
			<ul class="text-primary flex items-center gap-5 text-sm font-medium">
				{#each navItems as item (item.id)}
					<li
						class="group relative"
						onpointerenter={() => handleDropdownEnter(item.id)}
						onpointerleave={handleDropdownLeave}
					>
						{#if item.dropdown}
							<button
								type="button"
								class="hover:text-cta focus-visible:ring-cta inline-flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2"
								onfocus={() => handleDropdownEnter(item.id)}
								onclick={() => handleDropdownEnter(item.id)}
								onblur={handleDropdownLeave}
								aria-haspopup="true"
								aria-expanded={activeDropdown === item.id}
							>
								<span class="flex items-center gap-1.5">
									{item.label}
									<ChevronDown
										class={`h-3.5 w-3.5 transition-transform duration-200 ${
											activeDropdown === item.id ? 'text-cta rotate-180' : 'text-secondary'
										}`}
										aria-hidden="true"
									/>
								</span>
							</button>
						{:else}
							<a
								href={item.href!}
								class="hover:text-cta focus-visible:ring-cta inline-flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2"
								onfocus={() => handleDropdownEnter(item.id)}
								onblur={handleDropdownLeave}
							>
								<span class="flex items-center gap-1.5">
									{item.label}
								</span>
							</a>
						{/if}

						{#if item.dropdown && item.dropdownItems}
							<div
								class={`border-light-grey/70 absolute left-0 top-full z-20 mt-1 min-w-[280px] rounded-2xl border bg-white/95 p-3 shadow-2xl transition-all duration-200 ease-out ${
									activeDropdown === item.id
										? 'pointer-events-auto translate-y-0 opacity-100'
										: 'pointer-events-none -translate-y-1 opacity-0'
								}`}
								onpointerenter={() => handleDropdownEnter(item.id)}
								onpointerleave={handleDropdownLeave}
							>
								<ul class="space-y-1">
									{#each item.dropdownItems as dropdownItem, index (`${item.id}-${index}`)}
										<li>
											<a
												href={dropdownItem.href}
												class="text-primary hover:bg-sections-background hover:text-cta flex rounded-lg px-3 py-2 text-sm transition-colors"
											>
												{dropdownItem.label}
											</a>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<button
	type="button"
	class={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
		isMobileNavOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
	}`}
	onclick={closeMobileNav}
	aria-label="Fermer le menu mobile"
></button>

<aside
	class={`bg-primary-background fixed inset-y-0 left-0 z-50 w-full shadow-2xl transition-transform duration-300 lg:hidden ${
		isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
	}`}
>
	<div class="flex h-full w-full flex-col items-center justify-center gap-8 px-6 py-10">
		<ul class="text-primary w-full max-w-md space-y-4 text-center text-lg font-medium">
			{#each navItems as item (item.id)}
				<li>
					{#if item.dropdown}
						<button
							type="button"
							class="hover:text-cta border-light-grey/70 hover:border-cta flex w-full items-center justify-center gap-2 rounded-full border bg-white/80 px-6 py-3 text-center transition"
							onclick={() => toggleMobileDropdown(item.id)}
							aria-expanded={activeMobileDropdown === item.id}
							aria-controls={`mobile-dropdown-${item.id}`}
						>
							{item.label}
							<ChevronDown
								class={`h-4 w-4 transition-transform ${
									activeMobileDropdown === item.id ? 'text-cta rotate-180' : 'text-secondary'
								}`}
								aria-hidden="true"
							/>
						</button>
					{:else}
						<a
							href={item.href!}
							class="hover:text-cta border-light-grey/70 hover:border-cta block rounded-full border bg-white/80 px-6 py-3 transition"
							onclick={closeMobileNav}
						>
							<span class="flex items-center justify-center gap-2">
								{item.label}
							</span>
						</a>
					{/if}

					{#if item.dropdown && item.dropdownItems}
						<div
							id={`mobile-dropdown-${item.id}`}
							class={`overflow-hidden transition-all duration-200 ease-out ${
								activeMobileDropdown === item.id ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'
							}`}
						>
							<ul
								class="border-light-grey/60 space-y-2 rounded-2xl border bg-white/80 px-4 py-3 text-sm"
							>
								{#each item.dropdownItems as dropdownItem, index (`mobile-${item.id}-${index}`)}
									<li>
										<a
											href={dropdownItem.href}
											class="hover:text-cta hover:bg-sections-background block rounded-lg px-3 py-2 text-left transition"
											onclick={closeMobileNav}
										>
											{dropdownItem.label}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<button
		type="button"
		class="border-light-grey/70 text-primary hover:border-cta hover:text-cta absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition"
		onclick={closeMobileNav}
		aria-label="Fermer le menu mobile"
	>
		<X class="h-5 w-5" />
	</button>
</aside>
