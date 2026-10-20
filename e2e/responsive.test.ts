import { expect, test } from '@playwright/test';

const routes = [
	'/',
	'/a-propos',
	'/contactez-nous',
	'/conseils',
	'/equipement',
	'/maladie-oeil/cataracte',
	'/maladie-oeil/cataracte/cataracte_qu_est_ce_que_c_est'
];

for (const width of [320, 375]) {
	test(`main pages fit a ${width}px mobile screen`, async ({ page }) => {
		await page.setViewportSize({ width, height: 800 });
		for (const route of routes) {
			await page.goto(route);
			await expect(page.locator('h1')).toHaveCount(1);
			const dimensions = await page.evaluate(() => ({
				viewport: document.documentElement.clientWidth,
				content: document.documentElement.scrollWidth
			}));
			expect(dimensions.content, `${route} scrolls sideways at ${width}px`).toBeLessThanOrEqual(
				dimensions.viewport
			);
		}
	});
}

test('mobile menu opens from its icon and closes with Escape', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 800 });
	await page.goto('/');
	const menu = page.getByRole('button', { name: 'Ouvrir le menu' });
	await menu.locator('svg').click();
	await expect(menu).toHaveAttribute('aria-expanded', 'true');
	await expect(page.getByRole('dialog', { name: 'Menu de navigation' })).toBeVisible();
	await page.keyboard.press('Escape');
	await expect(page.getByRole('dialog', { name: 'Menu de navigation' })).toHaveCount(0);
});

test('mobile booking action clears the first photo and appears on scroll', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 800 });
	await page.goto('/a-propos');
	const bookingAction = page.locator('a.fixed[href*="docs.google.com/forms/"]');
	await expect(bookingAction).toBeHidden();
	await page.evaluate(() => window.scrollTo(0, 300));
	await expect(bookingAction).toBeVisible();
});
