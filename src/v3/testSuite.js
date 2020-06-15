'use strict'
const log = require('../log')

class TestSuite {
  constructor(testcases) {
    this.testcases = testcases
  }

  addTestcase(tc) {
    this.testcases = [...this.testcases, tc]
  }

  async run() {
    const totalTestcase = this.testcases.length
    let failedCount = 0
    let successCount = 0

    for (let idx = 0; idx < this.testcases.length; idx++) {
      const tc = this.testcases[idx]
      const res = await tc.exec()
      if (!res.ok) {
        failedCount++
        log(tc.name + ' is failed with error', res.error)
      } else {
        successCount++
      }
    }

    log('Total: ', totalTestcase)
    log('Success: ', successCount)
    log('Failed: ', failedCount)
  }
}

module.exports = { TestSuite }
