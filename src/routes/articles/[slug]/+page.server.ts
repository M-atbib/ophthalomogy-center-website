import { loadArticle } from '$lib/server/articles';
import type { PageServerLoad } from './$types';

export const load = (({ params }) => loadArticle(params.slug, 'fr')) satisfies PageServerLoad;
