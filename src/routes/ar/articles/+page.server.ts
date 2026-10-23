import { loadArticleList } from '$lib/server/articles';
import type { PageServerLoad } from './$types';

export const load = (() => loadArticleList('ar')) satisfies PageServerLoad;
