module.exports = (i) => {
		if(Object.is(i,NaN)) {
			return `这是NaN`
		} else if(Object.is(i,undefined)){
			return `这是undefined`
			
		} else if(Object.is(i,null)){
			return `这是null`
			
		} else if(Object.is(i,'')){
			return `这是''`
			
		} else if(Object.is(JSON.stringify(i), '[]')) {
			return `这是[]`
			
		} else if(Object.is(JSON.stringify(i), '{}')) {
			return `这是{}`
			
		} else {
			return '啥也不是'
		}
	}