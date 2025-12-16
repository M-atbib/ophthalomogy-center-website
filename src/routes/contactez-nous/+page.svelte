<script lang="ts">
	import { Button, Card, Map, Section, Text, Title } from '$lib';
	import { ContactHero } from '$lib/assets';
	import { contactItems } from '$lib/content';
	import { enhance } from '$app/forms';

	export let form:
		| {
				success?: boolean;
				message?: string;
				errors?: Partial<
					Record<'reason' | 'firstName' | 'lastName' | 'birthDate' | 'email' | 'message', string>
				>;
				values?: Partial<
					Record<'reason' | 'firstName' | 'lastName' | 'birthDate' | 'email' | 'message', string>
				>;
		  }
		| undefined;

	const contactParagraphs = [
		'Ce formulaire permet de contacter note équipe uniquement pour les motifs suivants. Aucune réponse ne sera apportée concernant une demande sortant de ce champ.',
		"En cas de problème médical urgent, n'utilisez pas ce formulaire, mais contactez-nous au 05 37 810 828 ou rendez-vous directement dans l'un de nos cabinets.",
		"Merci de mentionner dans ce formulaire le motif de votre demande, le cabinet concerné et l'identité du patient concerné par la demande."
	];

	const contactReasons = [
		'Prise de rendez-vous',
		'Suivi de dossier',
		"Demande d'information",
		'Coordination médicale',
		'Autre motif'
	];
</script>

<svelte:head>
	<title>Contactez-nous | Formulaire</title>
	<meta
		name="description"
		content="Contactez notre équipe via notre formulaire dédié : raison du contact, identité du patient, cabinet sollicité."
	/>
</svelte:head>

