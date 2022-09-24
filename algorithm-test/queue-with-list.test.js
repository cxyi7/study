const m = require('../answer/queue-with-list')

test('add length', () => {
    const queque = new m()
    queque.add(1)
    queque.add(2)
    expect(queque.length).toBe(2)
})

test('add delete', () => {
    const queque = new m()
    queque.add(1)
    queque.add(2)
    queque.add(3)
    queque.add(4)
    expect(queque.delete()).toBe(1)
    expect(queque.length).toBe(3)
    expect(queque.delete()).toBe(2)
    expect(queque.length).toBe(2)
    expect(queque.delete()).toBe(3)
    expect(queque.length).toBe(1)
})

test('边界情况', () => {
    const queque = new m()
    expect(queque.delete()).toBeNull()
})
