const m = require('../answer/switch-letter-case')

describe('switchLetterCase1', () => {
    test('正常情况', () => {
        const str = '123www@@@WWW&&&'
        const res = '123WWW@@@www&&&'
        expect(m.switchLetterCase1(str)).toBe(res)
    })

    test('空字符串', () => {
        const str = ''
        const res = ''
        expect(m.switchLetterCase1(str)).toBe(res)
    })

    test('非字母', () => {
        const str = '111'
        const res = '111'
        expect(m.switchLetterCase1(str)).toBe(res)
    })
})

describe('switchLetterCase2', () => {
    test('正常情况', () => {
        const str = '123www@@@WWW&&&'
        const res = '123WWW@@@www&&&'
        expect(m.switchLetterCase2(str)).toBe(res)
    })

    test('空字符串', () => {
        const str = ''
        const res = ''
        expect(m.switchLetterCase2(str)).toBe(res)
    })

    test('非字母', () => {
        const str = '111'
        const res = '111'
        expect(m.switchLetterCase2(str)).toBe(res)
    })
})