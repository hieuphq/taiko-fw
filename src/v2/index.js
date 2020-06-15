const taiko = require('taiko')
const assert = require('assert')
const log = require('../log')
const { Result } = require('./result')

const runTestSuites = async (headless) => {
  const testsuites = [
    describe('go to dior bag page', goToDiorBagPage, headless),
  ]

  const totalTestcase = testsuites.length
  let failedCount = 0
  let successCount = 0

  for (let idx = 0; idx < testsuites.length; idx++) {
    const tcs = testsuites[idx]
    const res = await tcs.def()
    if (!res.ok) {
      failedCount++
      log('failed with err', res.error)
    } else {
      successCount++
    }
  }

  log('Total: ', totalTestcase)
  log('Success: ', successCount)
  log('Failed: ', failedCount)
}

const goToDiorBagPage = async () => {
  await taiko.goto('https://joolux.com', { waitForEvents: ['networkIdle'] })
  await taiko.hover('Túi xách')
  await taiko.click('Dior')
  const title = await taiko.title()
  assert.ok(title === 'Thương hiệu Dior | Joolux')
}

const describe = (name, fn, headless) => {
  return {
    name: name,
    def: async () => {
      await taiko.openBrowser({ headless: headless })

      try {
        await fn()
        return new Result(null)
      } catch (e) {
        return new Result(e)
      } finally {
        await taiko.closeBrowser()
      }
    },
  }
}

module.exports = { runTestSuites }
