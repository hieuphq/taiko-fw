const taiko = require('taiko')
const assert = require('assert')
const log = require('../log')

const runTestSuites = async (headless) => {
  const testsuites = [goToDiorBagPage]
  const totalTestcase = testsuites.length
  let failedCount = 0
  let successCount = 0

  for (let idx = 0; idx < testsuites.length; idx++) {
    const tcs = testsuites[idx]

    await taiko.openBrowser({ headless: headless })
    try {
      await tcs(headless)
      successCount++
    } catch (e) {
      log('failed with err', e)
      failedCount++
    }

    await taiko.closeBrowser()
  }

  log('Total: ', totalTestcase)
  log('Success: ', successCount)
  log('Failed: ', failedCount)
}

const goToDiorBagPage = async (headless) => {
  await taiko.goto('https://joolux.com')
  await taiko.hover('Túi xách')
  await taiko.click('Dior')
  const title = await taiko.title()
  assert.ok(title.includes('Thương hiệu Dior | Joolux 1'))
}

module.exports = { runTestSuites }
