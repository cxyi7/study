const moveZero = require('../answer/moveZero')

test('正常情况', () => {
   const arr = [0,1,0,2,3,0,0,4,5,0,6]
   moveZero(arr)
   expect(arr).toEqual([1,2,3,4,5,6,0,0,0,0,0])
})

test('没有0', () => {
    const arr = [1,2,3,4,5,6]
    moveZero(arr)
    expect(arr).toEqual([1,2,3,4,5,6])
 })

 test('全是0', () => {
    const arr = [0,0,0,0,0]
    moveZero(arr)
    expect(arr).toEqual([0,0,0,0,0])
 })