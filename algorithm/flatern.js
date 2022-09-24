module.exports = function flatern(arr) {
	if (!Array.isArray(arr)) return false
	
	const result = arr.some(item => item instanceof Array)
	if (!result) {
		return arr
	}
	
	const res = Array.prototype.concat.apply([], arr)
	return flatern(res)
}