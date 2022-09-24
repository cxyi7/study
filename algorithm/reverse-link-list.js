/**
 * 发现规律
 * 无论是根据数组生成单项链表
 * 还是反转单项链表
 * 都是从最后一个项开始往前循环推导
 * 即先考虑最后一个,然后依次往前
 */


/**
 * 根据数组生成单向链表
 */

function createLinkList(arr = []) {
    if (!Array.isArray(arr)) return false

    const length = arr.length
    let curNode = {
        value: arr[length - 1]
    }

    if (length === 1) return curNode

    for(let i = length - 2; i >= 0; i --) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }
    return curNode
}

/**
 * 用一个函数反转单项链表
 * 
 * 思路
 * 反转,即节点next指向前一个节点
 */

 function reverseLinkList(list) {
    let cur = {
        value:list.value
    }
    let nextNode = list.next
    while(nextNode) {
        cur = {
            value: nextNode.value,
            next: cur
        }
        nextNode = nextNode.next
    }
    return cur
}


module.exports = {
    createLinkList,
    reverseLinkList
}