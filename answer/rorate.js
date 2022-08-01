/**
 * 将一个数组旋转K步
 * 如将[1,2,3,4,5,6,7,8]旋转3步变成[6,7,8,1,2,3,4,5]
 * 
 * rorate1 使用pop unshift  时间o(n^2) 空间o(1)
 * rorate2 使用concat  时间o(1) 空间o(n)
 */

module.exports = {
   rorate1(arr = [], k) {
      if (!Array.isArray(arr) || typeof k !== 'number') return false
      const length = arr.length
      if(!k || length === 0) return arr

      const step = Math.abs(k % length)
      for(let i = 0; i < step; i++) { // o(n)
         const n = arr.pop()
         if(n != null) {
            arr.unshift(n)  // o(n)
         }
      }
      return arr
   },
   rorate2(arr = [], k) {
      if (!Array.isArray(arr) || typeof k !== 'number') return false
      const length = arr.length
      if(!k || length === 0) return arr
      
      const step = Math.abs(k % length)
      const part1 = arr.slice(-step)
      const part2 = arr.slice(0, length - step)

      const newArr = part1.concat(part2)
      return newArr
   }
}