const { test, expect } = require('./site-fixture');

const september19 = { date: '2026-09-19', steps: 8420, distance_meters: 6100, sleep_minutes: null, source_observation: 'sample-03' };
const september18 = { date: '2026-09-18', steps: 0, distance_meters: 0, sleep_minutes: 420, source_observation: 'sample-01' };

async function expectRecord(page, expected) {
  await expect.poll(async () => JSON.parse(await page.locator('#query-output').innerText())).toEqual(expected);
}

test('whole-record queries preserve missing values, zero and requested field shape', async ({ page }) => {
  await page.goto('/blackbox/');
  await expectRecord(page, september19);
  await expect(page.locator('#query-note')).toContainText('earlier value is not carried forward');
  await page.getByLabel('Sample day').selectOption('2026-09-18');
  await expectRecord(page, september18);
  await expect(page.locator('#query-note')).toContainText('Zero steps is an explicit value');
  for (const record of [september18, september19]) {
    await page.getByLabel('Sample day').selectOption(record.date);
    await page.getByLabel('Query shape').selectOption('steps');
    await expectRecord(page, { date: record.date, steps: record.steps });
    await page.getByLabel('Query shape').selectOption('full');
    await expectRecord(page, record);
  }
});

test('clear and rebuild retain source contents, selectors and keyboard focus', async ({ page }) => {
  await page.goto('/blackbox/');
  const clear = page.getByRole('button', { name: 'Clear sample projection' });
  const rebuild = page.getByRole('button', { name: 'Rebuild from sample archive' });
  const receipts = page.locator('#receipt-list');
  const expected19 = /sample-02.*EARLIER SAMPLE.*7,600 steps.*5,500 m.*435 min.*sample-03.*LATEST SAMPLE.*8,420 steps.*6,100 m.*absent/s;
  await expect(receipts).toHaveText(expected19);
  for (const date of ['2026-09-18', '2026-09-19']) {
    await clear.focus();
    await clear.press('Enter');
    await expect(clear).toBeDisabled();
    await expect(rebuild).toBeEnabled();
    await expect(rebuild).toBeFocused();
    await expect(page.locator('#query-output')).toContainText('No derived sample record');
    await expect(page.locator('#receipt-count')).toHaveText('3 receipts retained');
    await page.getByLabel('Sample day').selectOption(date);
    await page.getByLabel('Query shape').selectOption('steps');
    if (date === '2026-09-18') {
      await expect(receipts).toHaveText(/sample-01.*LATEST SAMPLE.*0 steps.*0 m.*420 min/s);
    } else {
      await expect(receipts).toHaveText(expected19);
    }
    await rebuild.focus();
    await rebuild.press('Enter');
    await expect(clear).toBeFocused();
    await expect(rebuild).toBeDisabled();
    await expectRecord(page, { date, steps: date === '2026-09-18' ? 0 : 8420 });
    await page.getByLabel('Query shape').selectOption('full');
    await expectRecord(page, date === '2026-09-18' ? september18 : september19);
  }
  await expect(receipts).toHaveText(expected19);
});
