/**
 * 一个字符串s可能包含{}[]()三种括号
 * 判断s中括号是否是匹配的
 * 如(a{ab)就是不匹配  而{a(ab)}就是匹配的
 * 
 * 思路
 * 1. 遇到左括号就压栈
 * 2. 遇到右括号就判断栈顶，匹配则出栈
 * 3. 最后判断length是否为0，不为0则表示不是完全匹配的
 * 
 * 时间复杂度 o(n)
 * 空间复杂度 o(n)
 */

function isMatch(left,right) {
    if (left === '{' && right === '}') return true
    if (left === '[' && right === ']') return true
    if (left === '(' && right === ')') return true
    return false
}

module.exports = (str) => {
    // 如果为空字符串，则返回false
    if(!str) return false

    const leftSymbols = '{[('
    const rightSymbols = '}])'
    const length = str.length
    const stack = []

    for(let i = 0; i < length; i++) {
        const s = str[i]
        if (leftSymbols.includes(s)) { //如果为左边的括号，则压栈，放入数组中
            stack.push(s)
        } else if(rightSymbols.includes(s)){ 
            const top = stack[stack.length -1] 
            if (isMatch(top,s)) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}