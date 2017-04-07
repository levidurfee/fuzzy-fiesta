class Fuzzy {
  constructor() {

  }
  factorial(n, accumulator) {
    if (n === 0) {
      return accumulator
    }
    return this.factorial(n - 1, n * accumulator);
  }
}

module.exports = Fuzzy;
