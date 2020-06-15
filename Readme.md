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