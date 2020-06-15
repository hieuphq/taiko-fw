const taiko = require('taiko')
const { goto } = require('taiko')

const openBrowser = async (headless) => {
  await taiko.openBrowser({ headless: headless })
}

const closeBrowser = async () => {
  await taiko.closeBrowser()
}

const navigateToUrl = async (url, option) => {
  await goto(url, option)
}

module.exports = { openBrowser, closeBrowser, navigateToUrl }
