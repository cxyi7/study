/**
 * 二分查找
 * 
 * 思路
 * 用target对比中间的值，然后不断缩小区间范围
 */

/**
 * 循环
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */
function binarySearch1(arr = [], target) {
    const len = arr.length

    // 考虑边界情况 如果为非数组或空数组，则返回-1
    if(len === 0 || !Array.isArray(arr)) return -1

    let startIndex = 0
    let endIndex = len - 1

    while(startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2)
        const midVal = arr[midIndex]

        if(target < midVal) {
            // 表明该值在左半边区域
            endIndex = midIndex - 1
        } else if (target > midVal) {
            // 表明该值在右半边区域
            startIndex = midIndex + 1
        } else {
            return midIndex
        }

        return -1
    }
}

/**
 * 
 * 递归
 * @param {*} arr 数组
 * @param {*} target 要查找的值
 * @param {*} startIndex 开始的下标
 * @param {*} endIndex 结束的下标
 */
function binarySearch2(arr = [], target, startIndex, endIndex) {
    const len = arr.length
    if (len === 0 || !Array.isArray(arr)) return -1

    if(startIndex == null) startIndex = 0
    if(endIndex == null) endIndex = len - 1

    if (startIndex > endIndex) return -1

    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midVal = arr[midIndex]

    if (target < midVal) {
        // 表示target在左边区域
        endIndex = midIndex - 1
        return binarySearch2(arr, target, startIndex, endIndex)
    } else if (target > midVal) {
        // 表示target在右边区域
        startIndex = midIndex + 1
        return binarySearch2(arr, target, startIndex, endIndex)
    } else {
        return midIndex
    }

    return -1
}

module.exports = {
    binarySearch1,
    binarySearch2
}