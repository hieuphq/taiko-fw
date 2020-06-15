const taiko = require('taiko')
const assert = require('assert')
const log = require('../log')
const { Result } = require('./result')
const { TestSuite } = require('./testSuite')
const { TestCase } = require('./testCase')

const runTestSuites = async (headless) => {
  const tcs = [new TestCase('go to dior bag page', goToDiorBagPage, headless)]
  const ts = new TestSuite(tcs)
  await ts.run()
}

const goToDiorBagPage = async () => {
  await taiko.goto('https://joolux.com', { waitForEvents: ['networkIdle'] })
  await taiko.hover('Túi xách')
  await taiko.click('Dior')
  const title = await taiko.title()
  assert.ok(title === 'Thương hiệu Dior | Joolux')
}

module.exports = { runTestSuites }
