const taiko = require('taiko')

async function hover(selector) {
  await taiko.hover(selector)
}

async function click(selector) {
  await taiko.click(selector)
}

module.exports = { hover, click }
