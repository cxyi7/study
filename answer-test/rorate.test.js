const m = require('../answer/rorate')

describe('rorate1', () => {
    test('正常情况', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const k = 3
        expect(m.rorate1(arr,k)).toEqual([7,8,9,1,2,3,4,5,6])
    })
    test('K为非数字', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const k = 'sss'
        expect(m.rorate1(arr,k)).toBeFalsy()
    })

    test('K为0', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const k = 0
        expect(m.rorate1(arr,k)).toEqual([1,2,3,4,5,6,7,8,9])
    })

    test('K为负值', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const k = -3
        expect(m.rorate1(arr,k)).toEqual([7,8,9,1,2,3,4,5,6])
    })

    test('arr不是数组', () => {
        const arr = 'sss'
        const k = -3
        expect(m.rorate1(arr,k)).toBeFalsy()
    })
})

describe('rorate2', () => {
    test('正常情况', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const k = 3
        expect(m.rorate2(arr,k)).toEqual([7,8,9,1,2,3,4,5,6])
    })
    test('K为非数字', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const k = 'sss'
        expect(m.rorate2(arr,k)).toBeFalsy()
    })

    test('K为0', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const k = 0
        expect(m.rorate2(arr,k)).toEqual([1,2,3,4,5,6,7,8,9])
    })

    test('K为负值', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const k = -3
        expect(m.rorate2(arr,k)).toEqual([7,8,9,1,2,3,4,5,6])
    })

    test('arr不是数组', () => {
        const arr = 'sss'
        const k = -3
        expect(m.rorate2(arr,k)).toBeFalsy()
    })
})
