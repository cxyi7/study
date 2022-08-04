const m = require('../answer/find-palindrome-number')

describe('findPalindromeNumber1', () => {
    test('正常情况', () => {
        expect(m.findPalindromeNumber1(200).length).toBe(28)
    })

    test('0', () => {
        expect(m.findPalindromeNumber1(0).length).toBe(0)
    })
})

describe('findPalindromeNumber2', () => {
    test('正常情况', () => {
        expect(m.findPalindromeNumber2(200).length).toBe(28)
    })

    test('0', () => {
        expect(m.findPalindromeNumber2(0).length).toBe(0)
    })
})

describe('findPalindromeNumber3', () => {
    test('正常情况', () => {
        expect(m.findPalindromeNumber3(200).length).toBe(28)
    })

    test('0', () => {
        expect(m.findPalindromeNumber3(0).length).toBe(0)
    })
})