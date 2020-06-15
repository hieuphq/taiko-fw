## Taiko testing framework

Tutorial for js training

- Language: js
- Tools
  - [Visual Studio Code](https://code.visualstudio.com)
  - [Gauge Plugin](https://marketplace.visualstudio.com/items?itemName=getgauge.gauge#install-from-source)
  - [Gauge cli](https://docs.gauge.org/getting_started/installing-gauge.html?os=macos&language=javascript&ide=vscode)
- Library
  - [taiko](https://taiko.dev)
  - [gauge](https://gauge.org)
  - [assert](https://nodejs.org/api/assert.html)
-

## How to build a testing framework from scratch

We need some components in a testing framework

- Simulate action
- Extract data
- Verify data
- Report

## Init project

Using yarn to init a project

```
yarn init
```

Add `.gitignore` and `Readme.md` files

Make `src/index.js`

```js
console.log('starting testing framework');
```

Modify `package.json` to run application

Run project

```
yarn start
```

## Integrate taiko

```
yarn add taiko @getgauge/cli
```

Add `env`

Make `tests/step_implementation.js`

```js
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
```

Mapping spec with taiko `browse_product_joolux.spec`
```specs
# Browse product joolux

## Should go to dior list product

* Navigate to "https://joolux.com"
* Click "Túi xách"
* Alert "Thương Hiệu" and await accept
* Click "Dior"
* Assert title to be "Thương hiệu Dior | Joolux"
```