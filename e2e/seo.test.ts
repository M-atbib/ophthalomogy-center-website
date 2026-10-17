import { expect, test } from '@playwright/test';

const keyPages = ['/', '/a-propos', '/contactez-nous', '/maladie-oeil/cataracte'];

test('key pages have one title, description, canonical and main heading', async ({ page }) => {
	for (const path of keyPages) {
		const response = await page.goto(path);
		expect(response?.status(), path).toBe(200);
		await expect(page.locator('head title')).toHaveCount(1);
		await expect(page.locator('head meta[name="description"]')).toHaveCount(1);
		await expect(page.locator('head link[rel="canonical"]')).toHaveCount(1);
		await expect(page.locator('h1')).toHaveCount(1);
		if (path === '/a-propos') {
			await expect(page.getByRole('heading', { name: 'Notre cabinet en images' })).toBeVisible();
			await expect(page.getByRole('img', { name: /portrait de Dr Amal Alouan/i })).toHaveCount(0);
		}
	}
});

test('home links and images work', async ({ page, request }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Dr Amal Alouan', exact: true })).toBeVisible();
	await expect(page.getByRole('img', { name: /portrait de Dr Amal Alouan/i })).toHaveCount(0);
	await expect(page.getByRole('heading', { name: 'Notre cabinet en images' })).toBeVisible();
	const paths = await page.locator('a[href^="/"]').evaluateAll((links) =>
		[...new Set(links.map((link) => (link as HTMLAnchorElement).pathname))]
	);
	for (const path of paths) {
		const response = await request.get(path);
		expect(response.status(), path).toBe(200);
	}
	const images = page.locator('main img');
	expect(await images.count()).toBeGreaterThan(0);
	for (const image of await images.all()) {
		await expect(image).toHaveAttribute('alt');
		await expect(image).toHaveAttribute('width');
		await expect(image).toHaveAttribute('height');
		await image.scrollIntoViewIfNeeded();
		await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
	}
});

test('home fits five screen widths', async ({ page }) => {
	for (const width of [320, 375, 768, 1024, 1440]) {
		await page.setViewportSize({ width, height: 900 });
		await page.goto('/');
		const overflow = await page.evaluate(() =>
			document.documentElement.scrollWidth > document.documentElement.clientWidth
		);
		expect(overflow, `${width}px horizontal overflow`).toBe(false);
	}
});

test('sitemap XML has distinct reachable static URLs', async ({ request }) => {
	const response = await request.get('/sitemap.xml');
	expect(response.status()).toBe(200);
	expect(response.headers()['content-type']).toContain('xml');
	const xml = await response.text();
	const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
	expect(urls.length).toBeGreaterThanOrEqual(133);
	expect(new Set(urls).size).toBe(urls.length);
	for (const url of urls.filter((value) => !value.includes('/actualites/'))) {
		const path = new URL(url).pathname;
		const pageResponse = await request.get(path);
		expect(pageResponse.status(), path).toBe(200);
		const html = await pageResponse.text();
		expect((html.match(/<h1\b/g) ?? []).length, `${path} H1`).toBe(1);
		expect((html.match(/rel="canonical"/g) ?? []).length, `${path} canonical`).toBe(1);
		expect(html, `${path} placeholder`).not.toContain('[Nom de Clinique]');
	}
});
