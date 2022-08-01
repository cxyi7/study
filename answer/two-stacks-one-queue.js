/**
 * 两个栈实现一个队列
 * 
 * 功能
 * 先进先出
 * add delete length
 * 
 * 
 * 思路
 * 用一个数组stack1存放压栈的值,再从后往前将依次值放入另一个数组stack2中
 * 此时stack2中的值的顺序为stack1中的倒叙,再删除stack2中最后一个1值,相当于删除了stack1中最前面的值
 * 再将stack2中的值从后往前依次放入stack1中
 * 
 * 
 * 时间复杂度 add o(1)  delete o(n)
 * 空间复杂度 o(n)
 * 
 * 
 * 为什么delete时间复杂度为o(n)
 * 虽然有两次循环,即o(2*n) 但数量级是一样的,都为o(n)
 */
module.exports = class queue {
    #stack1 = []
    #stack2 = []
    
    add(val) {
        return this.#stack1.push(val)
    }

    delete() {

        if(this.#stack1.length === 0) return null

        let res
        const stack1 = this.#stack1
        const stack2 = this.#stack2

        // 将stack1中的值从后往前倒入stack2中
        while(stack1.length) {
            const n = stack1.pop()
            if (n != null) {
                stack2.push(n)
            }
        }

        // 将stack2中最后一个值删除，即等同于删除了stack1中最前面的值,即先进先出了
        res = stack2.pop()

        // 再将stack2中的值从前往后倒回stack1中，相当于换原了stack1的样子
        while(stack2.length) {
            const n = stack2.pop()
            if (n != null) {
                stack1.push(n)
            }
        }

        return res

    }

    get length() {
        return this.#stack1.length
    }
}