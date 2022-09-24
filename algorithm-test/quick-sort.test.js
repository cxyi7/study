const quickSort = require('../answer/quick-sort')

test('正常情况', () => {
    const arr = [1,0,2,3,2,4,55,66,7,33,11]
    const res = [0,1,2,2,3,4,7,11,33,55,66]
    expect(quickSort(arr)).toEqual(res)
})

test('全是1', () => {
    const arr = [1,1,1,1,1,1]
    const res = [1,1,1,1,1,1]
    expect(quickSort(arr)).toEqual(res)
})

test('[]', () => {
    const arr = []
    const res = []
    expect(quickSort(arr)).toEqual(res)
})

test('有负数', () => {
    const arr = [-2,1,3,2,-5,3]
    const res = [-5,-2,1,2,3,3]
    expect(quickSort(arr)).toEqual(res)
})