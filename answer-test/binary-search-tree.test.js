const getKthValue = require('../answer/binary-search-tree')

/**
 * 二叉树
 */
 const IIree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

test('正常情况', () => {
   expect(getKthValue(IIree,3)).toBe(4)
})

test('非正常情况', () => {
    expect(getKthValue(IIree,0)).toBeNull()
    expect(getKthValue(IIree,1000)).toBeNull()
})