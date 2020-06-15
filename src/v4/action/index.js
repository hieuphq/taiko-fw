const click = require('./click')
const browser = require('./browser')
const assert = require('./assert')

module.exports = {
  ...click,
  ...browser,
  ...assert,
}
