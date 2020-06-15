'use strict';

const { openBrowser, closeBrowser, goto } = require('taiko');
const assert = require('assert');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeScenario(async () => {
  await openBrowser({ headless: headless });
});

gauge.customScreenshotWriter = async function () {
  return await screenshot({ encoding: 'base64' });
};

afterScenario(async () => await closeBrowser());

step('Navigate to <url>', async (url) => {
  await goto(url);
});

step('Check <heading> exists', async (heading) =>
  assert.ok(await text(heading).exists())
);