<Section spacing="tight" width="wide" class="bg-primary-background">
	<div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
		<div class="space-y-10">
			<div class="m-b8">
				<Text variant="eyebrow" tone="cta">contact clinique</Text>
				<Title level="h2" class="mb-3 max-w-4xl text-pretty">
					Nous traiterons votre demande avec toute l'attention nécessaire
				</Title>
				<Text tone="muted" class="max-w-2xl text-pretty">
					Remplissez précisément les informations ci-dessous pour permettre à nos équipes de vous
					répondre rapidement.
				</Text>
			</div>

			<div class="border-light-grey/50 bg-sections-background/60 space-y-6 rounded-xl border p-6">
				<div class="bg-light-grey/50 relative mb-6 overflow-hidden rounded-xl" aria-hidden="true">
					<img src={ContactHero} alt="" />
				</div>

				<div class="space-y-4">
					{#each contactParagraphs as paragraph}
						<Text tone="default" class="mb-3">
							{paragraph}
						</Text>
					{/each}
				</div>
			</div>
		</div>

		<form
			method="POST"
			use:enhance
			class="border-light-grey/60 rounded-xl border bg-white p-8 shadow-sm"
			novalidate
		>
			{#if form?.success}
				<div class="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
					<Text tone="default" class="text-green-900">
						Votre demande a bien été envoyée. Notre équipe vous recontactera dès que possible.
					</Text>
				</div>
			{:else if form?.message}
				<div class="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
					<Text tone="default" class="text-red-900">{form.message}</Text>
				</div>
			{/if}

			<!-- Honeypot (anti-bot) -->
			<div class="hidden">
				<label for="company">Entreprise</label>
				<input id="company" name="company" type="text" tabindex="-1" autocomplete="off" />
			</div>

			<div class="mb-6 flex flex-col gap-2">
				<label
					for="contact-reason"
					class="text-secondary text-sm font-semibold uppercase tracking-[0.2em]"
				>
					Motif de contact
				</label>
				<div class="relative">
					<select
						id="contact-reason"
						name="contact-reason"
						required
						aria-invalid={form?.errors?.reason ? 'true' : 'false'}
						value={form?.values?.reason ?? ''}
						class="border-light-grey/80 bg-primary-background text-primary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base font-medium focus:outline-none focus:ring-2"
					>
						<option value="" disabled>Sélectionnez un motif</option>
						{#each contactReasons as reason}
							<option value={reason}>{reason}</option>
						{/each}
					</select>
				</div>
				{#if form?.errors?.reason}
					<p class="mt-2 text-sm font-medium text-red-700">{form.errors.reason}</p>
				{/if}
			</div>

			<div class="mb-6 grid gap-5 sm:grid-cols-2">
				<div class="flex flex-col gap-2">
					<label
						for="first-name"
						class="text-secondary text-sm font-semibold uppercase tracking-[0.2em]"
					>
						Prénom
					</label>
					<input
						id="first-name"
						name="first-name"
						type="text"
						required
						placeholder="Votre prénom"
						aria-invalid={form?.errors?.firstName ? 'true' : 'false'}
						value={form?.values?.firstName ?? ''}
						class="border-light-grey/80 bg-primary-background text-primary placeholder:text-secondary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
					/>
					{#if form?.errors?.firstName}
						<p class="mt-2 text-sm font-medium text-red-700">{form.errors.firstName}</p>
					{/if}
				</div>
				<div class="flex flex-col gap-2">
					<label
						for="last-name"
						class="text-secondary text-sm font-semibold uppercase tracking-[0.2em]"
					>
						Nom
					</label>
					<input
						id="last-name"
						name="last-name"
						type="text"
						required
						placeholder="Votre nom"
						aria-invalid={form?.errors?.lastName ? 'true' : 'false'}
						value={form?.values?.lastName ?? ''}
						class="border-light-grey/80 bg-primary-background text-primary placeholder:text-secondary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
					/>
					{#if form?.errors?.lastName}
						<p class="mt-2 text-sm font-medium text-red-700">{form.errors.lastName}</p>
					{/if}
				</div>
			</div>

			<div class="mb-6 grid gap-5 sm:grid-cols-2">
				<div class="flex flex-col gap-2">
					<label
						for="birth-date"
						class="text-secondary text-sm font-semibold uppercase tracking-[0.2em]"
					>
						Date de naissance
					</label>
					<input
						id="birth-date"
						name="birth-date"
						type="date"
						required
						aria-invalid={form?.errors?.birthDate ? 'true' : 'false'}
						value={form?.values?.birthDate ?? ''}
						class="border-light-grey/80 bg-primary-background text-primary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
					/>
					{#if form?.errors?.birthDate}
						<p class="mt-2 text-sm font-medium text-red-700">{form.errors.birthDate}</p>
					{/if}
				</div>
				<div class="flex flex-col gap-2">
					<label
						for="email"
						class="text-secondary text-sm font-semibold uppercase tracking-[0.2em]"
					>
						Adresse e-mail
					</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						placeholder="nom@exemple.com"
						aria-invalid={form?.errors?.email ? 'true' : 'false'}
						value={form?.values?.email ?? ''}
						class="border-light-grey/80 bg-primary-background text-primary placeholder:text-secondary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
					/>
					{#if form?.errors?.email}
						<p class="mt-2 text-sm font-medium text-red-700">{form.errors.email}</p>
					{/if}
				</div>
			</div>

			<div class="mb-6 flex flex-col gap-2">
				<label
					for="message"
					class="text-secondary text-sm font-semibold uppercase tracking-[0.2em]"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows="6"
					required
					placeholder="Précisez le motif, le cabinet concerné et l'identité du patient."
					aria-invalid={form?.errors?.message ? 'true' : 'false'}
					class="border-light-grey/80 bg-primary-background text-primary placeholder:text-secondary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
					>{form?.values?.message ?? ''}</textarea
				>
				{#if form?.errors?.message}
					<p class="mt-2 text-sm font-medium text-red-700">{form.errors.message}</p>
				{/if}
			</div>

			<div class="flex flex-col gap-4">
				<Button type="submit" size="lg" fullWidth>Envoyer la demande</Button>
				<Text variant="body-sm" tone="muted">
					Les informations transmises sont strictement destinées à notre équipe afin de traiter
					votre demande dans les meilleurs délais.
				</Text>
			</div>
		</form>
	</div>
</Section>

<Section spacing="comfortable" width="wide">
	<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
		<div class="space-y-6 lg:w-5/12">
			<Text variant="eyebrow" tone="cta">Visitez notre clinique</Text>
			<Title level="h3" class="text-pretty">Nous sommes là pour vous aider à mieux voir</Title>

			<Card variant="surface" class="space-y-5">
				{#each contactItems as { icon: Icon, title, lines, link } (title)}
					<div class="space-y-3">
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
			</Card>
		</div>

		<div class="w-full lg:flex-1">
			<Map title="Localisation de la clinique" />
		</div>
	</div>
</Section>
