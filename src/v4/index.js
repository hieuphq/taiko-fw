'use strict'

const { TestSuite } = require('./testSuite')
const { TestCase } = require('./testCase')
const {
  titleShouldBe,
  hover,
  click,
  navigateToUrl,
  openBrowser,
  closeBrowser,
} = require('./action')

const runTestSuites = async (headless) => {
  const tc1 = new TestCase('go to dior bag page', goToDiorBagPage)
  tc1.beforeRun(async () => {
    await openBrowser(headless)
  })

  tc1.afterRun(async () => {
    await closeBrowser()
  })

  const tcs = [tc1]
  const ts = new TestSuite(tcs)
  await ts.run()
}

const goToDiorBagPage = async () => {
  await navigateToUrl('https://joolux.com', { waitForEvents: ['networkIdle'] })
  await hover('Túi xách')
  await click('Dior')
  await titleShouldBe('Thương hiệu Dior | Joolux')
}

module.exports = { runTestSuites }
