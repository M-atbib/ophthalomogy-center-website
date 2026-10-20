import DefaultSocialImage from '$lib/assets/images/home-hero-male.webp';
import { cabinet, cabinetMapUrl } from '$lib/cabinet';
import type { BlogArticle } from '$lib/types/blog';

export type SeoRoute = {
	title?: string;
	description?: string;
	priority?: number;
	changeFrequency?: 'daily' | 'weekly' | 'monthly' | 'yearly';
};

export type BreadcrumbItem = {
	name: string;
	path: string;
	url: string;
};

export type PageSeo = {
	path: string;
	title: string;
	metaTitle: string;
	description: string;
	canonicalUrl: string;
	robots: string;
	openGraphImageUrl: string;
	openGraphType: 'website' | 'article';
	article?: {
		headline: string;
		imageUrl?: string;
		datePublished?: string;
	};
	breadcrumbs: BreadcrumbItem[];
};

export type SitemapArticle = { slug: string; updatedAt?: string };

export const seoConfig = {
	siteUrl: 'https://dramalophtalmo.ma',
	siteName: cabinet.name,
	titleSuffix: 'Dr Amal Alouan',
	locale: 'fr_MA',
	language: 'fr-MA',
	alternateLocale: 'fr_FR',
	defaultTitle: 'Dr Amal Alouan, ophtalmologue à Salé',
	defaultDescription:
		'Informations et prise de rendez-vous au cabinet du Dr Amal Alouan, ophtalmologue à Salé, près de Rabat. Découvrez les pages de soins et conseils du site.',
	address: {
		streetAddress: cabinet.streetAddress,
		addressLocality: cabinet.locality,
		addressCountry: cabinet.country
	},
	phones: cabinet.phones.map((phone) => phone.international),
	email: cabinet.email,
	mapUrl: cabinetMapUrl,
	logoPath: '/brand/logo-full.png',
	defaultSocialImagePath: DefaultSocialImage
} as const;

// Vite exposes the route file inventory at build time; using it here keeps new static pages
// discoverable for the sitemap while route-specific overrides stay focused on SEO wording.
const routeFiles = import.meta.glob('/src/routes/**/+page.svelte');

