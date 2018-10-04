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

export const get = (arr, path) => {
	return path.split('.').reduce((target, route) => {
		if(!Array.isArray(target)) target = target.content
		return target[route]
	}, arr)
}

export const set = (arr, path, field, value) => {
	const target = path.split('.').reduce((trg, route, idx, arr) => {
		const isLast = idx === arr.length - 1
		if(!trg[route]) trg[route] = isLast ? {} : { content: [] }
		
		if(isLast){
			return trg[route]
		}else{
			if(!trg[route].content) trg[route].content = []
			return trg[route].content 
		}
	}, arr)
	
	target[field] = value

	return arr
}

export const goUp = path => {
	const splitPath = path.split('.')
	let change = +splitPath.pop() + 1
	if(splitPath.length === 0) return `${change}`
	return `${splitPath.join('.')}.${change}`
}

export const goRight = path => `${path}.0`

export const goLeft = path => {
	if(path.length === 1) return path
	const splitPath = path.split('.')
	splitPath.pop()
	return splitPath.join('.')
}

export const getTree = text => {
	const abc = mix(text)
	return abc
		.reduce((acc, value) => {
			let { content, pointer } = acc
			const type = getType(value)

			if(type === 'text'){
				set(content, pointer, 'content', value )
				if(!get(content, pointer).type)	set(content, pointer, 'type', 'text' )
				pointer = goUp(pointer)
			}else if(type === 'close'){
				pointer = goLeft(pointer)
			}else{
				const current = get(content, pointer)
				if(current && current.type){
					pointer = goRight(pointer)
				}
				set(content, pointer, 'type', type)
			}

			return { content, pointer }
		},{
			content: [ {} ],
			pointer: '0'
		}).content.filter(obj => Object.keys(obj).length !== 0)
	
}