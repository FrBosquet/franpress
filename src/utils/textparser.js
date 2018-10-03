const close = /·/

const splitRegex = /H\d+\^|I\^|B\^|·/g

const boldRegex = /B\^/g
const linkRegex = /H\d+\^/
const italicRegex = /I\^/

const getType = text => {
	if(text.search(boldRegex) === 0) return 'bold'
	if(text.search(linkRegex) === 0) return 'link'
	if(text.search(italicRegex) === 0) return 'italic'
	if(text.search(close) === 0) return 'close'
	return 'text'
}

const mix = text => {
	const delimiters = text.match(splitRegex) || []
	const contents = text.split(splitRegex)
	
	return contents.reduce((chain, content, idx) => {
		chain.push(content)
		chain.push(delimiters[idx])
		return chain
	}, []).filter(value => value && value !=='')
}

const getLast = array => array[array.length - 1]

export const get = (arr, path) => {
	return path.split('.').reduce((target, route) => {
		if(!Array.isArray(target)) target = target.content
		return target[route]
	}, arr)
}

export const set = (arr, path, value) => {
	arr[path] = value
	return arr
}

export const getTree = text => mix(text)
	.reduce((acc, value) => {
		const type = getType(value)
		const lastElement = getLast(acc.content)

		if(type === 'text'){
			lastElement.type = lastElement.type || 'text'
			lastElement.content = value
		}else if(type === 'close'){
			acc.content.push({})
		}else{
			if(!lastElement.type){
				lastElement.type = type
			}else if( lastElement.type !== 'text') {
				lastElement.content = [ {
          
				} ]
			}else{
				acc.content.push({
					type
				})
			}
		}
      
		return acc
	},{
		content: [ {} ],
		pointer: '0'
	}).content.filter(obj => Object.keys(obj).length !== 0)