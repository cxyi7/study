const queue = require('../answer/two-stacks-one-queue')

test('测试add 和 length', () => {
   const q = new queue()
   expect(q.length).toBe(0)

   q.add(1)
   q.add(2)
   q.add(3)
   expect(q.length).toBe(3)
})

test('测试delete', () => {
    const q = new queue()
    expect(q.delete()).toBeNull()

    q.add(1)
    q.add(2)
    q.add(3)
    expect(q.delete()).toBe(1)
    expect(q.delete()).toBe(2)
    expect(q.delete()).toBe(3)
    expect(q.length).toBe(0)
 })