export const routeSeoOverrides: Record<string, SeoRoute> = {
	'/': {
		title: 'Dr Amal Alouan, ophtalmologue à Salé',
		description: seoConfig.defaultDescription,
		priority: 1,
		changeFrequency: 'weekly'
	},
	'/a-propos': {
		title: 'Dr Amal Alouan – Ophtalmologue à Salé, parcours et cabinet',
		description:
			'Découvrez le parcours du Dr Amal Alouan, ophtalmologue à Salé : formation, expérience hospitalière, compétences et informations du cabinet.'
	},
	'/actualites': {
		title: "Actualités d'ophtalmologie",
		description:
			"Retrouvez les articles publiés par le cabinet du Dr Amal Alouan sur la santé des yeux et l'ophtalmologie.",
		changeFrequency: 'weekly'
	},
	'/adresser-patient': {
		title: 'Adresser un patient',
		description:
			'Informations pour les professionnels de santé qui souhaitent adresser un patient au cabinet du Dr Amal Alouan à Salé.'
	},
	'/conseils': {
		title: 'Conseils pour la santé des yeux',
		description:
			'Parcourez les conseils sur les lunettes, les lentilles et les soins des yeux, puis accédez aux articles détaillés.'
	},
	'/contactez-nous': {
		title: 'Contact et rendez-vous à Salé',
		description:
			'Adresse, itinéraire et téléphones du cabinet du Dr Amal Alouan à Salé, près de Rabat. Retrouvez les formulaires de rendez-vous et de contact.',
		priority: 0.9
	},
	'/equipement': {
		title: 'Équipements ophtalmologiques',
		description:
			'Découvrez les équipements présentés par le cabinet du Dr Amal Alouan pour les examens des yeux.'
	},
	'/maladie-oeil/blepharite-secheresse-surface-oculaire': {
		title: 'Blépharite et sécheresse oculaire',
		description:
			'Comprendre la blépharite, la sécheresse oculaire et les troubles de la surface de l’œil grâce aux articles de ce dossier.'
	},
	'/maladie-oeil/cataracte': {
		title: 'Cataracte',
		description:
			'Comprendre la cataracte, ses symptômes et les informations sur sa prise en charge dans les articles de ce dossier.'
	},
	'/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard': {
		title: 'Médecine et chirurgie du regard',
		description:
			'Consultez les articles consacrés à la médecine et à la chirurgie esthétique du regard.'
	},
	'/maladie-oeil/chirurgie-refractive': {
		title: 'Chirurgie réfractive',
		description:
			'Lisez les articles sur les techniques de chirurgie réfractive, les questions avant une intervention et les conseils après les soins.'
	},
	'/maladie-oeil/cornee-et-greffes': {
		title: 'Cornée et greffes',
		description:
			'Explorez les articles sur la cornée, ses troubles et les différents types de greffe de cornée.'
	},
	'/maladie-oeil/explorations-et-aptitudes': {
		title: 'Explorations et aptitudes visuelles',
		description:
			'Retrouvez les articles sur les examens visuels, la basse vision et les aptitudes liées à la vue.'
	},
	'/maladie-oeil/glaucome': {
		title: 'Glaucome',
		description:
			'Consultez les articles sur le glaucome, ses formes et les informations sur les traitements.'
	},
	'/maladie-oeil/keratocone': {
		title: 'Kératocône',
		description:
			'Comprendre le kératocône et les options de prise en charge décrites dans les articles de ce dossier.'
	},
	'/maladie-oeil/lentilles-contactologie': {
		title: 'Lentilles et contactologie',
		description:
			'Informations sur les lentilles de contact, leur utilisation, leur entretien et les signes qui demandent un avis médical.'
	},
	'/maladie-oeil/lunettes': {
		title: 'Lunettes et correction visuelle',
		description:
			'Conseils sur les lunettes, la correction visuelle et les troubles de la réfraction présentés dans ce dossier.'
	},
	'/maladie-oeil/ophtalmo-pediatrie': {
		title: 'Ophtalmologie pédiatrique',
		description:
			'Explorez les articles sur la vue des enfants, les examens et les troubles visuels pédiatriques.'
	},
	'/maladie-oeil/paupieres-et-voies-lacrymales': {
		title: 'Paupières et voies lacrymales',
		description:
			'Découvrez les articles sur les paupières, les voies lacrymales et les conseils après une intervention.'
	},
	'/maladie-oeil/retine-chirurgicale': {
		title: 'Rétine chirurgicale',
		description:
			'Lisez les articles sur les maladies de la rétine qui peuvent demander un traitement chirurgical et les conseils associés.'
	},
	'/maladie-oeil/retine-medicale': {
		title: 'Rétine médicale',
		description:
			'Retrouvez les articles sur les maladies de la rétine, les examens et les soins présentés dans ce dossier.'
	},
	'/maladie-oeil/strabologie-chirurgie-du-strabisme': {
		title: 'Strabisme et sa chirurgie',
		description:
			'Comprendre le strabisme et les questions liées à sa prise en charge dans les articles de ce dossier.'
	},
	'/maladie-oeil/urgences-et-infections': {
		title: 'Urgences et infections oculaires',
		description:
			'Repérez les articles sur les symptômes oculaires urgents et les infections des yeux, avec des conseils de prudence.'
	},
	'/urgences': {
		title: 'Urgences ophtalmologiques',
		description:
			'Informations sur les urgences ophtalmologiques et les moyens de contacter le cabinet du Dr Amal Alouan à Salé.'
	}
};

function routePathFromFile(filePath: string) {
	const routePath = filePath.replace('/src/routes', '').replace('/+page.svelte', '') || '/';

	// Dynamic Sanity article URLs need CMS-aware metadata and sitemap fetching, so they remain
	// indexable through the layout but are intentionally deferred from the static sitemap.
	if (routePath.includes('[')) return undefined;

	return normalizePath(routePath);
}

export const staticSitemapRoutes = Object.keys(routeFiles)
	.map(routePathFromFile)
	.filter((path): path is string => Boolean(path))
	.sort((left, right) => (left === '/' ? -1 : right === '/' ? 1 : left.localeCompare(right)));

