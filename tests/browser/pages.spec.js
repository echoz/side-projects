const { test, expect } = require('./site-fixture');

for (const width of [320, 768, 1280]) {
  for (const path of ['/', '/pitwall/', '/marquee/', '/blackbox/', '/perch/']) {
    test(`${path} loads images and fits a ${width}px viewport`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(path);
      await expect(page.getByRole('main')).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      // Scroll lazy captures into view so a missing or undecodable image fails.
      for (const image of await page.locator('img').all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate(element => element.complete && element.naturalWidth > 0)).toBe(true);
      }
      const fits = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
      expect(fits, 'The document fits; wide terminal captures may scroll within their own regions').toBe(true);
    });
  }
}

test('each local page offers a keyboard skip link', async ({ page }) => {
  for (const path of ['/', '/pitwall/', '/marquee/', '/blackbox/', '/perch/']) {
    await page.goto(path);
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Skip to content' });
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main$/);
    await page.keyboard.press('Tab');
    expect(await page.getByRole('main').evaluate(main => main.contains(document.activeElement))).toBe(true);
  }
});

test('index status ribbons expose construction status and the released version', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('img', { name: 'Under construction', exact: true })).toHaveCount(4);
  await expect(page.getByText('v0.1.0', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: /Chio/ })).toHaveAttribute('href', 'https://echoz.github.io/Chio/');
});

test('wide Pitwall captures remain keyboard-scrollable on a phone width', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('/pitwall/');
  const captures = page.getByRole('region', { name: /scroll horizontally on narrow screens/ });
  expect(await captures.count()).toBeGreaterThan(0);
  for (const region of await captures.all()) {
    await expect(region).toHaveAttribute('tabindex', '0');
    await region.focus();
    await expect(region).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect.poll(() => region.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
  }
});

for (const date of ['2026-09-19T00:00:00Z', '2040-12-31T23:59:59Z']) {
  test(`synthetic defaults do not change with the wall clock: ${date}`, async ({ page }) => {
    await page.clock.setFixedTime(new Date(date));
    await page.goto('/marquee/');
    await expect(page.getByRole('slider')).toHaveValue('62');
    await expect(page.locator('#readout')).toContainText('62%');
    await page.goto('/blackbox/');
    await expect(page.getByLabel('Sample day')).toHaveValue('2026-09-19');
    expect(JSON.parse(await page.locator('#query-output').innerText())).toEqual({
      date: '2026-09-19', steps: 8420, distance_meters: 6100,
      sleep_minutes: null, source_observation: 'sample-03'
    });
  });
}
