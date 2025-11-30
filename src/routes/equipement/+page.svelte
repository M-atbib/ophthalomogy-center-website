<script lang="ts">
	import { Card, Section, Text, Title } from '$lib';
	import { EquipementHero } from '$lib/assets';
	import { equipement as equipementContent } from '$lib/content';

	const { firstSection, secondSection } = equipementContent;

	const toArray = (value: any) => {
		if (Array.isArray(value)) return value;
		return value ? [value] : [];
	};

	const parseText = (value: any, title?: string) => {
		const entries = toArray(value);
		if (!entries.length) {
			return { description: undefined, label: undefined, diseases: [], listItems: [] };
		}

		if (title === 'Verres d’examen') {
			return { description: undefined, label: undefined, diseases: [], listItems: entries };
		}

		if (title === 'Échographie oculaire') {
			const description = entries[0];
			const listItems = entries.slice(1, 5);
			const [label, ...diseases] = entries.slice(5);
			return { description, label, diseases, listItems };
		}

		const [description, label, ...diseases] = entries;
		return { description, label, diseases, listItems: [] };
	};

	const toSlug = (value: string) =>
		value
			?.toLowerCase()
			.normalize('NFD')
			.replace(/[^\p{Letter}\p{Number}]+/gu, '-')
			.replace(/^-+|-+$/g, '') ?? '';

	const machines = [
		{
			title: firstSection.machineOne,
			...parseText(firstSection.machineOneText, firstSection.machineOne)
		},
		{
			title: firstSection.machineTwo,
			...parseText(firstSection.machineTwoText, firstSection.machineTwo)
		}
	];

	const consultationEquipements = secondSection.equipements.map((item) => ({
		...item,
		...parseText(item.text, item.title)
	}));
</script>

<Section spacing="comfortable" contentSpacing="none" width="wide">
	<div class="flex flex-col gap-10 lg:flex-row lg:items-center">
		<div class="space-y-6 lg:w-5/12">
			<Title level="h1" class="text-pretty">Nos équipements</Title>
			<Text variant="body-lg" tone="muted" class="text-pretty">
				L'Ophtalmologie est une spécialité extrêmement pointue et exigeante. Au [Nom de Clinique],
				nos spécialistes sont rompus aux technologies ophtalmologiques de pointe et nous
				investissons en permanence dans l'acquisition des équipements les plus récents, dans tous
				les domaines de notre spécialité. Avec, toujours, un seul objectif : vous proposer des soins
				de qualité.
			</Text>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background rounded-4xl mx-auto w-full overflow-hidden border shadow-sm lg:w-7/12"
		>
			<img src={EquipementHero} alt="" class="h-full w-full object-cover" loading="lazy" />
		</figure>
	</div>
</Section>

<Section variant="muted" spacing="comfortable" contentSpacing="lg" width="wide">
	<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
		<div class="space-y-8">
			<div class="space-y-4">
				<Title level="h3" class="text-pretty">{firstSection.title}</Title>
				<Text tone="muted" class="text-pretty">{firstSection.text}</Text>
			</div>
			<div class="space-y-2">
				<Text weight="semibold" class="text-pretty">{firstSection.subTitle}</Text>
				<Text tone="muted" class="text-pretty">{firstSection.subText}</Text>
			</div>
			<div class="grid gap-6 lg:grid-cols-2">
				{#each machines as { title, description, label, diseases, listItems } (title)}
					<Card variant="muted" padding="lg" elevation="none" class="h-full space-y-4 shadow-none">
						<Text weight="semibold" class="text-pretty">{title}</Text>
						{#if description}
							<Text tone="muted" class="text-pretty">{description}</Text>
						{/if}
						{#if listItems.length}
							<ul class="list-disc space-y-2 pl-5">
								{#each listItems as item, index (`${title}-machine-list-${index}`)}
									<li>
										<Text tone="muted" class="text-pretty">{item}</Text>
									</li>
								{/each}
							</ul>
						{/if}
						{#if label}
							<Text weight="semibold" class="text-pretty">{label}</Text>
						{/if}
						{#if diseases.length}
							<ul class="flex flex-wrap gap-2">
								{#each diseases as disease, index (`${title}-machine-${index}`)}
									<li>
										<a
											href={`/maladie-oeil/${toSlug(disease)}`}
											class="text-cta hover:text-secondary text-sm font-semibold underline underline-offset-4"
										>
											{disease}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</Card>
				{/each}
			</div>
		</div>
		<figure
			class="border-light-grey/60 bg-primary-background rounded-4xl mx-auto w-full max-w-xl overflow-hidden border shadow-sm"
		>
			<img
				src={firstSection.sectionImage}
				alt={firstSection.title}
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		</figure>
	</div>
</Section>

<Section spacing="comfortable" contentSpacing="lg" width="wide">
	<Title level="h2" class="text-pretty" align="center">{secondSection.title}</Title>

	<div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
		{#each consultationEquipements as { image, title, description, label, diseases, listItems } (title)}
			<Card
				variant="surface"
				padding="lg"
				elevation="none"
				class="border-light-grey/60 flex h-full flex-col gap-5 border"
			>
				<div class="flex flex-1 items-center justify-center">
					<figure
						class="border-light-grey/40 bg-primary-background h-full w-full rounded-3xl border p-4"
					>
						<img src={image} alt={title} class="h-full w-full object-contain" loading="lazy" />
					</figure>
				</div>
				<div class="space-y-3">
					<Text weight="semibold" class="text-pretty text-lg">{title}</Text>
					{#if description}
						<Text tone="muted" class="text-pretty">{description}</Text>
					{/if}
					{#if listItems.length}
						<ul class="list-disc space-y-2 pl-5">
							{#each listItems as item, index (`${title}-equip-list-${index}`)}
								<li>
									<Text tone="muted" class="text-pretty">{item}</Text>
								</li>
							{/each}
						</ul>
					{/if}
					{#if label}
						<Text weight="semibold" class="text-pretty">{label}</Text>
					{/if}
					{#if diseases.length}
						<ul class="flex flex-wrap gap-2">
							{#each diseases as disease, index (`${title}-equip-${index}`)}
								<li>
									<a
										href={`/maladie-oeil/${toSlug(disease)}`}
										class="text-cta hover:text-secondary text-sm font-semibold underline underline-offset-4"
									>
										{disease}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</Card>
		{/each}
	</div>
</Section>
