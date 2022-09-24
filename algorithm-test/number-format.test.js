const m = require('../answer/number-format')

describe('numberFormat1', () => {
    test('长度为双数', () => {
        const n = 100200
        expect(m.numberFormat1(n)).toBe('100,200')
    })

    test('长度为单数', () => {
        const n = 1002000
        expect(m.numberFormat1(n)).toBe('1,002,000')
    })

    test('小于1000', () => {
        expect(m.numberFormat1(0)).toBe('0')
        expect(m.numberFormat1(10)).toBe('10')
    })
})


describe('numberFormat2', () => {
    test('长度为双数', () => {
        const n = 100200
        expect(m.numberFormat2(n)).toBe('100,200')
    })

    test('长度为单数', () => {
        const n = 1002000
        expect(m.numberFormat2(n)).toBe('1,002,000')
    })

    test('小于1000', () => {
        expect(m.numberFormat2(0)).toBe('0')
        expect(m.numberFormat2(10)).toBe('10')
    })
})