const reverseString = require('../code/reverseString')

test('test1', () => {
  const originalString = 'hello there'
  expect(reverseString(originalString)).toBe('ereht olleh')
})
