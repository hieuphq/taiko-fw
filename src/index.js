'use strict'
const { runTestSuites } = require('./v4')
const log = require('./log')

const headless = false

log('start testing project...')
runTestSuites(headless)
