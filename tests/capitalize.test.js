const capitalize = require('../code/capitalize')

test("Capitalize test 1", () => {
  expect(capitalize("hi")).toBe("Hi")
})

test("Capitalize test 2", () => {
  expect(capitalize("how'sitgoing?")).toBe("How'sitgoing?")
})

test("Capitalize test 3", () => {
  expect(capitalize("tHeRe Once was a FarMer who had a FARM")).toBe("THeRe Once was a FarMer who had a FARM")
})

test("Capitalize test 4", () => {
  expect(capitalize("yuY")).toBe("YuY")
})
