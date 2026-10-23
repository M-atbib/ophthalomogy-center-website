import { redirect } from '@sveltejs/kit';
import { articlePath } from '$lib/articles';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ params, url }) =>
	redirect(301, `${articlePath(params.slug, 'fr')}${url.search}`);
