const { test: base, expect } = require('@playwright/test');
const assets = require('../../public-assets.json');

// Exercise the real pages. These tripwires observe forbidden effects; they do
// not implement a demo's renderer or derive its expected output.
const test = base.extend({
  page: async ({ page, context, baseURL }, use) => {
    const failures = [];
    const allowed = new Set(assets.map(name => `/${name}`));
    await context.route('**/*', async route => {
      const request = route.request();
      const url = new URL(request.url());
      const path = url.pathname.endsWith('/') ? `${url.pathname}index.html` : url.pathname;
      const isLocal = url.origin === baseURL;
      const isStaticRead = request.method() === 'GET' && allowed.has(path);
      const isPageAsset = ['document', 'stylesheet', 'script', 'image', 'font', 'other'].includes(request.resourceType());
      if (isLocal && isStaticRead && isPageAsset) {
        await route.continue();
      } else {
        failures.push(`Unexpected request: ${request.method()} ${request.url()}`);
        await route.abort();
      }
    });
    page.on('pageerror', error => failures.push(error.message));
    page.on('response', response => {
      if (response.status() >= 400) failures.push(`HTTP ${response.status()}: ${response.url()}`);
    });
    await context.exposeBinding('recordForbiddenSiteEffect', (_, name) => failures.push(name));
    await context.addInitScript(() => {
      function forbidden(name) {
        return function () {
          window.recordForbiddenSiteEffect(name);
          throw new Error(`Synthetic page used ${name}`);
        };
      }
      for (const name of ['fetch', 'XMLHttpRequest', 'WebSocket', 'EventSource']) {
        window[name] = forbidden(name);
      }
      for (const name of ['localStorage', 'sessionStorage', 'indexedDB', 'caches']) {
        Object.defineProperty(window, name, { configurable: true, get: forbidden(name) });
      }
      navigator.sendBeacon = forbidden('sendBeacon');
    });
    await use(page);
    expect(failures, 'No runtime errors, missing assets, live requests or storage').toEqual([]);
  }
});

module.exports = { test, expect };
