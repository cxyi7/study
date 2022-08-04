/**
 * 
 * 递归方式 ---> 不可取
 * 
 * @param {*} n 第几位数
 * 
 * 时间复杂度 o(2^n)
 */
function fibonacci1(n) {
    if(n === 0) return 0
    if(n === 1) return 1

    return fibonacci(n-1) + fibonacci(n-2)
}


/**
 * 
 * 循环方式
 * 
 * @param {*} n 第几位数
 * @returns 
 * 
 * 时间复杂度o(n)
 * 
 * 思路
 * 将问题逐渐拆分为更小问题
 * (类似双指针方式)
 * 记录最开始两个值
 * 然后交替赋值
 * 记录下中间结果
 * 
 */
module.exports = function fibonacci2(n) {
    if(n <= 0) return 0
    if(n === 1) return 1

    let n1 = 1
    let n2 = 0
    let res = 0

    for(let i = 2; i <= n; i++) {
        res = n1 + n2

        n2 = n1
        n1 = res
    }
    return res
}


