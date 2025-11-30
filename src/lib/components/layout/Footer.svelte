<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from '@lucide/svelte';
	import Whatsapp from '$lib/assets/Vector.svg';

	const primaryLinks = [
		'Accueil',
		'À propos',
		'Les maladies de l’oeil',
		'Les conseils de votre ophtalmo',
		'Contactez-nous'
	];
	const secondaryLinks = ['Mentions légales', 'Confidentialité des données', 'Cookies'];

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
		{ icon: Whatsapp, label: 'Whatsapp', href: '#' },
		{ icon: Instagram, label: 'Instagram', href: '#' },
		{ icon: Linkedin, label: 'LinkedIn', href: '#' },
		{ icon: Facebook, label: 'Facebook', href: '#' }
	];
</script>

<footer class="bg-sections-background text-primary px-4 py-12 sm:px-6 lg:px-8">
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
						class="border-cta text-cta hover:bg-cta flex size-12 items-center justify-center rounded-full border-2 transition-colors hover:text-white"
					>
						{#if label === 'Whatsapp'}
							<img src={Icon} alt="whatsapp icon" />
						{:else}
						
							<Icon class="size-5" />
						{/if}
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h3 class="text-primary text-2xl font-semibold">Liens utiles</h3>
			<div class="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
				<ul class="text-secondary space-y-3">
					{#each primaryLinks as link (link)}
						<li>{link}</li>
					{/each}
				</ul>
				<ul class="text-secondary space-y-3">
					{#each secondaryLinks as link (link)}
						<li>{link}</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="flex flex-col gap-6">
			{#each contactItems as { icon: Icon, title, lines, link } (title)}
				<div>
					<div class="flex gap-2">
						<Icon class="size-5" />
						<p class="text-primary font-semibold">{title}</p>
					</div>
					{#each lines as line (line)}
						{#if link}
							<a href={link} class="text-secondary block underline underline-offset-4">{line}</a>
						{:else}
							<p class="text-secondary">{line}</p>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class="border-cta mx-auto mt-10  w-[80%] border-t-2"></div>

	<p class="text-secondary mx-auto mt-4 w-[80%] text-sm">
		All rights are reserved © 2025
	</p>
</footer>
