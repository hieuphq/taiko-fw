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
console.log('starting testing framework')
```

Modify `package.json` to run application

Run project

```
yarn start
```

## Make our framework

Install `taiko`

```
yarn add taiko
```

### Simple test case

We want to test [Joolux](https://joolux.com) product. Imaging about we want to test `Product page` with `Dior` branch.

- Open browser
- Go to Joolux
- Hover on `Túi xách`
- Choose `Dior` branch
- Wait for `Dior` page is open
- Validate title page is `Thương hiệu Dior | Joolux`

### Version 1

We use taiko to make a simple testcase with a function

### Version 2

We detach open and close browser logic from test case. No need lal

### Version 3

Make a framework is clearer. The test case and test suite will be too complex to handle. We make 2 new class `TestCase` and `TestSuite` to handle logic.
A test suite contains many test cases. We run a test suite, test suite will return a result to log or make a report

### Version 4

Some new challenge for our framework:

- Reuse code, specific is `action`
- Replace another automation test easier
