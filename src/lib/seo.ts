import Logo from '$lib/assets/logo.png';
import DefaultSocialImage from '$lib/assets/images/home-hero.png';

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
	breadcrumbs: BreadcrumbItem[];
};

export const seoConfig = {
	siteUrl: 'https://dramalophtalmo.ma',
	siteName: "Centre d'ophtalmologie Salé - Dr Amal Alouan",
	titleSuffix: "Centre d'ophtalmologie Salé",
	locale: 'fr_MA',
	language: 'fr-MA',
	alternateLocale: 'fr_FR',
	defaultTitle: "Ophtalmologue à Salé | Centre d'ophtalmologie Salé - Dr Amal Alouan",
	defaultDescription:
		"Centre d'ophtalmologie à Salé au Maroc pour consultations, urgences oculaires, cataracte, rétine, glaucome, chirurgie réfractive, lentilles et soins spécialisés.",
	address: {
		streetAddress: 'Imm.67, APPT 1 Lot Al Andalouss, Avenue Abderrahim Bouaabid, Hay Essalam',
		addressLocality: 'Salé',
		addressCountry: 'MA'
	},
	phones: ['+212537810828', '+212666824247'],
	email: 'dr.amalalouan@gmail.com',
	mapUrl:
		'https://www.google.com/maps/search/?api=1&query=Imm.67%2CAPPT%201%20Lot%20Al%20Andalouss%2C%20Avenue%20Abderrahim%20Bouaabid%2C%20Hay%20Essalam%20Sal%C3%A9',
	logoPath: Logo,
	defaultSocialImagePath: DefaultSocialImage
} as const;

// Vite exposes the route file inventory at build time; using it here keeps new static pages
// discoverable for the sitemap while route-specific overrides stay focused on SEO wording.
const routeFiles = import.meta.glob('/src/routes/**/+page.svelte');

export const routeSeoOverrides: Record<string, SeoRoute> = {
	'/': {
		title: 'Ophtalmologue à Salé',
		description: seoConfig.defaultDescription,
		priority: 1,
		changeFrequency: 'weekly'
	},
	'/a-propos': { title: 'À propos du centre ophtalmologique' },
	'/actualites': { title: "Actualités d'ophtalmologie", changeFrequency: 'weekly' },
	'/adresser-patient': { title: 'Adresser un patient' },
	'/conseils': { title: 'Conseils ophtalmologiques' },
	'/contactez-nous': {
		title: 'Contact et rendez-vous ophtalmologie',
		description:
			"Contactez le Centre d'ophtalmologie Salé pour un rendez-vous, une urgence oculaire ou l'adressage d'un patient par un professionnel de santé.",
		priority: 0.9
	},
	'/equipement': { title: 'Équipements ophtalmologiques' },
	'/maladie-oeil/blepharite-secheresse-surface-oculaire': {
		title: 'Blépharite, sécheresse et surface oculaire'
	},
	'/maladie-oeil/cataracte': { title: 'Cataracte' },
	'/maladie-oeil/chirurgie-et-medecine-esthetique-du-regard': {
		title: 'Chirurgie et médecine esthétique du regard'
	},
	'/maladie-oeil/chirurgie-refractive': { title: 'Chirurgie réfractive' },
	'/maladie-oeil/cornee-et-greffes': { title: 'Cornée et greffes' },
	'/maladie-oeil/explorations-et-aptitudes': { title: 'Explorations et aptitudes visuelles' },
	'/maladie-oeil/glaucome': { title: 'Glaucome' },
	'/maladie-oeil/keratocone': { title: 'Kératocône' },
	'/maladie-oeil/lentilles-contactologie': { title: 'Lentilles et contactologie' },
	'/maladie-oeil/lunettes': { title: 'Lunettes' },
	'/maladie-oeil/ophtalmo-pediatrie': { title: 'Ophtalmologie pédiatrique' },
	'/maladie-oeil/paupieres-et-voies-lacrymales': { title: 'Paupières et voies lacrymales' },
	'/maladie-oeil/retine-chirurgicale': { title: 'Rétine chirurgicale' },
	'/maladie-oeil/retine-medicale': { title: 'Rétine médicale' },
	'/maladie-oeil/strabologie-chirurgie-du-strabisme': {
		title: 'Strabologie et chirurgie du strabisme'
	},
	'/maladie-oeil/urgences-et-infections': { title: 'Urgences et infections oculaires' },
	'/urgences': { title: 'Urgences ophtalmologiques' }
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
	const metaTitle =
		normalizedPath === '/' ? seoConfig.defaultTitle : `${title} | ${seoConfig.titleSuffix}`;
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
		breadcrumbs: buildBreadcrumbs(normalizedPath)
	};
};

export const buildJsonLd = (metadata: PageSeo) => {
	const organizationId = absoluteUrl('/#organization');
	const websiteId = absoluteUrl('/#website');

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'MedicalOrganization',
				'@id': organizationId,
				name: seoConfig.siteName,
				url: absoluteUrl('/'),
				logo: absoluteUrl(seoConfig.logoPath),
				image: metadata.openGraphImageUrl,
				email: seoConfig.email,
				telephone: seoConfig.phones,
				address: {
					'@type': 'PostalAddress',
					streetAddress: seoConfig.address.streetAddress,
					addressLocality: seoConfig.address.addressLocality,
					addressCountry: seoConfig.address.addressCountry
				},
				areaServed: [
					{ '@type': 'Country', name: 'Maroc' },
					{ '@type': 'AdministrativeArea', name: 'Pays francophones' }
				],
				availableLanguage: ['fr', 'ar'],
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
		]
	};
};

export const buildSitemapXml = () => {
	const lastModified = new Date().toISOString();
	const urls = staticSitemapRoutes.map((path) => {
		const route = routeSeoOverrides[path] ?? {};

		return [
			'\t<url>',
			`\t\t<loc>${escapeXml(absoluteUrl(path))}</loc>`,
			`\t\t<lastmod>${lastModified}</lastmod>`,
			`\t\t<changefreq>${route.changeFrequency ?? 'monthly'}</changefreq>`,
			`\t\t<priority>${route.priority ?? 0.7}</priority>`,
			'\t</url>'
		].join('\n');
	});

	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls,
		'</urlset>'
	].join('\n');
};

const buildDefaultDescription = (title: string) =>
	`Informations sur ${title.toLowerCase()} par le Centre d'ophtalmologie Salé - Dr Amal Alouan, à Salé au Maroc. Consultations, diagnostic et prise en charge ophtalmologique.`;

const buildBreadcrumbs = (path: string): BreadcrumbItem[] => {
	const segments = path.split('/').filter(Boolean);
	const breadcrumbs: BreadcrumbItem[] = [{ name: 'Accueil', path: '/', url: absoluteUrl('/') }];

	segments.forEach((_, index) => {
		const crumbPath = `/${segments.slice(0, index + 1).join('/')}`;
		const route = routeSeoOverrides[crumbPath];

		breadcrumbs.push({
			name: route?.title ?? labelFromSegment(segments[index]),
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
