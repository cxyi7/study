function isObject(obj) {
	return typeof obj === 'object' && obj !== null
}
function isSameType(obj1,obj2) {
	return Object.prototype.toString.call(obj1) === Object.prototype.toString.call(obj2)
}
module.exports = function isEqual(obj1,obj2){
	if (!isObject(obj1) || !isObject(obj2)) {
		return obj1 === obj2
	}
	
	if (!isSameType(obj1,obj2)) {
		return false
	}
	
	if (obj1 === obj2) {
		return true
	}
	
	const key1 = Object.keys(obj1)
	const key2 = Object.keys(obj2)
	if(key1.length !== key2.length) {
		return false
	}
	
	for (const key in obj1) {
		if (!obj2.hasOwnProperty(key)) {
			return false
		} 
		const res = isEqual(obj1[key],obj2[key])
		if(!res) {
			return false
		}
	}
	return true
}