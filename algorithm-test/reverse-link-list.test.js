const m = require('../answer/reverse-link-list')

test('单个元素链表',() => {
  const linkList = m.createLinkList([1])
  expect(m.reverseLinkList(linkList)).toEqual({
    value: 1
  })
})

test('多个元素链表',() => {
    const linkList = m.createLinkList([1,2,3,4,5])
    expect( m.reverseLinkList(linkList)).toEqual({
      value: 5,
      next: {
        value: 4,
        next: {
            value: 3,
            next: {
                value:2,
                next: {
                    value:1
                }
            }
        }
      }
    })
})