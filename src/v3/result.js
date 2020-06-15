class Result {
  constructor(err) {
    this.ok = true
    if (err) {
      this.ok = false
      this.error = err
    }
  }
}

module.exports = { Result }
