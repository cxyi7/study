/**
 * 字符串中连续最多的字符以及次数
 */


/**
 * 
 * 双层循环 跳步
 * 内层循环判断相同字符个数，当内外不相同时，则进行跳步
 * 
 * @param {*} str 传入的str
 * @returns 
 * 
 * 时间复杂度 o(n)
 */

function findContinuesChar1(str) {
    if(typeof str !== 'string') return str
    const len = str.length
    if (len === 0) return str

    const res = {
        char: '',
        count: 0
    }
    let temCount = 0

    for(let i = 0; i < len; i++) {
        temCount = 0
        for(let j = i; j < len; j++) {
            if (str[i] === str[j]) {
                temCount ++
            }
            if (str[i] !== str[j] || j === len - 1) {
                // 不相等，或者已经到了最后一个元素了
                // 此时要进行判断
                if (temCount > res.count) {
                    res.char = str[i]
                    res.count = temCount
                }
                if (i < len - 1) {
                    i = j - 1
                }
                break
            }
        }
    }
    return res
}


/**
 * 双指针
 * 
 * @param {*} str 源字符串 
 * @returns 
 * 
 * 时间复杂度 o(n)
 * 
 * 思路
 * 定义指针i和j，j不动，让i一直移动
 * 如果i和j相等，则i继续移动
 * 直到i和j不相等，记录处理长度，把i赋值给j，继续第一步
 */
 function findContinuesChar2(str) {
    if(typeof str !== 'string') return str
    const len = str.length
    if (len === 0) return str

    let i = 0
    let j = 0

    const res = {
        char: '',
        count: 0
    }
    let temCount = 0

    for(; i <= len; i++) {
        if (str[i] !== str[j]){
            temCount = i - j
            if(temCount > res.count ) {
                res.char = str[j]
                res.count = temCount
            }
            temCount = 0
            j = i
        }
    }
    return res
}


module.exports = {
    findContinuesChar1,
    findContinuesChar2
}