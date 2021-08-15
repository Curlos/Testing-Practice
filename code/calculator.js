const add = (...arguments) => {
  return arguments.reduce((accumulator, currentValue) => accumulator + currentValue)
}

const subtract = (...arguments) => {
  return arguments.reduce((accumulator, currentValue) => accumulator - currentValue)
}

const multiply = (...arguments) => {
  return arguments.reduce((accumulator, currentValue) => accumulator * currentValue)
}

const divide = (...arguments) => {
  return arguments.reduce((accumulator, currentValue) => accumulator / currentValue)
}

const calculator = {
  'add': add,
  'subtract': subtract,
  'multiply': multiply,
  'divide': divide,
};

console.log(calculator.add(1,2,3,4))
console.log(calculator.subtract(10,3))
console.log(calculator.multiply(10,3))
console.log(calculator.divide(10,3,2))

module.exports = calculator;