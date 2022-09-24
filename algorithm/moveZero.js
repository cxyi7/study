/**
 * 移动数组中所有的零到数组末尾，必须是在原数组操作
 * 只移动0，其他顺序不变
 */


/**
 * 
 * 使用循环方式
 * @param {*} arr 
 * 
 * 时间复杂度 o(n^2)
 */
function moveZero1(arr = []) {
    if(!Array.isArray(arr))  return false
    const len = arr.length
    if (len === 0) return []

    let ZeroCount = 0

    for(let i = 0; i < len - ZeroCount; i++) {
        if(arr[i] === 0) {
            arr.splice(i,1)
            i --
            ZeroCount ++
        }
    }

}


/**
 * 双指针
 * 
 * @param {*} arr 源数组
 * 
 * 时间复杂度 o(n)
 *  
 * 思路
 * 定义j指向第一个0，i指向j后面的第一个非0
 * 交换i和j的值，继续向后移动
 * 只遍历一次，所以时间复杂度o(n)
 */
module.exports = function moveZero2(arr) {
    if(!Array.isArray(arr))  return arr
    const len = arr.length
    if (len === 0) return arr

    let i
    let j = -1
    for(i = 0; i < len; i++) {
        if(arr[i] === 0){
            // j指向第一个0
            if (j < 0) {
                j = i
            }
        }
        // j永远指向第一个0，i指向j后面的第一个非0
        if (arr[i] !== 0 && j >= 0) {
            const n = arr[i]
            arr[i] = arr[j]
            arr[j] = n
            j ++
        }
    }
}