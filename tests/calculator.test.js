const calculator = require('../code/calculator')

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toBe(0)
  })

  test('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toBe(4)
  })

  test('adds 100 and -20', () => {
    expect(calculator.add(100, -20)).toBe(80)
  })

  test('adds -58 and -57', () => {
    expect(calculator.add(-58, -57)).toBe(-115)
  })
})

describe('subtract', () => {
  test('subtracts 0 and 0', () => {
    expect(calculator.subtract(0, 0)).toBe(0)
  })

  test('subtracts -2 and -2', () => {
    expect(calculator.subtract(-2, -2)).toBe(0)
  })

  test('subtracts -102 and -6', () => {
    expect(calculator.subtract(-102, -6)).toBe(-96)
  })

  test('subtracts 102 and 107', () => {
    expect(calculator.subtract(102, 107)).toBe(-5)
  })

  test('subtracts 30 and 17', () => {
    expect(calculator.subtract(30, 17)).toBe(13)
  })
})

describe('multiply', () => {
  test('multiplies 0 and 0', () => {
    expect(calculator.multiply(0, 0)).toBe(0)
  })

  test('multiplies 1020120102102014293921 and 0', () => {
    expect(calculator.multiply(1020120102102014293921, 0)).toBe(0)
  })

  test('multiplies 20 and 20', () => {
    expect(calculator.multiply(20, 20)).toBe(400)
  })

  test('multiplies 0.5 and 0.5', () => {
    expect(calculator.multiply(0.5, 0.5)).toBeCloseTo(0.25)
  })

  test('multiplies 1020120102102014293921 and 1', () => {
    expect(calculator.multiply(1020120102102014293921, 1)).toBe(1020120102102014293921)
  })
})

describe('divide', () => {
  test('divides 2 and 4', () => {
    expect(calculator.divide(2, 4)).toBeCloseTo(0.5)
  })

  test('divides 1020120102102014293921 and 1', () => {
    expect(calculator.divide(1020120102102014293921, 1)).toBe(1020120102102014293921)
  })

  test('divides 45 and 5', () => {
    expect(calculator.divide(45, 5)).toBe(9)
  })

  test('divides 90 and 33', () => {
    expect(calculator.divide(90, 33)).toBeCloseTo(2.727272)
  })

  test('divides -25 and -5', () => {
    expect(calculator.divide(-25, -5)).toBe(5)
  })
})