export function normalizePath(path: string) {
	const withoutQuery = path.split('?')[0]?.split('#')[0] || '/';
	const decodedPath = safelyDecodePath(withoutQuery);
	const withLeadingSlash = decodedPath.startsWith('/') ? decodedPath : `/${decodedPath}`;
	const withoutTrailingSlash =
		withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, '') : withLeadingSlash;

	return withoutTrailingSlash || '/';
}

export const absoluteUrl = (path: string) => new URL(path, `${seoConfig.siteUrl}/`).toString();

export const getPageSeo = (path: string): PageSeo => {
	const normalizedPath = normalizePath(path);
	const route = routeSeoOverrides[normalizedPath] ?? {};
	const title = route.title ?? labelFromSegment(normalizedPath.split('/').filter(Boolean).at(-1));
	const metaTitle = normalizedPath === '/' ? seoConfig.defaultTitle : formatMetaTitle(title);
	const description = route.description ?? buildDefaultDescription(title);
	const canonicalUrl = absoluteUrl(normalizedPath);

	return {
		path: normalizedPath,
		title,
		metaTitle,
		description,
		canonicalUrl,
		robots: 'index, follow',
		openGraphImageUrl: absoluteUrl(seoConfig.defaultSocialImagePath),
		openGraphType: 'website',
		breadcrumbs: buildBreadcrumbs(normalizedPath)
	};
};

export const getArticleSeo = (path: string, article: BlogArticle): PageSeo => {
	const metadata = getPageSeo(path);
	const title = article.title?.trim() || metadata.title;
	const summary = article.briefing?.trim() || article.subtitle?.trim();
	const description = summary ? plainTextSummary(summary) : buildDefaultDescription(title);
	const datePublished = validDate(article.publishedAt);

	return {
		...metadata,
		title,
		metaTitle: formatMetaTitle(title),
		description,
		openGraphImageUrl: article.imageUrl || metadata.openGraphImageUrl,
		openGraphType: 'article',
		article: {
			headline: title,
			...(article.imageUrl && { imageUrl: article.imageUrl }),
			...(datePublished && { datePublished })
		},
		breadcrumbs: metadata.breadcrumbs.map((crumb, index, crumbs) =>
			index === crumbs.length - 1 ? { ...crumb, name: title } : crumb
		)
	};
};

export const buildJsonLd = (metadata: PageSeo) => {
	const organizationId = absoluteUrl('/#organization');
	const websiteId = absoluteUrl('/#website');
	const graph: Record<string, unknown>[] = [
		{
			'@type': 'MedicalClinic',
			'@id': organizationId,
			name: seoConfig.siteName,
			url: absoluteUrl('/'),
			logo: absoluteUrl(seoConfig.logoPath),
			image: absoluteUrl(seoConfig.defaultSocialImagePath),
			email: seoConfig.email,
			telephone: seoConfig.phones,
			address: {
				'@type': 'PostalAddress',
				streetAddress: seoConfig.address.streetAddress,
				addressLocality: seoConfig.address.addressLocality,
				addressCountry: seoConfig.address.addressCountry
			},
			areaServed: [
				{ '@type': 'City', name: 'Salé' },
				{ '@type': 'City', name: 'Rabat' }
			],
			availableLanguage: ['fr'],
			hasMap: seoConfig.mapUrl,
			medicalSpecialty: 'Ophthalmology'
		},
		{
			'@type': 'WebSite',
			'@id': websiteId,
			name: seoConfig.siteName,
			url: absoluteUrl('/'),
			inLanguage: seoConfig.language,
			publisher: { '@id': organizationId }
		},
		{
			'@type': 'WebPage',
			'@id': `${metadata.canonicalUrl}#webpage`,
			url: metadata.canonicalUrl,
			name: metadata.metaTitle,
			description: metadata.description,
			isPartOf: { '@id': websiteId },
			about: { '@id': organizationId },
			inLanguage: seoConfig.language,
			breadcrumb: { '@id': `${metadata.canonicalUrl}#breadcrumb` }
		},
		{
			'@type': 'BreadcrumbList',
			'@id': `${metadata.canonicalUrl}#breadcrumb`,
			itemListElement: metadata.breadcrumbs.map((breadcrumb, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: breadcrumb.name,
				item: breadcrumb.url
			}))
		}
	];

	if (metadata.path === '/a-propos') {
		const physicianId = absoluteUrl('/a-propos#physician');
		graph.push({
			'@type': 'Physician',
			'@id': physicianId,
			name: 'Dr Amal Alouan',
			url: metadata.canonicalUrl,
			jobTitle: 'Ophtalmologue',
			medicalSpecialty: 'Ophthalmology',
			worksFor: { '@id': organizationId },
			hasCredential: {
				'@type': 'EducationalOccupationalCredential',
				name: 'Diplôme de spécialiste en ophtalmologie',
				dateCreated: '2015'
			}
		});
		const webPage = graph.find((node) => node['@type'] === 'WebPage');
		if (webPage) webPage.about = { '@id': physicianId };
	}

	if (metadata.article) {
		graph.push({
			'@type': 'Article',
			'@id': `${metadata.canonicalUrl}#article`,
			mainEntityOfPage: { '@id': `${metadata.canonicalUrl}#webpage` },
			headline: metadata.article.headline,
			description: metadata.description,
			...(metadata.article.imageUrl && { image: metadata.article.imageUrl }),
			publisher: { '@id': organizationId },
			inLanguage: seoConfig.language,
			...(metadata.article.datePublished && { datePublished: metadata.article.datePublished })
		});
	}

	return {
		'@context': 'https://schema.org',
		'@graph': graph
	};
};

