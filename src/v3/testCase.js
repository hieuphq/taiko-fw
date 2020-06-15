'use strict'
const taiko = require('taiko')
const { Result } = require('./result')

class TestCase {
  constructor(name, fn, headless) {
    this.name = name
    this.fn = async () => {
      await taiko.openBrowser({ headless: headless })

      try {
        await fn()
        return new Result(null)
      } catch (e) {
        return new Result(e)
      } finally {
        await taiko.closeBrowser()
      }
    }
  }

  async exec() {
    return await this.fn()
  }
}

module.exports = { TestCase }
