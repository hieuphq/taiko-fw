'use strict'

const { title } = require('taiko')
const assert = require('assert')

async function assertTitleToBe(userTitle) {
  assert.ok((await title()).includes(userTitle))
}

module.exports = { titleShouldBe: assertTitleToBe }
