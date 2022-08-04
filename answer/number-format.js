/**
 * 用函数实现数字千分位格式化
 * 即输入100200300
 * 输出100,200,300
 */

/**
 * 
 * @param {*} n 传入的数字
 * @returns res
 * 
 * 转换为数组，reverse，每3位拆分 
 * 使用reduce
 */
function numberFormat1(n) {
    if (typeof n !== 'number') return n

    const str = n.toString()
    const arr = str.split('').reverse()

    return arr.reduce((prev,cur,index) => {
        if (index % 3 === 0) {
            if (prev) {
                return cur + ',' + prev
            } else {
                return cur + prev
            }
        } else {
            return cur + prev
        }
    },'')
}


/**
 * 
 * @param {*} n 传入的数字
 * @returns res
 * 
 * 使用字符串拆分
 * 类似于双指针
 */
function numberFormat2(n) {
    if (typeof n !== 'number') return n

    const str = n.toString()
    const len = str.length

    let i = len - 1
    let res = ''
    while(i >= 0) {
        const j = len - i
        if (j % 3 === 0) {
            if (i === 0) {
                res = str[i] + res
            } else {
                res = ',' + str[i] + res
            }
        } else {
            res = str[i] + res
        }
        i --
    }
    return res
}



/**
 * 性能分析
 * 使用数组，转换会影响性能
 * 使用正则表达式，性能比较差
 * 使用字符串，性能较好
 */
module.exports = {
    numberFormat1,
    numberFormat2
}