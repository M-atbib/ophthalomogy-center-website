<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { Instagram, Mail, MapPin, Phone, PhoneCall } from '@lucide/svelte';

	const primaryLinks = [
		{
			label: 'Accueil',
			url: '/'
		},
		{
			label: 'À propos',
			url: '/a-propos'
		},
		{
			label: 'Les maladies de l’oeil',
			url: '/maladie-oeil'
		},
		{
			label: 'Les conseils de votre ophtalmo',
			url: '/conseils'
		},
		{
			label: 'Contactez-nous',
			url: '/contactez-nous'
		}
	];

	const contactItems = [
		{
			icon: Phone,
			title: 'Appelez-nous',
			lines: ['05 37 810 828', '06 66 82 42 47']
		},
		{
			icon: Mail,
			title: 'Envoyez-nous un e-mail',
			lines: ['dr.amalalouan@gmail.com'],
			link: 'mailto:dr.amalalouan@gmail.com'
		},
		{
			icon: MapPin,
			title: 'Visitez-nous',
			lines: ['Imm.67,APPT 1 Lot Al Andalouss, Avenue Abderrahim Bouaabid, Hay Essalam Salé']
		}
	];

	const socialLinks = [
		{ icon: PhoneCall, label: 'Appel telephonique', href: 'tel:+212537810828' },
		{ icon: Mail, label: 'Boite mail', href: 'mailto:dr.amalalouan@gmail.com' },
		{ icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/dramalalouan/' },
	];
</script>

<footer class="bg-sections-background px-4 py-12 text-primary sm:px-6 lg:px-8">
	<div
		class="mx-auto grid w-[80%] gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,1fr)]"
	>
		<div class="flex flex-col">
			<img
				src={logo}
				alt="Centre d'ophtalmologie Salé"
				class="w-full max-w-[280px] object-contain"
			/>
			<div class="mt-8 flex flex-wrap gap-4" aria-label="Réseaux sociaux">
				{#each socialLinks as { icon: Icon, label, href } (label)}
					<a
						{href}
						aria-label={label}
						target="_blank"
						class="flex size-12 items-center justify-center rounded-full border-2 border-cta text-cta transition-colors hover:bg-cta hover:text-white"
					>
						<Icon class="size-5" />
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h3 class="text-2xl font-semibold text-primary">Liens utiles</h3>
			<div class="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
				<ul class="space-y-3 text-secondary">
					{#each primaryLinks as link (link)}
						<li>
							<a href={link.url}>{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="flex flex-col gap-6">
			{#each contactItems as { icon: Icon, title, lines, link } (title)}
				<div>
					<div class="flex gap-2">
						<Icon class="size-5" />
						<p class="font-semibold text-primary">{title}</p>
					</div>
					{#each lines as line (line)}
						{#if link}
							<a href={link} class="block text-secondary underline underline-offset-4">{line}</a>
						{:else}
							<p class="text-secondary">{line}</p>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class="mx-auto mt-10 w-[80%] border-t-2 border-cta"></div>

	<p class="mx-auto mt-4 w-[80%] text-sm text-secondary">All rights are reserved © 2025</p>
</footer>
