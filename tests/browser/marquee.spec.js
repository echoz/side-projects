const { test, expect } = require('./site-fixture');

async function choose(page, name) {
  const button = page.getByRole('button', { name, exact: true });
  await button.focus();
  await button.press('Enter');
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { pressed: true })).toHaveCount(1);
}

async function setProgress(page, amount) {
  const slider = page.getByRole('slider');
  await slider.focus();
  await slider.press('Home');
  for (let step = 0; step < amount; step++) await slider.press('ArrowRight');
  await expect(slider).toHaveValue(String(amount));
}

test('scene changes preserve independent values and expose the matching controls', async ({ page }) => {
  await page.goto('/marquee/');
  await expect(page.getByRole('slider')).toHaveValue('62');
  await expect(page.getByLabel(/Short label/)).toBeHidden();
  await setProgress(page, 50);
  await choose(page, 'Workout');
  await expect(page.getByRole('slider')).toHaveValue('35');
  await expect(page.locator('#readout')).toContainText('RUN');
  await choose(page, 'Quota');
  await expect(page.getByRole('slider')).toHaveValue('50');
  await choose(page, 'Manual');
  await expect(page.getByLabel(/Short label/)).toBeVisible();
  await expect(page.getByRole('slider')).toBeDisabled();
  await page.getByLabel('Include progress').check();
  await expect(page.getByRole('slider')).toHaveValue('60');
  await choose(page, 'Fallback');
  await expect(page.getByRole('slider')).toBeDisabled();
  await expect(page.getByLabel(/Short label/)).toBeHidden();
  await expect(page.getByRole('img', { name: /Synthetic fallback illustration/ })).toBeVisible();
  await choose(page, 'Manual');
  await expect(page.getByLabel('Include progress')).toBeChecked();
  await expect(page.getByRole('slider')).toHaveValue('60');
});

test('progress renders zero, half and full rows and disappears when unchecked', async ({ page }) => {
  await page.goto('/marquee/');
  await choose(page, 'Manual');
  await page.getByLabel(/Short label/).fill('');
  await page.getByLabel('Include progress').check();
  const pixels = page.locator('#pixel-grid circle');
  await expect(pixels).toHaveCount(256);
  // The blank label leaves an independently known unlit row to compare with.
  // Expected bottom-row counts are fixed examples, not the renderer's formula.
  for (const [amount, expected] of [[0, 0], [50, 16], [100, 32]]) {
    await setProgress(page, amount);
    const litBottom = await pixels.evaluateAll(nodes => {
      const unlit = nodes[0].getAttribute('fill');
      return nodes.slice(224).filter(node => node.getAttribute('fill') !== unlit).length;
    });
    expect(litBottom).toBe(expected);
    await expect(page.locator('#readout')).toContainText(`${amount}%`);
  }
  await page.getByLabel('Include progress').uncheck();
  expect(await pixels.evaluateAll(nodes => new Set(nodes.map(node => node.getAttribute('fill'))).size)).toBe(1);
  await expect(page.getByRole('slider')).toBeDisabled();
});

test('manual input normalizes supported text and fits eight characters', async ({ page }) => {
  await page.goto('/marquee/');
  await choose(page, 'Manual');
  const input = page.getByLabel(/Short label/);
  await input.fill('a!b?12');
  await expect(input).toHaveValue('AB12');
  await input.fill('');
  await input.pressSequentially('pixels889');
  await expect(input).toHaveValue('PIXELS88');
  await expect(page.getByRole('img', { name: /PIXELS88/ })).toBeVisible();
  // The final '8' occupies columns 28–30, rows 1–5, with column 31 unused.
  const edge = await page.locator('#pixel-grid circle').evaluateAll(nodes => {
    const unlit = nodes[0].getAttribute('fill');
    return [1, 2, 3, 4, 5].map(y => [28, 29, 30, 31].map(x => nodes[y * 32 + x].getAttribute('fill') !== unlit));
  });
  expect(edge).toEqual([
    [true, true, true, false], [true, false, true, false],
    [true, true, true, false], [true, false, true, false],
    [true, true, true, false]
  ]);
  await input.fill('');
  await expect(page.locator('#readout')).toContainText('Blank label');
});
