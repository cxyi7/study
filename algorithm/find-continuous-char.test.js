const m = require('../answer/find-continuous-char')

describe('findContinuousChar1', () => {
    test('正常情况', () => {
        const str = 'aabbbbbbccccc'
        const res = {char:'b',count:6}
        expect(m.findContinuesChar1(str)).toEqual(res)
    })

    test('全是相同字符', () => {
        const str = 'cccc'
        const res = {char:'c',count:4}
        expect(m.findContinuesChar1(str)).toEqual(res)
    })

    test('空字符串', () => {
        const str = ''
        const res = ''
        expect(m.findContinuesChar1(str)).toEqual(res)
    })
})

describe('findContinuousChar2', () => {
    test('正常情况', () => {
        const str = 'aabbbbbbcccc'
        const res = {char:'b',count:6}
        expect(m.findContinuesChar2(str)).toEqual(res)
    })

    test('全是相同字符', () => {
        const str = 'cccc'
        const res = {char:'c',count:4}
        expect(m.findContinuesChar2(str)).toEqual(res)
    })

    test('空字符串', () => {
        const str = ''
        const res = ''
        expect(m.findContinuesChar2(str)).toEqual(res)
    })
})