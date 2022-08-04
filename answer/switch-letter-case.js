/**
 * 切换字母的大小写
 */


/**
 * 
 * @param {*} str 传入的字符串
 * @returns 
 * 
 * 使用正则表达式
 */
function switchLetterCase1(str) {
    if (typeof str !== 'string') return str
    const len = str.length
    if (len === 0) return str

    const reg1 = /[a-z]/
    const reg2 = /[A-Z]/
    let res = ''
    

    for(let i = 0; i < len; i ++) {
        const c = str[i]
        if (reg1.test(c)) {
            res = res + c.toLocaleUpperCase()
        } else if (reg2.test(c)) {
            res = res + c.toLocaleLowerCase()
        } else {
            res = res + c
        }
    }

    return res
}



/**
 * 
 * @param {*} str 传入字符串
 * @returns res 
 * 
 * 使用ASCII 编码
 */
function switchLetterCase2(str) {
    if (typeof str !== 'string') return str
    const len = str.length
    if (len === 0) return str

    let res = ''

    for(let i = 0; i < len; i++) {
        const c = str[i]
        const code = c.charCodeAt(0)

        if (code >= 65 && code <= 90) {
            res = res + c.toLowerCase()
        } else if (code >= 97 && code <= 122) {
            res = res + c.toUpperCase()
        } else {
            res += c
        }
    }
    return res
}

module.exports = {
    switchLetterCase1,
    switchLetterCase2
}