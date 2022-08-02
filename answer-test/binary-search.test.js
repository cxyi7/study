const m = require('../answer/binary-search')

describe('binarySearch1', () => {
    test('正常情况', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const target = 5
        expect(m.binarySearch1(arr,target)).toBe(4)
    })

    test('正常情况', () => {
        const arr = [1,2,3,4,5,6,7,8,9,10]
        const target = 5
        expect(m.binarySearch1(arr,target)).toBe(4)
    })

    test('数组为空', () => {
        const arr = []
        const target = 5
        expect(m.binarySearch1(arr,target)).toBe(-1)
    })

    test('target值查不到', () => {
        const arr = [1,2,3,4,5,6,7,8,9,10]
        const target = 50
        expect(m.binarySearch1(arr,target)).toBe(-1)
    })
})

describe('binarySearch2', () => {
    test('正常情况', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const target = 5
        expect(m.binarySearch2(arr,target)).toBe(4)
    })

    test('正常情况', () => {
        const arr = [1,2,3,4,5,6,7,8,9,10]
        const target = 5
        expect(m.binarySearch2(arr,target)).toBe(4)
    })

    test('数组为空', () => {
        const arr = []
        const target = 5
        expect(m.binarySearch2(arr,target)).toBe(-1)
    })

    test('target值查不到', () => {
        const arr = [1,2,3,4,5,6,7,8,9,10]
        const target = 50
        expect(m.binarySearch2(arr,target)).toBe(-1)
    })
})