const caesarCipher = require('../code/caesarCipher')

describe('shift with no wrap', () => {
  test('shift by 1', () => {
    expect(caesarCipher('hello world', 1)).toBe('ifmmp xpsme')
  })

  test('shift by 10', () => {
    expect(caesarCipher('ABc DeFGHI', 10)).toBe('KLm NoPQRS')
  })

  test('shift by 22', () => {
    expect(caesarCipher('ABc aBc DbA', 22)).toBe('WXy wXy ZxW')
  })
})

describe('shift with wrap', () => {
  test('shift by 1', () => {
    expect(caesarCipher('z', 1)).toBe('a')
  })

  test('shift by 23', () => {
    expect(caesarCipher('abcdefghijkl', 23)).toBe('xyzabcdefghi')
  })

  test('shift by 3', () => {
    expect(caesarCipher('wxyz', 3)).toBe('zabc')
  })

  test('shift by 72', () => {
    expect(caesarCipher('wxyz', 72)).toBe('qrst')
  })
})