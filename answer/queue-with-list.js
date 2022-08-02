/**
 * 用数组和链表实现队列那个更快
 * 
 * 分析
 * 数组是连续存储的，push很快，shift很慢
 * 链表是非连续存储的，add和delete都很快（但查找很慢）
 * 结论：链表实现队列更快
 * 
 * 性能分析
 * 空间复杂度都为o(n)
 * add 时间复杂度 链表o(1)  数组o(1)
 * delete 时间复杂度  链表o(1)  数组o(n)
 */

module.exports = class queueWithList{
   #head = null
   #tail = null
   #len = 0

   /**
    * 思路
    * 添加时从tail添加
    * head和tail都是newNode的引用
    * @param {*} val 
    */
   add(val) {
    const newNode = {
        value: val
    }

    // 当只有一个元素时，把head指向最开始的元素，当再添加时，head不会改变
    if(this.#head == null) {
        this.#head = newNode
    }

    // 处理tail  改变tail的指向
    const tailNode = this.#tail
    if (tailNode) {
        tailNode.next = newNode
    }
    this.#tail = newNode

    // 长度实时增加
    this.#len ++
   }

   /**
    * 思路
    * 从head删除，改变head指向
    */
   delete() {
    // 当取出的头部为null或整个表的长度为0则返回Null
    const headNode = this.#head
    if(headNode == null) return null
    if(this.#len === 0) return null

    const value = headNode.value

    // 将head指向下一个
    this.#head = headNode.next

    // 长度减一
    this.#len --

    return value
   }

   get length() {
    // 单独存储，不能遍历链表，不然时间复杂度为o(n)
    return this.#len
   }
}