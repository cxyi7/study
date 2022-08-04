const fibonacci = require('../answer/fibonacci')

test('n为0或1', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
})

test('正常情况', () => {
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(6)).toBe(8)
})

test('n小于0', () => {
    expect(fibonacci(-1)).toBe(0)
})