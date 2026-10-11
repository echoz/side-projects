const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/browser',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  forbidOnly: Boolean(process.env.CI),
  reporter: 'list',
  use: {
    browserName: 'chromium',
    baseURL: 'http://127.0.0.1:8769',
    viewport: { width: 1280, height: 900 },
    serviceWorkers: 'block',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  webServer: {
    command: 'python3 -m http.server 8769 --bind 127.0.0.1 --directory _site',
    url: 'http://127.0.0.1:8769',
    reuseExistingServer: false
  }
});
