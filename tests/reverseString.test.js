const reverseString = require('../code/reverseString')

test('Reverese string test 1', () => {
  expect(reverseString("hello there")).toBe('ereht olleh')
})

test('Reverese string test 2', () => {
  expect(reverseString("Hi There")).toBe("erehT iH")
})

test('Reverese string test 3', () => {
  expect(reverseString("Welcome to the future")).toBe("erutuf eht ot emocleW")
})

test('Reverese string test 4', () => {
  expect(reverseString("Today I'm going to be productive :)")).toBe("): evitcudorp eb ot gniog m'I yadoT")
})