export const buildSitemapXml = (articles: SitemapArticle[] = []) => {
	const urls = staticSitemapRoutes.map((path) => {
		const route = routeSeoOverrides[path] ?? {};

		return [
			'\t<url>',
			`\t\t<loc>${escapeXml(absoluteUrl(path))}</loc>`,
			`\t\t<changefreq>${route.changeFrequency ?? 'monthly'}</changefreq>`,
			`\t\t<priority>${route.priority ?? 0.7}</priority>`,
			'\t</url>'
		].join('\n');
	});
	const seenPaths = new Set(staticSitemapRoutes);

	for (const article of articles) {
		if (!article.slug || article.slug.includes('/')) continue;
		const path = normalizePath(`/actualites/${article.slug}`);
		if (seenPaths.has(path)) continue;
		seenPaths.add(path);
		const lastModified = validDate(article.updatedAt);
		urls.push(
			[
				'\t<url>',
				`\t\t<loc>${escapeXml(absoluteUrl(path))}</loc>`,
				...(lastModified ? [`\t\t<lastmod>${lastModified}</lastmod>`] : []),
				'\t</url>'
			].join('\n')
		);
	}

	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls,
		'</urlset>'
	].join('\n');
};

const buildDefaultDescription = (title: string) =>
	`Retrouvez des informations sur ${title.toLowerCase()} dans les articles du cabinet du Dr Amal Alouan, ophtalmologue à Salé.`;

const formatMetaTitle = (title: string) => {
	const withSuffix = `${title} | ${seoConfig.titleSuffix}`;
	return withSuffix.length <= 60 ? withSuffix : title;
};

const plainTextSummary = (value: string) => {
	const plainText = value
		.replace(/<[^>]*>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	if (plainText.length <= 160) return plainText;
	return `${plainText.slice(0, 157).replace(/\s+\S*$/, '')}…`;
};

const validDate = (value?: string) => {
	if (!value) return undefined;
	const parsed = new Date(value);
	return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
};

const buildBreadcrumbs = (path: string): BreadcrumbItem[] => {
	const segments = path.split('/').filter(Boolean);
	const breadcrumbs: BreadcrumbItem[] = [{ name: 'Accueil', path: '/', url: absoluteUrl('/') }];

	segments.forEach((_, index) => {
		const crumbPath = `/${segments.slice(0, index + 1).join('/')}`;
		const route = routeSeoOverrides[crumbPath];

		breadcrumbs.push({
			name:
				crumbPath === '/a-propos'
					? 'À propos'
					: (route?.title ?? labelFromSegment(segments[index])),
			path: crumbPath,
			url: absoluteUrl(crumbPath)
		});
	});

	return breadcrumbs;
};

const labelFromSegment = (segment: string = seoConfig.siteName) =>
	segment
		.replace(/[_-]+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
		.replace(/^./, (value) => value.toUpperCase());

function safelyDecodePath(path: string) {
	try {
		return decodeURI(path);
	} catch {
		return path;
	}
}

const escapeXml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
