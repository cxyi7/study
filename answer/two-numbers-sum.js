/**
 * 
 * 一个递增的数组
 * 找出其中和为target的两个元素
 * 
 * @param {*} arr 数组
 * @param {*} target 求和的值
 * 
 * 思路
 * 使用双指针
 * i指向头，j指向尾，求arr[i]+arr[j]
 * 如果大于n，则j需要向前移动
 * 如果小于n，则i需要向后移动
 * 
 */

module.exports =  function twoNumberSum(arr = [], target) {
    if(!Array.isArray(arr) || typeof target !== "number") return arr
    const len = arr.length
    if (len === 0) return arr

    let i = 0
    let j = len - 1
    let res = []

    while(i < j) {
        const n1 = arr[i]
        const n2 = arr[j]
        const sum = n1 + n2
        
        if (sum > target) {
            j --
        } else if (sum < target) {
            i ++ 
        } else {
            res.push(n1)
            res.push(n2)
            break
        }
    }
    return res
}