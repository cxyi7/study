/**
 * 快速排序
 * 
 * 有循环也有二分
 * 
 * 时间复杂度o(nlogn)
 * 
 * 思路
 * 找到中间位置midValue
 * 遍历数组，小于midValue放在left，否则放在right
 * 继续递归。最后用concat拼接，返回
 */

module.exports = function quickSort(arr = []) {
   if(!Array.isArray(arr)) return arr
   const len = arr.length
   if(len === 0) return arr

   const midIndex = Math.floor(len / 2)
   const midValue = arr[midIndex]

   let leftArr = []
   let rightArr = []

   for(let i = 0; i< len; i ++) {
    if(i !== midIndex) {
        if (arr[i] < midValue) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
   }

   return quickSort(leftArr).concat([midValue], quickSort(rightArr))
}