const arrayAnalysis = require('../code/arrayAnalysis')

describe('array with numbers', () => {
  test('get average', () => {
    expect(arrayAnalysis([1,8,3,4,2,6]).average).toBe(4)
  })

  test('get min', () => {
    expect(arrayAnalysis([1,8,3,4,2,6]).min).toBe(1)
  })

  test('get max', () => {
    expect(arrayAnalysis([1,8,3,4,2,6]).max).toBe(8)
  })

  test('get length', () => {
    expect(arrayAnalysis([1,8,3,4,2,6]).length).toBe(6)
  })
})

describe('empty array', () => {
  test('throw something', () => {
    expect(() => arrayAnalysis([])).toThrow()
  })

  test('throw an error', () => {
    expect(() => arrayAnalysis([])).toThrow(Error)
  })
  
  test('throw an error with a specific message', () => {
    expect(() => arrayAnalysis([])).toThrow('This is an empty array, array must have at least one number.')
  })

  test('throw an error that contains the string empty in it', () => {
    expect(() => arrayAnalysis([])).toThrow(/empty/)
  })
})