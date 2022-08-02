const m = require('../answer/two-numbers-sum')

test('正常情况', () => {
   const arr = [1,2,4,5,9]
   expect(m(arr,7)).toEqual([2,5])
})

test('数组为空', () => {
    expect(m([],6)).toEqual([])
})

test('找不到', () => {
    const arr = [1,2,4]
    expect(m(arr,7)).toEqual([])
})