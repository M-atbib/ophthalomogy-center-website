import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	const arabic =
		event.url.pathname === '/ar/articles' || event.url.pathname.startsWith('/ar/articles/');
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html
				.replace('%site.lang%', arabic ? 'ar' : 'fr')
				.replace('%site.dir%', arabic ? 'rtl' : 'ltr')
	});
};
