<script lang="ts">
	import { Button, Section, Text, Title } from '$lib';
	import { ContactHero } from '$lib/assets';

	const contactParagraphs = [
		"Ce formulaire permet de contacter l'équipe du [Nom de Clinique] uniquement pour les motifs suivants. Aucune réponse ne sera apportée concernant une demande sortant de ce champ.",
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
		content="Contactez l'équipe du [Nom de Clinique] via notre formulaire dédié : raison du contact, identité du patient, cabinet sollicité."
	/>
</svelte:head>``

<Section spacing="tight" width="wide" class="bg-primary-background">
	<div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
		<div class="space-y-10">
			<div class="m-b8">
				<Text variant="eyebrow" tone="cta">contact clinique</Text>
				<Title level="h2" class="max-w-4xl text-pretty mb-3">
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
			class="border-light-grey/60 rounded-xl border bg-white p-8 shadow-sm "
			novalidate
		>
			<div class="flex flex-col gap-2 mb-6">
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
						class="border-light-grey/80 bg-primary-background text-primary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base font-medium focus:outline-none focus:ring-2"
					>
						<option value="" disabled selected>Sélectionnez un motif</option>
						{#each contactReasons as reason}
							<option value={reason}>{reason}</option>
						{/each}
					</select>
				</div>
			</div>

			<div class="grid gap-5 sm:grid-cols-2  mb-6">
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
						class="border-light-grey/80 bg-primary-background text-primary placeholder:text-secondary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
					/>
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
						class="border-light-grey/80 bg-primary-background text-primary placeholder:text-secondary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
					/>
				</div>
			</div>

			<div class="grid gap-5 sm:grid-cols-2  mb-6">
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
						class="border-light-grey/80 bg-primary-background text-primary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
					/>
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
						class="border-light-grey/80 bg-primary-background text-primary placeholder:text-secondary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
					/>
				</div>
			</div>

			<div class="flex flex-col gap-2  mb-6">
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
					class="border-light-grey/80 bg-primary-background text-primary placeholder:text-secondary focus:border-cta focus:ring-cta/30 w-full rounded-xl border px-4 py-3 text-base focus:outline-none focus:ring-2"
				></textarea>
			</div>

			<div class="flex flex-col gap-4">
				<Button type="submit" size="lg" fullWidth>Envoyer la demande</Button>
				<Text variant="body-sm" tone="muted">
					Les informations transmises sont strictement destinées à l'équipe du [Nom de Clinique]
					afin de traiter votre demande dans les meilleurs délais.
				</Text>
			</div>
		</form>
	</div>
</Section>
