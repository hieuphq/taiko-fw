'use strict'
const taiko = require('taiko')
const { Result } = require('./result')

class TestCase {
  constructor(name, fn) {
    this.name = name
    this.fn = fn
    this.beforeHook = undefined
    this.afterHook = undefined
  }

  beforeRun(hookFn) {
    if (typeof hookFn === 'function') {
      this.beforeHook = hookFn
    }
  }

  afterRun(hookFn) {
    if (typeof hookFn === 'function') {
      this.afterHook = hookFn
    }
  }

  async exec() {
    if (this.beforeHook !== null && this.beforeHook !== undefined) {
      await this.beforeHook()
    }

    try {
      await this.fn()
      return new Result(null)
    } catch (e) {
      return new Result(e)
    } finally {
      if (this.afterHook !== null && this.afterHook !== undefined) {
        await this.afterHook()
      }
    }
  }
}

module.exports = { TestCase }
