/**
 * 求1-10000之间的所有对称数
 * 例如：1，2，3，22，101，232，1221等
 * 
 */


/**
 * 
 * @param {*} maxN 传入的数字
 * @returns res []
 * 
 * 时间复杂度 o(n)
 * 
 * 思路
 * 数字转换为字符串，再转换为数组
 * 数组reverse，再join为字符串
 * 前后字符串进行对比
 * 相同则为回文数
 */
function findPalindromeNumber1(maxN) {
    if(typeof maxN !== 'number') return maxN

    let res = []

    for (let index = 1; index < maxN; index++) {
        let str = index.toString()
        if (str === str.split('').reverse().join(''))
        res.push(index)
    }
    return res
}


/**
 * 
 * @param {*} maxN 传入的数字
 * @returns res []
 * 
 * 时间复杂度 o(n)
 * 
 * 思路
 * 数字转换为字符串
 * 字符串头尾字符比价
 */
function findPalindromeNumber2(maxN) {
    if(typeof maxN !== 'number') return maxN

    let res = []
    for(let index = 1; index <= maxN; index ++) {
        const str = index.toString()
        const len = str.length

        let flag = true
        let startIndex = 0
        let endIndex = len - 1
        while(startIndex < endIndex) {
            if (str[startIndex] === str[endIndex]) {
                startIndex ++
                endIndex --
            } else {
                flag = false
                break
            }
        }
        if (flag) res.push(index)
    }
    return res
}



/**
 * 
 * @param {*} maxN 传入的数
 * 
 * 思路 -> 生成翻转数
 * 
 * 时间复杂度 o(n)
 * 
 * 使用%和math.floor生成翻转数
 * 前后数字进行对比
 * 全程数字操作，没有字符串类型
 * 
 */
function findPalindromeNumber3(maxN) {
    if(typeof maxN !== 'number') return maxN

    let res = []

    for(let index = 1; index <= maxN; index ++) {
        let temp = index
        let n = 0
        while(temp > 0) {
            n = n * 10 + temp % 10
            temp = Math.floor(temp / 10)
        }
        if (index === n) res.push(index)
    }

    return res
}



/**
 * 性能分析
 * 思路1看似是o(n)，但是数组转换和操作都要花时间，所以对比其他两个要慢很多
 * 思路2 vs 思路3 操作数字会更快
 * 思路2 要是用栈来实现，也会慢，因为栈一般也是用数组来实现，也会慢
 */
module.exports = {
    findPalindromeNumber1,
    findPalindromeNumber2,
    findPalindromeNumber3
}